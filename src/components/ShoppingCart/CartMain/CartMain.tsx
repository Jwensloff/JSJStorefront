import { createClient } from "@/src/utils/supabase/supabaseClient";
import { Card, Typography } from "@material-tailwind/react";
import Image from "next/image";
import CartSide from "./CartSide";

export default async function CartMain({ router }: { router: any }) {
  const supabase = createClient();
  const { data: shoppingCartItems, error } = await supabase
    .from("shopping_cart")
    .select("*");

  const cartTotal = shoppingCartItems?.reduce((acc: any, product: any) => {
    return acc + product.price;
  }, 0);

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

  const createProductCard = (products: any) => {
    return (
      <Card placeholder="card" className="min-h-full">
        <div className="w-full h-auto flex flex-col gap-5 p-5">
          {products.map((product: any) => (
            <div
              key={product.id}
              className="w-full min-h-56 max-h-56 pb-5 pr-5 flex flex-row justify-evenly box-border hover:border-t-blue-gray-400 hover:border-t-2"
            >
              <div className=" w-full flex flex-row justify-between gap-5 p-5">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={75}
                />
                <div className="w-full flex flex-col items-center justify-between gap-5 ">
                  <Typography
                    placeholder="product name"
                    variant="h6"
                    color="blue-gray"
                    className="text-xl text-center"
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    placeholder="product price"
                    variant="paragraph"
                    color="blue-gray"
                    className="text-2xl"
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
    <div className="flex w-full min-h-screen">
      <div className="w-[60vw] p-5">{createProductCard(shoppingCartItems)}</div>
      <div className="w-[40vw] p-5">
        <CartSide
          cartTotal={cartTotal}
          totalItems={shoppingCartItems?.length}
        />
      </div>
    </div>
  );
}
