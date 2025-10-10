interface NavbarItemProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  isActive?: boolean;
}
export default function NavbarItem({
  children,
  href,
  className,
  isActive = false,
}: NavbarItemProps) {
  return (
    <li>
      <a
        className={`text-gray-800 font-light px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300 ${
          isActive ? "bg-gray-900 text-white hover:bg-gray-800" : ""
        } ${className}`}
        href={href}
      >
        {children}
      </a>
    </li>
  );
}
