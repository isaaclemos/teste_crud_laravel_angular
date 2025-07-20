import { Product } from "../interfaces/product";

export function getEmptyProduct(): Product {
  return {
    id: 0,
    name: '',
    price: 0,
    description: '',
    stock: 0,
  };
}