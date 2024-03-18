export default function ProductCardContainerSkeleton() {
  const CardSkeleton = () => {
    return (
      <div className="min-h-56 w-full animate-pulse">
        <div className="w-full h-auto flex flex-col gap-5 p-1 md:p-5">
          <div className="bg-blue-gray-100 w-full box-border">
            <div className=" rounded-md w-full h-36 flex flex-col sm:flex-row justify-between gap-5 p-1 sm:p-5">
              <div className="self-center">
                <div className="bg-blue-gray-300 w-14 h-20 xs:w-24 sm:w-28" />
              </div>
              <div className="bg-blue-gray-300 w-full flex flex-col items-center justify-between gap-5 "></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-[59vw]">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
