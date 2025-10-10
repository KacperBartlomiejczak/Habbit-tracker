import NavbarItems from "./navbarItems";
import ArrowRight from "@/assets/arrowRight";
import { Button } from "@/components/ui/button";
export default function NavbarDesktop() {
  return (
    <nav className="hidden md:block p-4 fixed w-screen">
      <div className="container mx-auto rounded-full p-4 bg-white flex justify-between items-center ">
        <div>
          <h1 className="text-black font-bold">HabbitZone</h1>
        </div>
        <NavbarItems />
        <Button
          variant="default"
          size="sm"
          aria-label="Get Started"
          className="cursor-pointer"
        >
          Get Started
          <ArrowRight size="32" color="#fff" />
        </Button>
      </div>
    </nav>
  );
}
