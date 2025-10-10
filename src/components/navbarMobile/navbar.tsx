import Heading from "../ui/heading";
import NavbarHamburger from "./navbarHamburger";

import NavbarItems from "./navbarItems";
import { useMobileNav } from "../../contexts/MobileNavContext";

export default function NavbarMobile() {
  const { isOpen, setIsOpen } = useMobileNav();

  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed w-screen p-4 md:hidden">
      <div className="container mx-auto rounded-full p-4 bg-white flex justify-between items-center">
        <Heading title="HabbitZone" size={24} color="#000" />
        <NavbarHamburger isActive={isOpen} onOpen={openHandler} />
        <NavbarItems isOpen={isOpen} onOpen={openHandler} />
      </div>
    </nav>
  );
}
