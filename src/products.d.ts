export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
export type State = {
  items: number;
  price: number;
  allProducts: Product[];
  products: Product[];
};

export type Payload = {
  payload: Product;
};
