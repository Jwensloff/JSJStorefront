import { Button, Card, Typography } from "@material-tailwind/react";

export default async function CartSide({
  cartTotal,
  totalItems,
}: {
  cartTotal: any;
  totalItems: any;
}) {
  const { price } = cartTotal;

  const createCartSide = (amount: number, totalItems: number) => {
    return (
      <Card
        placeholder="card"
        className="min-h-full flex justify-start items-center"
      >
        <Typography
          placeholder="summary"
          variant="h2"
          color="blue-gray"
          className="font-bold mt-5"
        >
          Summary
        </Typography>
        <div className="w-full flex flex-row justify-between pl-5 pr-5 mt-10 border-b-2 border-b-black pb-10 border-t-2 border-t-black pt-10">
          <Typography
            placeholder="product price"
            variant="paragraph"
            color="blue-gray"
            className="text-2xl font-bold"
          >
            Subtotal{" "}
            <span className="text-xs align-middle font-thin">
              ({totalItems} items)
            </span>
          </Typography>

          <Typography
            placeholder="product price"
            variant="paragraph"
            color="blue-gray"
            className="text-xl"
          >
            ${amount?.toFixed(2)}
          </Typography>
        </div>
        <a href="/checkout" className="mt-10 w-full">
          <Button
            placeholder="proceed to checkout"
            color="blue-gray"
            className="w-full"
          >
            Proceed to Checkout
          </Button>
        </a>
        <a href="/" className="mt-2 w-full">
          <Button
            placeholder="continue shopping"
            variant="outlined"
            className="w-full"
          >
            Continue Shopping
          </Button>
        </a>
        <Typography
          placeholder="policy"
          variant="paragraph"
          color="blue-gray"
          className="text-xs mt-10 p-5"
        >
          *To ensure the checkout process is transparent, please note that
          displayed prices are estimates and may not reflect final costs.
          Applicable taxes will be calculated and added to your order based on
          your shipping address at checkout. We offer a variety of shipping
          options with associated costs and estimated delivery times, which you
          can review during checkout.
        </Typography>
      </Card>
    );
  };

  return <>{createCartSide(cartTotal, totalItems)}</>;
}
