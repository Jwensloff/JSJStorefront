"use client";
import { useState } from "react";
import mockData from "./mockData.json";
import Image from "next/image";
import type { ProductTypes } from "@/src/types";

export default function ProductGrid() {
  const [allProducts, setAllProducts] = useState<ProductTypes[]>(mockData);

  const products = allProducts.map((product) => (
    <div key={product.id} className="flex-col max-w-80 max-h-96">
      <div className="grid justify-center pb-4">
        <Image
          src={product.image}
          width={170}
          height={175}
          alt={product.title}
          className="object-contain max-h-full"
        ></Image>
      </div>
      <h2 className="font-semibold">{product.title}</h2>
      <p>${product.price}</p>
      <p>
        Rating: {product.rating.rate} <span>({product.rating.count})</span>
      </p>
    </div>
  ));
  return <div className="grid grid-cols-3 gap-24 p-5">{products}</div>;
}
