"use client";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export function Search() {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClearSearch = () => {
    setSearch("");
  };

  return (
    <div className="border-2 border-slate-700 rounded ">
      <div className="flex items-center p-1">
        <label className="sr-only" htmlFor="search">
          Search Products here
        </label>
        <input
          id="search"
          type="text"
          aria-label="search products here"
          placeholder="Search products..."
          value={search}
          onChange={handleChange}
          className="w-96 text-xl outline-none"
        />
        {search && (
          <button
            aria-label="clear search"
            className="pr-2 hover:text-sky-600"
            onClick={handleClearSearch}
          >
            <FontAwesomeIcon size="lg" icon={faXmark} />
          </button>
        )}
        <Link
          aria-label="search"
          href={`/search-results/${search}`}
          className=" hover:text-sky-600"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
      </div>
    </div>
  );
}
