import React from 'react';


const Navbar2 = () => {
  return (
<div class="bg-gradient-to-r from-green-600 via-red-800 to-orange-500 min-h-screen">  


   <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Tokn Music */}
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <img className="rounded" src="https://media.licdn.com/dms/image/C560BAQFYiFx0xUCKmA/company-logo_200_200/0/1650929235489?e=2147483647&v=beta&t=p7yV2pUO72LErwCmgBquJ8uQi7GsphDj__K4s9Di9vM" alt="Tokn Music Logo" />

            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-900">
                React Frontend Developer at Tokn Music (Full-time)
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Tokn Music was founded in 2021 to unlock the potential of the music industry by bridging connections and providing mutually beneficial value to all participating parties. The company enables musicians to build additional sources of revenue by selling streaming royalties to fans and investors through our order matching engine marketplace. Based in Discovery Bay, California, I worked in this role from September 2021 to March 2023.
              </p>
              <ul className="list-disc mt-4 pl-4">
             <li> Developing new user-facing features using React.js</li>
             <li>Building reusable components and front-end libraries for future use</li>
             <li>Translating designs and wireframes into high quality code</li>
             <li>Optimizing components for maximum performance across a vast array of web-capable devices and browsers</li>
                <li>Built the "Tokn Music" Minimum Viable Product (MVP).</li>
                <li>Developed Beta-versions of the Frontend and the web application built in React.js.</li>
                <li>Serviced the integration between the Backend and Frontend of the web application.</li>
                <li>Worked to develop and integrate blockchain technology into the platform.</li>
              </ul>
              <p className="mt-4 text-base text-gray-500">
                Skills: HTML, CSS, Javascript, Adobe-XD, Material-UI, Chakra-UI, Bootstrap, React-Js, and Redux.
              </p>
            </div>
          </div>

          {/* Suggaa */}
          <div className="mt-10 lg:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <img className='rounded' src="data:image/jpeg;base64,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" alt="Tokn Music Logo" />

            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-900">
                React-Native Frontend Developer at Suggaa (Full-time)
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Suggaa is an online cab aggregator service that focuses on providing safe and comfortable rides for customers and the best-in-class earnings and savings opportunities to driver partners. Based in Bengaluru, India, I worked in this role from January 2021 to August 2021.
              </p>
              <ul className="list-disc mt-4 pl-4">
                <li>Worked on the UI of a mobile app built in React Native and Tailwind CSS.</li>
                <li>Developed responsive UI components that adapt to different screen sizes.</li>
                <li>Collaborated with UX designers and developers to implement new features and design changes.</li>
                <li>Conducted code reviews and provided feedback to ensure high-quality code and adherence to best practices.</li>
                <li>Participated in Agile development sprints and contributed to team planning and estimation.</li>
                <li>Debugged and resolved issues with UI functionality and performance.</li>
                <li>Stayed up-to-date with the latest trends and advancements in UI development and shared knowledge with the team.</li>
                <li>Documented UI components and design patterns for future use.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar2;