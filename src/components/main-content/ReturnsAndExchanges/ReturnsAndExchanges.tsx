import { faBoxOpen, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ReturnsAndExchanges() {
  return (
    <div className="h-full flex flex-col justify-evenly">
      <div className="flex flex-col sm:flex-row items-center sm:justify-evenly gap-4 pb-4">
        <Link href={"/fallback"}>
          <section
            data-test="return-section"
            className="flex flex-col px-4 justify-around w-56 md:w-64 h-48 xs:h-60 rounded border border-gray-500 text-center"
          >
            <FontAwesomeIcon
              data-test="open-box-icon"
              aria-hidden="true"
              icon={faBoxOpen}
              className="text-3xl pt-3"
            />
            <h2 className="font-bold">Start a Return</h2>
            <p>Start a return today for any items you purchased from JSJ.</p>
          </section>
        </Link>
        <Link href={"/fallback"}>
          <section
            data-test="gift-section"
            className="flex flex-col px-4 justify-around w-56 md:w-64 h-48 xs:h-60 rounded border border-gray-500 text-center"
          >
            <FontAwesomeIcon
              data-test="gift-icon"
              aria-hidden="true"
              icon={faGift}
              className="text-3xl pt-3"
            />
            <h2 className="font-bold">Gift Returns</h2>
            <p>Returning a gift? Our return process is quick and easy.</p>
          </section>
        </Link>
      </div>
    </div>
  );
}
