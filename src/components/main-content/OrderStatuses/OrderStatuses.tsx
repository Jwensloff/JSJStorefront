"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function OrderStatus() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/fallback");
  };

  return (
    <div className="h-full flex flex-col justify-evenly">
      <div className="flex justify-center pb-10 sm:pb-0">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-10/12 sm:w-7/12 gap-5 text-sm sm:text-base"
        >
          <div className="relative">
            <input
              id="order number"
              data-test="order-status-number-input"
              placeholder=""
              className="py-2 pl-2 w-full border-2 border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700 text-ellipsis"
            />
            <label
              htmlFor="order number"
              className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
            >
              Order Number
            </label>
          </div>

          <div className="relative">
            <input
              id="E-mail address"
              data-test="order-status-email-input"
              placeholder=""
              className=" py-2 pl-2 border-2 w-full border-gray-500 rounded-md peer  focus:ring-0 focus:border-blue-700 text-ellipsis"
            />
            <label
              className="absolute text-lg scale-75 inset-y-0 px-2 flex items-center pointer-events-none text-gray-600 peer-focus:text-blue-700 peer-focus:-translate-y-6  bg-white transform -translate-y-6 peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:top-0"
              htmlFor="E-mail address"
            >
              E-mail Address
            </label>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row justify-evenly my-6">
            <button
              type="submit"
              data-test="order-status-submit-btn"
              className="p-1 w-full md:w-52 sm:p-2 md:px-3 bg-blue-100 border-blue-500 border-2 rounded-md"
            >
              Order Information
            </button>
            <button
              type="submit"
              data-test="order-status-cancel-btn"
              className="p-1 w-full md:w-52 sm:p-2 md:px-3 bg-red-100 border-red-500 border-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
