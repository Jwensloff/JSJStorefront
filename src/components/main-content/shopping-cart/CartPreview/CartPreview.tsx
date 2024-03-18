"use client";
import { Drawer, Typography, Card, Button } from "@material-tailwind/react";
import Image from "next/image";
import { createClient } from "@/src/utils/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { ShoppingCartProps } from "@/src/types";

interface SidebarProps {
  openSidebar: boolean;
  toggleSidebar: () => void;
  products: ShoppingCartProps[] | null;
}

export default function CartPreview({
  openSidebar,
  toggleSidebar,
  products,
}: SidebarProps) {
  const router = useRouter();
  const handleClick = async (id: number) => {
    const supabase = createClient();
    const { error } = await supabase
      .from("shopping_cart")
      .delete()
      .eq("id", id);

    if (error) {
      throw error;
    }

    router.refresh();
    // toggleSidebar()
  };

  const cartTotal = products?.reduce(
    (acc: number, product: ShoppingCartProps) => {
      return acc + product.price * product.quantity;
    },
    0,
  );

  const createCart = (shoppinCartItems: ShoppingCartProps[]) => {
    return (
      <Drawer
        size={500}
        placement="right"
        placeholder="drawer"
        open={openSidebar}
        onClose={toggleSidebar}
        className="p-4 w-fulll overflow-y-auto"
      >
        <Typography
          placeholder="Shopping Cart"
          variant="h5"
          color="blue-gray"
          className="text-xl text-center bg-black text-white"
        >
          Shopping Cart
        </Typography>
        <Card placeholder="card" className="w-full pt-10">
          {shoppinCartItems.length ? (
            <div
              tabIndex={0}
              className="w-full h-96 overflow-scroll flex flex-col gap-5"
            >
              {shoppinCartItems.map((product: ShoppingCartProps) => (
                <div
                  key={product.id}
                  className="w-full pb-5 pr-5 flex flex-row justify-evenly border-b-4 border-black border-double"
                >
                  <div className=" w-full  items-center flex flex-row justify-between gap-5">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={90}
                      height={75}
                      style={{ objectFit: "contain", maxWidth: "90px" }}
                      className="ml-3"
                    />
                    <div className="w-full flex flex-col items-center gap-2">
                      <Typography
                        placeholder="product name"
                        variant="h6"
                        color="blue-gray"
                        className="text-md text-center"
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
                      <p
                        className="hover:underline cursor-pointer text-red-900"
                        onClick={() => handleClick(product.id)}
                      >
                        Remove
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">Your cart is currently empty.</p>
          )}
          <p className="text-2xl mt-5 font-bold text-center">
            Subtotal - ${cartTotal?.toFixed(2)}
          </p>
          <div className="flex flex-col mt-10 mb-10">
            <a href="/shopping-cart">
              <Button
                className="w-full bg-blue-gray-700"
                placeholder={undefined}
              >
                Go to Cart
              </Button>
            </a>
            <Button
              className="w-full mt-2"
              onClick={toggleSidebar}
              placeholder={undefined}
              variant="outlined"
            >
              Continue Shopping
            </Button>
          </div>
        </Card>
      </Drawer>
    );
  };

  return <div>{products && createCart(products)}</div>;
}
