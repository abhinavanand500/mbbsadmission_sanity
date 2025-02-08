"use client";
import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "../../lib/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SliderDataProps {
  sliderData: {
    slider: {
      sliderImage: string;
    }[];
  };
}

const HomeBanner: React.FC<SliderDataProps> = ({ sliderData }) => {
  const URL = process.env.NEXT_PUBLIC_LEAD_URL as string;
  const accessToken = process.env.NEXT_PUBLIC_LEAD_SECRET_KEY as string;

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const notifySuccess = () =>
    toast.success("Thanks for contacting us, will respond to this ASAP!");

  const notifyFailure = () =>
    toast.error(
      "Sorry, there might be an issue with the server. Please try again later."
    );

  const notifyEmptyField = () =>
    toast.error(
      "Please ensure all fields in the form are completed; some details are missing."
    );

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!name || !phone || !email || !message) {
      notifyEmptyField();
      setIsLoading(false);
      return;
    }

    const requestData = {
      fields: {
        Name: name,
        Phone: phone,
        Email: email,
        Message: message,
      },
      actions: [
        {
          type: "SYSTEM_NOTE",
          text: "Lead Source: Home Page",
        },
      ],
    };

    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(requestData),
    };

    try {
      const response = await fetch(URL, requestOptions);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setPhone("");
      setName("");
      setEmail("");
      setMessage("");
      notifySuccess();
      localStorage.setItem("isFormFilled", "true");
    } catch (error) {
      notifyFailure();
    } finally {
      setIsLoading(false);
    }
  };

  const sliderContent = sliderData?.slider;

  return (
    <section className="text-gray-600 body-font relative">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="mx-auto flex-wrap">
        <div className="lg:w-full md:w-full bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start">
          {sliderContent && (
            <Image
              src={urlFor(sliderContent[0].sliderImage).url()}
              className="opacity-30"
              alt="Background Image"
              layout="fill"
              loading="lazy"
              objectFit="fill"
              quality={100}
            />
          )}
          <div className="mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-opacity-100">
              <h1 className="title-font sm:text-5xl text-2xl font-bold text-blue-900">
                Embark on Your Medical Journey with Our Advisory by Your Side
              </h1>
              <p className="leading-relaxed mt-4 text-black">
                No more confusion about your career prospects will haunt you!
                Our advisors are here to lend you effective counsel on the
                career path you want to embark on. You are to have a clearer
                vision with our advisors. We ensure guaranteed success.
              </p>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white mt-8 flex flex-col md:ml-auto w-full md:py-8 py-4 md:mt-10 z-10 px-4 rounded-lg">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-4">
                Request Free Consultation
              </h2>
              <div className="relative mb-4">
                <input
                  placeholder="Enter your Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <input
                  placeholder="Enter your Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <input
                  placeholder="Enter your Phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  name="phone"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <textarea
                  placeholder="Enter your Message"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                className="text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg"
                onClick={handleSubmit}
              >
                {isLoading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-200 animate-spin fill-gray-100"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "SEND REQUEST"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
