import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe"
import Navbar3 from "./Navbar3";
import Navbar4 from "./Navbar4";
import ContactUs from "./ContactUs";
import Comingsoon from "./Comingsoon";
// import "./Navbar.css"
import CertificationShowcase from "./CertificationShowcase";
import CertificateCard from "./CertificateCard";

function App() {
  return (

<div className="flex flex-col h-screen">


<Navbar />
 
<Navbar3/>
    <Navbar4/>
    <CertificationShowcase/>

<AboutMe/>
{/* <Coomingsoon/> */}
<ContactUs/>
    </div>
    
  );
}

export default App;
