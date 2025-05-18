// This list can be added to indefinitely, the Shows type will read keys dynamically
// These should match the way the show is listed in the Bios form
export const SHOWS = {
  DANGEROUS: 'Dangerous Game',
  TOWNIES: 'Townies & Dragons',
  BELLAMY: 'Captain Bellamy',
  PEARL: 'The Black Pearl',
  THIN: 'The Thin Man',
  TRIFLES: 'Trifles'
} as const;

export const PROD_KEYS = {
  DANGEROUS: 'dangerous',
  THIRTEEN: 'thirteen',
  BULLETS: 'bullets',
}

// This includes keys for all shows currently in the SHOWS list
export type ShowKeys = typeof SHOWS[keyof typeof SHOWS];
export type ProdKeys = typeof PROD_KEYS[keyof typeof PROD_KEYS];

export interface Person {
  name: string;
  shows: ShowKeys[];
  roles: string;
  bio: string;
}

export interface Show {
  showName: string;
  writerCredit?: string;
  adapterCredit?: string;
  directorCredits: Person[];
  description?: string;
  credits: Person[];
  foleyCredits: Person[];
}

// This includes ONLY the names of the shows that should be displayed for this production
// and associates them with their string keys
export const showNames = {
  'Dangerous Game': 'The Most Dangerous Game',
  'Townies & Dragons': 'Townies & Dragons: Barrel Full of Peril',
  'Captain Bellamy': 'The Bonnie Tales of Captain Bellamy: Song of Trickery',
  'The Black Pearl': 'The Black Pearl',
  'The Thin Man': 'The Thin Man',
  'Trifles': 'Trifles'
}

// This matches show query params to their spreadsheet urls
export const infoUrls: { [key in ProdKeys]: string } = {
  [(PROD_KEYS.DANGEROUS)]: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTFkErcd5ZxPZH3d5reCj2ioVSKqW4ZOt3Y5Wd76MTLy1tA-7h-NKheExSfr7h3LOXNa-ZM6DTHwIcP/pub?output=csv',
  [(PROD_KEYS.THIRTEEN)]: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDvgsIjFxVnqxPFLdGrBYqVuXGJ8T5ibvw_v9hl2ToJ2yAQZHleGMkhkzVpyNrIVWZzqIlZ1d5IOLN/pub?gid=1373399454&single=true&output=csv',
}

// Function to group people by show
export const groupPeopleByShow = (people: Person[]) => {
  const grouped: { [key in ShowKeys]: Person[] } = {} as { [key in ShowKeys]: Person[] };
  people.forEach(person => {
    person.shows.forEach(show => {
      if (!grouped[show]) {
        grouped[show] = [];
      }
      if (!person.roles.includes('Writer') && !person.roles.includes('Director') && !person.roles.includes('Adapted') && !person.roles.includes('Foley')) {
        grouped[show]!.push(person);
      }
    });
  });
  return grouped;
};
