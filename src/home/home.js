// import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { Hotels } from "../shared/hotels";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_ovnrr3l",
            "template_es7zqt9",
            form.current,
            "I_6BmbWfOc4VRPchr"
          )
          .then(
            (result) => {
              alert("تم الارسال بنجاح,شكرا لتوصلك معنا ");
            },
            (error) => {
              alert("فشلت العملية يرجى المحاولة مرة اخرى");
            }
          );
  };

  return (
    <div className="home-page">
      <div className="jumbotron">
        <div className="jumbotron-title">
          <h6>{t("jumbotronTitle")}</h6>
          <h1>{t("jumbotronTitle2")}</h1>
          <h6>
            <LinkScroll
              id="go-to-about"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {t("browseMore")}
            </LinkScroll>
          </h6>
        </div>
      </div>
      <div>
        <Fade bottom distance="10%" duration={1500}>
          <div id="about" className="container-fluid">
            <div className="row">
              <div id="first-image" className="col-sm-6 col-md-3 about-image">
                <img
                  className="img-fluid"
                  src="assets/images/about-image-2.png"
                ></img>
              </div>
              <div className=" col-sm-6 col-md-3 about-image">
                <img
                  className="img-fluid"
                  src="assets/images/about-image-1.png"
                ></img>
              </div>
              <div className="col-sm-12 col-md-6 ">
                <h5>{t("aboutHotelsHeader")}</h5>
                <p>
                  {t("aboutDescription")}
                  <br />
                  <br />
                  {t("aboutDescription2")}
                  <br />
                  <br />
                  {t("aboutDescription3")}
                </p>
              </div>
            </div>
          </div>
        </Fade>

        <div id="our-hotels" className="container-fluid">
          <div>
            <h5>{t("ourHotelsHeader")}</h5>
          </div>
          <div className="row">
            {Hotels.map((hotel) => (
              <HotelRender t={t} hotel={hotel} i18n={i18n}></HotelRender>
            ))}
            <div className="col-md-6 last-home-hotel">
              <p>
                {t("ourHotelsLastHotel")}
                <br />
                {t("ourHotelsLastHotel2")}
                <br />
                {t("ourHotelsLastHotel3")}
              </p>
            </div>
          </div>
        </div>
        <Fade>
          <div id="contact-us" className="container-fluid contact-us">
            <div className="row">
              <div className="col-md-6 col-12">
                <h2>
                  {t("contactus")}
                  <br />
                  {t("homeContactusSub")} <br />
                  {t("homeContactusSub2")}
                </h2>
                <br></br>
                <h5>{t("companyName")}</h5>
                <h6>{t("address")}</h6>


                {/* <div>
                  <FiFacebook className="contact-icon" size={35}></FiFacebook>
                  <FiInstagram className="contact-icon" size={35}></FiInstagram>
                  <FiTwitter className="contact-icon" size={35}></FiTwitter>
                </div>
                <h5>{t("companyName")}</h5>
                <h6>{t("address")}</h6>
                <h6>+999 999 999 </h6>
                <h6>tempmail@mail.com</h6> */}
              </div>
              <div className="col-md-6 col-12">
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder={t("formName")}
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder={t("formEmail")}
                  />
                  <input
                    name="phone"
                    type="text"
                    required
                    placeholder={t("formPhone")}
                  />
                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder={t("formMessage")}
                  />
                  <input type="submit" value={t("send")} />
                </form>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

function HotelRender(props) {
  return (
    <div
      className={`col-md-6 home-hotel ${
        props.hotel.id == 5 || props.hotel.id == 1 || props.hotel.id == 2
          ? "reversed-order"
          : ""
      } `}
    >
      {props.hotel.id == 4 || props.hotel.id == 3 ? (
        // <img src={props.hotel.home_image}></img>
        <div
          className="hotel-home-image"
          style={{ backgroundImage: `url(${props.hotel.home_image})` }}
        ></div>
      ) : (
        <div style={{ display: "none" }} />
      )}
      <div className="home-hotel-details">
        <img src={props.hotel.logo}></img>
        <p>
          {props.hotel.home_description[props.i18n.language]
            .split(".")
            .map((item, index) => (
              <p key={index}>{item}.</p>
            ))}
        </p>
        <div>
          <Link to={"/hotels/" + props.hotel.english_name}>{props.t("readMore")}</Link>
        </div>
      </div>
      {props.hotel.id == 5 || props.hotel.id == 1 || props.hotel.id == 2 ? (
        <div
          className="hotel-home-image"
          style={{ backgroundImage: `url(${props.hotel.home_image})` }}
        ></div>
      ) : (
        // <img src={props.hotel.home_image}></img>
        <div style={{ display: "none" }} />
      )}
    </div>
  );
}

export default Home;
