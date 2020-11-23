import { Product, Products } from './products';

export interface BoxName {
  id: number;
  short: string;
  name: string;
  shortDescription: string;
  description: string;
  img: string;
  thumb: string;
  fixedProducts: Product[];
  flexProducts: Product[];
  minPrice: number;
  maxPrice: number;
  minNumberProducts: number;
  maxNumberProducts: number;
}
export const BoxNames: BoxName[] = [
  {
    id: 0,
    short: 'Individuell',
    name: 'Die Individuelle-Box',
    shortDescription: 'Die Box zum selbst zusammenstellen',
    description: 'Stelle dir deine Box selbst zusammen.',
    img: 'berlin.jpg',
    thumb: 'berlin_thumb.jpg',
    fixedProducts: [],
    flexProducts: Products,
    minPrice: 20,
    maxPrice: 22,
    minNumberProducts: 1,
    maxNumberProducts: 3
  },
  {
    id: 1,
    short: 'Kaffeeliebhaber',
    name: 'Die Kaffeeliebhaber-Box',
    shortDescription: 'Gerösteter Kaffee aus Berlin.',
    description: 'Für Leute, die gern Kaffee trinken.',
    img: 'kaffee.jpg',
    thumb: 'kaffee_thumb.jpg',
    fixedProducts: [
      Products.filter(x => x.id === 'Kaffee')[0], // 8
      Products.filter(x => x.id === 'Becher')[0], // 10
      Products.filter(x => x.id === 'Schokolade')[0], // 4
    ],
    flexProducts: [],
    minPrice: 20,
    maxPrice: 22,
    minNumberProducts: 1,
    maxNumberProducts: 3
  },
  {
    id: 2,
    short: 'Teeliebhaber',
    name: 'Die Teeliebhaber-Box',
    shortDescription: 'Tee aus Berlin.',
    description: 'Für Leute, die lieber Tee trinken.',
    img: 'tee.jpg',
    thumb: 'tee_thumb.jpg',
    fixedProducts: [
      Products.filter(x => x.id === 'Tee')[0], // 6
      Products.filter(x => x.id === 'Jutebeutel')[0], // 8
      Products.filter(x => x.id === 'Pralinenkasten')[0], // 8
    ],
    flexProducts: [],
    minPrice: 20,
    maxPrice: 22,
    minNumberProducts: 1,
    maxNumberProducts: 3
  },
  /*
  {
    id: 3,
    short: 'Buch',
    name: 'Die Buch-ÜberBox',
    shortDescription: 'Was für Buchliebhaber*innen.',
    description: 'Was für Buchliebhaber*innen.',
    img: 'buch.jpg',
    thumb: 'buch_thumb.jpg'
  },
  {
    id: 4,
    short: 'Männer',
    name: 'Die Männer-ÜberBox',
    shortDescription: 'Was für Männer.',
    description: 'Was für Männer.',
    img: 'maenner.jpg',
    thumb: 'maenner_thumb.jpg'
  },
  {
    id: 5,
    short: 'Frauen',
    name: 'Die Frauen-ÜberBox',
    shortDescription: 'Was für Frauen.',
    description: 'Bestehend aus Seife, Shampoo und .',
    img: 'frauen.jpg',
    thumb: 'frauen_thumb.jpg'
  },
  {
    id: 6,
    short: 'Zufall',
    name: 'Die Zufalls-ÜberBox',
    shortDescription: 'Für Leute, die echte Überraschungen mögen.',
    description: 'Für Leute, die echte Überraschungen mögen.',
    img: 'zufall.jpg',
    thumb: 'zufall_thumb.jpg'
  },
  */
];
