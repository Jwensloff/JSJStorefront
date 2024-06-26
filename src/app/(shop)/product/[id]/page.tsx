import { Rating } from "../../../../tailwind";
import Image from "next/image";
import CartButton from "../../../../components/main-content/shopping-cart/CartButton/CartButton";
import { getAllProducts, getShoppingCartItems } from "@/src/app/lib/data";
import { roundRating, formatProductDescription } from "@/src/app/lib/utils";

export default async function Product({ params }: { params: { id: string } }) {
  // should we use getsingleitem here?
  const allProducts = await getAllProducts();

  const shoppingCart = await getShoppingCartItems();

  const singleProduct = allProducts?.find(
    (product) => product.id === Number(params.id),
  );
  const formattedDescription = formatProductDescription(singleProduct);

  const roundedRating = roundRating(singleProduct.rate.rating);

  const productDisplay = (
    <div className="m-5 sm:ml-[10%] sm:mr-[10%] w-full">
      <div className="w-full flex justify-center">
        <Image
          data-test={`${singleProduct.id}-image`}
          width={320}
          height={320}
          src={singleProduct.image}
          alt={singleProduct.title}
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
      <div className="flex-col space-y-10 w-auto">
        <h1
          data-test="single_prod_title"
          className="text-4xl text-center font-bold"
        >
          {singleProduct.title}
        </h1>
        <div className="flex w-full">
          <div className="w-full flex flex-col justify-center items-center sm:flex-row gap-1 ">
            <p data-test="single_prod_cost" className="font-bold text-4xl ">
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
            <p data-test="single_prod_rating">
              {roundedRating}/5{" "}
              <span
                data-test="single_prod_customer_reviews"
                className="text-xs italic underline"
              >
                {singleProduct.rate.count} Customer Review&apos;s
              </span>
            </p>
          </div>
        </div>
        <div className="border border-black w-full m-1"></div>
        <div className="flex flex-col md:flex-row justify-center">
          <CartButton singleProduct={singleProduct} cart={shoppingCart} />
        </div>
        <ul data-test={`${singleProduct.id}-description`}>
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
