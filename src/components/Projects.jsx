// import NorthEastArrow from "../assets/icons/arrow-up-right.svg";
import Youtube from "../assets/img/youtube.png";
import Github from "../assets/img/github_icon.svg"
import Synopsis from "../assets/img/gptx.png";
// import ScrollGate from "../assets/img/scrollgate.png";
import YelpCamp from "../assets/img/yelp.png"
import TechHaven from "../assets/img/TechHaven.png"
import Task from "../assets/img/task.png"
import Renovate from "../assets/img/renovate.png"
import Movie from "../assets/img/movie.png"
// import Chat from "../assets/img/friendlychat.png"
// import BookCart from "../assets/img/bookcart.png"
import Blogify from "../assets/img/blogify.png"
export default function Projects() {
  return (
    <>
      <div className="px-6 flex flex-col gap-12 mb-20">
       
        <h2 className="uppercase text-3xl font-bold leading-10 tracking-tight
         ">
          My Projects...</h2>


          <main className="px-2 flex flex-col gap-14 md:flex-row lg:flex-row">
          
          
          <div className="flex flex-col gap-2 lg:w-1/3">
            <div className=" rounded-lg flex items-center justify-center mb-2 h-56 hover:cursor-pointer">
              <img
                className="rounded-md w-3/4 h-40"
                src={Renovate}
                alt=" project screenshot"
              />
            </div>

            <h4 className="text-xl text-center font-sans font-bold">Renovate</h4>
            <p className="text-slate-300 text-md mb-2">
            Renovate is a robust web app designed to provide home services and repair works to users in their nearest locality. The platform offers a variety of services, allowing users to select the service they require and book appointments conveniently,managing booked and completed services, simplifying the process of finding, booking, and managing home services.
            </p>

            <div className="flex gap-6 justify-center text-center align-middle items-center">
              <a
                href="https://github.com/shagunZ/Renovate"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 text-sm rounded-lg px-4 py-1 "
              >
          <img src={Github} alt="arrow icon" className="w-7 invert" />
              </a>
              <a
                href="renovate-tau.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="text-[#b67ef2] font-bold flex items-center text-xl text-center"
              >
                {" "}<i className="fa-solid fa-link w-7"></i>
              </a>
              <a
                href="renovate-tau.vercel.app"
                target="_blank"
                rel="noreferrer"
                className=" flex items-center text-sm"
              >
                <img src={Youtube} alt="arrow icon" className="w-7" />
              </a>
            </div>
          </div>


          <div className="flex flex-col gap-2 lg:w-1/3">
            <div className=" rounded-lg flex items-center justify-center mb-2 h-56 hover:cursor-pointer">
              <img
                className="rounded-md w-3/4 h-40"
                src={TechHaven}
                alt=" project screenshot"
              />
            </div>

            <h4 className="text-xl text-center font-sans font-bold">TechHaven</h4>
            <p className="text-slate-300 text-md mb-2">
            TechHaven is an intermediate project designed to revolutionize the e-commerce experience. This cutting-edge webshop not only boasts a seamless and visually appealing storefront but also features an advanced admin dashboard and Content Management System (CMS).
            </p>

            <div className="flex gap-6 justify-center text-center align-middle items-center">
              <a
                href="https://github.com/shagunZ/TechHaven"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 text-sm rounded-lg px-4 py-1 "
              >
          <img src={Github} alt="arrow icon" className="w-7 invert" />
              </a>
              <a
                href="https://github.com/shagunZ/TechHaven"
                target="_blank"
                rel="noreferrer"
                className="text-[#b67ef2] font-bold flex items-center text-xl text-center"
              >
                {" "}<i className="fa-solid fa-link w-7"></i>
              </a>
              <a
                href="https://www.youtube.com/watch?v=4ZrluKaNZ9s&t=3s"
                target="_blank"
                rel="noreferrer"
                className=" flex items-center text-sm"
              >
                <img src={Youtube} alt="arrow icon" className="w-7" />
              </a>
            </div>
          </div>


          
        <div className="flex flex-col gap-2 lg:w-1/3">
            <div className=" rounded-lg flex items-center justify-center mb-2 h-56 hover:cursor-pointer">
              <img
                className="rounded-md w-3/4 h-40"
                src={Blogify}
                alt=" project screenshot"
              />
            </div>

            <h4 className="text-xl text-center font-sans font-bold">Blogify</h4>
            <p className="text-slate-300 text-md mb-2">
            A MERN stack app that provides authentication for secure access and includes features like liking and viewing personal and all blogs. With a user-friendly interface and rich text editing capabilities, Blogify makes blogging a seamless experience for users of all levels. 
            </p>

            <div className="flex gap-6 justify-center text-center align-middle items-center">
              <a
                href="https://github.com/shagunZ/BlogifyMERN"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 text-sm rounded-lg px-4 py-1 "
              >
          <img src={Github} alt="arrow icon" className="w-7 invert" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=9xPglGIqDPI"
                target="_blank"
                rel="noreferrer"
                className="text-[#b67ef2] font-bold flex items-center text-xl text-center"
              >
                {" "}<i className="fa-solid fa-link w-7"></i>
              </a>
              <a
                href="https://www.youtube.com/watch?v=9xPglGIqDPI"
                target="_blank"
                rel="noreferrer"
                className=" flex items-center text-sm"
              >
                <img src={Youtube} alt="arrow icon" className="w-7" />
              </a>
            </div>
          </div>


        </main>


        

        <main className="px-2 flex flex-col gap-14 md:flex-row lg:flex-row">
          
          <div className="flex flex-col gap-2 lg:w-1/3">
            <div className=" rounded-lg flex items-center justify-center mb-2 h-56 hover:cursor-pointer" 
             style={{
              transitionTimingFunction:"ease-in-out",
              transitionDuration:"2s"
            }}>
              <img
                className="rounded-md w-3/4 h-40"
                src={Synopsis}
                alt=" project screenshot"
              />
            </div>

            <h4 className="text-xl text-center font-sans font-bold">Synopsis</h4>
            <p className="text-slate-300 text-md mb-2">
            SynopsisAI streamline your reading experience and can transform lengthy articles into concise and easily readable summaries. The generated summaries are designed to be clear, concise, and highly readable texts and are facilitated by connecting to relevant APIs that processes the summarization. 
            </p>

            <div className="flex gap-6 justify-center text-center align-middle items-center">
              <a
                href="https://github.com/shagunZ/SynopsisAI"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 text-sm rounded-lg px-4 py-1 "
              >
          <img src={Github} alt="arrow icon" className="w-7 invert" />
              </a>
              <a
                href="https://synopsisai.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-[#b67ef2] font-bold flex items-center text-xl text-center"
              >
                {" "}<i className="fa-solid fa-link w-7"></i>
              </a>
              <a
                href="https://www.youtube.com/watch?v=0hrAFKKQLOY"
                target="_blank"
                rel="noreferrer"
                className=" flex items-center text-sm"
              >
                <img src={Youtube} alt="arrow icon" className="w-7 " />
              </a>
            </div>
          </div>



          <div className="flex flex-col gap-2 lg:w-1/3">
            <div className=" rounded-lg flex items-center justify-center mb-2 h-56 hover:cursor-pointer">
              <img
                className="rounded-md w-3/4 h-40"
                src={YelpCamp}
                alt=" project screenshot"
              />
            </div>

            <h4 className="text-xl text-center font-sans font-bold">YelpCamp</h4>
            <p className="text-slate-300 text-md mb-2">
            YelpCamp is a Full Stack app for a campground sharing and reviewing platform. Users can create an account, log in, and perform various actions within the application, such as creating , adding comments and reviews , editing or deleting , and browsing through different campground listings.
            </p>

            <div className="flex gap-6 justify-center text-center align-middle items-center">
              <a
                href="https://github.com/shagunZ/YelpCamp"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 text-sm rounded-lg px-4 py-1 "
              >
          <img src={Github} alt="arrow icon" className="w-7 invert" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=UkbCn1jiCv4"
                target="_blank"
                rel="noreferrer"
                className="text-[#b67ef2] font-bold flex items-center text-xl text-center"
              >
                {" "}<i className="fa-solid fa-link w-7"></i>
              </a>
              <a
                href="https://www.youtube.com/watch?v=UkbCn1jiCv4"
                target="_blank"
                rel="noreferrer"
                className=" flex items-center text-sm"
              >
                <img src={Youtube} alt="arrow icon" className="w-7" />
              </a>
            </div>
          </div>


          <div className="flex flex-col gap-2 lg:w-1/3">
            <div className=" rounded-lg flex items-center justify-center mb-2 h-56 hover:cursor-pointer">
              <img
                className="rounded-md w-3/4 h-40"
                src="https://images.unsplash.com/photo-1638414154639-0fbc5bceb80f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5maW5pdHl8ZW58MHx8MHx8fDA%3D"
                alt=" project screenshot"
              />
            </div>

            <h4 className="text-xl text-center font-sans font-bold">Scroll Gate</h4>
            <p className="text-slate-300 text-md mb-2">
            Scroll Gate combines the concept of infinite scrolling, external API integration, React development, and Firebase Authentication to create a dynamic and engaging application that keeps users immersed in a continuous stream of content while maintaining secure user authentication. 
            </p>

            <div className="flex gap-6 justify-center text-center align-middle items-center">
              <a
                href="https://github.com/shagunZ/ScrollGate"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 text-sm rounded-lg px-4 py-1 "
              >
          <img src={Github} alt="arrow icon" className="w-7 invert" />
              </a>
              <a
                href="https://scrollgate.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-[#b67ef2] font-bold flex items-center text-xl text-center"
              >
                {" "}<i className="fa-solid fa-link w-7"></i>
              </a>
              <a
                href="https://www.youtube.com/watch?v=u0RLH4vKBrA"
                target="_blank"
                rel="noreferrer"
                className=" flex items-center text-sm"
              >
                <img src={Youtube} alt="arrow icon" className="w-7" />
              </a>
            </div>
          </div>
        </main>




        <main className="px-2 flex flex-col gap-14 md:flex-row lg:flex-row">



          <div className="flex flex-col gap-2 lg:w-1/3">
            <div className=" rounded-lg flex items-center justify-center mb-2 h-56 hover:cursor-pointer">
              <img
                className="rounded-md w-3/4 h-40"
                src={Task}
                alt=" project screenshot"
              />
            </div>

            <h4 className="text-xl text-center font-sans font-bold">Manager</h4>
            <p className="text-slate-300 text-md mb-2">
            Manager is a MERN stack application that excels in providing efficient Create, Read, Update, and Delete (CRUD) operations. It is a no-login task recording app utilizing various features of React, such as Event Listeners, State Management, Conditional Rendering, React Hooks, seamless user experience without experiencing page reloads. 
            </p>

            <div className="flex gap-6 justify-center text-center align-middle items-center">
              <a
                href="https://github.com/shagunZ/ToDoAppCrud"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 text-sm rounded-lg px-4 py-1 "
              >
          <img src={Github} alt="arrow icon" className="w-7 invert" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=hRdPMSi_7ZY"
                target="_blank"
                rel="noreferrer"
                className="text-[#b67ef2] font-bold flex items-center text-xl text-center"
              >
                  {" "}<i className="fa-solid fa-link w-7"></i>
              </a>
              <a
                href="https://www.youtube.com/watch?v=hRdPMSi_7ZY"
                target="_blank"
                rel="noreferrer"
                className=" flex items-center text-sm"
              >
                <img src={Youtube} alt="arrow icon" className="w-7" />
              </a>
            </div>
          </div>



          <div className="flex flex-col gap-2 lg:w-1/3">
            <div className=" rounded-lg flex items-center justify-center mb-2 h-56 hover:cursor-pointer">
              <img
                className="rounded-md w-3/4 h-40"
                src={Movie}
                alt=" project screenshot"
              />
            </div>

            <h4 className="text-xl text-center font-sans font-bold">MovieApp</h4>
            <p className="text-slate-300 text-md mb-2">
            The MovieApp is built with React, leveraging APIs to provide users with an extensive collection of movies and comprehensive search options. The app dynamically retrieves movie data, including titles,ratings, posters, and more, ensuring an up-to-date and diverse selection for users to explore.
            </p>

            <div className="flex gap-6 justify-center text-center align-middle items-center">
              <a
                href="https://github.com/shagunZ/movieapp-react"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 text-sm rounded-lg px-4 py-1 "
              >
          <img src={Github} alt="arrow icon" className="w-7 invert" />
              </a>
              <a
                href="https://moviey.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="text-[#b67ef2] font-bold flex items-center text-xl text-center"

              >
                {" "}<i className="fa-solid fa-link w-7"></i>
              </a>
              <a
                href="https://www.youtube.com/watch?v=hRdPMSi_7ZY"
                target="_blank"
                rel="noreferrer"
                className=" flex items-center text-sm"
              >
                <img src={Youtube} alt="arrow icon" className="w-7" />
              </a>
            </div>
          </div>


         
        </main>


        {/* <main className="px-2 flex flex-col gap-14 md:flex-row lg:flex-row">


          <div className="flex flex-col gap-2 lg:w-1/3">
            <div className=" rounded-lg flex items-center justify-center mb-2 h-56 hover:cursor-pointer">
              <img
                className="rounded-md w-3/4 h-40"
                src={Chat}
                alt=" project screenshot"
              />
            </div>

            <h4 className="text-xl text-center font-sans font-bold">Friendly Chat</h4>
            <p className="text-slate-300 text-md mb-2">
            This is a chat application built using Firebase. It allows users to communicate with each other in real-time using Firebases real-time database and authentication features. The chat application utilizes Firebases real-time database, enabling instant message delivery between users.
            </p>

            <div className="flex gap-6 justify-center text-center align-middle items-center">
              <a
                href="https://github.com/shagunZ/FriendlyChatfirebase"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 text-sm rounded-lg px-4 py-1 "
              >
          <img src={Github} alt="arrow icon" className="w-7 invert" />
              </a>
              <a
                href="https://friendlychat-79704.firebaseapp.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#b67ef2] font-bold flex items-center text-sm border-b border-[#b67ef2]"
              >
                Link{" "}
                <img src={NorthEastArrow} alt="arrow icon" className="w-7" />
              </a>
              <a
                href="https://github.com/shagunZ/FriendlyChatfirebase"
                target="_blank"
                rel="noreferrer"
                className=" flex items-center text-sm"
              >
                <img src={Youtube} alt="arrow icon" className="w-7" />
              </a>
            </div>
          </div>


          <div className="flex flex-col gap-2 lg:w-1/3">
            <div className=" rounded-lg flex items-center justify-center mb-2 h-56 hover:cursor-pointer">
              <img
                className="rounded-md w-3/4 h-40"
                src={BookCart}
                alt=" project screenshot"
              />
            </div>

            <h4 className="text-xl text-center font-sans font-bold">BookCart</h4>
            <p className="text-slate-300 text-md mb-2">
            Book Cart app offers users a convenient way to manage their book purchases by adding and deleting books. The app includes a feature that calculates the bill based on the books added to the cart. Each time a book is added or deleted, the app recalculates the total bill, taking into account the prices of the books in the cart.
            </p>

            <div className="flex gap-6 justify-center text-center align-middle items-center">
              <a
                href="https://github.com/shagunZ/Bookstore-shoppingCart"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 text-sm rounded-lg px-4 py-1 "
              >
          <img src={Github} alt="arrow icon" className="w-7 invert" />
              </a>
              <a
                href="https://github.com/shagunZ/Bookstore-shoppingCart"
                target="_blank"
                rel="noreferrer"
                className="text-[#b67ef2] font-bold flex items-center text-sm border-b border-[#b67ef2]"
              >
                Link{" "}
                <img src={NorthEastArrow} alt="arrow icon" className="w-7" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=nf5j6xxLNW0"
                target="_blank"
                rel="noreferrer"
                className=" flex items-center text-sm"
              >
                <img src={Youtube} alt="arrow icon" className="w-7" />
              </a>
            </div>
          </div>


        </main> */}

        <a
          href="https://github.com/shagunZ?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center text-sm tracking-widest rounded-full py-3 bg-neutral-900"
        >
          View More{" "}
        </a>
      </div>
    </>
  );
}
