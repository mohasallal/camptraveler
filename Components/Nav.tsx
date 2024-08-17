import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../constants/index";
import Button from "./Button";
import SideMenu from "./SideMenu";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <nav className="flexBetween max-container padding-container z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="Logo" width={74} height={29} />
      </Link>
      <NavLinks />
      <div className="lg:flexCenter hidden cursor-pointer">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <SideMenu>
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </SideMenu>
    </nav>
  );
};

export default Nav;
