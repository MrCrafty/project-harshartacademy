import Image from "next/image";
import { PiUserCircleThin } from "react-icons/pi";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { ReactNode, useState } from "react";
import Link from "next/link";
const Header = (): JSX.Element => {
  const [IsLogin, setIsLogin] = useState(false);
  return (
    <header>
      <nav className="container mx-auto flex flex-row items-center justify-between">
        <div className="w-32">
          <Image
            src={"https://www.dummyimage.com/250x150?text=Brand%20logo"}
            height={1500}
            width={2500}
            alt="brand logo"
            className="w-full"
          />
        </div>
        <div className="w-11/12 flex flex-row justify-between ml-10 text-lg">
          <ul className=" hidden md:flex flex-row [&>li]:mr-5 [&>li]:transition-all [&>li]:duration-200 [&>li]:hover:cursor-pointer ">
            <li className="hover:text-yellow-100">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-yellow-100">
              <Link href="/courses">Courses</Link>
            </li>
          </ul>
          <ul className=" flex flex-row  [&>li]:mr-5 [&>li]:transition-all [&>li]:duration-200 [&>li]:hover:cursor-pointer ">
            <li
              className={`hover:text-yellow-100 hidden md:${
                IsLogin ? "hidden" : "block"
              }`}
            >
              Login
            </li>
            <li
              className={
                `hover:text-yellow-100 hidden md:${
                  IsLogin ? "block" : "hidden"
                }`
                // IsLogin
                //   ? "hover:text-yellow-100 hidden md:hidden"
                //   : "hover:text-yellow-100 hidden md:block"
              }
            >
              Logout
            </li>
            <li>
              <PiUserCircleThin
                className={`text-2xl hidden md:${IsLogin ? "block" : "hidden"}`}
              />
            </li>
          </ul>
        </div>
        <div className="text-4xl md:hidden">
          <HiOutlineBars3BottomRight />
        </div>
      </nav>
    </header>
  );
};

export default Header;
