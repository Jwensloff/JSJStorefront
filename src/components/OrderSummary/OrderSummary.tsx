"use client";
import { createClient } from "@/src/utils/supabase/supabaseClient";
import { ChangeEvent, useState } from "react";
import ProductCardContainer from "../ShoppingCart/ProductCardContainer/ProductCardContainer";
import { useRouter } from "next/navigation";
import { ShoppingCartProps } from "@/src/types";

export default function OrderSummary({ data }: { data: ShoppingCartProps[] }) {
  const router = useRouter();

  const [shippingOption, setShippingOption] = useState({
    shippingMethod: "",
    price: 0,
  });

  const [qty, setQty] = useState<number | null>(null);

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
  const handleQtyUpdate = async (
    id: number,
    qty: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const supabase = createClient();
    const { data, error } = await supabase
      .from("shopping_cart")
      .update({ quantity: qty })
      .eq("id", id)
      .select();

    if (error) {
      throw error;
    }
    // const updatedQty = data.map((item) => {
    //   if (item.id === id) {
    //     return { ...item, quantity: qty };
    //   }
    //   return item;
    // });
    // setQty(updatedQty);
    router.refresh();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/fallback");
  };

  return (
    <main className="flex flex-col px-2 sm:px-4 lg:px-8 justify-evenly gap-3 lg:gap-8 md:flex-row">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <section className="flex flex-col p-4 w-full border-2 border-gray-500 rounded-md">
          <fieldset className="flex flex-col gap-6">
            <legend className="text-lg font-bold pb-4">Delivery</legend>
            <span className="flex flex-col gap-5 md:flex-row justify-between ">
              <div className="relative w-full">
                <input
                  required
                  id="first name"
                  placeholder=""
                  className="py-2 pl-2 border-2 w-full border-gray-500 rounded-md peer bg-transparent focus:ring-0 focus:border-blue-700"
                />
                <label
                  htmlFor="first name"
                  className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
                >
                  First Name
                </label>
              </div>
              <div className="relative w-full ">
                <input
                  id="last name"
                  placeholder=""
                  className="py-2 pl-2 border-2 w-full border-gray-500 rounded-md peer bg-transparent focus:ring-0 focus:border-blue-700"
                />
                <label
                  htmlFor="last name"
                  className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
                >
                  Last Name
                </label>
              </div>
            </span>
            <span className="flex flex-col gap-5 md:flex-row justify-between">
              <div className="relative w-full">
                <input
                  id="e-mail address"
                  placeholder=""
                  className=" py-2 pl-2 border-2 w-full border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
                />
                <label
                  htmlFor="e-mail address"
                  className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
                >
                  E-mail Address
                </label>
              </div>
              <div className="relative w-full">
                <input
                  id="phone number"
                  placeholder=""
                  className=" py-2 pl-2 border-2 w-full border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
                />
                <label
                  htmlFor="phone number"
                  className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
                >
                  Phone Number
                </label>
              </div>
            </span>
            <span>
              <div className="relative w-full">
                <input
                  id="street address"
                  placeholder=""
                  className=" py-2 pl-2 border-2 w-full border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
                />
                <label
                  htmlFor="street address"
                  className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
                >
                  Street Address
                </label>
              </div>
            </span>
            <span className="flex flex-col gap-5 md:flex-row justify-between">
              <div className="relative w-full">
                <input
                  id="city"
                  placeholder=""
                  className=" py-2 pl-2 border-2 w-full border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
                />
                <label
                  htmlFor="city"
                  className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
                >
                  City
                </label>
              </div>
              <div className="relative w-full">
                <input
                  id="postal code"
                  placeholder=""
                  className=" py-2 pl-2 border-2 w-full border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
                />
                <label
                  htmlFor="postal code"
                  className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
                >
                  Postal code
                </label>
              </div>
            </span>
            <span className="flex flex-col gap-5 md:flex-row justify-between">
              <div className="relative w-full">
                <input
                  id="country"
                  placeholder=""
                  className=" py-2 pl-2 border-2 w-full border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
                />
                <label
                  htmlFor="country"
                  className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
                >
                  Country
                </label>
              </div>
              <div className="relative w-full">
                <input
                  id="state or province"
                  placeholder=""
                  className=" py-2 pl-2 border-2 w-full border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
                />
                <label
                  htmlFor="state or province"
                  className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
                >
                  State/Province
                </label>
              </div>
            </span>
          </fieldset>
        </section>
        <section className="flex w-full md:w-[60vw] flex-col p-4 border-2 border-gray-500 rounded-md">
          {data.length > 0 && (
            <div className="flex justify-center overflow-y-auto">
              <ProductCardContainer
                shoppingCartItems={data}
                handleClick={handleClick}
                handleQtyUpdate={handleQtyUpdate}
                setqty={setQty}
                qty={qty}
              />
            </div>
          )}
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
        </section>
        <section className="flex flex-col p-4 w-full border-2 border-gray-500 rounded-md">
          <fieldset className="flex flex-col gap-6">
            <legend className="text-lg font-bold pb-4">Payment</legend>

            <div className="relative w-full">
              <input
                id="credit card number"
                placeholder=""
                className=" py-2 pl-2 border-2 w-full border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
              />
              <label
                htmlFor="credit card number"
                className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
              >
                Credit Card Number
              </label>
            </div>

            <div className="relative w-full">
              <input
                id="name on card"
                placeholder=""
                className=" py-2 pl-2 border-2 w-full border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
              />
              <label
                htmlFor="name on card"
                className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
              >
                Name on card
              </label>
            </div>

            <span className="flex flex-col gap-5 md:flex-row justify-between">
              <div className="relative w-full">
                <input
                  id="expiration month"
                  pattern="[0-9]{2}-[0-9]{2}"
                  type="month"
                  className="py-2 pl-2 w-full border-2 border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
                />
                <label
                  htmlFor="expiration date"
                  className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6"
                >
                  expiration date
                </label>
              </div>
              <div className="relative w-full">
                <input
                  id="CVV"
                  placeholder=""
                  className=" py-2 pl-2 w-auto border-2 border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
                />
                <label
                  htmlFor="CVV"
                  className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
                >
                  CVV
                </label>
              </div>
            </span>
          </fieldset>
        </section>
        <button
          type="submit"
          className="self-center p-2 w-full md:w-1/2 text-white bg-black border-2 rounded-md"
        >
          Buy Now
        </button>
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
    </main>
  );
}
