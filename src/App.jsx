import Header from "./components/Header";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Footer from "./components/Footer";
import VideoBackground from "./components/VideoBackground";
import { About } from "./components/About";
function App() {
  return (
    <>
      <div className="mx-auto">
        <Header />
<VideoBackground/>
        <Hero />
<About/>
        <Projects />

        <Stack />

        <Footer />
      </div>
    </>
  );
}

export default App;
