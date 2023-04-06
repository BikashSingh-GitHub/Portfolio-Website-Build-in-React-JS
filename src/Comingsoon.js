import React, { useState, useEffect } from 'react';

function Comingsoon() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Calculate the time remaining until launch
    const launchDate = new Date('2023-05-01T00:00:00Z');
    const now = new Date();
    const timeDiff = launchDate - now;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);
    setCountdown({ days, hours, minutes, seconds });

    // Update the countdown every second
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDiff = launchDate - now;
      const days = Math.floor(timeDiff / (3400 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: Implement email subscription logic
    console.log(`Subscribed with email: ${email}`);
    setEmail('');
  }

  return (
    <div className="flex flex-col bg-gradient-to-r from-blue-700 via-green-500 to-blue-00 min-h-screen items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Coming Soon!</h1>
      <p className="text-lg">My Portfolio website is currently under construction.</p>
      <h4 className="text-1xl text-blue-800 font-bold mb-4">Bikash Kumar Singh</h4>
      <h4 className="text-1xl  text-gray-700 font-bold mb-4">E-mail :- blackhatsys@gmail.com</h4>
      <div className="mt-8 flex space-x-8">
        <div className="text-center">
          <p className="text-3xl font-bold">{countdown.days}:</p>
          <p className="text-sm font-medium text-gray-800">Days</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">{countdown.hours}:</p>
          <p className="text-sm font-medium text-gray-800">Hours</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">{countdown.minutes}:</p>
          <p className="text-sm font-medium text-gray-800">Minutes</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">{countdown.seconds}</p>
          <p className="text-sm font-medium text-gray-800">Seconds</p>
        </div>
      </div>
"
         
          <form className="mt-8 flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            className="py-2 px-4 rounded-md border-gray-400 border-2 focus:outline-none"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <button
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 focus:outline-none"
            type="submit"
          >
            Subscribe
          </button>
        </form>
        </div>
  
  );
}

export default Comingsoon;
