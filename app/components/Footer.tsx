import Link from "next/link";
import React from "react";

const Footer = ({ navBarData }: any) => {
  const footerObject = navBarData.find((obj: any) => obj.title === "Footer");
  const sectionSize = Math.ceil(footerObject.navItems.length / 4);

  // Divide the data into four sections
  const section1 = footerObject.navItems.slice(0, sectionSize);
  const section2 = footerObject.navItems.slice(sectionSize, sectionSize * 2);
  const section3 = footerObject.navItems.slice(
    sectionSize * 2,
    sectionSize * 3
  );
  const section4 = footerObject.navItems.slice(sectionSize * 3);
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-100">
        <div className="flex flex-col text-center w-full">
          <p className="sm:text-3xl text-2xl font-bold title-font mt-4 text-blue-800">
            Quick Links that might help
          </p>
        </div>
        <div className="px-5 p-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            {/* <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image src={logo} alt={""} height={60} width={60} />
              <span className="ml-3 text-xl">Tailblocks</span>
            </a> */}
            {/* <p className="mt-2 text-sm text-blue-800">
              Air plant banjo lyft occupy retro adaptogen indego
            </p> */}
          </div>

          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              {section1.map((obj: any, index: any) => (
                <nav className="list-none mb-4" key={index}>
                  <Link
                    href={obj.slug}
                    className="text-gray-600 hover:text-gray-800 font-semibold"
                    prefetch={false}
                  >
                    * {obj.title}
                  </Link>
                </nav>
              ))}
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              {section2.map((obj: any, index: any) => (
                <nav className="list-none mb-4" key={index}>
                  <Link
                    href={obj.slug}
                    className="text-gray-600 hover:text-gray-800 font-semibold"
                    prefetch={false}
                  >
                    * {obj.title}
                  </Link>
                </nav>
              ))}
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              {section3.map((obj: any, index: any) => (
                <nav className="list-none mb-4" key={index}>
                  <Link
                    href={obj.slug}
                    className="text-gray-600 hover:text-gray-800 font-semibold"
                    prefetch={false}
                  >
                    * {obj.title}
                  </Link>
                </nav>
              ))}
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              {section4.map((obj: any, index: any) => (
                <nav className="list-none mb-4" key={index}>
                  <Link
                    href={obj.slug}
                    className="text-gray-600 hover:text-gray-800 font-semibold"
                    prefetch={false}
                  >
                    * {obj.title}
                  </Link>
                </nav>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2024 New-Lyf —
              <a
                href="https://twitter.com/_mbbsabroad"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @mbbsadmissionsinabroad
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a
                className="text-gray-500"
                href="https://www.facebook.com/pg/mbbsadmissionsinabroad/"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-500"
                href="https://twitter.com/_mbbsabroad"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-500"
                href="https://www.instagram.com/mbbsadmissionsinabroad/"
                target="_blank"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-500"
                href="http://www.linkedin.com/in/mona-kumari-8a53321aa"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
