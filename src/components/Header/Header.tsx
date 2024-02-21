"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Search } from "../Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

export default function Header() {
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
    <header className="flex flex-col gap-3 sm:gap-1 sm:flex-row justify-between items-center text-center w-screen border border-black">
      <Link href={"/"} className="text-5xl lg:text-7xl bg-gray-custom p-5">
        JSJ
      </Link>
      {!openSidebar && (
        <>
          <ul className="hidden text-xl md:flex space-x-6 lg:text-2xl">
            {categories.map((cat) => (
              <li key={cat.name}>
                <Link
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
      <div className="flex flex-row px-2 items-center gap-2 w-full justify-between sm:px-0 sm:justify-end">
        <Search />
        <div className="flex flex-row ">
          <Link
            href="/shopping-cart"
            className="pr-10 cursor-pointer hover:underline"
          >
            Cart
          </Link>
          <div className="lg:hidden pr-2 cursor-pointer hover:text-blue-900">
            <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
          </div>
          <Sidebar openSidebar={openSidebar} toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </header>
  );
}
