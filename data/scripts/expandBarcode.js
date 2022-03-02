const rawData = `
060 – 099 JAV ir Kanada
100 – 139 JAV (rezervuota ateičiai)
300 – 379 Prancūzija ir Monakas
380 Bulgarija
383 Slovėnija
385 Kroatija
387 Bosnija ir Hercogovina
389 Juodkalnija
400 – 440 Vokietija (440 buvusi rytų Vokietija)
450 – 459 Japonija
460 – 469 Rusija
470 Kirgiztanas
471 Taivanas
474 Estija
475 Latvija
476 Azeibardžanas
477 Lietuva
478 Uzbekistanas
479 Šri Lanka
480 Filipinai
481 Baltarusija
482 Ukraina
484 Moldova
485 Armėnija
486 Gruzija
487 Kazakstanas
488 Tadžikistanas
489 Honkongas
490 – 499 Japonija
500 – 509 Anglija
520 – 521 Graikija
528 Lebanonas
529 Kipras
530 Albanija
531 Makedonija
535 Malta
539 Airija
540 – 549 Belgija ir Liuksemburgas
560 Portugalija
569 Islandija
570 – 579 Danija ir Grenlandija
590 Lenkija
594 Rumunija
599 Bulgarija
600 – 601 Pietų Afrika
603 Gana
604 Senegalas
608 Bahreinas
609 Mauritius
611 Marokas
613 Alžyras
615 Nigerija
616 Kenija
619 Tunisas
620 Tanzanija
621 Sirija
622 Egiptas
623 Brunėjus
624 Libija
625 Jordanija
626 Iranas
627 Kuveitas
628 Saudo Arabija
629 JAE
640 – 649 Suomija
690 – 695 Kinija
700 – 709 Norvegija
729 Izraelis
730 – 739 Švedija
740 Gvatemala
741 El Salvadoras
742 Hondūras
743 Nikaragva
744 Kosta Rika
745 Panama
746 Dominikos Respublika
750 Meksika
754 – 755 Kanada
759 Venesuela
760 – 769 Šveicarija ir Lichtenšteinas
770 – 771 Kolumbija
773 Urugvajus
775 Peru
777 Bolivija
778 – 779 Argentina
780 Čilė
784 Paragvajus
786 Ekvadoras
789 – 790 Brazilija
800 – 839 Italija, San Marinas
840 – 849 Ispanija ir Andora
850 Kuba
858 Slovakija
859 Čekija
860 Serbija
865 Mongolija
867 Šiaurės Korėja
868 – 869 Turkija
870 – 879 Olandija
880 Pietų Korėja
884 Kombodža
883 Pakistanas
885 Tailandas
888 Singapūras
890 Indija
893 Vietnamas
894 Bangladešas
896 Pakistanas
899 indonezija
900 – 919 Austrija
930 – 939 Australija
940 – 949 Naujoji Zelandija
955 Malaizija
958 Makau`

const results = []

rawData
  .split('\n')
  .map((line) => line.trim())
  .forEach((line) => {
    if (!line) {
      return
    }

    let [, start, end, country] = line.match(/(\d+)(?: – )?(\d+)? (.+)/) || []

    country = country.replace(' ir ', ', ')

    if (!start) {
      throw new Error(`Could not parse "${line}"`)
    }

    if (end) {
      for (let i = start; i <= end; i++) {
        results.push(`'${i}': '${country}'`)
      }
    } else {
      results.push(`'${start}': '${country}'`)
    }
  })

console.log(results.join(',\n'))
