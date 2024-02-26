export interface ProductTypes {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rate: {
    rating: number;
    count: number;
  };
}
