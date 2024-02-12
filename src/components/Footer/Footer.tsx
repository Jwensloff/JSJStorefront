import Link from "next/link";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="flex justify-between text-center w-screen	p-2 px-10 bg-gray-custom">
      <div className="flex flex-col">
        <h2 className="font-extrabold">Shop</h2>
        <Link href="/womens" className="cursor-pointer hover:underline">
          Women&apos;s
        </Link>
        <Link href="/mens" className="cursor-pointer hover:underline">
          Men&apos;s
        </Link>
        <Link href="/jewelry" className="cursor-pointer hover:underline">
          Jewelry
        </Link>
      </div>
      <div className="flex flex-col">
        <h2 className="font-extrabold">Company</h2>
        <Link href="/careers" className="cursor-pointer hover:underline">
          Careers
        </Link>
      </div>
      <div className="flex flex-col">
        <h2 className="font-extrabold">Help</h2>
        <Link href="/order-status" className="cursor-pointer hover:underline">
          Order Status
        </Link>
        <Link
          href="/returns-&-exchanges"
          className="cursor-pointer hover:underline"
        >
          Returns
        </Link>
        <Link href="/size-chart" className="cursor-pointer hover:underline">
          Size Chart
        </Link>
        <Link href="/FAQs" className="cursor-pointer hover:underline">
          FAQs
        </Link>
        <Link href="/contact" className="cursor-pointer hover:underline">
          Contact Us
        </Link>
      </div>
      <div className="flex flex-col	">
        <h2 className="font-extrabold">Contact Us</h2>
        <p className="cursor-pointer hover:underline"> +1-(800)-123-4567</p>
        <div className="flex justify-evenly text-lg mt-1">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </div>
    </div>
  );
}
