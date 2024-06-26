import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function page() {
  const devs = [
    {
      name: "Judy Ye",
      linkedIn: "https://www.linkedin.com/in/judy0ye/",
      github: "https://github.com/judy0ye",
      image: "https://ca.slack-edge.com/T029P2S9M-U051QPM7MRB-daf5f7558eef-512",
    },
    {
      name: "Scotty Brown",
      linkedIn: "https://www.linkedin.com/in/scotty-brown-2140b3278/",
      github: "https://github.com/Scotty-Brown",
      image: "https://ca.slack-edge.com/T029P2S9M-U051QPM4PNZ-cb4301705e39-512",
    },
    {
      name: "Jocelyn Wensloff",
      linkedIn: "https://www.linkedin.com/in/jocelynwensloff/",
      github: "https://github.com/Jwensloff",
      image: "https://ca.slack-edge.com/T029P2S9M-U04T97YN8DS-5239f0a8f6ac-512",
    },
  ];
  const contactCards = devs.map((dev, index) => {
    return (
      <div
        data-test="contact-card"
        key={index}
        className="flex w-[70vw] md:w-auto text-center flex-col items-center shadow rounded  p-[1rem] my-[1rem] hover:shadow-lg bg-gray-200"
      >
        <p className="text-xl font-bold my-[1rem]">{dev.name}</p>
        <Image
          data-test="headshot"
          src={dev.image}
          width={250}
          height={250}
          alt={`${dev.name} head shot`}
          style={{ objectFit: "contain", maxHeight: "250px" }}
          className="justify-center pb-4 h-52 sm:h-56 md:h-72 lg:h-96"
        />
        <div className="flex flex-col justify-center">
          <p>Software Engineer</p>
          <div className="flex gap-3 justify-center my-[1rem]">
            <a href={dev.linkedIn}>
              <FontAwesomeIcon
                data-test="linkedin-icon"
                icon={faLinkedin}
                size="xl"
                className="hover:text-gray-600"
              />
            </a>
            <a href={dev.github}>
              <FontAwesomeIcon
                data-test="github-icon"
                icon={faSquareGithub}
                size="xl"
                className="hover:text-gray-600"
              />
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-[71vh] mb-[2rem]">
      <h2
        data-test="contact-us-text"
        className="text-center text-4xl font-bold my-[1rem] mb:mt-[0rem]"
      >
        Contact us
      </h2>
      <div
        className="flex flex-col md:flex-row 
      gap-2 items-center md:justify-evenly justify-center w-full px-[1rem]"
      >
        {contactCards}
      </div>
    </div>
  );
}
