import { Footer } from "./Components/Footer";
import { GeneralPage } from "./Components/GeneralPage";
import { BackgroundImage } from "./Components/GeneralPage";
import { RegPage } from "./Components/RegPage";
import './App.css';
import { MiddlePage } from "./Components/MiddlePage";
import React, {useRef} from "react";


function App() {
 
  const middlePageRef = useRef(null);
  return (
    <>
    <BackgroundImage />
    <RegPage  />
    <GeneralPage middlePageRef ={middlePageRef} />
    <Footer />
    <MiddlePage middlePageRef ={middlePageRef} />
 </>
  );
}

export default App;
