"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Search } from "../Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar";
import { useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const drawerRef = useRef(null);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      toggleSidebar();
    }
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
    <header className="flex flex-col w-full sm:justify-between">
      <div className="flex flex-row gap-2 pr-1 md:gap-3 md:pr-3">
        <Link
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
            <div className="flex flex-row gap-5 justify-end">
              <Link
                href="/shopping-cart"
                className="cursor-pointer hover:underline"
              >
                Cart
              </Link>
              <nav
                onKeyDown={handleKeyDown}
                tabIndex={0}
                className="sm:hidden cursor-pointer hover:text-blue-900"
              >
                <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
                <div className="lg:hidden pr-2 cursor-pointer hover:text-blue-900">
                  <Sidebar
                    aria-expanded="true"
                    openSidebar={openSidebar}
                    toggleSidebar={toggleSidebar}
                  />
                </div>
              </nav>
            </div>
          </div>
          <Search />
        </div>
      </div>
    </header>
  );
}
