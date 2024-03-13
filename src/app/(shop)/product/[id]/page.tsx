import { Rating } from "../../../../tailwind";
import Image from "next/image";
import CartButton from "../CartButton";
import { createClient } from "../../../../utils/supabase/supabaseClient";

export default async function Product({ params }: { params: { id: string } }) {
  const supabase = createClient();

  const { data: allProducts } = await supabase.from("products").select("*");
  const { data: shoppingCart } = await supabase
    .from("shopping_cart")
    .select("*");

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
    <div className="m-5 sm:ml-[10%] sm:mr-[10%] w-full">
      <div className="w-full flex justify-center">
        <Image
          width={320}
          height={320}
          src={singleProduct.image}
          alt={singleProduct.title}
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
      <div className="flex-col space-y-10 w-auto">
        <h2 className="text-4xl text-center font-bold">
          {singleProduct.title}
        </h2>
        <div className="flex w-full">
          <div className="w-full flex flex-col justify-center items-center sm:flex-row gap-1 ">
            <p className="font-bold text-4xl ">
              ${singleProduct.price.toFixed(2)}
            </p>
            <div className="invisible sm:visible sm:border sm:border-black sm:h-full sm:m-1"></div>
            <div className="invisible sm:visible sm:border sm:border-black sm:h-full sm:m-1"></div>
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
        <div className="flex flex-col md:flex-row justify-center">
          <CartButton singleProduct={singleProduct} cart={shoppingCart} />
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

  return <div className="flex">{productDisplay}</div>;
}
