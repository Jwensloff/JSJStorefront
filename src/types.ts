export interface ProductTypes {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rate: {
    rating: number
    count: number
  }
}

export interface CareerProps {
  id: number
  created_at: Number
  department: string
  title: string
  description: string
  location: {
    state: string
    country: string
    remote: boolean
  }
  salary: number
  type: string
  requirements: string
  responsibilities: string
  benefits: string
  start_date: {
    month: string
    year: number
  }
}
