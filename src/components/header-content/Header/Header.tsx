"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Search } from "../Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import ShoppingCartSymbol from "../ShoppingCartSymbol/ShoppingCartSymbol";
import { ShoppingCartProps } from "@/src/app/lib/definitions";

interface HeaderProps {
  dataLength: number;
  products: ShoppingCartProps[] | null;
}

export default function Header({ dataLength, products }: HeaderProps) {
  const pathname = usePathname();
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const categories = [
    {
      name: "Women's",
      link: "/womens",
    },
    {
      name: "Men's",
      link: "/mens",
    },
    {
      name: "Jewelry",
      link: "/jewelry",
    },
  ];

  return (
    <header
      data-test="header"
      className="flex flex-col w-full sm:justify-between"
    >
      <div className="flex flex-row gap-2 pr-1 md:gap-3 md:pr-3">
        <Link
          data-test="header_logo"
          href={"/"}
          className="p-3 text-5xl md:text-7xl bg-gray-custom md:p-5"
        >
          JSJ
        </Link>
        <div className="flex flex-col w-full justify-around">
          <div className="flex flex-row justify-end sm:justify-between">
            {!openSidebar && (
              <>
                <ul className="hidden text-xl sm:flex space-x-6 md:text-2xl">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <Link
                        data-test={cat.name}
                        className={`${pathname === cat.link ? "underline" : ""} font-extrabold cursor-pointer hover:underline`}
                        href={cat.link}
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <div className="flex flex-row justify-end">
              <ShoppingCartSymbol dataLength={dataLength} products={products} />
              <button
                aria-label="open side navigation"
                className="sm:hidden cursor-pointer hover:text-blue-900"
                onClick={toggleSidebar}
              >
                <FontAwesomeIcon className="mr-2" icon={faBars} />
              </button>
            </div>
          </div>
          <Search />
        </div>
      </div>
      <div className="lg:hidden pr-2 cursor-pointer hover:text-blue-900">
        <Sidebar openSidebar={openSidebar} toggleSidebar={toggleSidebar} />
      </div>
    </header>
  );
}
