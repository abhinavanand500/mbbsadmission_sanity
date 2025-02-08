import React from "react";
import Image from "next/image";
import WhyusImg from "./Assets/whyus.webp";

const Whyus = () => {
  const reasons = [
    {
      key: "Affordable Options",
      value:
        "Study MBBS abroad at the best MCI-approved medical universities with reasonable tuition fees and low living expenses.",
    },
    {
      key: "World-Class Education",
      value:
        "Gain access to world-class medical education and globally recognized degrees.",
    },
    {
      key: "Cultural Exposure",
      value:
        "Experience diverse cultures and enhance your global perspective while studying abroad.",
    },
    {
      key: "Advanced Facilities",
      value:
        "Benefit from advanced infrastructure, modern labs, and state-of-the-art facilities.",
    },
    {
      key: "International Networking",
      value:
        "Build a global network with peers, professors, and medical professionals from around the world.",
    },
    {
      key: "No Donation Fees",
      value: "Secure admissions without any donations or hidden charges.",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto">
        <div className="text-center my-10 ">
          <h2 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-4xl mt-4 mb-8">
            WHY STUDY MBBS IN ABROAD?
          </h2>
          <p className="lg:w-3/4 mx-auto leading-relaxed text-base text-justify">
            Embarking on an MBBS journey abroad is an exciting and life-changing
            decision. But with so many options available, it is essential to
            partner with a trusted advisor who understands your aspirations and
            can guide you every step of the way. Here's why we are the preferred
            choice for students seeking to pursue their MBBS degree overseas:
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {reasons.map((reason, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex flex-col p-4 h-full">
                <div className="flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-blue-700 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">{reason.key}</span>
                </div>
                <p className="mt-2 text-sm text-gray-700">{reason.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whyus;
