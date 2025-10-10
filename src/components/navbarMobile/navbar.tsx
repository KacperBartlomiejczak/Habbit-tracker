import NavbarHamburger from "./navbarHamburger";

export default function NavbarMobile() {
  return (
    <nav className="w-screen p-4 md:hidden">
      <div className="container mx-auto rounded-full p-4 bg-white flex justify-between items-center">
        <h1 className="text-black font-bold">HabbitZone</h1>
        <NavbarHamburger />
      </div>
    </nav>
  );
}
