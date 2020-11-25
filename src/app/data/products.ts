export interface ProductVariation {
  name: string;
  description: string;
  producer: string;
  producerUrl?: string;
  seller?: string;
  sellerUrl?: string;
  img: string;
}
export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  img: string;
  thumb: string;
  price: number;
  productVariations: ProductVariation[];
  selectedProductVariation: ProductVariation|null;
}

export const Products: Product[] = [
  {
    id: 'Kaffee',
    name: 'Kaffee aus Berlin',
    shortDescription: 'In Berlin gerösteter Kaffee',
    description: 'Die Kaffeebohnen stammen aus Röstereien in Berlin.',
    img: 'kaffee.png',
    thumb: 'kaffee.png',
    price: 8,
    productVariations: [
      {
        name: 'Espresso',
        description: 'Ganze Bohnen',
        producer: 'Firstcrack Coffee Roasters',
        producerUrl: 'https://imkiez.de/ort/firstcrack-kaffeeroesterei--raumerstrasse-prenzlauer-berg-berlin',
        seller: 'Firstcrack Coffee Roasters',
        sellerUrl: 'https://imkiez.de/ort/firstcrack-kaffeeroesterei--raumerstrasse-prenzlauer-berg-berlin',
        img: 'firstcrack.jpg'
      }
    ],
    selectedProductVariation: null
  },
  {
    id: 'Tee',
    name: 'Tee aus Berlin',
    shortDescription: 'In Berlin selektierte Teesorten',
    description: 'Tee aus ökologischer Landwirtschaft, der in Berlin zusammengestellt wurde.',
    img: 'tee.png',
    thumb: 'tee.png',
    price: 6,
    productVariations: [
      {
        name: 'Karma Tea Chai',
        description: 'Gewürzmischung mit scharzem Tee',
        producer: 'Karma Tea',
        seller: 'Frojtee',
        sellerUrl: 'https://imkiez.de/ort/frojtee-wuehlischstrasse-friedrichshain-berlin',
        img: 'karma_chai_tea.jpg'
      },
      {
        name: 'Kollektiv Tee',
        description: 'Fenchel-Anis-Kümmel (Bio-Fenchelteemischung)',
        producer: 'Karma Tea',
        seller: 'Frojtee',
        sellerUrl: 'https://imkiez.de/ort/frojtee-wuehlischstrasse-friedrichshain-berlin',
        img: 'kollektiv_tee.jpg'
      }
    ],
    selectedProductVariation: null
  },
  {
    id: 'Jutebeutel',
    name: 'Jutebeutel aus Berlin',
    shortDescription: 'Jutebeutel - made in Berlin',
    description: 'Auf dem Jutebeutel ist ein Wahrzeichen von Berlin zu sehen.',
    img: 'beutel.png',
    thumb: 'beutel.png',
    price: 8,
    productVariations: [
      {
        name: 'Jutebeutel',
        description: 'Jutebeutel',
        producer: 'pp Berlin',
        producerUrl: 'https://imkiez.de/ort/shopp-berlin-kopernikusstrasse-friedrichshain-berlin',
        seller: 'pp Berlin',
        sellerUrl: 'https://imkiez.de/ort/shopp-berlin-kopernikusstrasse-friedrichshain-berlin',
        img: 'jutebeutel.jpg'
      }
    ],
    selectedProductVariation: null
  },
  {
    id: 'Becher',
    name: 'Becher aus Berlin',
    shortDescription: 'Kaffeebecher/Kaffeetasse',
    description: 'Ein Kaffeebecher mit einem Wahrzeichen von Berlin darauf',
    img: 'tasse.png',
    thumb: 'tasse.png',
    price: 10,
    productVariations: [
      {
        name: 'Kaffeebecher',
        description: 'Kaffeebecher von This City Rocks',
        producer: 'This City Rocks',
        producerUrl: 'https://imkiez.de/ort/this-city-rocks-libauer-strasse-friedrichshain-berlin',
        seller: 'This City Rocks',
        sellerUrl: 'https://imkiez.de/ort/this-city-rocks-libauer-strasse-friedrichshain-berlin',
        img: 'kaffeebecher.jpg'
      }
    ],
    selectedProductVariation: null
  },
  {
    id: 'Schokolade',
    name: 'Schokolade aus Berlin',
    shortDescription: 'Handgeschöpfte Schokolade aus Berlin',
    description: 'Die Schokolade wurde in Berlin handgeschöpft.',
    img: 'schokolade_klein.png',
    thumb: 'schokolade_klein.png',
    price: 5,
    productVariations: [
      {
        name: 'Vollmilchschokolade mit/aus Tonkabohne',
        description: 'Handgeschöpfte Vollmilch-Schokolade aus Berlin (mit/aus Tonkabohne)',
        producer: 'Schokoladenmanufaktur Franz',
        producerUrl: 'https://imkiez.de/ort/schokoladenmanufaktur-franz-ebertystrasse-friedrichshain-berlin',
        seller: 'Schokoladenmanufaktur Franz',
        sellerUrl: 'https://imkiez.de/ort/schokoladenmanufaktur-franz-ebertystrasse-friedrichshain-berlin',
        img: 'kleine_schokolade.jpg'
      },
      {
        name: 'Zartbitter mit/aus Zimt + Walnüssen + Cranberries',
        description: 'Handgeschöpfte Zartbitter-Schokolade aus Berlin (mit/aus Zimt + Walnüssen + Cranberries)',
        producer: 'Schokoladenmanufaktur Franz',
        producerUrl: 'https://imkiez.de/ort/schokoladenmanufaktur-franz-ebertystrasse-friedrichshain-berlin',
        seller: 'Schokoladenmanufaktur Franz',
        sellerUrl: 'https://imkiez.de/ort/schokoladenmanufaktur-franz-ebertystrasse-friedrichshain-berlin',
        img: 'kleine_schokolade.jpg'
      },
      {
        name: 'Zartbitter mit/aus Zimt',
        description: 'Handgeschöpfte Zartbitter-Schokolade aus Berlin (mit/aus Zimt)',
        producer: 'Schokoladenmanufaktur Franz',
        producerUrl: 'https://imkiez.de/ort/schokoladenmanufaktur-franz-ebertystrasse-friedrichshain-berlin',
        seller: 'Schokoladenmanufaktur Franz',
        sellerUrl: 'https://imkiez.de/ort/schokoladenmanufaktur-franz-ebertystrasse-friedrichshain-berlin',
        img: 'kleine_schokolade.jpg'
      },
      {
        name: 'Zartbitter mit/aus Mandeln',
        description: 'Handgeschöpfte Zartbitter-Schokolade aus Berlin (mit/aus karamellisierten Mandeln)',
        producer: 'Schokoladenmanufaktur Franz',
        producerUrl: 'https://imkiez.de/ort/schokoladenmanufaktur-franz-ebertystrasse-friedrichshain-berlin',
        seller: 'Schokoladenmanufaktur Franz',
        sellerUrl: 'https://imkiez.de/ort/schokoladenmanufaktur-franz-ebertystrasse-friedrichshain-berlin',
        img: 'kleine_schokolade.jpg'
      }
    ],
    selectedProductVariation: null
  },
  {
    id: 'Pralinenkasten',
    name: 'Pralinenkasten aus Berlin',
    shortDescription: 'Pralinenkasten aus Berlin',
    description: 'Der Pralinenkasten aus Berlin enthält handgeschöfpfte Pralinen',
    img: 'pralinen.png',
    thumb: 'pralinen.png',
    price: 9,
    productVariations: [
      {
        name: 'Salz-Karamell',
        description: 'Handgeschöpfte Salz-Karamell Pralinen aus Berlin (mit feinem Haselnuss-Nougat)',
        producer: 'Schokoladenmanufaktur Franz',
        producerUrl: 'https://imkiez.de/ort/schokoladenmanufaktur-franz-ebertystrasse-friedrichshain-berlin',
        seller: 'Schokoladenmanufaktur Franz',
        sellerUrl: 'https://imkiez.de/ort/schokoladenmanufaktur-franz-ebertystrasse-friedrichshain-berlin',
        img: 'pralinen.jpg'
      },
      {
        name: 'Pralinen mit Olivenöl',
        description: 'Handgeschöpfte Pralinen mit Olivenöl',
        producer: 'Schokoladenmanufaktur Franz',
        producerUrl: 'https://imkiez.de/ort/schokoladenmanufaktur-franz-ebertystrasse-friedrichshain-berlin',
        seller: 'Schokoladenmanufaktur Franz',
        sellerUrl: 'https://imkiez.de/ort/schokoladenmanufaktur-franz-ebertystrasse-friedrichshain-berlin',
        img: 'pralinen.jpg'
      }
    ],
    selectedProductVariation: null
  }
];
