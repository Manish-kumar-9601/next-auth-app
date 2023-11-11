import Link from "next/link";
import React from "react";
import { NavName } from "./components/NavName";

const Navbar = () => {
  return (
    <div className="text-white p-4 w-[100%] lg:w-[80%]   m-auto flex justify-between items-center shadow-md">
      <Link href={"/"} className="text-white ">Home</Link> 

<button className="" >  <Link href={'/sign'}>  </Link>  </button>

     
      
    </div>
  );
};

export default Navbar;
