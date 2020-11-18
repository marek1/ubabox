export interface Product {
  id: string;
  short: string;
  name: string;
  shortDescription: string;
  description: string;
  img: string;
  thumb: string;
  price: number;
}

export const Products = [
  {
    id: 'Kaffee',
    short: 'Kaffee',
    name: 'Kaffee',
    shortDescription: 'Kaffee...',
    description: 'Kaffee...',
    img: 'kaffee.png',
    thumb: 'kaffee.png',
    price: 8
  },
  {
    id: 'Tee',
    short: 'Tee',
    name: 'Tee',
    shortDescription: 'Tee...',
    description: 'Tee...',
    img: 'tee.png',
    thumb: 'tee.png',
    price: 6
  },
  {
    id: 'Jutebeutel',
    short: 'Jutebeutel',
    name: 'Jutebeutel',
    shortDescription: 'Jutebeutel...',
    description: 'Jutebeutel...',
    img: 'beutel.png',
    thumb: 'beutel.png',
    price: 8
  },
  {
    id: 'Becher',
    short: 'Becher',
    name: 'Becher',
    shortDescription: 'Becher...',
    description: 'Becher...',
    img: 'tasse.png',
    thumb: 'tasse.png',
    price: 10
  },
  {
    id: 'KleineSchokolade',
    short: 'Kleine Schokolade',
    name: 'Kleine Schokolade',
    shortDescription: 'Kleine Schokolade...',
    description: 'Kleine Schokolade...',
    img: 'schokolade_klein.png',
    thumb: 'schokolade_klein.png',
    price: 4
  },
  {
    id: 'GrosseSchokolade',
    short: 'Große Schokolade',
    name: 'Große Schokolade',
    shortDescription: 'Große Schokolade...',
    description: 'Große Schokolade...',
    img: 'schokolade.png',
    thumb: 'schokolade.png',
    price: 8
  },
  /*
  {
    id: 'Karte',
    short: 'Karte',
    name: 'Karte',
    shortDescription: 'Eine handgestaltete Karte...',
    description: 'Eine handgestaltete Karte...',
    img: 'postcard.png',
    thumb: 'postcard.png',
    price: 2
  },
  */
];
