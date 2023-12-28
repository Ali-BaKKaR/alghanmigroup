import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();
  const { t, i18n } = useTranslation();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  function closenav() {
    console.log(navRef.current.classList);
    if (navRef.current.classList) {
      navRef.current.classList.toggle("responsive_nav");
    }
  }

  const handleClick = (hash) => {
    if (window.location.pathname !== "/") {
      window.location.pathname = "/";
    }
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
      closenav();
    }, 0);
  };

  return (
    <header>
      <nav ref={navRef}>
        <a onClick={() => handleClick("our-hotels")}>{t("ourHotels")}</a>
        <a onClick={() => handleClick("about")}>{t("aboutUs")}</a>
        <a onClick={() => handleClick("contact-us")}>{t("contactus")}</a>
        <div>
          <button
            onClick={() => {
              i18n.changeLanguage("en");
              document
                .querySelectorAll("input,textarea,p")
                .forEach((e) => e.classList.add("change-writing-dirction"));
            }}
          >
            en
          </button>
          /
          <button
            onClick={() => {
              i18n.changeLanguage("ar");
              document
                .querySelectorAll("input,textarea,p")
                .forEach((e) => e.classList.remove("change-writing-dirction"));
            }}
          >
            ar
          </button>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <a id="temp-logo" href="/#">
        الغانمي
        {/* <img src="/assets/images/logo.png"></img> */}
      </a>
    </header>
  );
}

export default Navbar;
