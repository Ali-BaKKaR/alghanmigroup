import { useParams } from "react-router-dom";
import { Hotels } from "../shared/hotels";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useEffect } from "react";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";
import { FiFacebook, FiInstagram, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function Hotel() {
  const params = useParams();
  const { t, i18n } = useTranslation();
  const hotel = Hotels.filter((e) => e.english_name == params.hotel)[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hotel-page">
      <Slide autoplay>
        {hotel.images.map((e) => (
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${e})` }}></div>
          </div>
        ))}
      </Slide>
      <div className="logo-description">
        <img src={hotel.logo}></img>
        <p>{hotel.full_description[i18n.language]}</p>
        <h6>{t("hotelServicesHeader")}</h6>
        <Fade bottom distance="10%" duration={1500}>
          <ul>
            {hotel.services[i18n.language].map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        </Fade>
      </div>
      <Fade bottom distance="10%" duration={1500}>
        <div className="container-fluid contact-us">
          <div className="row">
            <div className="col-md-6 ">
              <h2>
                {t("contactus")} <br />
                {t("hotelContactusSub")} <br />
                {t("hotelContactusSub2")}
              </h2>
              <a className="booking" href={hotel.booking}>
                {t("bookNow")}
              </a>

              <div>
                {hotel.facebook ? (
                  <a href={hotel.facebook}>
                    <FiFacebook className="contact-icon" size={35}></FiFacebook>
                  </a>
                ) : (
                  <div />
                )}
                {hotel.instagram ? (
                  <a href={hotel.instagram}>
                    <FiInstagram
                      className="contact-icon"
                      size={35}
                    ></FiInstagram>
                  </a>
                ) : (
                  <div />
                )}
                {hotel.x ? (
                  <a href={hotel.x}>
                    <FiX className="contact-icon" size={35}></FiX>
                  </a>
                ) : (
                  <div />
                )}

                <a
                  href={"whatsapp://send?phone="+hotel.phone}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="contact-icon" size={35}></FaWhatsapp>
                </a>
              </div>
              <h5>{hotel.name[i18n.language]}</h5>
              <h6 className="left-to-right">{hotel.address[i18n.language]}</h6>
              <h6 className="left-to-right">{hotel.phone}</h6>
              <h6>{hotel.email}</h6>
            </div>
            <div className="col-md-6">
              <iframe
                src={hotel.map_src}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Hotel;
