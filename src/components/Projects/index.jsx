import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import TiLivCard from "../Cards/TiLivCard";
import HolidazeCard from "../Cards/HolidazeCard";
import BidCoinCard from "../Cards/BidCoinCard";
import TiLiv from "/Ti-Liv.jpg";
import Holidaze from "/Holidaze.png";
import BidCoin from "/BidCoin.png";

export default function Projects() {
  const [activeProject, setActiveProject] = useState("TiLiv");

  const handleProjectChange = (project) => {
    setActiveProject(project);
  };

  return (
    <>
      <Fade>
        <section id="work" className="flex flex-col w-full min-h-screen lg:flex-row card-container">
          <div className="flex my-9 flex-col w-full lg:w-[50%] lg:my-auto">
            <div className="max-w-[500px] mx-auto">
              <div className="flex">
                <div className="w-[85px] cursor-pointer" onClick={() => handleProjectChange("TiLiv")}>
                  <p className="text-black text-[16px] font-semibold">
                    Ti Liv
                  </p>
                  <div className={`h-[4px] w-full ${activeProject === "TiLiv" ? "card-selector-active" : "card-selector"}`}></div>
                </div>
                <div className="w-[90px] cursor-pointer" onClick={() => handleProjectChange("Holidaze")}>
                  <p className="text-center text-black text-[16px] font-semibold">
                    Holidaze
                  </p>
                  <div className={`h-[4px] w-full ${activeProject === "Holidaze" ? "card-selector-active" : "card-selector"}`}></div>
                </div>
                <div className="w-[85px] cursor-pointer" onClick={() => handleProjectChange("BidCoin")}>
                  <p className="text-right text-black text-[16px] font-semibold">
                    BidCoin
                  </p>
                  <div className={`h-[4px] w-full ${activeProject === "BidCoin" ? "card-selector-active" : "card-selector"}`}></div>
                </div>
              </div>
              <div className="mt-9">
                <h2 className="text-black text-[48px] w-[365px] tracking-wide">
                  Take a look at my projects
                </h2>
              </div>
              <div>
                {activeProject === "TiLiv" && <TiLivCard />}
                {activeProject === "Holidaze" && <HolidazeCard />}
                {activeProject === "BidCoin" && <BidCoinCard />}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-[50%] max-h-screen overflow-hidden">
            <Fade direction="right">
              {activeProject === "TiLiv" && <img src={TiLiv} alt="Ti Liv" className="object-contain object-top overflow-hidden" />}
              {activeProject === "Holidaze" && <img src={Holidaze} alt="Holidaze" className="object-cover object-top overflow-hidden" />}
              {activeProject === "BidCoin" && <img src={BidCoin} alt="BidCoin" className="object-cover object-top overflow-hidden" />}
            </Fade>
          </div>
        </section>
      </Fade>
    </>
  );
}