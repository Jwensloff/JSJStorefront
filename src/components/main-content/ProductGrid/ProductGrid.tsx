"use client";
import Image from "next/image";
import type { ProductTypes } from "@/src/types";
import Link from "next/link";
import React from "react";

interface ProductGridProps {
  data: ProductTypes[];
}

export default function ProductGrid({ data }: ProductGridProps) {
  const products = data?.map((product) => (
    <Link href={`/product/${product.id}`} key={product.id}>
      <section
        data-test={`${product.id}-individual-product-card`}
        className="flex justify-center m-[2rem] "
      >
        <div className="flex-col justify-center max-w-64 h-80 ">
          <Image
            data-test={`${product.id}-image`}
            src={product.image}
            width={250}
            height={250}
            alt={product.title}
            style={{ objectFit: "contain", maxHeight: "250px" }}
            className="grid justify-center pb-4 h-52 sm:h-56 md:h-72 lg:h-96"
          ></Image>
          <h2 className="font-semibold line-clamp-2">{product.title}</h2>
          <p>${product.price}</p>

          {/* 
          Will need to update access to rates and ratings
           */}
          <p>
            Rating: {product.rate.rating} <span>({product.rate.count})</span>
          </p>
        </div>
      </section>
    </Link>
  ));
  return (
    <div className="grid grid-cols-1 gap-0 p-0 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 ">
      {products}
    </div>
  );
}
