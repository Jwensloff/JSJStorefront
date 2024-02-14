"use client";
import { useState } from "react";
import mockData from "./mockData.json";
import Image from "next/image";
import type { ProductTypes } from "@/src/types";
import Link from "next/link";

interface ProductGridProps {
  data: ProductTypes[] | [];
  href: string;
}

export default function ProductGrid({ data, href }: ProductGridProps) {
  const [allProducts, setAllProducts] = useState<ProductTypes[]>(data);

  const products = allProducts?.map((product) => (
    <Link href={`/${href}/${product.id}`} key={product.id}>
      <section className="flex justify-center">
        <div className="flex-col max-w-80 h-96">
          <div className="grid justify-center pb-4">
            <Image
              src={product.image}
              width={250}
              height={250}
              alt={product.title}
              style={{ objectFit: "contain", height: "250px" }}
            ></Image>
          </div>
          <h2 className="font-semibold line-clamp-2">{product.title}</h2>
          <p>${product.price}</p>
          <p>
            Rating: {product.rating.rate} <span>({product.rating.count})</span>
          </p>
        </div>
      </section>
    </Link>
  ));
  return <div className="grid grid-cols-4 gap-8 p-5">{products}</div>;
}
