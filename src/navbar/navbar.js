import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  function closenav() {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <nav ref={navRef}>
        <a href="#our-hotels" onClick={closenav}>
          فنادقنا
        </a>
        <a href="#about" onClick={closenav}>
          من نحن
        </a>
        <a href="/#contact-us" onClick={closenav}>
          تواصل معنا
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <a href="/#">
        <img src="/assets/images/logo.png"></img>
      </a>
    </header>
  );
}

export default Navbar;
