import Link from "next/link";
import React from "react";

interface SidebarItemProps {
  title: string;
  Icon: React.ElementType;
  size: number;
}

export const SidebarItem = ({ title, Icon, size }: SidebarItemProps) => {
  return (
    <li>
      <Link
        href="#"
        className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
      >
        <Icon size={size} />
        <span className="-mr-1 font-medium">{title}</span>
      </Link>
    </li>
  );
};
