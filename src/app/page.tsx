import Image from 'next/image';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductGrid from '../components/ProductGrid/ProductGrid';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      Hello world This is the landing page.
      <ProductGrid />
      <Footer />
    </main>
  );
}
