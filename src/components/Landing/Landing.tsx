// "use server";
import { getLandingProductData } from "@/apiCalls";
import { ProductTypes } from "@/src/types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export async function Landing() {
  const products = await getLandingProductData();

  const highestRatedProduct = products?.reduce(
    (prev: ProductTypes, current: ProductTypes) =>
      prev.rate.rating > current.rate.rating ? prev : current
  );

  const productUnder100 = products?.find(
    (product: { price: number }) => product.price < 100
  );

  const productWithGold = products?.find((product: { title: string }) =>
    product.title.includes("Gold")
  );

  const createProductCard = (product: ProductTypes) => {
    return (
      <>
        <div className="flex items-center flex-col  z-10">
          <Card
            data-test={`${product.id}-card`}
            className="h-5/6 w-auto sm:w-96 transform hover:scale-110"
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
        <div className="absolute h-1/2 w-full align-bottom bg-gray-custom z-0"></div>
      </>
    );
  };

  return (
    <>
      {/* <HeroImage location={"landing"} /> */}
      <div className="pl-2 pr-2">
        <div className="mt-20 mb-20 ml-5 mr-5 flex flex-col md:flex-row  justify-evenly items-center gap-10 md:gap-60">
          <Link
            data-test="top-rated-link"
            href={`/top-rated`}
            className="text-2xl xs:text-4xl  z-10 text-black transform hover:scale-110 "
          >
            Shop Top Rated
          </Link>
          {highestRatedProduct && createProductCard(highestRatedProduct)}
        </div>
        <div className="mt-20 mb-20 ml-5 mr-5 flex flex-col-reverse md:flex-row justify-evenly items-center gap-10 md:gap-60">
          {productUnder100 && createProductCard(productUnder100)}
          <Link
            data-test="shop-sale-link"
            href={`/sale`}
            className="text-2xl xs:text-4xl text-black z-10 transform hover:scale-110"
          >
            Shop Sale Items
          </Link>
        </div>
        <div className="mt-20 mb-20 ml-5 mr-5 flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-60">
          <Link
            data-test="shop-gold-link"
            href={`/gold`}
            className="text-2xl xs:text-4xl z-10 text-black transform hover:scale-110"
          >
            Shop Gold
          </Link>
          {productWithGold && createProductCard(productWithGold)}
        </div>
      </div>
    </>
  );
}
