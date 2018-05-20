
export interface IAddress {
  line1: string;
  city: string;
  state: string;
  zip: string;
}

export interface IListing {
  link: string; // url to original listing source
  address: IAddress;
  description: string;
  images: string[]; // names of image files in /public/homes
}

export default IListing;
