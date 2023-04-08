import React from 'react';

function AboutMe() {
  return (
    <div className="bg-gradient-to-r from-green-900 via-green-600 to-green-400 h-screen">
      <header className="bg-gradient-to-l from-green-400 via-green-300 to-green-300">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            About Me
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-2 py-2 sm:px-0">
            <p className="text-lg text-white lg:text-xl xl:text-2xl">
              Hi, I'm Bikash Kumar Singh. I'm a Frontend Developer with two years of experience in Software Industry. I specialize in building React based applications.
            </p>
            <p className="mt-4 text-lg text-white lg:text-xl xl:text-2xl">
              In my free time, I enjoy listen to songs and play games. I'm also passionate about computer application development.
            </p>
          </div>
        </div>
      </main>
      <style jsx>{`
        /* Custom styles */
        main {
          margin-top: 4rem;
        }
        h1 {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default AboutMe;
