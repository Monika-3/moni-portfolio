"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Projects",
    path: "/projects",
  },
    {
    name: "My-Bio",
    path: "/mybio",
  },
];

const Nav = () => {
    const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-1 border-accent"} capitalize font-small hover:text-accent transition-all`}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
