import { useParams } from "react-router-dom";
import { Hotels } from "../shared/hotels";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useEffect } from "react";
import { Fade } from "react-reveal";

function Hotel() {
  const params = useParams();
  const hotel = Hotels.filter((e) => e.name == params.hotel)[0];

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
      <Fade bottom distance="10%" duration={1500}>
        <div className="logo-description">
          <img src={hotel.logo}></img>
          <p>{hotel.full_description}</p>
          <h6>نقدم لك مجموعة من افضل الخدمات</h6>
          <ul>
            {hotel.services.map((e) => (
              <li>{e}</li>
            ))}
          </ul>
          {hotel.services.map((e) => {
            <h2>{e}</h2>;
            console.log(e);
          })}
        </div>
        <div className="container-fluid contact-us">
          <div className="row">
            <div className="col-md-6 ">
              <h2>
                تواصل معنا.
                <br />
                وتمتع بافضل الخدمات
                <br />
                خلال زيارتك.
              </h2>
              <a className="booking" href={hotel.booking}>
                احجز الان
              </a>

              {/* <div>
              <a href={hotel.facebook}>
                <FiFacebook className="contact-icon" size={35}></FiFacebook>
              </a>
              <a href={hotel.instagram}>
                <FiInstagram className="contact-icon" size={35}></FiInstagram>
              </a>
              <a href={hotel.twitter}>
                <FiTwitter className="contact-icon" size={35}></FiTwitter>
              </a>
            </div> */}
              <h5>{hotel.arabic_name}</h5>
              <h6 className="left-to-right">{hotel.address}</h6>
              <h6 className="left-to-right">{hotel.phone}</h6>
              {/* {hotel.telephone ? <h6>{hotel.telephone}</h6> : <div></div>} */}
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
