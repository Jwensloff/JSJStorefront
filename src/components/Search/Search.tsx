"use client";
import { useState } from "react";

async function getAllProducts() {
  "use server";
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error(`${res.status}: Failed to fetch all products`);
  }

  return res.json();
}
// search all products
// products are saved somewhere
// getAllProducts- save it into state on main page
// useEffect- user open apps- pass data into
export async function Search() {
  const [search, setSearch] = useState<string>("");
  const allProducts = await getAllProducts();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    setSearch("");
  };

  return (
    <div>
      <label htmlFor="search">Search Products here</label>
      <input
        id="search"
        type="text"
        aria-label="search products here"
        placeholder="Search products..."
        value={search}
        onChange={handleChange}
      />
      <button onClick={handleClick}>X</button>
    </div>
  );
}
