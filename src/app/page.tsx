'use client';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import { ApolloProvider } from '@apollo/client';
import client from '../apolloClient';

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main className="flex flex-col items-center">
        <Header />
        Hello world This is the landing page.
        <ProductGrid />
        <Footer />
      </main>
    </ApolloProvider>
  );
}
