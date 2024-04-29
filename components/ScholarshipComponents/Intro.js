import Image from "next/image";
import React from "react";
import About from "../../pages/scholarship/assets/about.jpg";

const Intro = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p class="sm:mb-8 leading-relaxed content-stretch p-4 sm:mx-8 text-justify text-base/loose">
            Attention, future DOCTORS! The Vaidya Jyothi Scholarship, a
            prestigious endeavour by Doctor Dreams, has unfolded its online
            registration form. If you’re eager to apply, invest your quality
            time in carefully reviewing the guidelines and ensuring completion
            of the registration form. Once accomplished, make the online payment
            take a moment to print your hall ticket. For those meeting the
            eligibility criteria, and securing top 100 ranks in the Vaidya
            Jyothi Scholarship you all can anticipate a scholarship award on
            your Foreign Medical Universities tuition fees of approximately Rs
            1.5 to 2.5 lakhs individually. Your first stepping stone begins
            starting with your registration to Vaidya Jyothi Scholarship. What
            better awaits you, to accomplish your dreams.
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/4 w-5/6">
          <Image
            class="object-cover object-center rounded"
            alt="hero"
            height={300}
            width={600}
            src={About}
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
