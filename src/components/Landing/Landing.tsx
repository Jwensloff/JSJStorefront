"use client";
import { ProductTypes } from "@/src/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LandingProps {
  // Define the type of the products prop
  products: ProductTypes[];
}

export const Landing: React.FC<LandingProps> = ({ products }) => {
  // export default function Landing({ products }: ProductTypes[] ) {

  const addToLocalStorage = (productToLocal: ProductTypes[]) => {
    let productArray = JSON.stringify(productToLocal);
    localStorage.setItem("judy", productArray);
  };

  // i need to create a function to remove all producst with the category of 'electronics'
  const updatedProductList: ProductTypes[] = products.filter(
    (product: ProductTypes) => product.category !== "electronics",
  );
  addToLocalStorage(updatedProductList);

  // i need to create a function to find the highest rated product
  const highestRatedProduct = updatedProductList?.reduce(
    (prev: ProductTypes, current: ProductTypes) =>
      prev.rating.rate > current.rating.rate ? prev : current,
  );

  // i need to create a function to find the first product with a price under 100
  const productUnder100 = updatedProductList?.find(
    (product: { price: number }) => product.price < 100,
  );

  // i need to create a function to find the first product with the word 'gold' in the title
  const productWithGold = updatedProductList?.find(
    (product: { title: string }) => product.title.includes("Gold"),
  );

  // i need to create a function to return an html element for each product
  const createHTMLElement = (product: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: { rate: number; count: number };
    category: string;
  }) => {
    return (
      <Link
        key={product.id}
        href={`/product/${product.id}`}
        className="flex flex-col items-center justify-evenly bg-white p-6 max-w-[400px] min-h-[400px]"
      >
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="max-w-[200px] max-h-[200px]"
        />
        <p className="w-4/5 text-center">{product.title}</p>
        <p>${product.price}</p>
        <p>{product.rating.rate} </p>
      </Link>
    );
  };

  return (
    <div className="w-screen h-auto">
      <div className="mt-20 mb-20 flex flex-row justify-evenly items-center ">
        <Link href={`/top-rated`} className="text-4xl">
          Shop Top Rated
        </Link>
        <div className="bg-black w-[35rem] h-[35rem] transform rotate-6">
          <div className="flex h-full items-center flex-col justify-center transform rotate-[-6deg]">
            {highestRatedProduct && createHTMLElement(highestRatedProduct)}
          </div>
        </div>
      </div>
      <div className="mt-20 mb-20 flex flex-row justify-evenly items-center ">
        <div className="bg-black w-[35rem] h-[35rem] transform rotate-[-6deg]">
          <div className="flex h-full items-center flex-col justify-center transform rotate-6">
            {productUnder100 && createHTMLElement(productUnder100)}
          </div>
        </div>
        <Link href={`/sale`} className="text-4xl">
          Shop Sale Items
        </Link>
      </div>
      <div className="mt-20 mb-20 flex flex-row justify-evenly items-center ">
        <Link href={`/gold`} className="text-4xl">
          Shop Gold
        </Link>
        <div className="bg-black w-[35rem] h-[35rem] transform rotate-6">
          <div className="flex h-full items-center flex-col justify-center transform rotate-[-6deg]">
            {productWithGold && createHTMLElement(productWithGold)}
          </div>
        </div>
      </div>
    </div>
  );
};
