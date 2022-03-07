import { DataType } from '../types/data'

let i = 0
export const getId = () => i++

export const data: DataType[] = [
  {
    subject: 'Kauno Grūdai',
    logo: 'https://upload.wikimedia.org/wikipedia/lt/d/d4/KG_logo.jpg',
    about: 'Žemės ūkio produktų perdirbimas',
    sources: [
      {
        source: 'https://www.facebook.com/KaunoGrudai/posts/5444234598960380',
        connection:
          '"Linas Agro group mastu atsisakome visų komercinių ryšių su Rusija ir Baltarusija."',
      },
    ],
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
    ],
  },
  {
    subject: 'CyberX arena',
    logo: 'https://cyberxarena.lt/wp-content/uploads/2020/10/Logo_did.png',
    about: 'Laisvalaikio erdvė',
    connection: 'Paskelbė nuotraukiantys frančizės sutartį su CyberX',
    source: 'https://www.facebook.com/cyberxarena/posts/458205912756083',
  },
  {
    subject: 'Ikea',
    logo: 'data:image/png;base64,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',
    about: 'Baldai',
    connection:
      '"Ikea said this week that it would close all 17 of its stores in Russia because of the conflict."',
    source:
      'https://www.businessinsider.com/russian-shoppers-swarm-ikea-stores-to-stock-up-2022-3?r=US&IR=T',
  },
  {
    subject: 'Latvijas Balzams',
    logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wine-searcher.com%2Fimages%2Flabels%2F73%2F04%2F10607304.jpg&f=1&nofb=1',
    about: 'Alkoholiniai gėrimai',
    sources: [
      {
        source: '/assets/stoli.png',
        connection:
          '"Dėl tiesioginės Rusijos agresijos prieš Ukrainą, SPI Group nusprendė nutraukti visus ryšius su Rusijos Alfa spirito tiekėjais"',
      },
    ],
  },
  {
    subject: 'Stolichnaya',
    logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgullliquorstore.com%2Fwp-content%2Fuploads%2F2016%2F12%2Ffull-2947.jpeg&f=1&nofb=1',
    about: 'Alkoholiniai gėrimai',
    sources: [
      {
        source: '/assets/stoli.png',
        connection:
          '"Dėl tiesioginės Rusijos agresijos prieš Ukrainą, SPI Group nusprendė nutraukti visus ryšius su Rusijos Alfa spirito tiekėjais"',
      },
    ],
  },
  {
    subject: 'UCS Baltic',
    logo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNzkuNCA3Ni43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNzkuNCA3Ni43OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzZGQUM1Mjt9Cjwvc3R5bGU+CjxnIGlkPSJYTUxJRF8xMDZfIj4KCTxnPgoJCTxwYXRoIGlkPSJYTUxJRF8xMTJfIiBkPSJNNTMuNSw0My43YzAsMTQuOS0xMC43LDI1LTI2LjcsMjVDMTAuOCw2OC43LDAsNTguNiwwLDQzLjdWMS4xaDEyLjF2NDIuNWMwLDksNS44LDE0LDE0LjcsMTQKCQkJYzguOSwwLDE0LjctNS4xLDE0LjctMTRWMS4xaDEyLjFWNDMuN3oiLz4KCQk8cmVjdCBpZD0iWE1MSURfMTExXyIgeD0iNTcuNyIgeT0iNjcuNSIgY2xhc3M9InN0MCIgd2lkdGg9IjUyLjUiIGhlaWdodD0iOS4yIi8+CgkJPHBhdGggaWQ9IlhNTElEXzExMF8iIGQ9Ik0xNDYuMiw2OC43Yy0yMC45LDAtMzQuMy0xNS4xLTM0LjMtMzQuNkMxMTEuOSwxNC44LDEyNiwwLDE0NiwwYzguNywwLDE4LjEsMi44LDI0LjUsOS4xbC01LjgsOQoJCQljLTQuNy00LTExLjctNy0xOC4yLTdjLTE0LjYsMC0yMi4zLDEwLjYtMjIuMywyMi44YzAsMTIuNCw4LDIzLjgsMjIuNCwyMy44YzcuMSwwLDE0LjItMy41LDE5LjMtOC40bDYuNCw4LjcKCQkJQzE2Ni42LDYzLjcsMTU4LjEsNjguNywxNDYuMiw2OC43eiIvPgoJCTxyZWN0IGlkPSJYTUxJRF8xMDlfIiB4PSIxNzYuNyIgeT0iNjcuNSIgY2xhc3M9InN0MCIgd2lkdGg9IjUyLjUiIGhlaWdodD0iOS4yIi8+CgkJPHBhdGggaWQ9IlhNTElEXzEwOF8iIGQ9Ik0yNTcuMyw2OC43Yy04LjIsMC0xNi43LTMuMS0yMi43LTkuMWw2LjUtOS4xYzMuOSwzLjYsMTAuMyw3LDE2LjUsN2M2LDAsOS43LTMuMSw5LjctNy42CgkJCWMwLTEyLjYtMzEtMTAtMzEtMzAuN0MyMzYuMyw3LjYsMjQ2LjEsMCwyNTksMGM2LjksMCwxNC4yLDIuMywxOS41LDcuMWwtNS4zLDkuOGMtMy42LTMuMy05LjQtNS44LTE0LjYtNS44CgkJCWMtNi4xLDAtMTAuMSwzLTEwLjEsNy42YzAsMTIuNCwzMSw5LjIsMzEsMzAuM0MyNzkuNCw1OS44LDI3MS41LDY4LjcsMjU3LjMsNjguN3oiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K',
    about: 'Restoranų valdymo programinė įranga',
    sources: [
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
]
