import { ScrollShadow } from "@heroui/react";

import Header from "./sections/Header"
import Profile from "./sections/Profile"
import TechSkills from "./sections/TechSkills"
import Connect from "./sections/Connect"
import Content from "./sections/Content"

// import useFunctions from "./hooks/useFunctions";

import "./App.css";

function App() {
  return (
    <>
      <div className="bg-grid lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center">
        <div className="block h-full w-full space-y-2 p-2 sm:p-5 lg:flex lg:max-h-[1080px] lg:max-w-[1920px] lg:gap-5 lg:space-y-0 lg:rounded-xl">
          <ScrollShadow
            hideScrollBar
            size={100}
            className="h-full space-y-2 scroll-smooth rounded-xl lg:w-5/12 lg:overflow-y-srroll lg:overflow-x-clip 2xl:w-4/12"
          >
            <Header/>
            <Profile/>
            <TechSkills/>
            <Connect/>
          </ScrollShadow>

          <div className="scroll-smooth h-full rounded-xl lg:w-7/12 lg:overflow-y-auto lg:overflow-x-clip 2xl:w-8/12">
            <div className="h-full space-y-2 rounded-xl lg:space-y-0">
            
            <Content/>
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
