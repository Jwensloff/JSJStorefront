import { ShoppingCartProps } from "@/src/types";
import { Card, Typography } from "@material-tailwind/react";
import Image from "next/image";

interface ProductCardContainerProps {
  shoppingCartItems: ShoppingCartProps[] | null;
  handleClick: (id: number) => Promise<void>;
}

export default function ProductCardContainer({
  shoppingCartItems,
  handleClick,
}: ProductCardContainerProps) {
  const createProductCard = (products: ShoppingCartProps[] | null) => {
    return (
      <Card placeholder="card" className="min-h-full w-full">
        <div className="w-full h-auto flex flex-col gap-5 p-1 md:p-5">
          {products?.map((product: ShoppingCartProps) => (
            <div
              key={product.id}
              className="w-full box-border hover:border-t-blue-gray-400 hover:border-t-2"
            >
              <div className=" w-full flex flex-col sm:flex-row justify-between gap-5 p-1 sm:p-5">
                <div className="self-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={75}
                    style={{ objectFit: "contain", maxWidth: "100px" }}
                    className="w-14 xs:w-24 sm:w-28"
                  />
                </div>
                <div className="w-full flex flex-col items-center justify-between gap-5 ">
                  <Typography
                    placeholder="product name"
                    variant="h6"
                    color="blue-gray"
                    className="text-md sm:text-xl text-center"
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    placeholder="product price"
                    variant="paragraph"
                    color="blue-gray"
                    className="text-md sm:text-2xl"
                  >
                    ${product.price.toFixed(2)}
                  </Typography>
                  <p
                    className="hover:underline cursor-pointer text-right"
                    onClick={() => handleClick(product.id)}
                  >
                    Remove
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    );
  };

  return (
    <div className="w-full md:w-[60vw] p-5">
      {createProductCard(shoppingCartItems)}
    </div>
  );
}