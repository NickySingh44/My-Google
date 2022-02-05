import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOption from "./HeaderOption";

const Header = () => {
  const router = useRouter();
  const searchInput = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInput.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <div>
      <header className="sticky top-0 bg-white ">
        <div className=" py-6 px-4 w-full cursor-pointer sm:flex">
        <div className=" flex justify-center sm:mr-8">
        <Image
            src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt=""
            width="120"
            height="40"
            onClick={() => router.push("/")}
            className="cursor-pointer"
          />
        </div>
         
           
          <form className="  flex px-6 py-3  shadow-lg max-w-3xl items-center sm:mr-8 border border-gray-200 rounded-full flex-grow">
            <input
              ref={searchInput}
              className="   sm:flex-grow focus:outline-none w-full"
            />
            <XIcon
              className="h-7 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125 sm:mr-3"
              onClick={() => (searchInput.current.value = "")}
            />
            <MicrophoneIcon className="h-6 mr-3 pl-2 hidden sm:inline-flex text-blue-500 border-l-2 border-gray-300" />
            <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
            <button hidden text="submit" onClick={search}>
              Search
            </button>
          </form>
          <Avatar className=" my-3 ml-auto hidden sm:flex "/>
        </div>
        <HeaderOption />
      </header>
    </div>
  );
};

export default Header;
