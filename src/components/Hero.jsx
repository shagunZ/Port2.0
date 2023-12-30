import { Link } from "react-scroll";

export default function Hero() {
  return (
    <>
      <div className="px-6 mt-20 mb-20 flex flex-col gap-4 lg:gap-8 lg:pr-44 lg:my-24">
        <h2 className="text-5xl font-extrabold leading-10 lg:text-8xl tracking-tight flex">
          {/* Hey, I&apos;m Shagun Mengi &mdash; <br></br>  */}
          Crafting Web
        </h2>
        <h2 className="text-5xl font-extrabold leading-10 lg:text-7xl tracking-tight flex">
          {/* Hey, I&apos;m Shagun Mengi &mdash; <br></br>  */}
          Experiences
        </h2>

        <p className="text-neutral-400 font-thin lg:text-lg ">
        Hey, I am <span className="text-neutral-50">Shagun Mengi</span>, a passionate  <span className="text-neutral-50">computer science student </span> 
         with a strong interest in  <span className="text-neutral-50">development</span> and  <span className="text-neutral-50">problem solving.</span> {" "}
        Constantly seeking out new  <span className="text-neutral-50">opportunities</span> to grow my skillset, whether it is through  <span className="text-neutral-50">personal projects</span> or working with a  <span className="text-neutral-50">team on a complex development project.</span>
        </p>

        <div className="flex gap-2 items-center mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06c]"></span>
          </span>
          <p className="text-neutral-400 text-lg">
            {/* Actively looking for new opportunities */}
            Let&apos;s connect and learn together! 
          </p>
        </div>

        <Link to="footer" smooth={true} duration={600}>
          <button className="w-full rounded-full bg-[#06c] py-2 lg:w-40 hover:bg-black hover: hover:border-[#06c] transition-all duration-300 ">
            Let&apos;s Connect➡️
          </button>
        </Link>
      </div>
    </>
  );
}
