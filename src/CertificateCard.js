import React from "react";

function CertificateCard({ certificate }) {
  return (
    <div className="bg-green-200 hover:bg-green-300 overflow-hidden shadow rounded-lg">
      <img
        className="w-full h-68 object-cover"
        src={certificate.image}
        alt={certificate.title}
      />
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">
          {certificate.title}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-700">
          {certificate.description}
        </p>
        <div className="mt-4 flex justify-between">
          <div className="flex">
            <svg
              className="flex-shrink-0 h-5 w-5 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18l-9-9 9-9 1.41 1.41L4.83 9H18v2H4.83l6.58 6.59L10 18z"
                clip-rule="evenodd"
              />
            </svg>
            <div className="ml-2 text-sm text-gray-800">{certificate.issuer}</div>
          </div>
          <div className="text-sm text-gray-900">{certificate.date}</div>
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
