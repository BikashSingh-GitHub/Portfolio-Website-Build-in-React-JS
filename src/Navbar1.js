import React from "react";
import { motion } from "framer-motion";

function Navbar1() {
  return (
<div class="bg-gradient-to-r from-green-600 via-red-800 to-orange-500 min-h-screen">  



      <main className="container mx-auto mt-10 px-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-800"
            >
              Education Qualifications
            </motion.h1>
            <div className="mt-8">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="text-2xl font-bold text-gray-800 mb-2"
  >
    Master of Computer Applications
  </motion.h2>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="text-gray-600"
  >
    ITM University, India
  </motion.p>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    className="text-gray-600"
  >
    2017-2020
  </motion.p>
  <div className="mt-4"></div>
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.8 }}
    className="text-2xl font-bold text-gray-800 mb-2"
  >
    Bachelor of Computer Applications
  </motion.h2>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1 }}
    className="text-gray-600"
  >
    ITM University, India
  </motion.p>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.2 }}
    className="text-gray-600"
  >
    2014-2017
  </motion.p>
  <div className="mt-4"></div>
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.4 }}
    className="text-2xl font-bold text-gray-800 mb-2"
  >
    Higher-Secondary School Education (Class-12th)
  </motion.h2>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.6 }}
    className="text-gray-600"
  >
    Meghalaya Board of School Education
  </motion.p>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.8 }}
    className="text-gray-600"
  >
    2012-2014
  </motion.p>
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.4 }}
    className="text-2xl font-bold text-gray-800 mb-2"
  >
  Secondary School Education (Class-10th)
  </motion.h2>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.6 }}
    className="text-gray-600"
  >
    Meghalaya Board of School Education
  </motion.p>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.8 }}
    className="text-gray-600"
  >
    .
  </motion.p>   
                  </div>
                  </div>
                 
                  </div>
                  </main>
                  </div>
                  );
                  }
                  
                  export default Navbar1;