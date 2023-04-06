import React from "react";

const workExperience = [
  {
    id: 1,
    position: "Full Stack Developer",
    company: "ABC Company",
    location: "New York, NY",
    startDate: "May 2019",
    endDate: "Present",
    responsibilities: [
      "Developed and maintained web applications using React, Node.js, and MongoDB",
      "Collaborated with designers to create responsive and user-friendly interfaces",
      "Implemented automated testing using Jest and Enzyme",
      "Managed and mentored a team of junior developers",
    ],
  },
  {
    id: 2,
    position: "Front End Developer",
    company: "XYZ Inc.",
    location: "San Francisco, CA",
    startDate: "January 2017",
    endDate: "April 2019",
    responsibilities: [
      "Built and maintained e-commerce websites using React and Redux",
      "Worked closely with UI/UX designers to implement responsive designs",
      "Optimized websites for speed and accessibility",
      "Contributed to the development of a design system for the company",
    ],
  },
];

const WorkExperience = () => {
  return (
<div class="bg-gradient-to-r from-blue-600 via-green-400 to-yellow-300 min-h-screen">        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
        {workExperience.map((job) => (
          <div key={job.id} className="mb-12">
            <h2 className="text-2xl font-bold mb-2">{job.position}</h2>
            <p className="text-gray-700 mb-2">{job.company}</p>
            <p className="text-gray-700 mb-2">{job.location}</p>
            <p className="text-gray-700 mb-2">{job.startDate} - {job.endDate}</p>
            <ul className="list-disc list-inside mb-4">
              {job.responsibilities.map((res) => (
                <li key={res}>{res}</li>
              ))}
            </ul>
            <hr className="border-t-2 border-gray-400 mb-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;



