import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';


export default function Contact() {
  return (
    <>
      <Fade className="w-full px-2">
        <section id="contact" className="flex flex-col w-full min-h-screen max-w-[1366px] mx-auto">
          <div className="flex flex-col my-auto">
          <div className="mb-11 w-fit">
            <h1 className="text-white text-[75px]">
              Get in <span>TOUCH</span>
            </h1>
            <div className="h-[3px] bg-white max-w-[493px] mb-6"></div>
            <p className="text-[21px] max-w-[365px] w-full text-white">
              Feel free to contact me! I'm open to collaboration and would love
              to hear your ideas for new websites. I will get back to you as
              soon as possible.
            </p>
          </div>
          <form action="">
            <div className="form-group max-w-[365px] w-full">
              <input type="text" autoComplete="family-name" required />
              <label htmlFor="">Your Name.</label>
            </div>
            <div className="form-group max-w-[365px] w-full mt-1">
              <input type="text" autoComplete="email" required />
              <label htmlFor="">Your Email.</label>
            </div>
            <div className="form-group max-w-[365px] w-full mt-1">
              <input type="text" required />
              <label htmlFor="">What services are you looking for?</label>
            </div>
            <div className="form-group max-w-[365px] w-full mt-1">
                <textarea
                  name=""
                  required
                  rows="5"
                  id=""
                  className="z-10 p-1 bg-transparent border-b-2 outline-none placeholder:text-black placeholder:text-[14px] placeholder:font-medium border-b-black"
                ></textarea>
                <label htmlFor="">Your message to me.</label>
              </div>
              <button className="z-10 mt-9 px-6 text-white border-none text-[16px] rounded-md outline-none btn btn-clr max-w-[175px] mx-auto">
                  Send it <FontAwesomeIcon icon={faPaperPlane} className="rotate-45"/>
                </button>
          </form>
          </div>
        </section>
      </Fade>
    </>
  );
}
