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

export interface CareerProps {
  id: number;
  created_at: string;
  department: string;
  title: string;
  description: string;
  location: {
    state: string;
    country: string;
    remote: boolean;
  };
  salary: number;
  type: string;
  qualifications: string;
  responsibilities: string;
  benefits: string;
  start_date: {
    month: string;
    year: number;
  };
}

export interface CareerPreviewProps {
  id: number;
  title: string;
  description: string;
}

export interface ShoppingCartProps {
  id: number;
  title: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}
