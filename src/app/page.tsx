import Image from 'next/image'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HeroImage from '../components/HeroImage/HeroImage'

// fetch all product data
const getLandingProductData = async () => {
  'use server'
  const response = await fetch(`https://fakestoreapi.com/products`)

  if (!response.ok) {
    throw new Error('Oops, something went wrong')
  }

  return response.json()
}

export default async function Home() {
  const products = await getLandingProductData()

  const highestRatedProduct = products.reduce(
    (prev: { rating: {rate: number} }, current: { rating: { rate: number}}) =>
      prev.rating.rate > current.rating.rate ? prev : current
  )

  const productUnder100 = products.find((product: { price: number }) => product.price < 100)

  const productWithGold = products.find((product: { title: string }) => product.title.includes('Gold'))
  

  return (
    <main className="flex flex-col items-center w-screen">
      <Header />
      <HeroImage location={'landing'} />
      Hello world This is the landing page.
      <div>{products[1].id}</div>
      <Footer />
    </main>
  )
}
