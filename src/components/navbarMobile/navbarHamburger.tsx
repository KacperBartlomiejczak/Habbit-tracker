import "./hamburger.css";

export default function NavbarHamburger({
  isActive,
  onOpen,
}: {
  isActive?: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      className={`hamburger hamburger--slider z-50 ${
        isActive ? "is-active" : ""
      }`}
      type="button"
      onClick={onOpen}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}
