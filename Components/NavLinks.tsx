import { NAV_LINKS } from "@/constants";
import Link from "next/link";
type ClassType = {
  className?: string;
};

const NavLinks = ({ className }: ClassType) => {
  return (
    <ul className={`${className ? className : `hidden h-full gap-12 lg:flex`}`}>
      {NAV_LINKS.map((link) => (
        <Link
          href={link.href}
          key={link.key}
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;
