import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer, Typography, Card } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  openSidebar: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ openSidebar, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();
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
    <>
      <Drawer
        placement="right"
        placeholder="drawer"
        open={openSidebar}
        onClose={toggleSidebar}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography
            placeholder="Shop By Department"
            variant="h5"
            color="blue-gray"
          >
            Shop By Department
          </Typography>
          <FontAwesomeIcon icon={faClose} onClick={toggleSidebar} />
        </div>
        <Card
          placeholder="card"
          className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-1 shadow-xl shadow-blue-gray-900/5"
        >
          <ul className="flex-col text-left text-2xl">
            {categories.map((cat) => (
              <li key={cat.name} className="py-2">
                <Link
                  className={`${pathname === cat.link ? "underline" : ""} font-extrabold cursor-pointer hover:underline`}
                  href={cat.link}
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      </Drawer>
    </>
  );
}
