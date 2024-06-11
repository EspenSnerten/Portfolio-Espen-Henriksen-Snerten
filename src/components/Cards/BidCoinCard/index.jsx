import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function BidCoinCard() {
  return (
    <>
      <Fade direction="left">
        <div className="flex flex-col gap-4 mt-9">
          <p className="text-black max-w-[375px]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old.
          </p>

          <p className="text-black max-w-[375px]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old.
          </p>
        </div>

        <div className="flex gap-5 mt-9">
          <a
            href="https://github.com/EspenSnerten/Semester-Project-2023"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-white rounded-md btn-clr"
          >
            GitHub <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://bidcoin-noroff.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-white rounded-md card-selector-active"
          >
            Live site <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </div>
      </Fade>
    </>
  );
}
