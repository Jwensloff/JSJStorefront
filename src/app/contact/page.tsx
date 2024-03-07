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
      <div key={index} className="flex">
        <Image
          src={dev.image}
          width={250}
          height={250}
          alt={`${dev.name} head shot`}
          style={{ objectFit: "contain", maxHeight: "250px" }}
          className="justify-center pb-4 h-52 sm:h-56 md:h-72 lg:h-96"
        ></Image>
        <p>{dev.name}</p>
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faSquareGithub} />
      </div>
    );
  });
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-center text-4xl font-bold mb-[5rem]">Contact us</h2>
      <div>{contactCards}</div>
    </div>
  );
}
