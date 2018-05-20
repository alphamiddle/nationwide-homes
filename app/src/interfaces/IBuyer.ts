import IListing from './IListing';

export type PurposeType = 'LONG' | 'SHORT';

export const PurposeTypes: { [P in PurposeType]: PurposeType } = {
  LONG: 'LONG',
  SHORT: 'SHORT',
};

export interface IBuyer {
  email: string;
  firstName: string;
  lastName: string;
  listings: IListing[];
  name: string;
  phone: string;
  purpose: PurposeType;
}

export default IBuyer;
