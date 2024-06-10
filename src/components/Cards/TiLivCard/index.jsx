import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

export default function TiLivCard() {
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

        <div className="flex mt-9">
          <a
            href=""
            className="px-4 py-2 text-white rounded-md card-selector-active"
          >
            Figma <FontAwesomeIcon icon={faFigma} />
          </a>
        </div>
      </Fade>
    </>
  );
}
