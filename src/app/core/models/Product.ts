export class Product {
  id: number;
  name: string;
  price: number;
  description: string;
  details: string;
  imageUrl: string;
  type?: number;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    type: number,
    details: string,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.type = type;
    this.details = details;
  }
}
