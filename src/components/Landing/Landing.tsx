import { ProductTypes } from "../../types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
  Carousel,
} from "../../tailwind";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function Landing({ products }: { products: ProductTypes[] }) {
  const productsWithGold = products?.filter((product: { title: string }) =>
    product.title.includes("Gold"),
  );

  const highestRatedProducts = products?.filter((product) => {
    return product.rate.rating <= 4;
  });

  const productsUnder100 = products?.filter(
    (product: { price: number }) => product.price < 100,
  );

  const createProductCard = (products: ProductTypes[]) => {
    return products.map((product) => (
      <div
        key={product.id}
        className="flex items-center flex-col jusfity-center"
      >
        <Card
          data-test={`${product.id}-card`}
          className="h-5/6 w-[100%] sm:w-96 md:w-[70%]"
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
          <CardFooter className="pt-0" placeholder={undefined}>
            <Button
              data-test={`${product.id}-card-button`}
              ripple={false}
              fullWidth={true}
              className="bg-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              placeholder={undefined}
            >
              Shop
            </Button>
          </CardFooter>
        </Card>
      </div>
    ));
  };

  const goldItems = createProductCard(productsWithGold);
  const saleItems = createProductCard(productsUnder100);
  const highestRatedItems = createProductCard(highestRatedProducts);

  function createCarousel(items) {
    return (
      <Carousel
        className="rounded-xl bg-gray-600 py-[1rem] w-[90%] lg:w-[50%]"
        transition={{ duration: 0.5 }}
        loop={true}
        placeholder={undefined}
      >
        {items}
      </Carousel>
    );
  }

  return (
    <>
      <div className="w-full">
        <div className=" bg-gray-custom p-[1rem] mt-20 mb-20 ml-5 mr-5 flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-20 lg:gap-60">
          <Link
            data-test="top-rated-link"
            href={`/top-rated`}
            className="text-2xl xs:text-4xl  z-10 text-black hover:underline "
          >
            Shop Top Rated {"->"}
          </Link>
          {highestRatedProducts && createCarousel(highestRatedItems)}
        </div>
        <div className="mt-20 mb-20 ml-5 mr-5 flex flex-col-reverse md:flex-row justify-evenly items-center gap-10 md:gap-20 lg:gap-60">
          {productsUnder100 && createCarousel(saleItems)}
          <Link
            data-test="shop-sale-link"
            href={`/sale`}
            className="text-2xl xs:text-4xl text-black z-10 hover:underline"
          >
            {"<-"} Shop Sale Items
          </Link>
        </div>
        <div className="bg-gray-custom p-[1rem] mt-20 mb-20 ml-5 mr-5 flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-20 lg:gap-60">
          <Link
            data-test="shop-gold-link"
            href={`/gold`}
            className="text-2xl xs:text-4xl z-10 text-black hover:underline"
          >
            Shop Gold {"->"}
          </Link>
          {productsWithGold && createCarousel(goldItems)}
        </div>
      </div>
    </>
  );
}
