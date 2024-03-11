export default function OrderSummarySkeleton() {
  return (
    <main className="w-[60vw] animate-pulse flex flex-col px-2 sm:px-4 lg:px-8 justify-evenly gap-3 lg:gap-8 md:flex-row">
      <div>
        <section className=" bg-blue-gray-100 flex flex-col gap-4 p-4 w-full border-2 border-gray-500 rounded-md">
          <div className="bg-blue-gray-300 py-3 pl-2 border-2 w-1/3 border-gray-500 rounded-md  "></div>
          <span className=" flex flex-col gap-5 md:flex-row justify-between ">
            <div className="bg-blue-gray-300 py-4 border-2 w-full border-gray-500 rounded-md  "></div>
            <div className="bg-blue-gray-300 py-4 pl-2 border-2 w-full border-gray-500 rounded-md  "></div>
          </span>
          <span className=" flex flex-col gap-5 md:flex-row justify-between ">
            <div className="bg-blue-gray-300 py-4 pl-2 border-2 w-full border-gray-500 rounded-md  "></div>
            <div className="bg-blue-gray-300 py-4 pl-2 border-2 w-full border-gray-500 rounded-md  "></div>
          </span>
          <span>
            <div className="bg-blue-gray-300 py-4 pl-2 border-2 w-full border-gray-500 rounded-md  "></div>
          </span>
          <span className=" flex flex-col gap-5 md:flex-row justify-between ">
            <div className="bg-blue-gray-300 py-4 pl-2 border-2 w-full border-gray-500 rounded-md  "></div>
            <div className="bg-blue-gray-300 py-4 pl-2 border-2 w-full border-gray-500 rounded-md  "></div>
          </span>
          <span className=" flex flex-col gap-5 md:flex-row justify-between ">
            <div className="bg-blue-gray-300 py-4 pl-2 border-2 w-full border-gray-500 rounded-md  "></div>
            <div className="bg-blue-gray-300 py-4 pl-2 border-2 w-full border-gray-500 rounded-md  "></div>
          </span>
        </section>
        <section className=" bg-blue-gray-100 gap-4 flex w-full md:w-[60vw] flex-col p-4 border-2 border-gray-500 rounded-md">
          <div className="bg-blue-gray-300 justify-center h-52 "></div>
          <div className="bg-blue-gray-300 justify-center h-12 "></div>
        </section>
        <section className="h-56  bg-blue-gray-100 flex flex-col gap-4 p-4 w-full border-2 border-gray-500 rounded-md">
          <div className="bg-blue-gray-300 py-3 pl-2 border-2 w-1/3 border-gray-500 rounded-md  "></div>
          <span>
            <div className="bg-blue-gray-300 py-4 pl-2 border-2 w-full border-gray-500 rounded-md  "></div>
          </span>
          <span>
            <div className="bg-blue-gray-300 py-4 pl-2 border-2 w-full border-gray-500 rounded-md  "></div>
          </span>
          <span className=" flex flex-col gap-5 md:flex-row justify-between ">
            <div className="bg-blue-gray-300 py-4 pl-2 border-2 w-3/4 border-gray-500 rounded-md  "></div>
            <div className="bg-blue-gray-300 py-4 pl-2 border-2 w-1/4 border-gray-500 rounded-md  "></div>
          </span>
        </section>
      </div>
    </main>
  );
}
