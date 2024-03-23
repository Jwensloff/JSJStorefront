import { ProductTypes } from "../../../types";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Carousel,
} from "../../../tailwind";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { filterHighestRated, filterSaleItems } from "@/src/app/lib/utils";

export async function Landing({ products }: { products: ProductTypes[] }) {
  const productsWithGold = products?.filter((product: { title: string }) =>
    product.title.includes("Gold"),
  );

  const highestRatedProducts = filterHighestRated(products)

  const productsUnder20 = filterSaleItems(products)

  const createProductCard = (products: ProductTypes[]) => {
    return products.map((product) => (
      <Link
        data-test={`${product.id}-card-button`}
        href={`/product/${product.id}`}
        key={product.id}
      >
        <div className="flex items-center flex-col jusfity-center">
          <Card
            data-test={`${product.id}-card`}
            className="h-5/6 w-[100%] sm:w-96 md:w-[70%]  hover:shadow-2xl  hover:shadow-blue-gray-900"
            placeholder={undefined}
            color="gray"
          >
            <CardHeader
              shadow={true}
              floated={false}
              className="h-96"
              placeholder={undefined}
            >
              <Image
                data-test={`${product.id}-card-image`}
                src={product.image}
                width={250}
                height={250}
                alt="card-image"
                className="h-full w-full object-scale-down"
              />
            </CardHeader>
            <CardBody placeholder={undefined}>
              <div className="mb-2 flex flex-col items-center justify-between">
                <Typography
                  color="white"
                  className="font-medium"
                  placeholder={undefined}
                >
                  {product.title}
                </Typography>
                <Typography
                  color="white"
                  className="font-medium"
                  placeholder={undefined}
                >
                  ${product.price}
                </Typography>
              </div>
            </CardBody>
          </Card>
        </div>
      </Link>
    ));
  };

  const goldItems = createProductCard(productsWithGold);
  const saleItems = createProductCard(productsUnder20);
  const highestRatedItems = createProductCard(highestRatedProducts);

  return (
    <div className="w-full">
      <div className=" bg-gray-custom p-[1rem] mt-20 mb-20 flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-20 lg:gap-60">
        <Link
          data-test="top-rated-link"
          href={`/top-rated`}
          className="text-2xl xs:text-4xl  z-10 text-black hover:underline "
        >
          Shop Top Rated
        </Link>
        {highestRatedProducts && (
          <Carousel
            className="rounded-xl bg-gray-600 py-[1rem] w-[90%] lg:w-[50%]"
            transition={{ duration: 0.5 }}
            loop={true}
            placeholder={undefined}
          >
            {highestRatedItems}
          </Carousel>
        )}
      </div>
      <div className="mt-20 mb-20 flex flex-col-reverse md:flex-row justify-evenly items-center gap-10 md:gap-20 lg:gap-60">
        {productsUnder20 && (
          <Carousel
            className="rounded-xl bg-gray-600 py-[1rem] w-[90%] lg:w-[50%]"
            transition={{ duration: 0.5 }}
            loop={true}
            placeholder={undefined}
          >
            {saleItems}
          </Carousel>
        )}
        <Link
          data-test="shop-sale-link"
          href={`/sale`}
          className="text-2xl xs:text-4xl text-black z-10 hover:underline"
        >
          Shop Sale Items
        </Link>
      </div>
      <div className="bg-gray-custom p-[1rem] mt-20 mb-20 flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-20 lg:gap-60">
        <Link
          data-test="shop-gold-link"
          href={`/gold`}
          className="text-2xl xs:text-4xl z-10 text-black hover:underline"
        >
          Shop Gold
        </Link>
        {productsWithGold && (
          <Carousel
            className="rounded-xl bg-gray-600 py-[1rem] w-[90%] lg:w-[50%]"
            transition={{ duration: 0.5 }}
            loop={true}
            placeholder={undefined}
          >
            {goldItems}
          </Carousel>
        )}
      </div>
    </div>
  );
}
