import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email or do something with the form data
    console.log("Form submitted!");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
  };

  return (
    <div className="bg-gradient-to-r from-green-900 via-green-600 to-green-400 auto-h-screen">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Fill in the form below or contact me on WhatsApp to get started.
            </p>
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
              <a
                href="https://api.whatsapp.com/send?phone=919606791418,917999653696&text=Hello!%20I%20would%20like%20to%20get%20in%20touch."
                className="mt-2 text-white hover:text-black"
              >
                Contact me on WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-900">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-900">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-900">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="pt-5
">
<button
                 type="submit"
                 className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text
-white font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
               >
Send
</button>
</div>
</div>
</form>
</div>
</div>
<div className="mt-12 sm:flex sm:justify-center">
<div className="mt-8 sm:mt-0 sm:ml-3">
<div className="flex items-center justify-center space-x-4">
<a
             href="https://api.whatsapp.com/send?phone=+919606791418&text=Hello!"
             className="text-gray-400 hover:text-gray-500"
          / >
<span className="sr-only">WhatsApp</span>
<svg
               className="h-6 w-6"
               fill="currentColor"
               viewBox="0 0 24 24"
               aria-hidden="true"
             ></svg><a href="mailto:blackhatsys@gmail.com" className="text-gray-400 hover:text-gray-500">
             <span className="sr-only">Email</span>
             <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
             <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M22 12H2"
                            />
             <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 6l-6 6-6-6"
                            />
             <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 18l-6-6 6-6"
                            />
             </svg>
             </a>
             </div>
             </div>
             </div>
             </div>
             </div>
             );
             };
             export default ContactUs;