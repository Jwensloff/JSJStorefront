import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "@material-tailwind/react";
import { useState } from "react";
import CartPreview from "../../main-content/shopping-cart/CartPreview/CartPreview";
import { ShoppingCartProps } from "@/src/app/lib/definitions";

interface HeaderProps {
  dataLength: number;
  products: ShoppingCartProps[];
}

export default function ShoppingCartSymbol({
  dataLength,
  products,
}: HeaderProps) {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="pt-3 md:pt-1 pr-5">
      <Badge
        aria-label="number of items in cart"
        className="text-[10px] sm:text-xs py-0 min-w-0 min-h-0 sm:min-h-5 sm:min-w-5 "
        content={dataLength}
      >
        <FontAwesomeIcon
          data-test="shopping-cart"
          aria-label="shopping cart"
          className="text-xl sm:text-2xl md:text-3xl"
          icon={faCartShopping}
          onClick={toggleSidebar}
          cursor={"pointer"}
        />
      </Badge>
      <CartPreview
        openSidebar={openSidebar}
        toggleSidebar={toggleSidebar}
        products={products}
      />
    </div>
  );
}
