import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MailIcon from "/mail-icon.png";

export default function Footer() {
  return (
    <>
      <Fade>
        <footer className="flex flex-col w-full px-2">
          <div className="max-w-[1366px] w-full flex flex-col sm:flex-row mx-auto footer-container py-7">
            <div className="flex flex-row justify-center w-full sm:justify-start">
              {" "}
              <p className="text-[12px] text-white my-auto">
                ©2024 Designed & Built by Espen Henriksen Snerten. All Rights
                Reserved.
              </p>
            </div>
            <div className="flex flex-row sm:justify-end justify-center sm:w-[40%] w-full gap-6 align-middle mx-auto">
              <a
                href="https://www.linkedin.com/in/espen-henriksen-snerten-358b9a267/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-white" />
              </a>
              <a
                href="https://github.com/EspenSnerten"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="text-white" />
              </a>
              <a href="mailto:espensnert@hotmail.com" className="my-auto">
                <img
                  src={MailIcon}
                  alt="a mail icon"
                  className="my-auto h-auto w-[19px]"
                />
              </a>
            </div>
          </div>
        </footer>
      </Fade>
    </>
  );
}
