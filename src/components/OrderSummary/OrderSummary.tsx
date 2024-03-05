import { createClient } from "@/src/utils/supabase/supabaseServer";
import React from "react";

export default async function OrderSummary() {
  const supabase = createClient();
  const { data, error } = await supabase.from("shopping_cart").select();

  if (error) {
    throw error;
  }

  const subtotalNum = data?.reduce(
    (total, product) => (total += product.price),
    0,
  );
  const subtotal = subtotalNum.toFixed(2);
  const tax = (subtotal * 0.09).toFixed(2);

  const totalPrice = (subtotalNum + subtotalNum * 0.09 + 9.99).toFixed(2);

  return (
    <main className="flex flex-col px-2 justify-evenly md:flex-row">
      <form>
        <section className="flex flex-col p-4 border-2 border-gray-500 rounded-md">
          <fieldset className="flex flex-col gap-6">
            <legend className="text-lg font-bold pb-4">Delivery</legend>
            <span className="flex flex-col gap-5 md:flex-row justify-between ">
              <div className="relative">
                <input
                  id="first name"
                  placeholder=""
                  className="py-2 pl-2 border-2 w-full md:w-56 lg:w-64 border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
                />
                <label
                  htmlFor="first name"
                  className="absolute text-lg scale-c75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
                >
                  First Name
                </label>
              </div>
              <div className="relative ">
                <input
                  id="last name"
                  placeholder=""
                  className="py-2 pl-2 border-2 w-full md:w-56 lg:w-64 border-gray-500 rounded-md peer bg-transparent focus:ring-0 focus:border-blue-700"
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
              <div className="relative">
                <input
                  id="e-mail address"
                  placeholder=""
                  className=" py-2 pl-2 border-2 w-full md:w-56 lg:w-64 border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
                />
                <label
                  htmlFor="e-mail address"
                  className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
                >
                  E-mail Address
                </label>
              </div>
              <div className="relative">
                <input
                  id="phone number"
                  placeholder=""
                  className=" py-2 pl-2 border-2 w-full md:w-56 lg:w-64 border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
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
              <div className="relative">
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
              <div className="relative">
                <input
                  id="city"
                  placeholder=""
                  className=" py-2 pl-2 border-2 w-full md:w-56 lg:w-64 border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
                />
                <label
                  htmlFor="city"
                  className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
                >
                  City
                </label>
              </div>
              <div className="relative">
                <input
                  id="postal code"
                  placeholder=""
                  className=" py-2 pl-2 border-2 w-full md:w-56 lg:w-64 border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
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
              <div className="relative">
                <input
                  id="country"
                  placeholder=""
                  className=" py-2 pl-2 border-2 w-full md:w-56 lg:w-64 border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
                />
                <label
                  htmlFor="country"
                  className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
                >
                  Country
                </label>
              </div>
              <div className="relative">
                <input
                  id="state or province"
                  placeholder=""
                  className=" py-2 pl-2 border-2 w-full md:w-56 lg:w-64 border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
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
        <section className="flex flex-col p-4 border-2 border-gray-500 rounded-md">
          <fieldset>
            <legend className="text-lg font-bold pb-4"> Shipping Method</legend>
            <div className="flex justify-between">
              <span className="flex flex-row-reverse gap-5">
                <label htmlFor="no rush">No Rush (7-9 business days)</label>
                <input
                  id="no rush"
                  type="radio"
                  className="py-1 border-2 border-gray-500 rounded-md "
                />
              </span>
              <p>$5.99</p>
            </div>
            <div className="flex justify-between">
              <span className="flex flex-row-reverse gap-5">
                <label htmlFor="standard">Standard (3-5 business days)</label>
                <input
                  id="standard"
                  type="radio"
                  className="py-1 border-2 border-gray-500 rounded-md "
                />
              </span>
              <p>$9.99</p>
            </div>
            <div className="flex justify-between">
              <span className="flex flex-row-reverse gap-5">
                <label htmlFor="express">Express (1-2 business days)</label>
                <input
                  id="express"
                  type="radio"
                  className="py-1 border-2 border-gray-500 rounded-md "
                />
              </span>
              <p>$19.99</p>
            </div>
          </fieldset>
        </section>
        <section className="flex flex-col p-4 border-2 border-gray-500 rounded-md">
          <fieldset className="flex flex-col gap-5">
            <legend className="text-lg font-bold pb-4">Payment</legend>

            <div className="relative">
              <input
                id="credit card number"
                placeholder=""
                className="w-full py-2 pl-2 border-2 border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
              />
              <label
                htmlFor="credit card number"
                className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
              >
                Credit Card Number
              </label>
            </div>

            <div className="relative">
              <input
                id="name on card"
                placeholder=""
                className="w-full py-2 pl-2 border-2 border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
              />
              <label
                htmlFor="name on card"
                className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
              >
                Name on card
              </label>
            </div>
            <span className="flex justify-between">
              <div className="relative">
                <input
                  id="expiration month"
                  pattern="[0-9]{2}-[0-9]{2}"
                  type="month"
                  className="py-2 pl-2 border-2 border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
                />
                <label
                  htmlFor="expiration date"
                  className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6"
                >
                  expiration date
                </label>
              </div>
              <div className="relative">
                <input
                  id="CVV"
                  placeholder=""
                  className=" py-2 pl-2 border-2 border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700"
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
      </form>
      <section className="py-1 px-4 border-2 border-gray-500 rounded-md ">
        <h2 className="font-bold pb-2">Order Summary</h2>
        <div className="flex flex-row justify-between">
          <p>Subtotal:</p>
          <p>${subtotal}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Shipping (3-5 business days)</p>
          <p>$9.99</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Sales Tax:</p>
          <p>${tax}</p>
        </div>
        <p>Discounts</p>
        <div className="flex flex-row justify-between">
          <p>Total</p>
          <p>{totalPrice}</p>
        </div>
      </section>
    </main>
  );
}
