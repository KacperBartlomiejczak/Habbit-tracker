import { navItems } from "@/config/navItems";

export default function NavbarItems({
  isOpen,
  onOpen,
}: {
  isOpen: boolean;
  onOpen: () => void;
}) {
  return (
    <ul
      className={`absolute top-0 left-0 w-screen h-screen bg-white z-5 flex flex-col justify-center items-center gap-5 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      {navItems.map((item) => {
        return (
          <li key={item.id} className="">
            <a
              href={`#${item.id}`}
              className="font-light text-xl"
              onClick={onOpen}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
