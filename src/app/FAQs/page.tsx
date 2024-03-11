"use client";
import Link from "next/link";

export default function FAQs() {
  const data = [
    {
      q: "How do I know what size I am?",
      a: (
        <span>
          We would recommend that you refer to our sizing guide which can be
          found{" "}
          <a className="font-bold underline" href="/size-chart">
            here
          </a>
          .
        </span>
      ),
    },
    {
      q: "What is your return policy?",
      a: (
        <span>
          If you are not 100% satisfied with your purchase, you can return or
          exhange your purchase within 30 days. For more information, refer to
          our returns and exhanges page which can be found{" "}
          <a className="font-bold underline" href="/returns-&-exchanges">
            here
          </a>
        </span>
      ),
    },
    {
      q: "How can I contact a customer service representative?",
      a: (
        <span>
          We are sorry that we have not been able to answer your questions so
          far. Unfortunately we can never seem to remember the number for our
          customer service department, but you can reference{" "}
          <a
            className="font-bold underline"
            href="    https://www.youtube.com/watch?v=6WTdTwcmxyo
"
          >
            this
          </a>{" "}
          youtube video to find it{" "}
        </span>
      ),
    },

    {
      q: "Is this a real store?",
      a: "No. This is not a real store, this is a fake online store-front application built by Judy Ye, Scotty Brown, and Jocelyn Wensloff as part of a fun, front end coding project.",
    },
    {
      q: "What technologies did you use?",
      a: "We implemented Next.js, TypeScript, Tailwind CSS, and RESTful APIs.",
    },
    {
      q: "Can I contact these impressive developers?",
      a: (
        <span>
          Absolutely! We would love to hear from you! You can reach us here:{" "}
          <br />
          <span className="font-bold">GitHub:</span>
          <br />
          <Link className="underline" href="https://github.com/judy0ye">
            Judy Ye
          </Link>{" "}
          <br />
          <Link className="underline" href="https://github.com/Scotty-Brown">
            Scotty Brown
          </Link>{" "}
          <br />
          <Link className="underline" href="https://github.com/Jwensloff">
            Jocelyn Wensloff
          </Link>{" "}
          <br />
          <span className="font-bold">LinkedIn:</span>
          <br />
          <Link
            className="underline"
            href="https://www.linkedin.com/in/judy0ye/"
          >
            Judy Ye
          </Link>{" "}
          <br />
          <Link
            className="underline"
            href="https://www.linkedin.com/in/scotty-brown-2140b3278/"
          >
            Scotty Brown
          </Link>{" "}
          <br />
          <Link
            className="underline"
            href="https://www.linkedin.com/in/jocelynwensloff/"
          >
            Jocelyn Wensloff
          </Link>
        </span>
      ),
    },
  ];

  const qAndA = data.map((object, index) => {
    return (
      <details
        className="bg-gray-custom shadow rounded group w-[100%]"
        key={index}
      >
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold">{object.q}</h3>
          <div className="flex w-10 items-center justify-center">
            <div className="border-8 border-transparent border-l-black ml-2 group-open:rotate-90 transition-transform origin-left"></div>
          </div>
        </summary>
        <div className="p-4">
          <p>{object.a}</p>
        </div>
      </details>
    );
  });

  return (
    <div className="flex flex-col min-h-[71vh] mb-[5rem] items-center">
      <h2 className="text-center text-4xl font-bold my-5">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col align-center min-h-[55vh] w-[85vw] gap-4 mb-4">
        {qAndA}
      </div>
    </div>
  );
}
