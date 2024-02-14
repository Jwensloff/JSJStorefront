const getProductData = async (id: number) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!response.ok) {
    throw new Error("Oops, something went wrong");
  }

  return response.json();
};

export default async function page({ params }: { params: { id: number } }) {
  const { id } = params;
  const product = await getProductData(id);

  return <div>{product?.title}</div>;
}
