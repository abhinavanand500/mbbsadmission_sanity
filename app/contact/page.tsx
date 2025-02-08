// "use client";
// "use client";
// import React, { useState, useEffect } from "react";
// import { Tabs, Tab } from "./components/TabComponent";
// import CountryList from "./utilities/countriesAndStates.json";

// interface LocationData {
//   address: string;
//   phone: string;
//   mapUrl: string;
// }

// const courseCountryMapping: Record<string, string[]> = {
//   "MBBS Abroad": [
//     "Germany",
//     "Malaysia",
//     "Philippines",
//     "Kazakhstan",
//     "Georgia",
//     "USA",
//     "Others",
//   ],
//   "PG Medical": ["Germany"],
//   "Nursing Jobs": ["Germany", "Netherlands", "Denmark", "Lithuania", "Canada"],
// };

// const Page: React.FC = () => {
//   const [currentLocation, setCurrentLocation] = useState<LocationData>({
//     address: "Loading...",
//     phone: "Loading...",
//     mapUrl: "",
//   });
//   const [locations, setLocations] = useState<{ [key: string]: LocationData }>(
//     {}
//   );
//   const [isFetching, setIsFetching] = useState(true);
//   const [states, setStates] = useState<string[]>([]);
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [selectedCourse, setSelectedCourse] = useState<string>("");
//   const [availableCountries, setAvailableCountries] = useState<string[]>([]);

//   useEffect(() => {
//     const apiHost = process.env.NEXT_PUBLIC_API_HOST;
//     const query = encodeURIComponent('*[ _type == "contactPage"]');

//     fetch(apiHost + query)
//       .then((res) => res.json())
//       .then((data) => {
//         const fetchedLocations = data.result.reduce((acc: any, item: any) => {
//           acc[item.branchName] = {
//             address: item.branchAddress,
//             phone: item.branchMobNo[0]?.mobNum || "N/A",
//             mapUrl: item.branchLocation,
//           };
//           return acc;
//         }, {});
//         setLocations(fetchedLocations);

//         if (Object.keys(fetchedLocations).length > 0) {
//           const firstLocation = Object.keys(fetchedLocations)[0];
//           setCurrentLocation(fetchedLocations[firstLocation]);
//         }
//       })
//       .finally(() => setIsFetching(false));
//   }, []);

//   const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const country = e.target.value;
//     setSelectedCountry(country);
//     // Find the selected country's states
//     const countryData = CountryList.find((item) => item.country === country);
//     setStates(countryData ? countryData.states : []);
//   };

//   const handleLocationChange = (location: string) => {
//     const selectedLocation = locations[location];
//     if (selectedLocation) {
//       setCurrentLocation(selectedLocation);
//     }
//   };

//   const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const course = event.target.value;
//     setSelectedCourse(course);
//     setAvailableCountries(courseCountryMapping[course] || []);
//   };

//   return (
//     <div>
//       <section className="text-gray-600 body-font relative">
//         <div className="container px-5 py-24 mx-auto flex md:flex-nowrap flex-wrap">
//           {/* Left Column */}
//           <div className="md:w-2/3 w-full flex flex-col">
//             {/* Tabs Section */}
//             <Tabs>
//               {Object.keys(locations).map((label) => (
//                 <Tab
//                   key={label}
//                   label={label}
//                   onClick={() => handleLocationChange(label)}
//                 >
//                   {/* Content inside tabs can be optional */}
//                 </Tab>
//               ))}
//             </Tabs>

