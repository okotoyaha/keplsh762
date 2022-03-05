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
]
