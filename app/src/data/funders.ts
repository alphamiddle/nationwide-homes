import { FunderTypes, IFunder } from '../interfaces/IFundGroup';

// Lead
export const f1: IFunder = {
  email: 'bailey.deeds@yahoo.com',
  firstName: 'Bailey',
  fundsAvailable: 20000,
  lastName: 'Deeds',
  name: 'Bailey Deeds',
  phone: '415-289-8590',
  type: FunderTypes.LEAD,
}

// Supports
export const f2: IFunder = {
  email: 'samsaporter@yahoo.com',
  firstName: 'Sam',
  fundsAvailable: 15000,
  lastName: 'Porter',
  name: 'Sam Porter',
  phone: '415-290-2093',
  type: FunderTypes.SUPPORT,
};

export const f3: IFunder = {
  email: 'imahelper@hotmail.com',
  firstName: 'Ima',
  fundsAvailable: 10000,
  lastName: 'Helper',
  name: 'Ima Helper',
  phone: '510-531-2894',
  type: FunderTypes.SUPPORT,
};

export const funders = {
  f1,
  f2,
  f3,
};

export default funders;
