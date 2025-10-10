import "./hamburger.css";

export default function NavbarHamburger({ isActive }: { isActive?: boolean }) {
  return (
    <button
      className={`hamburger hamburger--slider ${isActive ? "is-active" : ""}`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}
