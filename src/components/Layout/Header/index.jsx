import { Link } from "@tanstack/react-router";
import { Fade } from "react-awesome-reveal";
import Logo from "/portfolio-logo.png";

export default function Header() {
  return (
    <>
      <Fade>
        <header className="flex flex-col w-full px-2">
          <nav className="max-w-[1366px] w-full flex mx-auto pt-12 pb-6 header-container">
            <div className="flex flex-row justify-start w-[40%]">
              <img src={Logo} alt="" className="h-[56px] w-[56px]" />
            </div>
            <div className="flex flex-row justify-end w-full gap-10 align-middle">
              <Link
                to="/#about"
                className="my-auto font-bold transition-all hover:text-white md:text-[16px] text-[14px] header-text"
              >
                About me.
              </Link>
              <Link
                to="/#work"
                className="my-auto font-bold transition-all hover:text-white md:text-[16px] text-[14px] header-text"
              >
                My work.
              </Link>
              <Link
                to="/#contact"
                className="my-auto font-bold transition-all hover:text-white md:text-[16px] text-[14px] header-text"
              >
                Contact me.
              </Link>
            </div>
          </nav>
        </header>
      </Fade>
    </>
  );
}
