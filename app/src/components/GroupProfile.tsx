import * as React from 'react';
import '../styles/GroupProfile.css';

import { FunderType, FunderTypes, IFunder, IFundGroup } from '../interfaces/IFundGroup';

export interface IProps {
  group: IFundGroup;
}

class GroupProfile extends React.Component<IProps, object> {
  public render() {
    return (
      <div className='container'>
        {this._renderGroupProfile()}
      </div>
    );
  }

  private _renderFunder(funder: IFunder, key: string) {
    return (
      <div className='funder' key={key}>
        <h4>{funder.name}{funder.type === FunderTypes.LEAD ? ' (me)' : ''}</h4>
        <div>
          <span><b>Email:</b> {funder.email}</span>
          <span><b>Phone:</b> {funder.phone}</span>
        </div>
        <div>
          <span>Funds: {this._renderFundsAvailable(funder.fundsAvailable)}</span>
          <span>{this._renderType(funder.type)}</span>
        </div>
      </div>
    );
  }

  private _renderFunders() {
    const funders: any[] = [];

    // lead funder at the top
    funders.push(this._renderFunder(this.props.group.leadFunder, 'f-lead'));
    // support follows
    this.props.group.supportFunders.forEach((funder, idx) => funders.push(this._renderFunder(funder, `f-${idx}`)));

    return (
      <div className='funders'>
        {funders}
      </div>
    )
  }

  private _renderFundsAvailable(total: number) {
    return `$${total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
  }

  private _renderGroupProfile() {
    return (
      <div className='groupProfile'>
        <h2>Welcome, {this.props.group.name}!</h2>
        {this._renderFunders()}
      </div>
    );
  }

  private _renderType(type: FunderType) {
    switch (type) {
      case FunderTypes.LEAD:
        return 'Lead Funder';

      case FunderTypes.SUPPORT:
        return 'Support Funder';
    }

    return 'Support Funder';
  }
}

export default GroupProfile;