//             {/* Map Section */}
//             <div
//               className={`bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative h-96 md:h-[600px] ${
//                 isFetching ? "shimmer" : ""
//               }`}
//             >
//               {!isFetching ? (
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   className="absolute inset-0 w-full h-full"
//                   title="map"
//                   src={currentLocation.mapUrl}
//                   style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
//                 ></iframe>
//               ) : (
//                 <div className="h-full w-full bg-gray-300"></div>
//               )}
//               <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
//                 <div className="lg:w-1/2 px-6">
//                   <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                     ADDRESS
//                   </h2>
//                   <p className="mt-1">{currentLocation.address}</p>
//                 </div>
//                 <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//                   <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                     PHONE
//                   </h2>
//                   <p className="leading-relaxed">{currentLocation.phone}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="md:w-1/3 w-full bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
//             <h2 className="text-blue-800 font-semibold text-4xl mb-1 title-font">
//               Contact Us
//             </h2>
//             <p className="leading-relaxed mb-5 text-gray-600">
//               Please provide your details below:
//             </p>
//             {/* Form Section */}
//             <div className="relative mb-4">
//               <label htmlFor="name" className="leading-7 text-sm text-gray-600">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label
//                 htmlFor="phone"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Phone
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label
//                 htmlFor="email"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="flex mb-4 space-x-4">
//               <div className="w-full">
//                 <label
//                   htmlFor="course"
//                   className="leading-7 text-sm text-gray-600"
//                 >
//                   Course / Job Interested
//                 </label>
//                 <select
//                   id="course"
//                   name="course"
//                   onChange={handleCourseChange}
//                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 >
//                   <option>--Select a Course --</option>
//                   {Object.keys(courseCountryMapping).map((course) => (
//                     <option key={course} value={course}>
//                       {course}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="w-full">
//                 <label
//                   htmlFor="studyCountry"
//                   className="leading-7 text-sm text-gray-600"
//                 >
//                   Study / Job Country
//                 </label>
//                 <select
//                   id="studyCountry"
//                   name="studyCountry"
//                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 >
//                   <option>--Select a Country to study --</option>
//                   {availableCountries.map((country) => (
//                     <option key={country} value={country}>
//                       {country}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <div className="flex mb-4 space-x-4">
//               <div className="w-full">
//                 <label
//                   htmlFor="residentCountry"
//                   className="leading-7 text-sm text-gray-600"
//                 >
//                   Resident Country
//                 </label>
//                 <select
//                   id="residentCountry"
//                   name="residentCountry"
//                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                   value={selectedCountry}
//                   onChange={handleCountryChange}
//                 >
//                   <option value="">--Select a Country--</option>
//                   {CountryList.map((country) => (
//                     <option key={country.alpha2Code} value={country.country}>
//                       {country.country}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="w-full">
//                 <label
//                   htmlFor="state"
//                   className="leading-7 text-sm text-gray-600"
//                 >
//                   State / Province
//                 </label>
//                 <select
//                   id="state"
//                   name="state"
//                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 >
//                   <option value="">--Select a State--</option>
//                   {states.map((state) => (
//                     <option key={state} value={state}>
//                       {state}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <button className="text-white bg-blue-800 border-0 py-2 mt-4 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//               Submit
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "./components/TabComponent";
import CountryList from "./utilities/countriesAndStates.json";

interface LocationData {
  address: string;
  phone: string;
  mapUrl: string;
}

const courseCountryMapping: Record<string, string[]> = {
  "MBBS Abroad": [
    "Germany",
    "Malaysia",
    "Philippines",
    "Kazakhstan",
    "Georgia",
    "USA",
    "Others",
  ],
  "PG Medical": ["Germany"],
  "Nursing Jobs": ["Germany", "Netherlands", "Denmark", "Lithuania", "Canada"],
};

