"use client";
import { Fragment, useState, useRef } from "react";
import { Dialog, Popover, Tab, Transition, Menu } from "@headlessui/react";
import { urlFor } from "@/lib/client";
import logo from "../../public/new-lyf-logo.webp";
import linkedIn from "../../public/images/linkedin.svg";
import insta from "../../public/images/insta2.svg";

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { navbar } from "@material-tailwind/react";

const ChevronDownIcon = () => (
  <svg
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const navigation = {
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ navBarData }: any) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [selectedMobileDropdown, setSelectedMobileDropdown] = useState("");

  const selectMobileDropdown = (navbarDataId: any) => {
    setSelectedMobileDropdown((prevNavbarDataId) => {
      if (prevNavbarDataId === navbarDataId) {
        return "";
      } else {
        return navbarDataId;
      }
    });
  };

  const toggleDropdown = () => {
    setOpen(!open);
  };
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={toggleDropdown}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div
                  className="ml-4 flex lg:ml-0  mt-4"
                  // onClick={toggleDropdown}
                >
                  <Link href="/" prefetch={false}>
                    <span className="sr-only mt-10">Your Company</span>
                    <Image
                      src={logo}
                      alt="Mbbs Admission in Abroad"
                      height={80}
                      width={120}
                    />
                  </Link>
                </div>
                <div
                  className="space-y-6 border-t border-gray-200 px-4 pt-8 ml-4"
                  onClick={toggleDropdown}
                >
                  <div key="Home Page" className="flow-root">
                    <Link
                      href="/"
                      prefetch={false}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Home
                    </Link>
                  </div>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="">
                  <Tab.Panels as={Fragment}>
                    {navBarData.map((navBar: any) => {
                      if (navBar.title !== "Footer") {
                        {
                          return (
                            <div
                              key={navBar._id}
                              className="space-y-4 px-4 pb-2 pt-8 ml-4"
                            >
                              <button
                                type="button"
                                className="w-full text-left items-center justify-between"
                                onClick={() => selectMobileDropdown(navBar._id)}
                              >
                                <p
                                  id="heading-mobile"
                                  className="font-medium text-gray-900 flex items-center"
                                >
                                  {navBar.title}
                                  <div
                                    className={`${
                                      selectedMobileDropdown === navBar._id
                                        ? "transform rotate-180"
                                        : ""
                                    } ml-4 font-bold text-gray-500`}
                                  >
                                    <ChevronDownIcon />
                                  </div>
                                </p>
                                {selectedMobileDropdown === navBar._id ? (
                                  <ul
                                    role="list"
                                    aria-labelledby={`${navBar._id}-heading-mobile`}
                                    className="mt-6 flex flex-col space-y-6"
                                  >
                                    {navBar.navItems.map((item: any) => (
                                      <li
                                        key={item.title}
                                        className="flow-root"
                                        onClick={toggleDropdown}
                                      >
                                        <Link
                                          href={item.slug}
                                          className="-m-2 p-2 text-gray-500 flex"
                                          prefetch={false}
                                        >
                                          <Image
                                            src={urlFor(item.image).url()}
                                            alt=""
                                            width={50}
                                            height={30}
                                            className="block h-auto w-5 flex-shrink-0 mr-5 object-contain"
                                          />
                                          {item.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                ) : null}
                              </button>
                            </div>
                          );
                        }
                      }
                    })}
                  </Tab.Panels>
                </Tab.Group>
                <div
                  className="space-y-6 px-4 pt-8 ml-4"
                  onClick={toggleDropdown}
                >
                  <div key="ausbildung" className="flow-root">
                    <Link
                      prefetch={false}
                      href="/ausbildung"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Ausbildung
                    </Link>
                  </div>
                </div>
                <div
                  className="space-y-6 px-4 pt-8 ml-4"
                  onClick={toggleDropdown}
                >
                  <div key="Learn German" className="flow-root">
                    <Link
                      href="/learn-german-language-course-in-bangalore"
                      className="-m-2 block p-2 font-medium text-gray-900"
                      prefetch={false}
                    >
                      Learn German
                    </Link>
                  </div>
                </div>
                <div
                  className="space-y-6 px-4 pt-8 ml-4"
                  onClick={toggleDropdown}
                >
                  <div key="Blog Page" className="flow-root">
                    <Link
                      href="/blog"
                      className="-m-2 block p-2 font-medium text-gray-900"
                      prefetch={false}
                    >
                      Blog
                    </Link>
                  </div>
                </div>
                <div
                  className="space-y-6 px-4 pt-8 ml-4"
                  onClick={toggleDropdown}
                >
                  <div key="Contact Page" className="flow-root">
                    <Link
                      href="/contact"
                      className="-m-2 block p-2 font-medium text-gray-900"
                      prefetch={false}
                    >
                      Contact
                    </Link>
                  </div>
                </div>

                {/* Page name for mobile / */}

                <div className="space-y-6 border-t border-gray-200 px-4 py-6 mt-20">
                  <div className="flow-root">
                    <p className="-m-2 block p-2 font-medium text-gray-900">
                      Connect with us on
                    </p>
                  </div>
                  <div className="ml-auto flex items-center">
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-2">
                      <p className="text-sm font-medium text-gray-700 hover:text-gray-800">
                        Connect with us on
                      </p>
                    </div>
                    {/* <a
                      href="https://github.com/abhinavanand500"
                      target="_blank"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      <Image src={github} height={60} width={60} alt={""} />
                    </a> */}
                    {/* <a
                      href="https://www.linkedin.com/in/abhinav-a-216a0a110/"
                      target="_blank"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      <Image
                        src={linkedIn}
                        height={60}
                        width={60}
                        alt="linkedin"
                      />
                    </a> */}
                    <a
                      href="https://www.instagram.com/mbbsadmissionsinabroad/"
                      target="_blank"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      <Image src={insta} height={60} width={60} alt="insta" />
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Computer view */}
      <header className="fixed top-0 z-20 w-full bg-white mb-40">
        {/* <a
          className="flex h-10 items-center justify-center bg-blue-800 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          href="auth"
        >
          *Scholarship Test Link*
        </a> */}
        <p className="flex h-10 items-center justify-center bg-blue-800 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          info@new-lyf.com
        </p>

        <nav aria-label="Top" className="mx-auto max-w-full sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className=" rounded-md bg-white text-gray-400 lg:hidden"
                onClick={toggleDropdown}
              >
                {/* <span className="absolute -inset-0.5" /> */}
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6 ml-4" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/" prefetch={false}>
                  <span className="sr-only">Your Company</span>
                  <Image src={logo} alt="logo" height={60} width={100} />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group
                className="hidden lg:ml-8 lg:block lg:self-stretch z-50 "
                ref={dropdownRef}
              >
                <div className="flex h-full space-x-8 ml-4">
                  <Link
                    href="/"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    prefetch={false}
                  >
                    Home
                  </Link>
                  {navBarData.map((navBar: any) => {
                    if (navBar.title !== "Footer") {
                      return (
                        <Menu as="div" key={navBar._id} className="flex">
                          {({ open }) => (
                            <>
                              <div className="relative flex">
                                <Menu.Button
                                  className={classNames(
                                    open
                                      ? "border-blue-800 text-blue-800"
                                      : "border-transparent text-gray-700 hover:text-gray-800",
                                    "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out outline-none"
                                  )}
                                >
                                  {navBar.title}
                                </Menu.Button>
                              </div>
                              {open && (
                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Menu.Items className="absolute inset-x-0 top-full text-sm text-gray-500">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div
                                      className="absolute inset-0 top-1/2 bg-white shadow"
                                      aria-hidden="true"
                                    />

                                    <div className="relative bg-white">
                                      <div className="mx-auto max-w-7xl px-8">
                                        <div className="gap-x-4 gap-y-6 py-8">
                                          <div className="row-start-1 grid grid-cols-5 gap-x-8 gap-y-10 text-sm">
                                            {navBar.navItems.map(
                                              (navItem: any) => (
                                                <Menu.Item key={navItem.title}>
                                                  {({ close }) => (
                                                    <div>
                                                      {/* <Link
                                                        href="/Home"
                                                        onClick={close}
                                                      > */}
                                                      <Link
                                                        href={`/${navItem.slug}`}
                                                        onClick={close}
                                                        prefetch={false}
                                                      >
                                                        <p
                                                          id={`${navItem._id}-heading`}
                                                          className="font-large text-gray-900 flex"
                                                        >
                                                          <Image
                                                            src={urlFor(
                                                              navItem.image
                                                            ).url()}
                                                            alt="navbar"
                                                            width={100}
                                                            height={100}
                                                            className="block h-auto w-5 flex-shrink-0 mr-5 object-contain"
                                                          />
                                                          {navItem.title}
                                                        </p>
                                                      </Link>
                                                    </div>
                                                  )}
                                                </Menu.Item>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              )}
                            </>
                          )}
                        </Menu>
                      );
                    }
                  })}
                  <Link
                    href="/ausbildung"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    prefetch={false}
                  >
                    Ausbildung
                  </Link>

                  <Link
                    href="/learn-german-language-course-in-bangalore"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    prefetch={false}
                  >
                    Learn German
                  </Link>

                  <Link
                    href="/blog"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    prefetch={false}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    prefetch={false}
                  >
                    Contact
                  </Link>
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-2">
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Connect with us on
                  </p>
                  {/* <span className="h-6 w-px bg-gray-200" aria-hidden="true" /> */}
                  {/* <a
                    href="https://github.com/abhinavanand500"
                    target="_blank"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    <Image
                      src={github}
                      height={60}
                      width={60}
                      alt="abhinavanand500"
                    />
                  </a> */}
                  {/* <a
                    href="https://www.linkedin.com/in/abhinav-a-216a0a110/"
                    target="_blank"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    <Image
                      src={linkedIn}
                      height={60}
                      width={60}
                      alt="abhinav-a-216a0a110"
                    />
                  </a> */}
                  <a
                    href="https://www.instagram.com/mbbsadmissionsinabroad/"
                    target="_blank"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    <Image
                      src={insta}
                      height={60}
                      width={60}
                      alt="mbbs_admission_in_abroad"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
