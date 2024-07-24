import React, { useState, useEffect } from 'react';
import NorthEastArrow from '../assets/icons/arrow-up-right.svg';
import Youtube from '../assets/img/youtube.png';
import Github from '../assets/img/github_icon.svg';
import Synopsis from '../assets/img/gptx.png';
import projects from '../projects.json';

export default function MyProjects() {
  console.log(projects);

  return (
    <>
      <div className="px-6 flex flex-col gap-12 mb-20">
        <h3 className="uppercase tracking-widest font-semibold text-[0.9rem] lg:text-xl">
          My Projects
        </h3>
        <main className="px-2 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {projects.length > 0 ? (
            projects.map((i) => (
              <div className="flex flex-col gap-2 lg:w-3/3" key={i.title}>
                <div className="bg-neutral-900 rounded-lg flex items-center justify-center mb-2 h-56 hover:cursor-pointer">
                  <img
                    className="rounded-md w-3/4 h-40"
                    src={i.img}
                    alt={i.title}
                  />
                </div>

                <h3 className='text-center justify-center align-middle'>{i.title}</h3>
                <p className="text-slate-300 text-lg mb-2">{i.description}</p>
                <div className="flex gap-6 items-center">
                  <a
                    href={i.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 text-sm rounded-lg px-4 py-1 "
                  >
                    <img src={Github} alt="arrow icon" className="w-7 " />
                  </a>

                  <a
                    href={i.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#06c] flex items-center text-sm border-b border-[#06c]"
                  >
                    Deployed{' '}
                    <img src={NorthEastArrow} alt="arrow icon" className="w-7" />
                  </a>
                  <a
                    href={i.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className=" flex items-center text-sm"
                  >
                    <img src={Youtube} alt="arrow icon" className="w-7" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div>
              Projects?
              <div className="color-red">
                where are your projects?
                <span> projects not defined!!!</span>
              </div>
            </div>
          )}

        </main>
      </div>
    </>
  );
}
