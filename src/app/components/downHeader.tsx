import Link from "next/link";
import React from "react";

const DownHeader = () => {
  return (
    <>
      <div className="hidden md:block w-full h-[80px]  px-[20px] md:px-[318px] py-[40px] bg-slate-100 shadow-md">
        <ul className="flex justify-between text-gray-800 text-sm font-medium">
          <Link href="/productListing">
            <li className="text-gray-400 cursor-pointer">All Products</li>
          </Link>
          <li className="text-gray-400 cursor-pointer">Plan Posts</li>
          <li className="text-gray-400 cursor-pointer">Ceramics</li>
          <li className="text-gray-400 cursor-pointer">Tables</li>
          <li className="text-gray-400 cursor-pointer">Chairs</li>
          <li className="text-gray-400 cursor-pointer">Crockery</li>
          <li className="text-gray-400 cursor-pointer">Tableware</li>
          <li className="text-gray-400 cursor-pointer">Cutlery</li>
        </ul>
      </div>
    </>
  );
};

export default DownHeader;
