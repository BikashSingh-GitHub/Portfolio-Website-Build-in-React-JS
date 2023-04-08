import React from "react";
import CertificateCard from "./CertificateCard";

const certificates = [
  {
    id: 1,
    title: "React Developer Certification",
    description:
      "This certificate above verifies that Bikash Kumar Singh successfully completed the course React - The Complete Guide (incl Hooks, React Router, Redux) on 10/15/2021 as taught by Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller on Udemy. The certificate indicates the entire course was completed as validated by the student. The course duration represents the total video hours of the course at time of most recent completion.",
    issuer: "Udemy",
    date: "Oct 2021",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-1a7d55b4-0ad2-4a8a-bbe4-577aa9f4d909.jpg?v=1634305448000",
  },
  {
    id: 2,
    title: "React Native Certifiaction",
    description:"This certificate above verifies that Bikash Kumar Singh successfully completed the course The Complete React Native + Hooks Course on 09/16/2021 as taught by Stephen Grider on Udemy. The certificate indicates the entire course was completed as validated by the student. The course duration represents the total video hours of the course at time of most recent completion.",

    issuer: "Udemy",
    date: "Sep 2021",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-43e457ab-4f1b-4ffc-82a5-0d7b39d7bbfc.jpg?v=1631807796000",
  },

  {
    id: 3,
    title: "Bloackchain Certification",
    description:
      "This certificate above verifies that Bikash Kumar Singh successfully completed the course Blockchain A-Z™: Learn How To Build Your First Blockchain on 08/12/2022 as taught by Hadelin de Ponteves, Kirill Eremenko, Ligency I Team, Ligency Team on Udemy. The certificate indicates the entire course was completed as validated by the student. The course duration represents the total video hours of the course at time of most recent completion.",
    issuer: "Udemy",
    date: "Aug 2022",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-f8b8d02d-b2fb-4cac-9935-b63fc8ecb3dd.jpg?v=1660244621000",
  },
];

function CertificationShowcase() {
  return (

    <div className="bg-gradient-to-r from-green-900 via-green-600 to-green-400  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2 className="text-3xl font-extrabold tracking-tight text-green-200 ">
        Certification Showcase :-
      </h2>
      <div className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-3 ">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}

export default CertificationShowcase;
