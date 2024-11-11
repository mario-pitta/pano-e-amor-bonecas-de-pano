import { Contants } from '../Contants';
import { Product } from './Product';

export class Doll extends Product {

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    details: any
  ) {
    super(id, name, description, price, imageUrl, Contants.BONECA_DE_PANO_ID, details);
  }
}
