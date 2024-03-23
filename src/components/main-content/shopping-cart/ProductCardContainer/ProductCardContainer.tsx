import { ShoppingCartProps } from "@/src/app/lib/definitions";
import { Card, Select, Typography, Option } from "@material-tailwind/react";
import Image from "next/image";

interface ProductCardContainerProps {
  shoppingCartItems: ShoppingCartProps[] | null;
  handleClick?: (id: number) => Promise<void>;
  handleQtyUpdate?: (id: number, qty: number) => Promise<void>;
  setqty?: React.Dispatch<React.SetStateAction<number | null>>;
  qty?: number | null;
}

export default function ProductCardContainer({
  shoppingCartItems,
  handleClick,
  handleQtyUpdate,
  setqty,
  qty,
}: ProductCardContainerProps) {
  const createProductCard = (products: ShoppingCartProps[] | null) => {
    const sortedData = products?.sort((a, b) => a.id - b.id);
    return (
      <Card placeholder="card" className="min-h-full w-full">
        <div className="w-full h-auto flex flex-col gap-5 p-1 md:p-5">
          {sortedData?.map((product: ShoppingCartProps) => (
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
                <div className="w-full flex flex-col gap-10 ">
                  <Typography
                    placeholder="product name"
                    variant="h6"
                    color="blue-gray"
                    className="text-md sm:text-xl text-center"
                  >
                    {product.title}
                  </Typography>
                  <div className="flex flex-col md:flex-row items-center justify-evenly">
                    <Typography
                      placeholder="product price"
                      variant="h6"
                      color="blue-gray"
                      className="text-md flex gap-2"
                    >
                      Price:{" "}
                      <span>
                        {" "}
                        <Typography
                          placeholder="product price"
                          className="text-lg"
                        >
                          ${product.price.toFixed(2)}
                        </Typography>
                      </span>
                    </Typography>
                    {product.size ? (
                      <Typography
                        placeholder="product name"
                        variant="h6"
                        color="blue-gray"
                        className="text-md flex gap-2"
                      >
                        Size:{" "}
                        <span>
                          {" "}
                          <Typography placeholder="product size">
                            {product.size.charAt(0).toUpperCase() +
                              product.size.slice(1)}
                          </Typography>
                        </span>
                      </Typography>
                    ) : (
                      <Typography
                        placeholder="product name"
                        variant="h6"
                        color="blue-gray"
                        className="text-md flex gap-2"
                      >
                        Size:{" "}
                        <span>
                          {" "}
                          <Typography placeholder="product size">
                            N/A
                          </Typography>
                        </span>
                      </Typography>
                    )}
                    <Typography
                      placeholder="product name"
                      variant="h6"
                      color="blue-gray"
                      className="text-md text-right flex gap-2"
                    >
                      Quantity:{" "}
                      <span>
                        {" "}
                        <Typography placeholder="quantity">
                          {product.quantity}
                        </Typography>
                      </span>
                    </Typography>
                  </div>
                  {handleQtyUpdate && setqty && handleClick && (
                    <>
                      <div className="w-full flex flex-col md:flex-row justify-center gap-5 items-center">
                        <div className="flex flex-col md:flex-row items-center">
                          <Select
                            size="md"
                            variant="static"
                            label="Update Quantity"
                            placeholder={undefined}
                            onChange={(e) => setqty(e ? Number(e) : null)}
                          >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                          </Select>
                          <button
                            className="hover:underline cursor-pointer"
                            onClick={() =>
                              handleQtyUpdate(product.id, Number(qty))
                            }
                          >
                            Update
                          </button>
                        </div>
                      </div>
                      <p
                        className="hover:underline cursor-pointer text-center text-red-400"
                        onClick={() => handleClick(product.id)}
                      >
                        Remove
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {shoppingCartItems?.length === 0 && (
          <p className="flex justify-center">
            There are no items in your cart.
          </p>
        )}
      </Card>
    );
  };

  return (
    <div className="w-full md:w-[70vw] p-5">
      {createProductCard(shoppingCartItems)}
    </div>
  );
}
