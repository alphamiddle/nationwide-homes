import IBuyer, { PurposeTypes } from '../interfaces/IBuyer';
import listings from './listings';

export const b1: IBuyer = {
  email: 'alday@gmail.com',
  firstName: 'Al',
  lastName: 'Day',
  listings: [ listings.l1, listings.l2 ],
  name: 'Al Day',
  phone: '510-902-3928',
  purpose: PurposeTypes.SHORT,
};

export const buyers = {
  b1,
};

export default buyers;
