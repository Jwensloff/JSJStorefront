"use client";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Search() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClearSearch = () => {
    setSearch("");
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/search-results/${search}`);
      handleClearSearch();
    }
  };

  const handleSearch = () => {
    router.push(`/search-results/${search}`);
    handleClearSearch();
  };

  return (
    <div data-test="search" className="border-2 border-slate-700 rounded ">
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
          onKeyDown={handleEnterKeyPress}
          className="w-full text-lg md:text-xl outline-none"
        />
        {search && (
          <button
            aria-label="clear search"
            className="pr-2 hover:text-blue-900"
            onClick={handleClearSearch}
          >
            <FontAwesomeIcon size="lg" icon={faXmark} />
          </button>
        )}
        <button
          data-test="search-icon"
          aria-label="search"
          onClick={handleSearch}
          className="hover:text-blue-900"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
}
