import * as React from "react";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Header from "../components/Header";

const Home: React.FC = () => {
  const handleOnScroll = () => {
    console.log("scrolling");
  };

  return (
    <div className="">
      <header className="fixed px-[6em] w-full flex max-h-[12rem] items-center h-[11.12em]">
        <span className="text-[1.75em] mx-[96px] items-center font-bold font-mono text-[#E96479]">
          LMENDOZAN90
        </span>
      </header>
      <main className="relative h-screen overflow-y-auto overscroll-y-contain snap-y snap-mandatory">
        <div className="snap-start">
          <Header />
        </div>
        <div className="snap-start">
          <Skills />
        </div>
        <div className="snap-start">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Home;
