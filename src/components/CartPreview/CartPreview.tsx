"use client";
import { Drawer, Typography, Card, Button } from "@material-tailwind/react";
import Image from "next/image";
import { createClient } from "@/src/utils/supabase/supabaseClient";
import { useRouter } from "next/navigation";

interface SidebarProps {
  openSidebar: boolean;
  toggleSidebar: () => void;
  products: any;
}

export default function CartPreview({
  openSidebar,
  toggleSidebar,
  products,
}: SidebarProps) {
  const router = useRouter();
  const handleClick = async (id: any) => {
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

  const cartTotal = products.reduce((acc: any, product: any) => {
    return acc + product.price;
  }, 0);

  const createCart = (shoppinCartItems: any) => {
    return (
      <Drawer
        placement="right"
        placeholder="drawer"
        open={openSidebar}
        onClose={toggleSidebar}
        className="p-4 w-[100vw]"
      >
        <div className="mb-6 flex items-center break-words gap-6">
          <Typography
            placeholder="Shop By Department"
            variant="h5"
            color="blue-gray"
            className="text-md sm:text-lg"
          >
            Shopping Cart
          </Typography>
        </div>
        <Card
          placeholder="card"
          className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-1 shadow-xl shadow-blue-gray-900/5"
        >
          <div className="flex flex-col gap-5">
            {shoppinCartItems.map((product: any) => (
              <div key={product.id} className="flex flex-row justify-between">
                <div className="flex flex-row gap-5">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={75}
                    height={40}
                  />
                  <div className="flex flex-col gap-5">
                    <Typography
                      placeholder="product name"
                      variant="h6"
                      color="blue-gray"
                      className="text-sm sm:text-md"
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      placeholder="product price"
                      variant="paragraph"
                      color="blue-gray"
                      className="text-sm sm:text-md"
                    >
                      ${product.price.toFixed(2)}
                    </Typography>
                    <p
                      className="hover:underline cursor-pointer"
                      onClick={() => handleClick(product.id)}
                    >
                      Remove
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full h-1 bg-black"></div>
            <p className="font-bold text-right">
              Subtotal - ${cartTotal.toFixed(2)}
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <Button
              className="w-full"
              onClick={toggleSidebar}
              placeholder={undefined}
            >
              Continue Shopping
            </Button>
            <a href="/shopping-cart">
              <Button className="w-full" color="blue" placeholder={undefined}>
                Go to Cart
              </Button>
            </a>
          </div>
        </Card>
      </Drawer>
    );
  };

  return <div>{products && createCart(products)}</div>;
}
