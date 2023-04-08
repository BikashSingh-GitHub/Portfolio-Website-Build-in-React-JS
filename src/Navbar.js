import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope,FaTwitter } from "react-icons/fa";
import "./Homepage.css"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';


function HomePage() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (

<div class="bg-gradient-to-r from-green-900 via-green-600 to-green-400 auto-h-screen ">

<header className="bg-gradient-to-l from-green-400 via-green-300 to-green-300">
  <nav className="container mx-auto px-3 py-3 flex flex-wrap justify-between items-center">
    <div className="flex items-center">
      <a className="text-gray-1000 text-4xl font-bold hover:text-orange-500 mr-4" href="#">Portfolio</a>
    </div>
    <div className="flex mt-2 md:mt-0">
      <a className="py-2 px-4 text-gray-800 font-bold hover:text-blue-100 text-lg mr-4" href="#">Home</a>
      <a className="py-2 px-4 text-gray-800 font-bold hover:text-blue-100 text-lg mr-4" href="#">Projects</a>
      <a className="py-2 px-4 text-gray-800 font-bold hover:text-blue-100 text-lg mr-4" href="#">About</a>
      <Link to ="/ContactUs" className="py-2 px-4 text-gray-800 font-bold hover:text-blue-100 text-lg  mr-4" href="#">Contact</Link>
    
    </div>
  

    <div className="flex  items-center">
        <div className="ml-1 ">
          <a className=" hover:text-blue-100" href="https://www.linkedin.com/in/bikash-singh-410204aa/">
            <FaLinkedin size={34} />
          </a>
        </div>
        <div className="ml-4">
          <a className=" hover:text-blue-100" href="blackhatsys@gmail.com">
            <FaEnvelope size={34} />
          </a>
        </div>
        <div className="ml-4">
          <a className=" hover:text-gray-100" href="https://github.com/BikashSingh-GitHub">
            <FaGithub size={34} />
          </a>
        </div>
        <div className="ml-4">
          <a className="hover:text-blue-100" href="https://twitter.com/BikashSinghTwit">
            <FaTwitter size={34} />
          </a>
        
        </div>
      </div>
  
  </nav>


</header>

      <main className="container mx-auto mt-10 px-6">
  <div className="flex flex-col md:flex-row">
    <div className="md:w-1/2">
   <br></br><br></br>
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
      >
      <h1 className="text-green-400 inline-block">Hi, I'm</h1> Bikash Singh
      </motion.h1>
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text lg sm:text-justify font-mono font-bold md:text-justify font-mono font-bold lg:text-2xl font-mono font-bold"
      >
     As a Frontend Developer, I have two years of working experience in React and am currently seeking job opportunities in the software industry.
   
      </motion.p>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 flex flex-col md:flex-row"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md md:mr-4 mb-4 md:mb-0"
          href="https://github.com/BikashSingh-GitHub?tab=repositories"
        >
          View My Work
        </motion.a>
      </motion.div>
    </div>
    <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center items-center">


<div className="artwork"></div>

      {/* <motion.img
        ref={ref}
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full sm:w-4/2 md:w-full lg:w-4/5 xl:w-4/6 h-auto border-4 border-gray-500 rounded-full sm:float-left"
        src="https://media.licdn.com/dms/image/D4D03AQHjP8Tq9KHgXQ/profile-displayphoto-shrink_200_200/0/1680368942532?e=1686182400&v=beta&t=El2S20VwzoEy4-uDmLm5VwQ1kCfuhA97Z-IJSC5Gf2c"
        alt="[Insert alternate text for your profile picture]"
      /> */}
      
    </div>
  </div>
</main>






</div>

);
}

export default HomePage;