import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";

const getLandingProductData = async (productID: string | undefined) => {
  const response = await fetch(`https://fakestoreapi.com/products/${productID}`);

  if (!response.ok) {
    throw new Error("Oops, something went wrong");
  }

  return response.json();
};

export default async function Product({ params }: any) {
  const {id, title, price, description, image, rating} = await getLandingProductData(params.id);

  const formattedDescription = description.split(/,|\//)
  console.log(formattedDescription);

  const productDisplay = (
    <div className="flex ">
      <img src={image} alt={title} />
      <div className="flex-col">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex">
        <p className="font-bold">${price}</p>
        <p>{rating.rate}</p>
      </div>
      <ul>
        {formattedDescription.map((item: string) => (
          <li className="list-disc list-inside">{item}</li>
          ))}
      </ul>
          </div>
    </div>
  )

  return (
    <div className="">
      <Header />
      <div className="w-screen ">{productDisplay}</div>
      <Footer />
    </div>
  )
} 