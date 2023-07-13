import Image from "next/image";
import { PiUserCircleThin } from "react-icons/pi";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { ReactNode, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = (): JSX.Element => {
  const [IsLogin, setIsLogin] = useState(true);
  const currentPage = useRouter().pathname;
  return (
    <header>
      <nav className="container mx-auto flex flex-row items-center justify-between">
        <div className="w-32">
          <Link href={"/"}>
            <Image
              src={"https://www.dummyimage.com/250x150?text=Brand%20logo"}
              height={1500}
              width={2500}
              alt="brand logo"
              className="w-full"
            />
          </Link>
        </div>
        <div className="w-11/12 flex flex-row justify-between ml-10 text-lg">
          <ul className=" hidden md:flex flex-row [&>li]:mr-5 [&>li]:transition-all [&>li]:duration-200 [&>li]:yhover:cursor-pointer ">
            <li className="relative inline-block">
              <Link
                href="/"
                className={`cursor-pointer after:content-[''] after:border-b-2 after:border-red-400 after:absolute after:left-0 after:bottom-0 pb-1 hover:after:w-full after:transition-all after:duration-200 inline-block ${
                  currentPage == "/" ? "after:w-full" : "after:w-0"
                }`}
              >
                Home
              </Link>
            </li>
            <li className="relative inline-block">
              <Link
                href="/courses"
                className={`cursor-pointer after:content-[''] after:border-b-2 after:border-green-400 after:absolute after:left-0 after:bottom-0 pb-1 hover:after:w-full after:transition-all after:duration-200 inline-block ${
                  currentPage == "/courses" ? "after:w-full" : "after:w-0"
                }`}
              >
                Courses
              </Link>
            </li>

            <li className="relative inline-block">
              <Link
                href="/gallery"
                className={`cursor-pointer after:content-[''] after:border-b-2 after:border-blue-400 after:absolute after:left-0 after:bottom-0 pb-1 hover:after:w-full after:transition-all after:duration-200 inline-block ${
                  currentPage == "/gallery" ? "after:w-full" : "after:w-0"
                }`}
              >
                Gallery
              </Link>
            </li>
          </ul>
          <ul className=" flex flex-row  [&>li]:ml-5 [&>li]:transition-all [&>li]:duration-200 [&>li]:hover:cursor-pointer ">
            <li className={`hover:text-yellow-100`}>Login</li>
            <li className={`hover:text-yellow-100 `}>Logout</li>
            <li className={``}>
              <PiUserCircleThin className={`text-2xl`} />
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
