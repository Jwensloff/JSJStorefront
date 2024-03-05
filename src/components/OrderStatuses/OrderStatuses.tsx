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
    <div>
      <h1 className="text-center text-lg sm:text-2xl font-bold mb-6">
        View Order Status
      </h1>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-10/12 sm:w-1/2 gap-5 text-sm sm:text-base"
        >
          <label className="sr-only" htmlFor="order number">
            Order Number
          </label>
          <input
            id="order number"
            placeholder="Order Number"
            className="py-2 border-2 border-gray-400 rounded-md pl-2 text-ellipsis"
          />
          <label className="sr-only" htmlFor="E-mail address">
            E-mail Address
          </label>
          <input
            id="E-mail address"
            placeholder="E-mail Address"
            className="py-2 border-2 border-gray-400 rounded-md pl-2 text-ellipsis"
          />
          <div className="flex flex-col gap-4 sm:flex-row justify-evenly my-6">
            <button
              type="submit"
              className="p-1 sm:p-2 md:p-3 bg-blue-100 border-blue-500 border-2 rounded-md"
            >
              Order Information
            </button>
            <button
              type="submit"
              className="p-1 sm:p-2 md:p-3 bg-red-100 border-red-500 border-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
