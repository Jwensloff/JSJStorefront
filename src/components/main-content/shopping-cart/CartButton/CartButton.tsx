"use client";
import { addProduct } from "@/src/app/lib/actions";
import { ShoppingCartProps } from "@/src/app/lib/definitions";
import CartPreview from "@/src/components/main-content/shopping-cart/CartPreview/CartPreview";
import { Button, Select, Option } from "@/src/tailwind";
import { createClient } from "@/src/utils/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";

interface CartButtonProps {
  singleProduct: {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
  };
  cart: ShoppingCartProps[];
}

export default function CartButton({ singleProduct, cart }: CartButtonProps) {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [isFormComplete, setIsFormComplete] = useState<boolean | null>(true);

  const handleSizeChange = (e: string | undefined) => {
    if (e !== undefined) {
      setSelectedSize(e);
      setIsFormComplete(true);
    }
  };

  const handleQuantityChange = (e: string | undefined) => {
    if (e !== undefined) {
      setSelectedQuantity(e);
      setIsFormComplete(true);
    }
  };

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const router = useRouter();
  const handleClick = async (
    singleProduct: CartButtonProps["singleProduct"]
  ) => {
    if (
      (singleProduct.category !== "jewelery" && selectedSize === "") ||
      selectedQuantity === ""
    ) {
      setIsFormComplete(false);
      return;
    }
    const { id, title, price, image } = singleProduct;

    addProduct(id, title, price, image, selectedQuantity, selectedSize);
    router.refresh();
    toggleSidebar();
    setSelectedQuantity("");
    setSelectedSize("");
  };
  return (
    <>
      <div
        data-test="cart-button"
        className="flex flex-col w-full md:w-2/5 gap-5"
      >
        {singleProduct?.category !== "jewelery" && (
          <Select
            data-test={`${singleProduct.id}-size-selection`}
            variant="static"
            label="Select Size"
            placeholder={undefined}
            value={selectedSize}
            onChange={handleSizeChange}
          >
            <Option value="xx-small">XX-Small</Option>
            <Option value="x-small">X-Small</Option>
            <Option value="small">Small</Option>
            <Option value="medium">Medium</Option>
            <Option value="large">Large</Option>
            <Option value="x-large">X-Large</Option>
            <Option value="xx-large">XX-Large</Option>
            <Option value="xxx-large">XXX-Large</Option>
          </Select>
        )}
        <Select
          data-test={`${singleProduct.id}-quantity`}
          variant="static"
          label="Quantity"
          placeholder={undefined}
          value={selectedQuantity}
          onChange={(e) => handleQuantityChange(e)}
        >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
        </Select>
      </div>
      <div className="flex justify-center items-center mt-5 md:mt-0 md:ml-[10%]">
        <Button
          data-test="add-to-cart-btn"
          onClick={() => handleClick(singleProduct)}
          size="lg"
          color="gray"
          variant="outlined"
          placeholder={undefined}
        >
          Add to cart
        </Button>
      </div>
      {!isFormComplete && (
        <p className="text-center flex flex-col justify-center pl-5 text-red-900">
          *Please select size/quantity
        </p>
      )}
      <CartPreview
        openSidebar={openSidebar}
        toggleSidebar={toggleSidebar}
        products={cart}
      />
    </>
  );
}
