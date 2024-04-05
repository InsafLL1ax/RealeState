import { Footer } from "./Components/Footer";
import { GeneralPage } from "./Components/GeneralPage";
import { BackgroundImage } from "./Components/GeneralPage";
import { RegPage } from "./Components/RegPage";
import './App.css';
import { MiddlePage } from "./Components/MiddlePage";
import React, {useRef} from "react";
import { WorkPage } from "./Components/WorkPage";

function App() {
 
  const middlePageRef = useRef(null);
  const HowItWorksRef = useRef(null)
  return (
    <>
    <BackgroundImage />
    <RegPage  />
    <GeneralPage middlePageRef ={middlePageRef} HowItWorksRef ={HowItWorksRef}/>
    <Footer />
    <MiddlePage middlePageRef ={middlePageRef} />
    <WorkPage HowItWorksRef ={HowItWorksRef} />
 </>
  );
}

export default App;
