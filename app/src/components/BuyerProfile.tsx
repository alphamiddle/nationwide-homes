import '../styles/BuyerProfile.css';

import * as React from 'react';

import IBuyer, { PurposeTypes } from '../interfaces/IBuyer';
import IListing, { IAddress } from '../interfaces/IListing';

export interface IProps {
  profile: IBuyer;
}

class BuyerProfile extends React.Component<IProps, object> {
  public render() {
    return (
      <div className='container'>
        {this._renderMyProfile()}
        {this._renderListings()}
      </div>
    );
  }

  private _renderAddress(address: IAddress) {
    return `${address.line1}\n${address.city} ${address.state}, ${address.zip}`;
  }

  private _renderImages(images: string[]) {
    return (<div>TODO: IMAGES</div>);
  }

  private _renderListing(listing: IListing, idx: number) {
    return (
      <div className='listing' key={`l-${idx}`}>
        <div>
          {this._renderImages(listing.images)}
          {this._renderAddress(listing.address)}
          <p><span><b>Description:</b></span>{listing.description}</p>
          <h6>source: {listing.link}</h6>
        </div>
      </div>
    );
  }

  private _renderListings() {
    const listings: any[] = [];

    this.props.profile.listings.forEach((listing: IListing, idx) => {
      listings.push(this._renderListing(listing, idx));
    });

    return (
      <div className='listings'>
        <h2>My Potential Homes</h2>
        {listings}
      </div>
    );
  }

  private _renderMyProfile() {
    return (
      <div className='myProfile'>
        <h2>Hi {this.props.profile.firstName}!</h2>
        <span><b>Goal:</b> {this._renderPurpose()}</span>
        <span><b>Phone:</b> {this.props.profile.phone}</span>
        <span><b>Email:</b> {this.props.profile.email}</span>
      </div>
    );
  }

  private _renderPurpose() {
    switch (this.props.profile.purpose) {
      case PurposeTypes.LONG:
        return 'Long-term ownership (10+ years)';

      case PurposeTypes.SHORT:
        return 'Short-term ownership (< 10 years)';
    }

    return 'Undecided';
  }
}

export default BuyerProfile;
