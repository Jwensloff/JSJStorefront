"use client";
import Image from "next/image";
import type { ProductTypes } from "@/src/types";
import Link from "next/link";
import { Suspense } from "react";

interface ProductGridProps {
  data: ProductTypes[] | undefined;
}

export default function ProductGrid({ data }: ProductGridProps) {
  const products = data?.map((product) => (
    <Link href={`/product/${product.id}`} key={product.id}>
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
  return (
    <div className="grid grid-cols-4 gap-8 p-5 h-[60vh]">
      <Suspense>{products}</Suspense>
    </div>
  );
}
