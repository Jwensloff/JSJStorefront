import { Rating, Select, Option, Button } from "../../../../tailwind";
import Image from "next/image";
import CartButton from "../CartButton";
import { createClient } from "../../../../utils/supabase/supabaseClient";

export default async function Product({ params }: { params: { id: string } }) {
  const supabase = createClient();

  const { data: allProducts } = await supabase.from("products").select("*");

  const singleProduct = allProducts?.find(
    (product) => product.id === Number(params.id),
  );
  const formattedDescription = singleProduct?.description
    .split(/,|\/|\./)
    .filter(Boolean);

  const roundRating = (num: number) => {
    return Math.round(num);
  };

  const roundedRating = roundRating(singleProduct.rate.rating);

  const productDisplay = (
    <div className="lg:flex lg:flex-row sm:flex sm:flex-col sm:items-center  gap-40 m-10 w-fit">
      <Image
        width={320}
        height={320}
        src={singleProduct.image}
        alt={singleProduct.title}
      />
      <div className="flex-col space-y-10 w-auto">
        <h2 className="text-4xl font-bold">{singleProduct.title}</h2>
        <div className="flex">
          <div className="flex flex-row items-center gap-1 ">
            <p className="font-bold text-4xl ">
              ${singleProduct.price.toFixed(2)}
            </p>
            <div className="border border-black h-full m-1"></div>
            <div className="border border-black h-full m-1"></div>
            <Rating
              value={roundedRating}
              placeholder={undefined}
              unratedColor="blue"
              ratedColor="blue"
              readonly
            />
            <p>
              {roundedRating}/5{" "}
              <span className="text-xs italic underline">
                {singleProduct.rate.count} Customer Review&apos;s
              </span>
            </p>
          </div>
        </div>
        <div className="border border-black w-full m-1"></div>
        <div className="space-y-10">
          {singleProduct.category !== "jewelery" && (
            <Select
              variant="static"
              label="Select Size"
              placeholder={undefined}
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
          <Select variant="static" label="Quantity" placeholder={undefined}>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
          </Select>
        </div>
        <div className="space-x-5 flex">
          {/* <a href="/shopping-cart"> */}
          <CartButton
            id={singleProduct.id}
            title={singleProduct.title}
            price={singleProduct.price}
            image={singleProduct.image}
          />
          {/* </a> */}
          <a>
            <Button
              size="lg"
              color="gray"
              variant="outlined"
              placeholder={undefined}
            >
              Continue Shopping
            </Button>
          </a>
        </div>
        <ul>
          {formattedDescription.map((item: string, index: number) => (
            <li key={index} className="list-disc list-inside">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex flex-row justify-evenly">{productDisplay}</div>
    </div>
  );
}
