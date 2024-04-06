"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarItemProps {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export const SidebarItem = ({ title, path, icon }: SidebarItemProps) => {
  const pathName = usePathname();

  return (
    <li>
      <Link
        href={path}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 group 
        hover:bg-gradient or-r hover:bg-sky-600 hover:text-white
        ${
          pathName === path
            ? "text-white bg-gradient-to-r from-sky-700 to-cyan-500"
            : ""
        }`}
      >
        {icon}
        <span className="-mr-1 font-medium">{title}</span>
      </Link>
    </li>
  );
};
