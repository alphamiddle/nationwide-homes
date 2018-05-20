import IListing from './IListing';

export type FunderType = 'LEAD' | 'SUPPORT';

export const FunderTypes: { [P in FunderType]: FunderType } = {
  LEAD: 'LEAD',
  SUPPORT: 'SUPPORT',
};

export interface IFunder {
  email: string;
  firstName: string;
  lastName: string;
  name: string;
  phone: string;
  fundsAvailable: number; // in dollars (e.g. 4000 == '$4,000')
  type: FunderType;
}

export interface IFundGroup {
  name: string;
  leadFunder: IFunder;
  supportFunders: IFunder[];
  listings: IListing[];
}

export default IFundGroup;
