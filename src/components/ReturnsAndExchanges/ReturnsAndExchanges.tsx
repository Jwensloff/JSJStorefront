import { faBoxOpen, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ReturnsAndExchanges() {
  return (
    <>
      <h1 className="text-center text-lg sm:text-2xl font-bold mb-2">
        Return and Exchanges
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:justify-evenly pb-2">
        <Link href={"/fallback"}>
          <section className="flex flex-col h-auto justify-around max-w-56 xs:h-56 rounded border border-gray-500 text-center">
            <FontAwesomeIcon
              aria-hidden="true"
              icon={faBoxOpen}
              className="text-3xl pt-3"
            />
            <h2 className="font-bold">Start a Return</h2>
            <p>Start a return today for any items you purchased from JSJ.</p>
          </section>
        </Link>
        <Link href={"/fallback"}>
          <section className="flex flex-col h-auto justify-around max-w-56 xs:h-56 rounded border border-gray-500 text-center">
            <FontAwesomeIcon
              aria-hidden="true"
              icon={faGift}
              className="text-3xl pt-3"
            />
            <h2 className="font-bold">Gift Returns</h2>
            <p>Returning a gift? Our return process is quick and easy.</p>
          </section>
        </Link>
      </div>
    </>
  );
}
