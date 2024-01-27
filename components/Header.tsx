"use client";

import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useBoardStore } from "@/store/BoardStore";

function Header() {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ]);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 rounded-b-2xl justify-center">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-60 -z-50" />
        <Image
          alt="logo"
          src="/Trello_logo.svg"
          width={300}
          height={100}
          className="w-44 md:w-56 md:pd-0"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="flex-1 outline-none"
            ></input>
            <button hidden type="submit"></button>
          </form>
          <Avatar>
            <AvatarFallback className="bg-[#0055D1] text-white">
              IA
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex items-center justify-center px-5 md:py-5">
        <p className="flex items-center text-sm font-light shadow-xl rounded-xl w-fit bg-white p-3 py-4 italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon className="h-10 w-10 text-[#0055D1] mr-1" />
          GPT is summarizing your tasks for the day...
        </p>
      </div>
    </header>
  );
}

export default Header;
