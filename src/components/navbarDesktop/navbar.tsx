import NavbarItems from "./navbarItems";
import ArrowRight from "@/assets/arrowRight";
import Heading from "../ui/heading";
import { Button } from "@/components/ui/button";


export default function NavbarDesktop() {
  return (
    <nav className="hidden md:block p-4 fixed w-screen z-10">
      <div className="container mx-auto rounded-full p-4 bg-white flex justify-between items-center ">
        <Heading title="HabbitZone" size={24} color="#000" />
        <NavbarItems />
        <Button
          variant="default"
          size="lg"
          aria-label="Get Started"
          className="cursor-pointer"
        >
          Get Started
          <ArrowRight size={32} color="#fff" />
        </Button>
       
      </div>
    </nav>
  );
}
