import React from "../assets/img/react_icon.svg";
import Javascript from "../assets/img/javascript_icon.svg";
import Tailwind from "../assets/img/tailwind_icon.svg";
import Github from "../assets/img/github_icon.svg";
import Photoshop from "../assets/img/photoshop_icon.svg";
import Figma from "../assets/img/figma_icon.svg";
import Node from "../assets/img/node.png"
import Express from "../assets/img/express.png";
import Mongo from "../assets/img/mongo.png";
export default function Stack() {
  return (
    <>
      <main className="px-6 mb-20">
        <h3 className="uppercase tracking-widest font-semibold text-[0.9rem] mb-8 lg:text-xl">
          My Tech Stack
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 sm:grid-cols-3 ">
          <div className="flex flex-col items-center justify-center rounded-lg pb-4">
            <img src={React} alt="react icon" className="w-16 my-6 h-14" />
          </div>

          <div className="flex flex-col items-center justify-center rounded-lg pb-4">
            <img
              src={Javascript}
              alt="javascript icon"
              className="w-16 my-6 rounded-lg h-14"
              />
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg pb-4">
            <img
              src={Node}
              alt="javascript icon"
              className="w-19 my-6 rounded-lg h-14"
              />
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg pb-4">
            <img
              src={Express}
              alt="javascript icon"
              className="w-16 my-6 rounded-lg h-14"
              />
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg pb-4">
            <img
              src={Mongo}
              alt="javascript icon"
              className="w-19 my-6 rounded-lg h-14"
              />
          </div>

          <div className="flex flex-col items-center justify-center rounded-lg pb-4">
            <img
              src={Github}
              alt="github icon"
              className="w-16 my-6 rounded-lg invert h-14"
              />
          </div>

          <div className=" flex flex-col items-center justify-center rounded-lg pb-4">
            <img
              src={Tailwind}
              alt="tailwind css icon"
              className="w-16 my-6 rounded-lg h-14"
              />
          </div>

          <div className=" flex flex-col items-center justify-center rounded-lg pb-4">
            <img
              src={Figma}
              alt="figma icon"
              className="w-16 my-6 rounded-lg h-14"
              />
          </div>

          <div className="flex flex-col items-center justify-center rounded-lg pb-4">
            <img
              // src={Photoshop}
              alt="adobe photoshop icon"
              className="w-16 my-6 rounded-lg h-14"
            />
          </div>
        </div>
      </main>
    </>
  );
}
