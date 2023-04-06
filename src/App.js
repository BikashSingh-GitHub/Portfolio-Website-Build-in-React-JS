import React from "react";

import Navbar from "./Navbar";
import Navbar3 from "./Navbar3";
import Navbar4 from "./Navbar4";
import ContactUs from "./ContactUs";
import Comingsoon from "./Comingsoon"
// import "./Navbar.css"

function App() {
  return (
    <div className="flex flex-col h-screen">

      <Navbar />
      <Navbar3 />
      <Navbar4 />
{/* 
<ContactUs/>
<Comingsoon /> */}
    
    </div>
  );
}

export default App;
