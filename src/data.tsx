// This list can be added to indefinitely, the Shows type will read keys dynamically
// These should match the way the show is listed in the Bios form
export const SHOWS = {
  DANGEROUS: 'The Most Dangerous Game',
  TOWNIES: 'Townies & Dragons: A Barrel Full of Peril',
  BELLAMY: 'The Bonnie Tales of Captain Bellamy: Song of Trickery',
  PEARL: 'The Black Pearl',
  THIN: 'The Thin Man',
  TRIFLES: 'Trifles',
  SPADE: "Samantha Spade in The Steve Starr Caper",
  AFTER: "After the Thin Man",
  TREK25: "The Menagerie"
} as const;

export const PROD_KEYS = {
  DANGEROUS: 'dangerous',
  THIRTEEN: 'thirteen',
  BULLETS: 'bullets',
  MENAGERIE: 'menagerie',
}

// This includes keys for all shows currently in the SHOWS list
export type ShowKeys = typeof SHOWS[keyof typeof SHOWS];
export type ShowTitles = keyof typeof SHOWS;
export type ProdKeys = typeof PROD_KEYS[keyof typeof PROD_KEYS];

export interface Person {
  name: string;
  roles: string[];
}

export interface Bio {
  name: string;
  bio: string;
}


export interface Show {
  showName: string;
  writerCredit?: { name: string, phrase?: string };
  adapterCredit?: { name: string, phrase?: string };
  directorCredits: { name: string, phrase?: string }[];
  description?: string;
  credits: Person[];
  foleyCredits: Person[];
}

// This includes ONLY the names of the shows that should be displayed for this production
// and associates them with their string keys
// export const showNames = {
//   'Dangerous Game': 'The Most Dangerous Game',
//   'Townies & Dragons': 'Townies & Dragons: Barrel Full of Peril',
//   'Captain Bellamy': 'The Bonnie Tales of Captain Bellamy: Song of Trickery',
//   'The Black Pearl': 'The Black Pearl',
//   'The Thin Man': 'The Thin Man',
//   'Trifles': 'Trifles'
// }

// This matches show query params to their spreadsheet urls and state
export const showInfo: { [key in ProdKeys]: { biosExist: boolean, biosReady?: boolean } } = {
  [(PROD_KEYS.DANGEROUS)]:
  {
    // url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTFkErcd5ZxPZH3d5reCj2ioVSKqW4ZOt3Y5Wd76MTLy1tA-7h-NKheExSfr7h3LOXNa-ZM6DTHwIcP/pub?output=csv',
    biosExist: true
  },
  [(PROD_KEYS.THIRTEEN)]:
  {
    // url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDvgsIjFxVnqxPFLdGrBYqVuXGJ8T5ibvw_v9hl2ToJ2yAQZHleGMkhkzVpyNrIVWZzqIlZ1d5IOLN/pub?gid=1373399454&single=true&output=csv',
    biosExist: true
  },
  [PROD_KEYS.BULLETS]:
  {
    // url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTFkErcd5ZxPZH3d5reCj2ioVSKqW4ZOt3Y5Wd76MTLy1tA-7h-NKheExSfr7h3LOXNa-ZM6DTHwIcP/pub?gid=1855070242&single=true&output=csv',
    biosExist: false
  },
  [PROD_KEYS.MENAGERIE]: {
    biosExist: false
  }
}

// Function to group people by show
// export const groupPeopleByShow = (people: Person[]) => {
//   const grouped: { [key in ShowKeys]: Person[] } = {} as { [key in ShowKeys]: Person[] };
//   people.forEach(person => {
//     person.shows.forEach(show => {
//       if (!grouped[show]) {
//         grouped[show] = [];
//       }
//       const rolesInShow = person.roles[show as ShowKeys] || [];
//       if (!rolesInShow.some(role => /Writer/i.test(role)) && !rolesInShow.some(role => /Director/i.test(role)) && !rolesInShow.some(role => /Adapted/i.test(role)) && !rolesInShow.some(role => /Foley/i.test(role))) {
//         grouped[show]!.push(person);
//       }
//     });
//   });
//   return grouped;
// };

export interface ProductionCredits {
  writer: Person | undefined;
  director: Person[];
  adapter: Person | undefined;
  foley: Person[];
}

// export const getShowProdCreds = (show: ShowKeys, people: Person[]) => {
//   const creds: ProductionCredits = { writer: undefined, director: [], adapter: undefined, foley: [] };
//   people.forEach(person => {
//     person.shows.forEach(listShow => {
//       const rolesInShow = person.roles[listShow as ShowKeys] || [];
//       if (listShow === show && rolesInShow.some(role => /Writer/i.test(role))) {
//         creds.writer = person;
//       }
//       if (listShow === show && rolesInShow.some(role => /Director/i.test(role))) {
//         creds.director.push(person);
//       }
//       if (listShow === show && rolesInShow.some(role => /Adapted/i.test(role))) {
//         creds.adapter = person;
//       }
//       if (listShow === show && rolesInShow.some(role => /Foley/i.test(role))) {
//         creds.foley.push(person);
//       }
//     });
//   });
//   return creds;
// };
