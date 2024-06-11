import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MailIcon from "/mail-icon.png";

export default function Hero() {
  return (
    <>
      <Fade>
        <section id="about" className="flex flex-col w-full min-h-screen px-2">
          <div className="max-w-[1366px] w-full flex flex-col gap-12  m-auto py-7">
            <div className="flex flex-col w-full">
              <Fade direction="left">
                <h1 className="text-3xl tracking-wide text-white md:text-4xl hero-text">
                  Hi, I'm <span className="text-4xl md:text-5xl ">Snerten</span>
                  , a Frontend Developer transforming{" "}
                </h1>
              </Fade>
              <Fade direction="right">
                <h2 className="text-2xl tracking-wide text-white md:text-4xl hero-text">
                  Ideas into Web Realities
                </h2>
              </Fade>
              <div className="h-[3px] w-[95px] bg-white mt-[17px]"></div>
            </div>
            <div className="max-w-[365px] flex flex-col gap-4">
              <p className="text-white text-[18px] tracking-wide">
                I started my journey in the summer of 2022 after several years
                of working as a store manager. My experiences working with
                archaic websites and applications inspired me to fix it myself,
                so I enrolled at Noroff where I earned a Higher Professional
                Degree in frontend web development.
              </p>
              <p className="text-white text-[18px] tracking-wide">
                I truly enjoy building things and seeing ideas come to life,
                frontend is my field and design is my passion.
              </p>
            </div>
            <div className="flex gap-6 align-middle">
              <a
                href="https://www.linkedin.com/in/espen-henriksen-snerten-358b9a267/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white text-[24px] my-auto align-middle"
                />
              </a>
              <a
                href="https://github.com/EspenSnerten"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-white text-[24px] my-auto align-middle"
                />
              </a>
              <a href="mailto:espensnert@hotmail.com" className="my-auto">
                <img
                  src={MailIcon}
                  alt="a mail icon"
                  className="my-auto w-[29px] my-autp h-auto align-middle"
                />
              </a>
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
}
