"use client";
import { Drawer, Typography, Card, Button } from "@material-tailwind/react";
import Image from "next/image";
import { createClient } from "@/src/utils/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { ShoppingCartProps } from "@/src/types";

interface SidebarProps {
  openSidebar: boolean;
  toggleSidebar: () => void;
  products: {
    id: number;
    title: string;
    price: number;
    image: string;
  }[];
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
  };

  const cartTotal = products?.reduce(
    (acc: number, product: ShoppingCartProps) => {
      return acc + product.price;
    },
    0,
  );

  const createCart = (shoppinCartItems: any) => {
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
          <div className="w-full h-96 overflow-scroll flex flex-col gap-5">
            {shoppinCartItems.map((product: ShoppingCartProps) => (
              <div
                key={product.id}
                className="w-full pb-5 pr-5 flex flex-row justify-evenly border-b-4 border-black border-double"
              >
                <div className=" w-full flex flex-row justify-between gap-5">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={75}
                  />
                  <div className="w-full flex flex-col gap-5">
                    <Typography
                      placeholder="product name"
                      variant="h6"
                      color="blue-gray"
                      className="text-md text-right"
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      placeholder="product price"
                      variant="paragraph"
                      color="blue-gray"
                      className="text-md font-bold text-right"
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
          <div className="w-full h-1 bg-black mt-14"></div>
          <p className="text-3xl font-bold text-center">
            Subtotal - ${cartTotal.toFixed(2)}
          </p>
          <div className="w-full h-1 bg-black"></div>
          <div className="flex flex-col mt-10 mb-10">
            <a href="/shopping-cart">
              <Button
                className="w-full"
                color="blue-gray"
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