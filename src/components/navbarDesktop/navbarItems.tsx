import NavbarItem from "./navbarItem";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { navItems } from "@/config/navItems";

export default function NavbarItems() {
  const activeSection = useScrollSpy(
    navItems.map((item) => item.id),
    100
  );

  return (
    <ul className="flex gap-2">
      {navItems.map((item) => (
        <NavbarItem
          key={item.id}
          href={`#${item.id}`}
          isActive={activeSection === item.id}
        >
          {item.label}
        </NavbarItem>
      ))}
    </ul>
  );
}
