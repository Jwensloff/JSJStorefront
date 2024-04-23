import Link from "next/link";
import React from "react";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const AccordionSection = ({
  title,
  links,
}: {
  title: string;
  links: {
    href: string;
    text?: string;
    icon?: IconDefinition;
    label?: string;
  }[];
}) => (
  <details className="bg-gray-custom shadow rounded group border-b border-black w-[100%] md:hidden">
    <summary className="list-none flex flex-wrap items-center cursor-pointer">
      <h2 className="font-extrabold flex-1 p-3">{title}</h2>
      <div className="border-8 border-transparent border-l-black ml-2 group-open:rotate-90 transition-transform origin-left"></div>
    </summary>
    <div className="p-4 py-0">
      <div className="flex flex-col">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            aria-label={link.label}
            className="cursor-pointer hover:underline"
          >
            {link.text}
            {link.icon && <FontAwesomeIcon icon={link.icon} />}
          </Link>
        ))}
      </div>
    </div>
  </details>
);
export default function Footer() {
  const sections = [
    {
      title: "Shop",
      links: [
        { href: "/womens", text: "Women's" },
        { href: "/mens", text: "Men's" },
        { href: "/jewelry", text: "Jewelry" },
      ],
    },
    {
      title: "Company",
      links: [{ href: "/careers-home", text: "Careers" }],
    },
    {
      title: "Help",
      links: [
        { href: "/order-status", text: "Order Status" },
        { href: "/returns-&-exchanges", text: "Returns" },
        { href: "/size-chart", text: "Size Chart" },
        { href: "/FAQs", text: "FAQs" },
        { href: "/contact", text: "Contact Us" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { href: "/fallback", text: "+1-(800)-123-4567" },
        { href: "/fallback", icon: faInstagram, label: "Instagram" },
        { href: "/fallback", icon: faTwitter, label: "Twitter" },
        { href: "/fallback", icon: faFacebook, label: "Facebook" },
      ],
    },
  ];
  return (
    <div
      data-test="footer"
      className="flex flex-col md:flex-row w-full justify-between md:text-center	p-2 px-4 md:px-10 bg-gray-custom"
    >
      {sections.map((section, index) => (
        <AccordionSection
          key={index}
          title={section.title}
          links={section.links}
          aria-label={section.links}
        />
      ))}

      <div className="hidden md:flex md:flex-col">
        <h2 className="font-extrabold">Shop</h2>
        <Link
          href="/womens"
          data-test="womens-link"
          className="cursor-pointer hover:underline"
        >
          Women&apos;s
        </Link>
        <Link
          href="/mens"
          data-test="mens-link"
          className="cursor-pointer hover:underline"
        >
          Men&apos;s
        </Link>
        <Link
          href="/jewelry"
          data-test="jewelry-link"
          className="cursor-pointer hover:underline"
        >
          Jewelry
        </Link>
      </div>
      <div className="hidden md:flex md:flex-col">
        <h2 className="font-extrabold">Company</h2>
        <Link
          href="/careers-home"
          data-test="careers-link"
          className="cursor-pointer hover:underline"
        >
          Careers
        </Link>
      </div>
      <div className="hidden md:flex md:flex-col">
        <h2 className="font-extrabold">Help</h2>
        <Link
          href="/order-status"
          data-test="order-status"
          className="cursor-pointer hover:underline"
        >
          Order Status
        </Link>
        <Link
          href="/returns-&-exchanges"
          data-test="returns-exchanges"
          className="cursor-pointer hover:underline"
        >
          Returns
        </Link>
        <Link
          href="/size-chart"
          data-test="size-chart-link"
          className="cursor-pointer hover:underline"
        >
          Size Chart
        </Link>
        <Link
          href="/FAQs"
          data-test="faq"
          className="cursor-pointer hover:underline"
        >
          FAQs
        </Link>
        <Link
          href="/contact"
          data-test="contact"
          className="cursor-pointer hover:underline"
        >
          Contact Us
        </Link>
      </div>
      <div className="hidden md:flex md:flex-col">
        <h2 className="font-extrabold">Contact Us</h2>
        <p> +1-(800)-123-4567</p>
        <div className="flex justify-evenly text-lg mt-1">
          <Link
            aria-label="Instagram"
            data-test="instagram-link"
            href={"/fallback"}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link
            aria-label="Twitter"
            data-test="twitter-link"
            href={"/fallback"}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link
            aria-label="Facebook"
            data-test="facebook-link"
            href={"/fallback"}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </div>
      </div>
    </div>
  );
}
