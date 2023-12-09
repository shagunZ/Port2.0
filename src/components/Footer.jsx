import email from "../assets/img/email_icon.svg";
import twitter from "../assets/img/twitter_icon.svg";
import linkedin from "../assets/img/linkedin_icon.svg";
import github from "../assets/img/github_icon.svg"
export default function Footer() {
  return (
    <>
      <section
        className=" px-6 pt-8 pb-6 flex flex-col gap-4 lg:rounded-lg lg:mb-8"
        id="footer"
      >
        <h3 className="uppercase tracking-widest font-semibold text-[0.9rem] lg:text-xl">
          Contanct Me
        </h3>
        <p className="text-neutral-400 lg:pr-60">
        Feel free to contact me to chat about a project, collaboration, or just a discussion, I&apos;d love to hear from you! <br></br>Let&apos;s get connected and learn together! 🌟
        </p>

        <div className="flex items-center pb-4">
      
          <a
            href="https://www.linkedin.com/in/shagunmengi"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              alt="email icon"
              className="w-8 lg:w-10 hover:brightness-200 transition-all duration-300"
            />
          </a>{" "}
          <a href="https://www.github.com/shagunZ" target="_blank" rel="noreferrer">
            <img
              src={github}
              alt="github icon"
              className="w-6 lg:w-10 hover:brightness-200 transition-all duration-300 invert opacity-60"
            />
          </a>{" "}
          <a href="mailto:shagunmengi003@gmail.com" target="_blank" rel="noreferrer">
            <img
              src={email}
              alt="email icon"
              className="w-8 lg:w-10 hover:brightness-200 transition-all duration-300"
            />
          </a>{" "}
          <a
            href="https://www.twitter.com/shagunmengi"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={twitter}
              alt="email icon"
              className="w-8 lg:w-10 hover:brightness-200 transition-all duration-300"
            />
          </a>{" "}
        </div>

        <div className="flex justify-center">
          <p className="text-center text-sm text-neutral-400 tracking-widest pt-2">
          &copy;2023 - shagunZ 
          </p>
        </div>
      </section>
    </>
  );
}
