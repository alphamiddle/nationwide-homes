import IListing from '../interfaces/IListing';

export const l1: IListing = {
  address: {
    city: 'Escondido',
    line1: '3329 Carolina Dr',
    state: 'CA',
    zip: '93283',
  },
  description: 'A cozy 2br/1ba home located in a neighborhood on the rise.\
                With downtown San Diego and the California coast a quick drive away,\
                the property sits in an ideal location.',
  images: [],
  link: 'https://zillow.com/homes/28912',
};

export const l2: IListing = {
  address: {
    city: 'Carlsbad',
    line1: '849 Ivy Ave',
    state: 'CA',
    zip: '93234',
  },
  description: 'A 1br/1ba apartment in a historic district with a lively nighlife.\
                This property is a perfect starter home for any millennial.',
  images: [],
  link: 'https://trulia.com/homes/21902',
};

export const listings = {
  l1,
  l2,
};

export default listings;
