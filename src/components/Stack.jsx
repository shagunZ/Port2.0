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
             src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
              alt="javascript icon"
              className="w-19 my-6 rounded-lg h-14"
              />
          </div>

          <div className=" flex flex-col items-center justify-center rounded-lg pb-4">
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwqIxeXaSEO9byVSTrXX7tSJ1GkDxP9HE2Q&usqp=CAU" 
              alt="figma icon"
              className="w-16 my-6 rounded-lg h-14"
              />
          </div>

          
          <div className="flex flex-col items-center justify-center rounded-lg pb-4">
          <i className="fa-brands fa-bootstrap faicons text-6xl" style={{color: "#6e55ec"}}></i>
          </div>

          <div className=" flex flex-col items-center justify-center rounded-lg pb-4">
            <img
             src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" 
              alt="figma icon"
              className="w-16 my-6 rounded-lg h-14"
              />
          </div>

          <div className="flex flex-col items-center justify-center rounded-lg pb-4">
          <i className="fa-brands fa-git faicons text-6xl" style={{color: "#d41111"}}></i>
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

          {/* <div className="flex flex-col items-center justify-center rounded-lg pb-4">
            <img
              // src={Photoshop}
              alt="adobe photoshop icon"
              className="w-16 my-6 rounded-lg h-14"
            />
          </div> */}



          <div className="flex flex-col items-center justify-center rounded-lg pb-4">
          <i className="fa-brands fa-html5 faicons text-6xl" style={{color: "#e67f1e"}}></i>
          </div>

          <div className="flex flex-col items-center justify-center rounded-lg pb-4">
          <i className="fa-brands fa-css3 faicons text-6xl" style={{color: "#1f71ff"}}></i>
          </div>

          <div className=" flex flex-col items-center justify-center rounded-lg pb-4">
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvNkLk_-Arz2vB_zcAv7pTG3SmvKDNmXaOw&usqp=CAU" 
              alt="figma icon"
              className="w-16 my-6 rounded-lg h-14"
              />
          </div>

          <div className="flex flex-col items-center justify-center rounded-lg pb-4">
          <i className="fa-brands fa-c faicons text-6xl" style={{color: "#4284f5"}}></i>
          </div>

          <div className="flex flex-col items-center justify-center rounded-lg pb-4">
          <i className="fa-brands fa-java faicons text-6xl" style={{color: "red"}}></i>
          </div>

        </div>
      </main>
    </>
  );
}
