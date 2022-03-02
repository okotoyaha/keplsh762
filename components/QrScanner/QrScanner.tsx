import {
  Alert,
  AlertColor,
  Fab,
  Input,
  Tooltip,
  Stack,
  Typography,
} from '@mui/material'
import UploadIcon from '@mui/icons-material/Upload'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import styles from './QrScanner.module.css'
import Quagga from 'quagga'
import { CameraAlt } from '@mui/icons-material'
import { codePrefixes } from '../../data/barcodes'

const DEFAULT_WIDTH = 640
const QUAGGA_CONFIG = {
  inputStream: {
    type: 'LiveStream',
    constraints: {
      width: { min: DEFAULT_WIDTH },
      height: { min: 480 },
      facingMode: 'environment',
      aspectRatio: { min: 1, max: 2 },
    },
  },
  locator: {
    patchSize: 'medium',
    halfSample: false,
  },
  numOfWorkers: 2,
  frequency: 10,
  decoder: {
    readers: ['ean_reader'],
  },
  locate: true,
}

enum OriginCountry {
  RUSSIA = 'russia',
  BELARUS = 'belarus',
  OTHER = 'other',
}

function getOriginCountry(eanCode: string) {
  eanCode = eanCode.trim()
  if (eanCode.length < 3) {
    return undefined
  }

  const prefix = eanCode.substring(0, 3) as unknown as keyof typeof codePrefixes
  return { originCountry: codePrefixes[prefix] || 'other', prefix }
}

export default function QrScanner() {
  const [captureError, setCaptureError] = useState<Error | null>(null)
  const [barcode, setBarcode] = useState('')
  const [mode, setMode] = useState<'manual' | 'camera' | 'upload'>('manual')
  const [detectionStatus, setDetectionStatus] = useState({
    message: '',
    severity: 'error' as AlertColor,
  })

  const handleDetected = useCallback((result) => {
    if (result?.codeResult) {
      console.log('detected barcode', result)
      setBarcode(result.codeResult.code)
    } else {
      console.log('not detected')
    }
  }, [])

  const handleStart = useCallback(async () => {
    setMode('camera')
    Quagga.init(QUAGGA_CONFIG, (err: any) => {
      if (err) {
        console.log('Failed to init Quagga', err)
        setCaptureError(err)
        return
      }
      Quagga.start()
    })
    Quagga.onDetected(handleDetected)
    Quagga.onProcessed((result: any) => {
      var drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            Number(drawingCanvas.getAttribute('width')),
            Number(drawingCanvas.getAttribute('height'))
          )
          result.boxes
            .filter((box: any) => box !== result.box)
            .forEach((box: any) => {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: 'green',
                lineWidth: 2,
              })
            })
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: '#00F',
            lineWidth: 2,
          })
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: 'x', y: 'y' },
            drawingCtx,
            { color: 'red', lineWidth: 3 }
          )
        }
      }
    })
  }, [handleDetected])

  const handleUpload = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const target = event.target
      if (!target.files) {
        return
      }

      if (mode === 'camera') {
        Quagga.stop()
      }
      setMode('upload')
      const src = URL.createObjectURL(target.files[0])

      Quagga.decodeSingle(
        {
          decoder: QUAGGA_CONFIG.decoder,
          locate: true,
          src,
        },
        (result: any) => {
          handleDetected(result)
          target.value = ''
        }
      )
    },
    [handleDetected, mode]
  )

  const checkEan = useCallback((value) => {
    const { originCountry, prefix } = getOriginCountry(String(value)) || {}
    if (!originCountry) {
      setDetectionStatus({ severity: 'error', message: '' })
      return
    }

    setDetectionStatus({
      severity:
        originCountry.includes('Baltarusija') ||
        originCountry.includes('Rusija')
          ? 'error'
          : 'success',
      message: `Kilmės šalis: ${originCountry} (barkodas prasideda ${prefix})`,
    })
    return
  }, [])

  useEffect(() => {
    checkEan(barcode)
  }, [checkEan, barcode])

  return (
    <div className={styles.container}>
      <Stack spacing={2} className={styles.stack}>
        {detectionStatus.message && (
          <Alert severity={detectionStatus.severity}>
            {detectionStatus.message}
          </Alert>
        )}

        <Typography>
          Įveskite barkodą (bent 3 skaičius) arba naudokite kamerą nuskanuoti
          barkodui
        </Typography>

        <Input
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
          placeholder='Įvesti barkodą'
        />

        <div className={styles.viewportContainer}>
          <div id='interactive' className={`viewport ${styles.viewport}`} />
        </div>
      </Stack>

      <div className={styles.controls}>
        <div className={styles.spacer} />

        <input
          id='icon-button-file'
          accept='image/*'
          type='file'
          onChange={handleUpload}
          hidden
        />
        <Tooltip title='Įkelti nuotrauką' placement='top'>
          <Fab
            color='secondary'
            size='medium'
            aria-label='Upload'
            htmlFor='icon-button-file'
            component='label'
          >
            <UploadIcon />
          </Fab>
        </Tooltip>
        {(captureError || mode !== 'camera') && (
          <Tooltip title='Naudoti kamerą' placement='top'>
            <Fab
              color='primary'
              aria-label='Capture live'
              onClick={handleStart}
            >
              <CameraAlt />
            </Fab>
          </Tooltip>
        )}
      </div>
    </div>
  )
}
