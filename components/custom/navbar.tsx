"use client";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { BsGithub, BsMoonFill, BsSun } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { Patrick_Hand_SC } from "next/font/google";

const stalmate = Patrick_Hand_SC({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menus = [
    {
      title: "Work Experiences",
      url: "#work-experiences",
    },
    {
      title: "Projects",
      url: "#projects",
    },
    {
      title: "Skills",
      url: "#skills",
    },
    {
      title: "Education",
      url: "#education",
    },
    {
      title: "Blog",
      url: "/blog",
    },
  ];

  return (
    <nav className="navbar z-50 fixed bg-inherit/95 backdrop-blur py-4 shadow-sm w-screen">
      <div className="container mx-auto flex md:flex-row flex-col md:items-center justify-between md:gap-0 gap-3">
        <div className="flex items-center md:justify-normal justify-between gap-x-3">
          <Link href={"/"} className={stalmate.className}>
            <span className="text-2xl font-bold">Hamzan Wahyudi</span>
          </Link>
          <div className="flex items-center md:border-l md:border-l-gray-300 md:ps-3 gap-x-3 text-gray-600">
            <Link href={"/"} className={stalmate.className}>
              <BsGithub size="18" />
            </Link>
            <Link href={"/"} className={stalmate.className}>
              {/* <BsMoonFill size="18" /> */}
              <BsSun size="18" />
            </Link>
            <button
              className="md:hidden inline"
              onClick={() => setToggleMenu((prev) => !prev)}
            >
              {!toggleMenu ? <HiMenuAlt3 size="24" /> : <IoClose size="24" />}
            </button>
          </div>
        </div>
        <div
          className={`menus md:static py-4 inset-x-0 absolute md:h-auto h-max md:bg-inherit bg-background/95 backdrop-blur overflow-hidden ${
            toggleMenu ? "top-16 px-5" : "-top-[100vh]"
          } md:flex grid duration-300 transition-all items-center md:gap-10 gap-8 text-gray-400`}
        >
          {menus.map((menu) => (
            <Link
              href={menu.url}
              className={`px-1 font-bold md:text-start text-center md:py-0 py-2 ${
                menu.title == "Work Experiences" &&
                "md:border-b-2 text-gray-800 border-b-gray-800"
              }`}
            >
              <span
                className={`font-medium ${
                  menu.title == "Blog" && "flex justify-center"
                }`}
              >
                {menu.title}{" "}
                {menu.title == "Blog" && <BiLinkExternal size="12" />}
              </span>
            </Link>
          ))}

          <Link href={"/about"} className={buttonVariants({ size: "sm" })}>
            <span className="font-medium">Download CV</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
