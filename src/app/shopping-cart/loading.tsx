import ProductCardContainerSkeleton from "@/src/components/ShoppingCart/ProductCardContainer/ProductCardContainerSkeleton";

export default function Loading() {
  return (
    <div className="flex flex-col md:flex-row animate-pulse">
      <ProductCardContainerSkeleton />
      <section className="h-[50vh]  bg-blue-gray-100 flex flex-col gap-4 p-4 w-full border-2 border-gray-500 rounded-md">
        <div className="bg-blue-gray-300 self-center py-3 pl-2 border-2 w-1/3 border-gray-500 rounded-md  "></div>
        <span>
          <div className="bg-blue-gray-300 py-10 pl-2 border-2 w-full border-gray-500 rounded-md  "></div>
        </span>
        <span>
          <div className="bg-blue-gray-300 py-4 pl-2 border-2 w-full border-gray-500 rounded-md  "></div>
        </span>
        <span>
          <div className="bg-blue-gray-300 py-4 pl-2 border-2 w-full border-gray-500 rounded-md  "></div>
        </span>
        <div className="bg-blue-gray-300 self-center py-12 pl-2 border-2 w-1/2 border-gray-500 rounded-md  "></div>
      </section>
    </div>
  );
}
