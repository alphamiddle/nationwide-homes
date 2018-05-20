import IFundGroup from '../interfaces/IFundGroup';
import funders from './funders';

export const g1: IFundGroup = {
  leadFunder: funders.f1,
  listings: [],
  name: 'Angel Funders',
  supportFunders: [ funders.f2, funders.f3 ],
};

export const groups = {
  g1,
};

export default groups;
