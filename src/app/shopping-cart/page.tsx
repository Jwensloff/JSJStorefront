import CartMain from "../../components/main-content/shopping-cart/CartMain/CartMain";
import { getShoppingCartItems } from "../lib/data";

export default async function ShoppingCart() {
  const data = await getShoppingCartItems();

  return (
    <>
      <CartMain data={data} />
    </>
  );
}
