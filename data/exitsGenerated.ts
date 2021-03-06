import { DataType } from '../types/data'

let i = 0
export const getId = () => i++

export const data: DataType[] = [
  {
    id: 67,
    about: 'Baldai (mediena)',
    logo: 'https://vmg.eu/static/themes/site/img/site_logo.png',
    subject: 'Vakarų medienos grupė',
    sources: [],
    support: [
      {
        connection:
          '"Ukrainos žmonėms – skiriame 100 000 eurų Lietuvos Raudonasis Kryžius / Lithuanian Red Cross"',
        source:
          'https://www.facebook.com/vakarumedienosgrupe/posts/807261977333903',
      },
      {
        connection:
          '"Esame pasiruošę suteikti apgyvendinimą Ukrainos karo pabėgėliams „Klaipėdos aerouosto" teritorijoje esančiame motelyje"',
        source:
          'https://www.facebook.com/vakarumedienosgrupe/posts/807261977333903',
      },
      {
        connection:
          '"SBA ir VMG grupė stabdo Baltarusijos Mogiliovo valdomų baldų fabrikų veiklą."',
        source:
          'https://www.vz.lt/pramone/2022/03/04/sba-grupe-stabdo-imone-baltarusijoje',
      },
    ],
  },
  {
    id: 230,
    about: 'Bankas/fintech įmonė',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAicAAAB9CAMAAABOBDNXAAADAFBMVEUhJi4hJi4hJi4hJi4hJi4hJS4hJy0hJi4gJi4gJS4fJi0iIisAAAAhJi4hJi4hJi8hJy4kJDEhJi4hJi4gJi8jKCwAAAAkJC4gJS4hJi4hJi4iJS8jKS4gJTAiJi4hJC4fJi8hJS0fJC8hJi4hJi0cHDkhJi4hJi4hJi4iJi8gJS0AAFUhJi8AAAAhJi4rKyshJy8eLS0iJS0gKDAgJy4cKysgJi0hJi0hJy0hJy8gJS8gJy0iJi4bKCgeJi0hJi4hJS4hJi4iJi0kJDchJS8hJi4hJi4gICAhJS4hJi4iJi8fJC4jIywhJi4iJy4eJDEhJi4iJy4hJi4hJS4hJi4XLi4hJi4hJi4hJi0hJi4iJi4hJi0iJS8cJi8hJS0gJS0iJi0hJy4hJi8hJy4gJi4iJi4iJS4hJy8iJjAmJjMgJi0gJy4hJy4hJi4hJi8hJS8iJi8iJS4fJC0dJzEjKC0hJy4hJy4hJy4hJi4hJi4hJS4gJy0gIDAgKC8hJi4hJy4hJi0hKTEiKC8hJi4fJy4hJi4gJy4kJCQiJi0hJi4hJi5AQEAhJi0hJi4hJi4iJy0iKTAhJi8iIjMhJi4gJi0gJy4iJi0iJS8jIy4iJi4hJi4gJC4hJi4hJi0hJy4fJSwhJi0hJi4iJi4hJy4hJi8hJi4hJi4fKTMhJi4gJi8hJi4hJSwiJS4hJi4iJi8hJi4hJi0rKyshJi8gJi4hJi4iJywiJi4hJi4gJS8hJi4hJy8hJy4hJi0gKDAnJychJi8iJy8hJi0hJywgJy0jIysiJi8hJi4hJS4gJi4hJi4iJi0gJS4hJy4gJi4gJi8hISwfJy8gJi8hJi4zMzMjJy4gJi4hJi4iJi4aGjMiJS0iJS4iKC0hJS4hJi4hJS0hJi4gJi4gJi4hJi4gJi4iJi8hJi4hJS0hJi4gKyskJC8hJi0hJy4iJTAhJi8hJi8hJC8iJi0hJi4hJi4hJi4jJzAhJy4kJCwgJi4iJy0gJC0iJS4hJS4hJi4hJisgJy0hJi54z8PaAAABAHRSTlP/9u7n3dO5oYZuSR4A8MSUVBX+0o46ARyWheCJLDDkTVG/Mf2SCdb4ZIidA5kCuwx9EVogbxKHbFVcaHe+EyJeq/RxDm3i1wh7+TwyHd/NKvJp0XWcC/PDtNh55lIbPmCBkaqyraePVjUUUHCKt7qkeFk5GjNOi8b36rF2EEez9Y0fJvohz6UHRPveBPHI75glcw/oKEjVTBaA7DjHZicpo8tDhNDlsBnBV8lFkKhyPakGNqbjNLbMZ/yDrGVADZNiay5PJK+guNyiSjfhX8UXQX7tBUJ/jGoKYVMtdOuC6Vi9erWfmnzCGCvKwEtd20aum868O2Mj1Fs/l9rZL56V7XIIzAAAEN1JREFUeAHs1oOiG1EUheEda8XJlHEZm7XtplZq8/1r3zM5c631PcO/IXNiszucLrfH6/MHQOuBzFcwFI5EQexELxZPJA3MHm3YqLJpjXXyt81btmK2KCUq6bXXyd9CGQPETvRcWRA7sSCXB7ETvcK27SB2orcjD2Inejt3gdiJBbsNEDvRK5ZA7ESvDFr5nVSqSrWl60TqoBXfSUmUGkvYSawJYid6wRaIneiFSiB2otcGsRM9ewfETvS6WOPYSa8/zWA48pb3OETDthdrGzvZBwta+w8clGkOgdjJN4ePHBVzxwwQO/nu+ImTYuoUiJ38dDrNT5adWHDmrJg4B2Inv52/IGqFKIid/HZRTGRA7OS3yiVRuwxiJ38MRO0KiJ38cXUsStdA7OQv10XpBv5C7OSmKN3CX4id3BalMSwx7ty9d/9BefKw+uhx+cno6bPnWPka+RcvX5U9k9dvJm/LiXfvP3w02InOpy/t3XVgFFe7x/EfweFXYdu71G2RS5cNDn1LY2hxed/iFqgk1D3UUgiQLElxCZSUGq4pmhZ3q6bu3iJ1915n5Tkz5+xOtr3Jfv7G+UaeZ2bOQORy007m7XfcmYVQY+66u2tn/l3dc2/T+8YgTHb/+68ZG+/EyjiIcmht/E0TXFDpN/H2XKrUyZM1ob6MPNG5tDS2ZaIfapPS8/Id7CQpT3ILNdySJ8m07WR0XhjHOhkLUQEtNGnzAGxMnjKVsqQsiC6ltvbZEE2j2vSWE2BrRvpMxzqZBUkDapgNyRxlJ+bMO5kJ0QwqFc6dBw2e+x6kaCJE86mtCKKGdajyUHo/6Dn5kvx4J4IHIapKhaRTsqArtTsFwyBbQF13QvQwFWaOdEHfWUW+eCdhboboeop8KWNgIHtuLsNVhagRNY1zGd00U7exH2YeeTTeSajHILqYkgf7wtDj4ximJkQLvdRTA6IGbgq8d1eCuUWL450EW6J/HdDdMgfGei9lqOlpENWiFl9HiNpQ0GsZIjK5KN5JoDo5EC1nmLoXIiIrvAxxMUQrqeVeiLKbCWX/MwuRGlUn3skJqyArZKjV8xChNcUM9gREWc2oY632Fe4mqYjCuvXxTv5X/cEQdWKoIZUQsQ31GawnRH2oYXo2RBkM1X0jopKVEu/kf9wBWT2GWOVBFC4MCWUTRA/QnurnToj8E6CS6zF3vJP/VKsEsjkM9iSi85SPgZoUQHRO5MuTzQyxpR+iN8VHxjtZ3Q+yecUM0gHRup9BzoCoUcTLk95bGaxWFpwwMT/eSUoWFLYxyHYXoraDgXZCVDmfdlpDdAqD7eoCZzyVX8E72b0HSucy0O0liF6XbjpfPWpFujw5l0HOTYNT0it0J0/szYHSPgZKngwL+w/UPLigRbNbkw8NabvyMNQ6XcEAT0O0hjZmQfQMgzzbEc65tKJ2UnfI1VVg5TkGyH0ESmc934tBZg7qpHfkaP0XIOmSRGtXQZTCQKVL4KCcF8thJ2e3tfDSy41HXv9IAWxsYKBtUOk7xMdwy5do5Xc1RK/Q0vRKkEx+lYFehqPG1Cl/nTigy0MMkAeFMa+5KXu9I0SPe3nCTBcky2jpUp1pKqMEWk5KcEHL2v8nnextHAZl5zEGKO4E2V2ZVGp2JURFDHAhRG/QynyIejFA6eOwkZ04d9c5r5Jk7rhZb+55C3bm/O07if35bD2LGeAmiDx3u2nB/TYk72zlCe9CdHYEy5P3GOh9WHJ98O4VDOJ99F/ZsLSufbyTEL1nMkD3NEgaXkAbb9qeOFo8A5IZ+VRrBNE1DJDUDxY8Hy6gIKnpSbAyN95JsJLbGegUOZODtHUdBFW89huzg1TyrYNkTC4DvA0LD6ynQuFHLqhNnh7vxOJmn6Q0SLbTnq8aBEN4wniP6QqlFkQ1GKB9ApRKGpVS7dGFUPs43onFP8cISOpRx63SZ/LLGOB60xXKSkhcuxngciglPEdLdU6G0ryt8U5OuJtBXp0HwSel1LID4Tyf8oTREL1iuDzZIO31BR2P0EbnVChtjnfyv7oM17kXP7s79ZRWsYkg/zxIjhoe/rSLAbZAZV0ybfmqQ+XCeCf/Y0xXhlgU3Yuc/t1uhJ1rtkJ5AJKF+QzwERQq76YG70QoeLrHO/kvlw1liOkNEa5Hfep6dTLClDTjCXX9kFxn9CT0SwxQ/AJk/mHUUvqJ1dfkeCcNb/Ix1NMQvEt9je3uHFhkskJpJAdQVz0RBZhGTbe+A9lRMt7JsQUMt0b+LC8wmGPf1vhvPW6wPNmjcxcTNnqp6zPI/FsrfCdV3qVE+o95kgZysxAmkQHcn0MyUo5ONIuB+kPkWk9970H2RQXvZEabYu0TL0rG0sTJCFPgtj/1q0um/NlNMMmnDDPAXQ48mY8nK3QnVVq+Sllz8UqrkYUIt5gB6jSEZIf28uQmBurqyGsdLoToWMXtxHPD6z6qpKNM3KLxWeIow7wCSZdnlau9AJ1o5F2IJlfYTq5LpoUNKBM3M9CLuiuUZTqPJN/vyLu7X+0HUauK2skOWhmIMvG+4t/EeoXyEETPMcgeiHbSzJcQZZSjTqpuDNMAKvOaUc2XhTKRrvMg/IxSBjsbkoFuBjkNkgKfMw/nLy1HnSQzjLcqVFZQrS7KxlcMck+2zp2G3oVa7zHsB0k1GjoE0fvluxM+ChX/ESo9gbKxlsGqQ5LKIAchqdSKQepDdDUNbYXo9HLeCT+AygAqPYeysYjB/k1nhTISkr0MlgRRTZp6C5Ip5b2TmTlQmUWV4ygbiQzxtf2Nda0aqkfsAN0huoCmNkJyY3nvhCug0qCUCpegbHyjtxl5xH4v0lfzLNzlNLUEki/LfSfN3oJKGyoMj1UnW3vbDrNHIXlF86z+b2lqAyTVyn0n7ACVhCTKtseqE34EyR38P70g6deeITJUG2BTo+Q/efnvJN98Nn43Zp2ca7dCuQ6Sxgx1BKIXaeoySO4q/50wz3g2Pj9mnfCo9b9L/mBIbmOoFk69O/UBSK6qAJ1wA1Q+oOjR2HXynfUK5bjuE+uFEBXR1GFIvqoAnZjPxg/GrpP6CZYrlJG6D5tdAVFrGiougWSFA510ooYGf2EnrGc4G38PwTtFUTuu/WfrYLU8OekKhnF3geRKh941M8KBThZSw6S/spNm86DSgYLSEoSr5GNZWOCCYKPV8qQeBZ8b/t+YjXrDHeikEjVU/is7YU3D2fgsCLqzTPS3WKE8on/U7D6IWtDMxRANc6ATdKYtr/8v7ST/B7MzDY9BMJpl4h+QvKwedj+h5AyI+tCI7zyIhhp18oXNL6J2K0S1YtQJD5rNxhcrt1/Oyx0DwTulyqPVfzQ4dQXHaGQLRFk+o05WQ7SFtpZD9FOsOuH1RrPxDggmsGzINZyvWp7M62xy7dLTwokvO4/TqJNuEF1LW3dDlBGzThbkQKUWw1wEyXiauPtmN7V874HgKXKOyaOlzTwQ1aOBul0gOsWskwURPyKyD6IFMeuE26DSqZShvP0gGEQDU7vgmQxqSVSsUFIhcI2j7DSIsp+lvnTIlpp1kglR7/q00aQSRJmx6cR8Nv4GgsP51HcfANfI2tRwKiQd5OVJIhV+huxDajsnB7JbzTphGkTvRjiVpzF2nbClyWx8ufrDSk34lr/f+51pK38hBBvbQHIqFZpD5hpGTd5nINtPw05mQ/QJrbk3QvRDjDoxn43HQfJLKTXd0wP/Y12KO8IXn54HweBSKrTqAlnHTOppDYXTTTsZANlztHQ7ZKNi2QmPQ8V/DkNNgORaaroSJyy5iDZql0DXk1QaBYUNXup43QWFDNNOnoSsajEtvPo5ZM/HtBNer3/jKt+HJHtqJOezeQ58SmsDIDAdc2+GSnUf7eVlQeFzmnZyOxRa08LPUKgVq07MZ+NkDyRH61PDo1kIVnB3Lq2cD033WT/zqXKKj3a+yIbKS8adfAoF181U6gMFV1JsO+EpBrPxHohudNNW1zSE+Xw0LfjOgp45tPAVlO5qQmt9/FDxjzfuhL9Cwd+cCq+4oPA47TsZ72QnreZBpSZDdIXsZ9tQniiA5IZ8qjWFlo5eWphaAqUffqOF9h9CbS/NO7kOKq6zSyno/DOURjCA2wPJF052wmsNZuP5kFXPpaWb05QPA6p9mgMdTWlpItQaDsqlyqxJUCsZF0EnXaH2w3KGct++H2rdGKg3JNsc7aR0IATyfns0FO4cS7XSFZD5p9LKU9DgH0pL53hgYf81Pkq6XQ8rExlBJ97KsHD0uyQGKOxzGixUcTPQYEjSFjvZCecYzMbvQaH3pV4qPPc1FBqbXigVPEUbV8HS/pqFDFH/1AthqeFDkXTCM2HJfzT9leMZO9/IOP7Ktp4lRieFL1MN/052wn36s/E5fqj8cIGPgiOjoJJQSEvuX2BvOW18mgBrJe+9P6wJ/0dutw6pabDxEiPqpHsJHFIpiUEOQDaxs5OdLPDrz8bpUKty024Gu2fTM1DbYXpFXbDfZ34OtuSdZYlXjkw8eZ0H9n4ojqwTLoJDfmewtlBocEGpc53wD/3Z+J7DsNKg8Wu3LCbJ3E/P+ceKk7Mg0D/ENTMLdv5JW+734CjPt4ywk3M9cETO9/oPQ0xOrN74hOg6afWC/mz8rR+2ChKyYSvrCG1NhI0uhbSX/AKc9DYj7YQrET1pvsgviM17rldBJSFTvmwcvXa0Nww2JlJHnh/O2eOLvJPvu8ABvQsZ6sYYdGI4G/sS4YR9PmqoCmvDDD8Ooje7PSPvhCPggE0Mc29sOuH5BrPx9McRvbMyqaMmLDVwU89eOGRGC0bTSf5RRC3RzTDeKrHphPsMHuysexjRSvuNWqZnw0pNavIegCMqH2FUnfBIFqKUUJeCTTHqpJcfKgcZauo7iE5OLWr6HRYqNaMu7144oONuRtkJl7oQFX8eJblnxaYTnmFyT/VtMxANzzXUdch+jRC7UCa1YNSdcC6i0oeyC2LUicVs3JJhxv+KyJUMp76eUDtEA+62JYjOkk/pQCfu6ohCI6qMik0nnGYwG5NJzyBSDS+ggU1QepxmZr2AaDQupROd0Ne4LDJhnfNi00nxr1DZxnBNbkRkFt5CE00KTOZDa99PQMQKlpLOdEL32YiMaxotDOsSk064Cyol51CQ0g8ReGYxzZwBhX7taSq/bUNE5vrajLQTQVEWIjB5NC2964lJJ6xmNRsLFjwOU/65pTS0EwpnMAJHliECk4vcdLIT9qoKYz2/p40+nph0YjEbH6ck/9qTYKTvepqbD9lFjIR300IYyvnjWdLZTthkmx9Gst7Opa0hWbHohD9DZWApRUnpBgnPa+llBIZDNJ8RKi56BwY8I3eTEXeiNnMfDCTOpI6u62LRSZ3J1rOxZOeNfmip3HYrI1L/BUiGM2L33NQDmtI+OoeMvhPR6Geg6Zs8asrcE4NO+Kb1bCwbm14AW0eLOjNSV0Mw+VVGwZc3sgT2Pm+bREbdidotqX7Y6nJVNxqYUwUWGsla0UjxY41UVlOt85A12bDQ6ewjjEJyI0FzRikzZWQarMxu1NVNPbfeIbmc9lql3NcFFkpObllIM6Xbf4ES/2JNbr/jzhwIeqztsJt/U1tHN7qwHwT+CVNeq80YSbrk9PliKznzT389iRHwPffhC5Dxb6D+LSlzHz55dpWESqiUMGb2sZX3F20p5N+c941Tp9Ub9cj+dQk5noTBVSZU++jjz255lTHWOWNp2yn7Nv5yOKGhP2Hd5xsTPxq09In6jJyvW7t/9Z+U4EewPwFzr4VtnnaGDwAAAABJRU5ErkJggg==',
    subject: 'Revolut',
    sources: [],
    support: [
      {
        connection:
          '"Įmonė priėmė sprendimą <...> technologijų padalinį Rusijoje uždaryti."',
        source: 'https://stoprus.com/assets/revolut.png',
      },
      {
        connection:
          '"every donation made to the Red Cross Ukraine appeal will be matched by Revolut. <...> for the next 7 days, up to £1.5m."',
        source: 'https://blog.revolut.com/a-personal-letter-from-our-ceo/',
      },
    ],
  },
  {
    id: 235,
    about: 'Kompanijų grupė',
    logo: 'https://www.cityservice.eu/themes/cityservice/images/main-logo.svg',
    subject: 'CityService',
    sources: [],
    support: [
      {
        connection:
          '"On 18 May 2022, the Group sold 100% stake in UAB Baltijos turto valdymas, which was a 100% shareholder of companies based in St. Petersburg, Russian Federation. The transaction was concluded in pursuance of the Company\'s decision to terminate business activities in the Russian Federation. Following today\'s sale, City Service SE no longer has any business in the Russian Federation."',
        source:
          'https://www.gpw.pl/komunikat?geru_id=396790&title=Sale+of+Business+in+Russian+Federation',
      },
      {
        connection:
          '"Skyrėme finansinę paramą SOS Vaikų kaimui, kuris priglaudė ir rūpinasi mažiausiais karo pabėgėliais – Ukrainos vaikais."',
        source: 'https://tvarumas.cityservice.lt/parama-ukrainos-zmonems/',
      },
      {
        connection:
          '"Kartu su Nacionaliniu savanorių pagalbos koordinavimo centru „Stiprūs kartu“ pradedame bendradarbiavimą ir padėsime ieškant būstų karo pabėgėliams."',
        source: 'https://tvarumas.cityservice.lt/parama-ukrainos-zmonems/',
      },
      {
        connection:
          '"Įmonės akcininkai dar vasario mėn. priėmė sprendimą stabdyti verslą Rusijos rinkoje ir solidarizuotis su Ukrainos bendruomene bei visu vakarų pasauliu"',
        source: 'https://stoprus.com/assets/cityservice.png',
      },
    ],
  },
  {
    id: 236,
    about: 'Namų administratorius',
    logo: 'https://www.cityservice.eu/assets/Uploads/Companies/region-company-logo-Mano-bustas-02.svg',
    subject: 'Mano Būstas',
    sources: [],
    support: [
      {
        connection: 'Grupės CityService dalis',
        source: 'https://www.cityservice.eu/regions/lithuania',
      },
      {
        connection:
          "On 18 May 2022, the Group sold 100% stake in UAB Baltijos turto valdymas, which was a 100% shareholder of companies based in St. Petersburg, Russian Federation. The transaction was concluded in pursuance of the Company's decision to terminate business activities in the Russian Federation. Following today's sale, City Service SE no longer has any business in the Russian Federation.",
        source:
          'https://www.gpw.pl/komunikat?geru_id=396790&title=Sale+of+Business+in+Russian+Federation',
      },
      {
        connection:
          '"Įmonės akcininkai dar vasario mėn. priėmė sprendimą stabdyti verslą Rusijos rinkoje ir solidarizuotis su Ukrainos bendruomene bei visu vakarų pasauliu"',
        source: 'https://stoprus.com/assets/cityservice.png',
      },
      {
        connection:
          '"Skyrėme finansinę paramą SOS Vaikų kaimui, kuris priglaudė ir rūpinasi mažiausiais karo pabėgėliais – Ukrainos vaikais."',
        source: 'https://tvarumas.cityservice.lt/parama-ukrainos-zmonems/',
      },
      {
        connection:
          '"Kartu su Nacionaliniu savanorių pagalbos koordinavimo centru „Stiprūs kartu“ pradedame bendradarbiavimą ir padėsime ieškant būstų karo pabėgėliams."',
        source: 'https://tvarumas.cityservice.lt/parama-ukrainos-zmonems/',
      },
    ],
  },
  {
    id: 281,
    about: 'Žemės ūkio produktų perdirbimas',
    logo: 'https://upload.wikimedia.org/wikipedia/lt/d/d4/KG_logo.jpg',
    subject: 'Kauno Grūdai',
    sources: [],
    support: [
      {
        connection:
          '"Nusprendėme kiekvieną savaitę vežti paramą organizacijai „Maisto bankas“. Pirmoji 10 tūkst. vnt. siunta įvairia mūsų produkcija jau pasiekė Maisto banką."',
        source: 'https://www.facebook.com/KaunoGrudai/posts/5444234598960380',
      },
      {
        connection:
          '"Paaukojome 50 000 eurų organizacijai Blue / Yellow for Ukraine"',
        source: 'https://www.facebook.com/KaunoGrudai/posts/5444234598960380',
      },
      {
        connection:
          '"Siūlome darbą karo pabėgėliams mūsų įmonėse ir esame pasiruošę pasirūpinti jų apgyvendinimu."',
        source: 'https://www.facebook.com/KaunoGrudai/posts/5444234598960380',
      },
      {
        connection:
          '"Prisidėsime prie Lietuvoje prisiglaudusių ukrainiečių maitinimo."',
        source: 'https://www.facebook.com/KaunoGrudai/posts/5444234598960380',
      },
      {
        connection: '"Siūlome savo pagalbą transportu paramai gabenti."',
        source: 'https://www.facebook.com/KaunoGrudai/posts/5444234598960380',
      },
      {
        connection:
          '"Linas Agro group mastu atsisakome visų komercinių ryšių su Rusija ir Baltarusija."',
        source: 'https://www.facebook.com/KaunoGrudai/posts/5444234598960380',
      },
    ],
  },
  {
    id: 282,
    about: 'Laisvalaikio erdvė',
    logo: 'https://cyberxarena.lt/wp-content/uploads/2020/10/Logo_did.png',
    subject: 'CyberX arena',
    sources: [],
    support: [
      {
        connection: 'Paskelbė nuotraukiantys frančizės sutartį su CyberX',
        source: 'https://www.facebook.com/cyberxarena/posts/458205912756083',
      },
    ],
  },
  {
    id: 283,
    about: 'Baldai',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABC1BMVEUAV6T/2wH/2wD/4AD/3gAAUaieo1+SnWf/4gAAVaUAV6MAVKf/4wAAT6gAVaYvZJyZomJshIIwa5BIc40ATKnJu0m9tVFRdoyTnG8AUaqorFiJlm0AUqcATKsAWaL/2QcATK8AWp/izipegoPGvkP23ACyr1Z6kHhuh4AARa4APrPNwjwAQLDRxjYANrLZzSoxZpZAbZZGcJFZeopZe4MoZZkhYKCFknWYm2yvrlC6t0fm0Sbu1xqdoWpHc4g9b4uWmnV4i3xqgYXAuVysp159k3TEvzjlyitti3zp2hG8uUHQzDSInGxSb5CMn2RPfIqMkHfYvznx0h6brV/dzx55kXKwuE90kXW1r14vxHUYAAAS/0lEQVR4nO1dDUPbttaOLTnowzYUXIiJP5IQQ1iWmwSSsCRuOzra0o13bB27t///l7ySnaROIpkETPmon40WiiJLj4+Ozjk6kgqFHDly5MiRI0eOHDly5MiRI0eOHDly5MiRI0eOHDly5MiRI0eOHKnAuOARzysU2BcuEFIokAI2TZNS08QYU4fy79i3phn9hdlHTFaERF9x+R8GpGBSU9Mcx3At19I07FU3O93uyc7e3mnvgKHx6hX/q3e6t3Ny0un0B1UPG5ZbcQ1HY0xik3H88jATA/6FTWprjB+NDPonvcbZL8XhqN6qjcMwDCAAACGd/YcQ+yYJAJUgCL+Ma+1WfXf/za/nB287gypmNBuOw2WRPYULHXnuDDIZIIQNJccwNDp49+rD1iGjJwwYKYwdABnUeShK9EeM+V/x0pxURiYIwlpz9+LX8+tOFWuuZTqMM0y8Avv/mQJjJkkG7ffOt0Z/jwOEYn4SbNwNMKJxIowgrH0clhvbxDU0m2D62J1eFezVEq67C8SkjuUed96XDpshFwTAKVIgVPyZ0NyPLwY//mKsqQAiXQ/avxXP31VdRppj8oFpPjYfqYjmNlMzKrTb2Hg9ZhqIsZQcX5Mxdm/RUid/RPXMao/GKApah2e9QcWxKCHe09Vi2MS24fXOdmsBlybWAd+/vwCtCciHJ4Jhvdjo0orpPDm6+IznaJa3Vx6NGU9cmqLh5rM3/p3Z4o/z2YPZkGeMNS8aHWo4BQ8z1eA9AeMME2pWaL+x3w70ifKe/q9moZrWZUudjstoEkB6+Lq0Q5jqZ0bGY8+UmGp252xU48oJ+mwQfG9y0gGZcKsIBc2ta+Ji53E44hMewczCGRwNv+h83PEJ/bsPuhUQizgblKC19dawHbOKve87TRIuUi7uXdwgNvL8WOiVRxh0qyCmS+X2Bayf9SvadxYw07Y2P3xk044aKE9SnsSAPgTo5uLUMeh3mCQxn1Co43ZLbTY9qxNpeiZcTU08CML/HhCL9eVhzTA2nVBre+MTjLXU8wRTGxAEo/cFzXkoY4LwuJNjbV61mB0FlSc3762BaDKCejg8tY0HkS029Zma06jD2H9Rnq9gKVNbDKpoXOxYtscd2mzJMq3ORcDnvsfuaWbgVj7UW5euVsjOWmUOfMGpXDZ1GI33x+5jVph0REVBsX9MWS+zYAwT0/B++QxBNJ28GK5mjpGiAlA/dU2PZsAWtjrDAES1P3b3HgbMTQOo3TDM+82NzC/Ale4usz2f9/SXDtVnc6Oqj48wMyW8O1OGC0ZnBCKf76UyxRHP7ioYn2s2vauhirXBEMGXo9JvAfRR7dK4QwzfMz3m1myByKX5MdhSedgEtXdcYnp4vbHomcfnAfBf9vibBx+LUNF/9zS85li0tv/QmdH2w4zBGEzX+xCUnTViqphQvBXp9R8LMF5eU1C7a6zOFj2p6f5sqWllyArfhfT1P3PvV6uyLgPm0OkQgi1jFeHiiSpuGUB/tjiX0og5LlOIVed/WKFgRvyuVs2s5eDLVXfQf9VCCmr1jdtTdUxMq00Ur4/wOkAakp5iFOYWA4IgUc6P1t0lJeOxzxcZUh8sbs0SNUwBrQIQqWZmmX60/m+3OTr/6QgoMLis3KblPeJsh9PAnqr6N1cbcpSbCasetq7+FBf7s7SVSPVQ1N/ldV5toYistqyuFFyN4JJcwebG1u14MwQqXwf69NN+68+NraBmlZkjjP5x09jysEesS5QQAgUZthxWOyHnavizJSlnHCVI9fWurJxzvBfEkhX8nPJYMTT3DCxKlo82KtrtMHp6NIiuz/Vy96hXQa2f28yIQB8xlRtcpudUNvSENDMX4Fpu0eJBkCwLqpIXQYyvSQlsymYabDUm/oKq9+naLppWXiRLVdCrVQxysslTDdTguA3KJV3v/KZvl9i/+LA2kKt5UjD2wbxSBA1NWhxvApgkqyvRiNhIDBBVPzEly3bGJVMeUY0qeLt+eFxAlhqsZF1ircXDv+1jBM+uYOg00VmP0xfAzx1N+Ak2DXruIVqYQcB7uReO+0lmVdSRNcx4PSVLVcC+IRZtjw2GuAiva2d9d3aZLAXuuqt8ktAGYsy2KgCUCgPjSNf/6oHIklA/d4T5q4Rgo6gvGgAgRY6ZZCXJAtuyojOymBodS5YIPNoJ/FmaWyZksVHYW8ktJsQN2FwY/jxG5bPPb4tQf8frikyCYFNUhYeZvlp8NdmSxZ6tdyRjENs8wDitLhuy4JfVgp+koO2zFqLukf5XGdV+Cto/t6YthqEpaArWGvqyEZclWUxl6ueGaAwyx9VqIT9jsqIhv8onCXHeAabP//jPaDSEenE4OEDTCD37V4HecE4EVl3GZKHDiuRVG4e6n8gHzIYs1F15lf64zaN/w/9c/n1T23dPAviNLHi4/ILN8ZJ+zJYsJtJtkwpXnQizAv2kSXkXspwFslS1Znmr+sP0iFvioL1nVdzN4jfXhI0GoF/OT4kedocirrLVWcGmiIIqJXZsFa5AVtUR2ic83d6eJ4tNJhu2tO1L8IJ4Gg6+fFHBQhJeMMDJd0zxHhI6wpmRxcNq70W6kikspxMsWCxSsmjVEsG1LNtdJEtfJ4Tn7k7yxWEckE9WBOpu8g2RSluc6ZEdWSr8xxJX42ljuODWyYehWaq/FqE+LG8sDMPmSkbWtBWnSBGDdVHvOQnJcrhVJiqZ3TCErYqkGre+NLVIySLGb0AWO1jgChytMQpZI8eyaCdXtlZCtCpjZdFlz5gsNaiKf03c/WWTRU6WfShuqKCH9lorzFoJSMhSuGh9awFlnoY42p4VWSo4dUSOE8HO+bIpLCfLM8RkQX/+Z9UHw2Uji+czyLw33A/koV61aUyKmR7zdCVxzqzIQiWxwiL2jsi8k+ss+lXYUD+Y7x1r+akgcGGX5VEEq56y5o76kwZ5xJEWy4gsMDLEbg7dDEWvSUYWoeQ3XRhiXQxdw5AuBy6Ie3NCJbLl2Q2xQRBVB8oTWwubPfSQZJna6xDLUqDaquhFyXWW2d1ZxkljQd+wUVi0li0Hc6AXDUlLCMWhVMUr8O/J2/a0otAgzYqsaqXeLQhNrAIehMKlyRQLHgtAuwvzvhqgrkCUmRIPiaSVHjYuoERz88hYNd7JSCrNBx2GpNB1sMTxoAdAtCy0prtDtxfJUj+JonZuDYD30p11XkeXrzzp3cnrxmPpMlYWZOECjjaOi0AqI6AE/uJj1yTLXCILlI3FQpi9NN2HdfFMwzwmarTkZgl6FbfIrIZSQjNR8Clgk3mIlmX/3mTBwbIkE60IoQ/70mYa/8pX4VE5/hgeyK2xhyaL+XoHaDlP7p5kqbCuLQ02rsGZQQbk7jXGclOLeeUR/YwsqfhlQZaH5T0nhFij5fd5P7Kgr18KFjxwNOmrY0tmazGdIFPeKnwTf8ysygnNRLLSzxDA1WBJZd6LLL4ug5ejm8TeBdE+7WtHwhahe0BKRGmyPcq7kZTISLK0f8ULStNOXC5Zg2mmA12GNm86qHDXEghWNWB+CuR+kMQuNYkrnerQedw7YslngUyMUqPZsOVZFoRUfk+sVaSThfH23jJ25oxS1ddFqzrOEYh3tgN5U5wriTetordxEc8aPihZ2KgHaUnmmA6ChRRfuSPt3u7uqGpoCT5ujG7GNY7wUmYQErwJhROiyqfXuAf0/EHdnYL1Gu0aRKbmmY63j1gDkro1RbK+il4s9OdaUlwysvhzsG06EaQKnmDmTQtFC36arn141YcliznSoOekHXxi1EGyu2nBv8PF81hmx0bMWqJ35U+6BfSVKArK3uSUf0KdpkyvZUSWgkIPy3cme+ZmoK4kWUQSz1IScXO1dmtmlRSEhoITOpgW3Jl0jhTsD2DJ48iULOijoZuitYh2iVaTLO1QHlaeVADK4iWgVUB4asySsaUq48TA1gKJC5lZpFTVT1Nfd+XjSpLl2eVdMS7Or0DUL+bQ3P1sKNPrgGUTXUVXCePH2ID+Q6/uBBIPdlKZl0wMk5NFbFuckUaNv+LdWKB5TO68ZYlg7Y9FueHpIckZgziB2NDPjixmDLopB5wQepSoTUqW6UmIIJSWY8kCDXyPrYPE/rDklPuonEzAM50P89NR9mRBBfVS1lsIrrS+VXf3XAceprvXJl5cWAxR+yh055SgabWFBkZ2ZCk+GnvyykiV9pUM8rNUUR4HMwmMOaRtJDeGc3YIP8/m1Ey6msQ0O8IpOUOyWGVDw6xKayN2GSlxmuR9smiQYFUH095wfw7DbemMid8m1uZUn3ne+5a5UFg7E1mm2a1I8wNhQK9gy9WWaTWnzsbdyYJjQYaxx4zeBTNjaMlmAe94nCQCqu1lVw1bQ8EKXrb5WcHYqsrVlmd2gsmKwZ3JUsGFuywytLq4kBsEREYW0UoJIlijN5cXWzzMTJ1goU5GltzwXkjAZWRJHj9dvlRVVNbSZnXrQ2yaquB6vbV3jogsqG8L2ktLYNEaQEey1mIyQN/0t4p2ROf8eMRoL5mm4FVKanc/2QQVdGRRB2uW2g1DeXWFyaowrxO9Xf8kIqcMVB+2RKEzo7VkGMFaRdYI4jaj9blotkEN0XxhMueN3CxOiWBPnuSEq8lFfxXJpmxs7aJZoaNbzq76HCUJ6v0195JyA4mRpeii1BmmL5bWRFIy0T3nOhJwfhoeOhIFMKLnFQrtuZGlKHrKdg77OPnC1JufsMS4rpzPRBA2j1N3hljVkNcV/ERX2EYyB8M6AypsWpqzBGMPLZvc6JUr65d2fBhpLaiif+VuR9UkLfBtKLK/b7aKcmz9nSSrtSUpu1X8Z1qlGoQbKRUW37zZGnLXqPbnm7Riwo9usCEMiyUR9pclS4EjedfebPEGQ19vVOSSjD1qjHQlEeNVQcpetrmoopq2225GFjNbUrfBxSIQnzi6LqIUWiFUgcENU56BWM+gD4K36XsOiedu6DAhXGnnr87/Tl5y/rBkaXUR47NzINOKSR8ijgsKO3FLx6ACaoO0dRau3Exinwbw/mfUPmtE0+B/rdtOijIJMelmS5aM+mOA6ytw7q52RD82Nqab2X5IqHyL9Mq2i2l02/psm/SPhPjceVRy1oiJkYK7wacEWXLXS0W0VRq1OgZfFluVLOZO0cFHXfnhTgxhPktw7i5GZG4TLeblVE7b09MQH7sT3wGTmx9A0bHJ2otDhB9J+r8QRWe6v3y2eA99iEb91GWVVMIMWgp/lBO0GFX1rpsSnLyNLK9ge6UQqCJ/4QUhOgwK1E8sSu5+jB0Htr1yGJ1y8NhdeiiwvilQH727y6FsS2xhzbpsM2fUf2k+UHwVAusUCvY3LTuTY6k97GmVt7/rIHoFj93DDOFHN9FA9LlMeIhv7XijFNTy/hzr4AVZqaqvAAWx8Xd9TDO+2YhQ4li93QDE22Kfs75XJ6EgZq7rn0pVm2Z9DnWcoE2t6lELAvisByN/0TAKa37ZZ/NfdDTPg5wLTwqOMbhqc76eL2AU1Q2G1+Ytwb37ksXsEOxYk1sZpue3PZMhGbc1iiqEhz3Hpd5D344V3b9F7Ur/qMnD3k/1AhkRYHyEnh4WTw3N5HfAZXKq+Sqk0Urh4CubH+HiMQNPFPyFQoCa5e1KFtbnOlRFiYiObfXPXoezEZm6uvE4UKdrGPz4xvZFTzNsk3z/CyOjC0AKpmM4J6V6yC3WSfbHk4PPTx+t7TeqmsZF6u45lBmQ5mHDwNvl0Rgg8PiitbA4x9c9g9bFwcCgWiEll+57AfMFNJNaWr9RbIUQwUkGxCRx5jHomtx+AlAw3i3vENemmJgeyfBej3sDs0mSbDcumvwqyFjtS3doPyR4thpiPI3Kvaplad/jpqs7weM3ZltGv1favYE6V/zziVHZMRfXpH67TTH6ETLLAIGwWfzfCXEt6wEcmexAMA+ecb2vWRVG2dWw9SW6BDm+JFJVZ+fL3294fquDV+hHugkApAefXm+d7+CK6zhsyJG1VmgeGfyeSMNxtt+X91/XQvCNND467zU8eaSIZ6XEuR26Hty0dt8c7Q0qjmFT8QkSzwCYCRq/cdvSCtXt92fFYb0dBhDFdyXD+YuAVeXbcFKmqy0zKUwYTIwiNLl3uzXaL52/7Xu2ZlGbk1R94vchp4GNAzxx6U02Y9qWaznVze71ZfnN/qjZrvF73CGIbnCPkob4CdqTg7TjPwCY3Emu8z2ZQRCOa636YbF0dLDTHxQMiytwk5/dwq+dilZGn8AttRkCY0abZtmG5RoOGfQ73Z3rg8vzs6tf3hSLFxdfv349PNzd3T08PGTf8iS1X8+OLg96eyfdzYFHLct1DVOjlOKUTf0vC5EM8IwdzNmjDqWOjR3bdjTN4aPWsGz+nUNtm839pmMydkxu0/Hb7Z/wVdoPBBING8J3A2NOG47P9uFHPHuT301KmTj62StMRemH4ypHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIMcP/AygXzr7Kv/UIAAAAAElFTkSuQmCC',
    subject: 'Ikea',
    sources: [],
    support: [
      {
        connection:
          '"Ikea said this week that it would close all 17 of its stores in Russia because of the conflict."',
        source:
          'https://www.businessinsider.com/russian-shoppers-swarm-ikea-stores-to-stock-up-2022-3?r=US&amp;IR=T',
      },
    ],
  },
  {
    id: 284,
    about: 'Alkoholiniai gėrimai',
    logo: 'https://shop.venos.de/media/26/73/d9/1601471131/latvijas-balzams-riga-black-balsam-05l-45.jpg',
    subject: 'Latvijas Balzams',
    sources: [],
    support: [
      {
        connection:
          '"Dėl tiesioginės Rusijos agresijos prieš Ukrainą, SPI Group nusprendė nutraukti visus ryšius su Rusijos Alfa spirito tiekėjais"',
        source: 'https://stoprus.com/assets/stoli.png',
      },
    ],
  },
  {
    id: 285,
    about: 'Alkoholiniai gėrimai',
    logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgullliquorstore.com%2Fwp-content%2Fuploads%2F2016%2F12%2Ffull-2947.jpeg&amp;f=1&amp;nofb=1',
    subject: 'Stolichnaya',
    sources: [],
    support: [
      {
        connection:
          '"Dėl tiesioginės Rusijos agresijos prieš Ukrainą, SPI Group nusprendė nutraukti visus ryšius su Rusijos Alfa spirito tiekėjais"',
        source: 'https://stoprus.com/assets/stoli.png',
      },
    ],
  },
  {
    id: 286,
    about: 'Restoranų valdymo programinė įranga',
    logo: 'https://yellow.place/file/image/thumb/0/0/966/fyuzxmeafwyntbxr.jpg',
    subject: 'UCS Baltic',
    sources: [],
    support: [
      {
        connection:
          '"Norime informuoti, kad valdyboje jau priėmėme sprendimą Lietuvos restoranams ir kavinėms pasiūlyti Nyderlandų gamintojo programinę įrangą. <...> Kai turėsime europietišką alternatyvą, stabdysime naujų „R-Keeper“ programinės įrangos licencijų prekybą ir diegimą."',
        source: 'https://www.facebook.com/UCSBaltic/posts/356615839805529',
      },
      {
        connection:
          '"Šiuo metu vyksta pokytis mūsų akcininkų struktūroje – siekiame, kad 100% mūsų įmonės būtų valdoma Europos Sąjungos piliečių."',
        source: 'https://www.facebook.com/UCSBaltic/posts/356615839805529',
      },
    ],
  },
  {
    id: 287,
    about: 'Greito maisto restoranas',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1920px-McDonald%27s_Golden_Arches.svg.png',
    subject: 'McDonalds',
    sources: [],
    support: [
      {
        connection:
          '"McDonald’s has decided to temporarily close all our restaurants in Russia and pause all operations in the market"',
        source:
          'https://corporate.mcdonalds.com/corpmcd/en-us/our-stories/article/ourstories.Russia-update.html',
      },
    ],
  },
  {
    id: 288,
    about: 'Gaivieji gėrimai',
    logo: 'https://play-lh.googleusercontent.com/XRCu-SyFrrG2mKj1zF8ohJ_pniwGJcDOsrMWgHpppWvyxGIk98SGz3KGgVFcdQ4WrQ=s360-rw',
    subject: 'Coca-Cola',
    sources: [],
    support: [
      {
        connection:
          '"The Coca-Cola Company announced today that it is suspending its business in Russia."',
        source:
          'https://www.coca-colacompany.com/press-releases/coca-cola-company-suspends-business-russia',
      },
    ],
  },
  {
    id: 289,
    about: 'Gaivieji gėrimai',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/1200px-Pepsi_logo_2014.svg.png',
    subject: 'Pepsi',
    sources: [],
    support: [
      {
        connection:
          '"However, given the horrific events occurring in Ukraine we are announcing the suspension of the sale of Pepsi-Cola, and our global beverage brands in Russia, including 7Up and Mirinda. We will also be suspending capital investments and all advertising and promotional activities in Russia."',
        source:
          'https://www.pepsico.com/news/press-release/pepsico-suspends-production-and-sale-of-pepsi-cola-and-other-global-beverage-brands-in-russia',
      },
    ],
  },
  {
    id: 290,
    about: 'Alus ir kiti alkoholiniai gėrimai',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Carlsberg_Group_logo.svg/1200px-Carlsberg_Group_logo.svg.png',
    subject: 'Carlsberg',
    sources: [],
    support: [
      {
        connection:
          '"Based on this review, we have taken the difficult and immediate decision to seek a full disposal of our business in Russia."',
        source:
          'https://www.carlsberggroup.com/newsroom/carlsberg-group-to-leave-russia/',
      },
      {
        connection:
          '"We, together with the Carlsberg foundations, have made a EUR 10 million donation to support humanitarian efforts in Ukraine"',
        source:
          'https://www.carlsberggroup.com/newsroom/update-on-ukraine-and-russia-suspension-of-2022-guidance/',
      },
    ],
  },
]
