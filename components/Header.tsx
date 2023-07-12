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
            <li className="hover:text-yellow-100">
              <Link
                href="/"
                className={`${
                  currentPage == "/" ? "underline underline-offset-8" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-100">
              <Link
                href="/courses"
                className={`${
                  currentPage == "/courses"
                    ? "underline underline-offset-8"
                    : ""
                }`}
              >
                Courses
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
