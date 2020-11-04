export interface BoxName {
  id: number;
  short: string;
  name: string;
  description: string;
  img: string;
}
export const BoxNames: BoxName[] = [
  {
    id: 0,
    short: 'Individual',
    name: 'Die Individual-Box',
    description: 'Von dir zusammengestellt.',
    img: ''
  },
  {
    id: 1,
    short: 'Berlin',
    name: 'Die Berlin-ÜbaBox',
    description: 'Gutes aus Berlin.',
    img: ''
  },
  {
    id: 2,
    short: 'Baby',
    name: 'Die Baby-ÜbaBox',
    description: 'Nur das Beste fürs Baby',
    img: ''
  },
  {
    id: 3,
    short: 'Buch',
    name: 'Die Buch-ÜbaBox',
    description: 'Was für Buchliebhaber*innen.',
    img: ''
  },
  {
    id: 4,
    short: 'Zufall',
    name: 'Die Zufalls-ÜbaBox',
    description: 'Für Leute, die echte Überraschungen mögen.',
    img: ''
  },
];
