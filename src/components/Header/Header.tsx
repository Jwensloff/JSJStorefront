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
    <header className="flex flex-row sm:justify-between  w-screen border border-black">
      <div className="flex flex-row w-screen gap-2 pr-1 md:gap-3 md:pr-3">
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
              <div className="sm:hidden cursor-pointer hover:text-blue-900">
                <FontAwesomeIcon
                  icon={faBars}
                  onClick={toggleSidebar}
                  // className="md:hidden"
                />
              </div>
            </div>
          </div>
          <Search />
        </div>
      </div>
      {/* <div className="flex flex-row px-2 items-center gap-2 w-full justify-between sm:px-0 sm:justify-end"> */}

      <div className="lg:hidden pr-2 cursor-pointer hover:text-blue-900">
        <Sidebar openSidebar={openSidebar} toggleSidebar={toggleSidebar} />
      </div>
      {/* </div> */}
    </header>
    // <header className="flex flex-col gap-3 sm:gap-1 sm:flex-row justify-between items-center text-center w-screen border border-black">
    //   <Link href={"/"} className="text-5xl lg:text-7xl bg-gray-custom p-5">
    //     JSJ
    //   </Link>
    //   {!openSidebar && (
    //     <>
    //       <ul className="hidden text-xl md:flex space-x-6 lg:text-2xl">
    //         {categories.map((cat) => (
    //           <li key={cat.name}>
    //             <Link
    //               className={`${pathname === cat.link ? "underline" : ""} font-extrabold cursor-pointer hover:underline`}
    //               href={cat.link}
    //             >
    //               {cat.name}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </>
    //   )}
    //   <div className="flex flex-row px-2 items-center gap-2 w-full justify-between sm:px-0 sm:justify-end">
    //     <Search />
    //     <div className="flex flex-row ">
    //       <Link
    //         href="/shopping-cart"
    //         className="pr-10 cursor-pointer hover:underline"
    //       >
    //         Cart
    //       </Link>
    //       <div className="lg:hidden pr-2 cursor-pointer hover:text-blue-900">
    //         <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
    //       </div>
    //       <Sidebar openSidebar={openSidebar} toggleSidebar={toggleSidebar} />
    //     </div>
    //   </div>
    // </header>
  );
}
