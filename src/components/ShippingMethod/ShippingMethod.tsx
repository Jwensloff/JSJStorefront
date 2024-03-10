"use client";
import { ShoppingCartProps } from "@/src/types";
import { useState } from "react";

export default function ShippingMethod({
  data,
}: {
  data: ShoppingCartProps[];
}) {
  const [shippingOption, setShippingOption] = useState({
    shippingMethod: "",
    price: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, dataset } = e.target;
    setShippingOption({
      shippingMethod: value,
      price: parseFloat(dataset.price || ""),
    });
  };

  const subtotalNum = data?.reduce(
    (total, product) => (total += product.price * product.quantity),
    0,
  );
  const subtotal = subtotalNum.toFixed(2);
  const tax = (subtotalNum * 0.09).toFixed(2);

  const totalPrice = (
    shippingOption.price +
    subtotalNum +
    subtotalNum * 0.09
  ).toFixed(2);
  return (
    <div className="flex flex-col sticky top-1">
      <form>
        <fieldset>
          <legend className="text-lg font-bold pb-4"> Shipping Method</legend>
          <div className="flex justify-between">
            <span className="flex gap-5">
              <input
                id="no rush"
                name="shipping"
                type="radio"
                value="(7-9 business days)"
                data-price="5.99"
                checked={
                  shippingOption.shippingMethod === "(7-9 business days)"
                }
                onChange={handleChange}
                className="py-1 border-2 border-gray-500 rounded-md "
              />
              <label htmlFor="no rush">No Rush (7-9 business days)</label>
            </span>
            <p>$5.99</p>
          </div>
          <div className="flex justify-between">
            <span className="flex gap-5">
              <input
                id="standard"
                name="shipping"
                type="radio"
                value="(3-5 business days)"
                data-price="9.99"
                checked={
                  shippingOption.shippingMethod === "(3-5 business days)"
                }
                onChange={handleChange}
                className="py-1 border-2 border-gray-500 rounded-md "
              />
              <label htmlFor="standard">Standard (3-5 business days)</label>
            </span>
            <p>$9.99</p>
          </div>
          <div className="flex justify-between">
            <span className="flex gap-5">
              <input
                id="express"
                name="shipping"
                type="radio"
                value="(1-2 business days)"
                data-price="19.99"
                checked={
                  shippingOption.shippingMethod === "(1-2 business days)"
                }
                onChange={handleChange}
                className="py-1 border-2 border-gray-500 rounded-md "
              />
              <label htmlFor="express">Express (1-2 business days)</label>
            </span>
            <p>$19.99</p>
          </div>
        </fieldset>
      </form>
      <section className="sticky top-2 py-1 px-4 w-full h-full flex flex-col gap-4 border-2 border-gray-500 rounded-md ">
        <h2 className="font-bold pb-2">Order Summary</h2>
        <div className="flex flex-row gap-8 justify-between">
          <p>Subtotal</p>
          <p>${subtotal}</p>
        </div>
        <div className="flex flex-row gap-8 justify-between">
          <p>Shipping {shippingOption.shippingMethod}</p>
          <p>${shippingOption.price}</p>
        </div>
        <div className="flex flex-row gap-8 justify-between">
          <p>Sales Tax</p>
          <p>${tax}</p>
        </div>
        <div className="flex flex-row gap-8 pt-4 border-t-4 border-gray-500 justify-between">
          <p>Total</p>
          <p>{totalPrice}</p>
        </div>
      </section>
    </div>
  );
}
