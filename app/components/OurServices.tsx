import React from "react";
import world from "./Assets/world.png";
import scholar from "./Assets/scholar.png";
import handshake from "./Assets/handshake.png";
import community from "./Assets/community.png";
import Image from "next/image";

const OurServices = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-4xl mt-4 mb-8">
            OUR SERVICES
          </h2>
          <p className="lg:w-3/4 mx-auto leading-relaxed text-base text-justify">
            We provide complete study abroad admission solution services to
            Indian students in seeking admission to the popular course MBBS. We
            render Indian students to the best when it comes to MBBS admission
            in abroad including MBBS in Philippines, Armenia, Belize, France,
            support services at an affordable consulting fee. We build careers
            with great opportunities, come and join us for a great future!
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <Image
                alt="World"
                src={world}
                height={50}
                width={50}
                className="text-blue-700 w-12 h-12 mb-3 inline-block"
              />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                13 Countries
              </h2>
              <p className="leading-relaxed">
                Medical Program At The Cost Of Private Medical College
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <Image
                alt="World"
                src={scholar}
                height={50}
                width={50}
                className="text-blue-700 w-12 h-12 mb-3 inline-block"
              />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                5000+
              </h2>
              <p className="leading-relaxed">
                Students already enrolled through us and now excelling in their
                career
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <Image
                alt="World"
                src={handshake}
                height={50}
                width={50}
                className="text-blue-700 w-12 h-12 mb-3 inline-block"
              />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                250+
              </h2>
              <p className="leading-relaxed">
                Universities Authorized Partners enhances our academic network
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <Image
                alt="World"
                src={community}
                height={50}
                width={50}
                className="text-blue-700 w-12 h-12 mb-3 inline-block"
              />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                15+
              </h2>
              <p className="leading-relaxed">
                Years of Experience In Guiding & Assisting Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