const Page: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<LocationData>({
    address: "Loading...",
    phone: "Loading...",
    mapUrl: "",
  });
  const [locations, setLocations] = useState<{ [key: string]: LocationData }>(
    {}
  );
  const [isFetching, setIsFetching] = useState(true);
  const [states, setStates] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [availableCountries, setAvailableCountries] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    studyCountry: "",
    residentCountry: "",
    state: "",
  });
  const API_URL = process.env.NEXT_PUBLIC_LEAD_URL ?? "https://default-api.com";
  const ACCESS_TOKEN = process.env.NEXT_PUBLIC_LEAD_SECRET_KEY;
  useEffect(() => {
    const apiHost = process.env.NEXT_PUBLIC_API_HOST;
    const query = encodeURIComponent('*[ _type == "contactPage"]');

    fetch(apiHost + query)
      .then((res) => res.json())
      .then((data) => {
        const fetchedLocations = data.result.reduce((acc: any, item: any) => {
          acc[item.branchName] = {
            address: item.branchAddress,
            phone: item.branchMobNo[0]?.mobNum || "N/A",
            mapUrl: item.branchLocation,
          };
          return acc;
        }, {});
        setLocations(fetchedLocations);

        if (Object.keys(fetchedLocations).length > 0) {
          const firstLocation = Object.keys(fetchedLocations)[0];
          setCurrentLocation(fetchedLocations[firstLocation]);
        }
      })
      .finally(() => setIsFetching(false));
  }, []);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setFormData({ ...formData, residentCountry: country });

    const countryData = CountryList.find((item) => item.country === country);
    setStates(countryData ? countryData.states : []);
  };

  const handleLocationChange = (location: string) => {
    const selectedLocation = locations[location];
    if (selectedLocation) {
      setCurrentLocation(selectedLocation);
    }
  };

  const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const course = event.target.value;
    setSelectedCourse(course);
    setFormData({ ...formData, course });
    setAvailableCountries(courseCountryMapping[course] || []);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requestData = {
      fields: {
        Name: formData.name,
        Phone: formData.phone,
        Email: formData.email,
        Course: formData.course,
        StudyCountry: formData.studyCountry,
        ResidentCountry: formData.residentCountry,
        State: formData.state,
      },
      actions: [
        {
          type: "SYSTEM_NOTE",
          text: "Lead Source: Contact Page",
        },
      ],
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex md:flex-nowrap flex-wrap">
          {/* Left Column */}
          <div className="md:w-2/3 w-full flex flex-col">
            {/* Tabs Section */}
            <Tabs>
              {Object.keys(locations).map((label) => (
                <Tab
                  key={label}
                  label={label}
                  onClick={() => handleLocationChange(label)}
                >
                  {/* Content inside tabs can be optional */}
                </Tab>
              ))}
            </Tabs>

            {/* Map Section */}
            <div
              className={`bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative h-96 md:h-[600px] ${
                isFetching ? "shimmer" : ""
              }`}
            >
              {!isFetching ? (
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full"
                  title="map"
                  src={currentLocation.mapUrl}
                  style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                ></iframe>
              ) : (
                <div className="h-full w-full bg-gray-300"></div>
              )}
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">{currentLocation.address}</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">{currentLocation.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/3 w-full bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
            <h2 className="text-blue-800 font-semibold text-4xl mb-1 title-font">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Please provide your details below:
            </p>
            {/* Form Section */}
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="flex mb-4 space-x-4">
                <div className="w-full">
                  <label
                    htmlFor="course"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Course / Job Interested
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleCourseChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  >
                    <option value="">--Select a Course --</option>
                    {Object.keys(courseCountryMapping).map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="studyCountry"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Study / Job Country
                  </label>
                  <select
                    id="studyCountry"
                    name="studyCountry"
                    value={formData.studyCountry}
                    onChange={handleInputChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  >
                    <option value="">--Select a Country to study --</option>
                    {availableCountries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex mb-4 space-x-4">
                <div className="w-full">
                  <label
                    htmlFor="residentCountry"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Resident Country
                  </label>
                  <select
                    id="residentCountry"
                    name="residentCountry"
                    value={formData.residentCountry}
                    onChange={handleCountryChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  >
                    <option value="">--Select a Country--</option>
                    {CountryList.map((country) => (
                      <option key={country.alpha2Code} value={country.country}>
                        {country.country}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="state"
                    className="leading-7 text-sm text-gray-600"
                  >
                    State / Province
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  >
                    <option value="">--Select a State--</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-800 border-0 py-2 mt-4 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
