import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { Hotels } from "../shared/hotels";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Fade from "react-reveal/Fade";

function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
``
    emailjs
      .sendForm(
        "/",
        "/",
        form.current,
        "/-B"
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
          <h6>اهلا بك في فنادقنا</h6>
          <h1>تمتع باجمل اجواء الاسترخاء والرفاهية</h1>
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
              تصفح المزيد
            </LinkScroll>
          </h6>
        </div>
      </div>
      <div>
        {/* <Fade bottom distance="10%" duration={1500}> */}
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
                <h5>حول فنادقنا</h5>
                <p>
                  مرحبًا بك في سلسلة فنادقنا الرائعة، حيث الرفاهية تلتقي بالتراث
                  السعودي العريق. نحن نفتخر بتقديم تجربة فندقية فريدة من نوعها
                  في قلب المملكة العربية السعودية، حيث يمكن للضيوف الاستمتاع
                  بالضيافة الحارة والخدمة الممتازة.
                  <br />
                  <br />
                  تتميز سلسلة فنادقنا بأنها تقع في مواقع استراتيجية في جميع
                  أنحاء المملكة، مما يجعلها الخيار المثالي للمسافرين من رجال
                  الأعمال والسائحين على حد سواء. كل فندق في سلسلتنا يوفر مجموعة
                  متنوعة من الغرف والأجنحة المصممة بأناقة، بالإضافة إلى مجموعة
                  واسعة من المطاعم والأماكن الترفيهية.
                  <br />
                  <br />
                  في سلسلة فنادقنا، نهتم بأدق التفاصيل لضمان راحتك ورضائك. نحن
                  نتطلع إلى الترحيب بك في فنادقنا وإظهار لك ما يعنيه حقًا
                  الضيافة السعودية.
                </p>
              </div>
            </div>
          </div>
          <div id="our-hotels" className="container-fluid">
            <div>
              <h5>نقدم خدماتنا في سلسلة من افضل الفنادق</h5>
            </div>
            <div className="row">
              {Hotels.map((hotel) => (
                <HotelRender hotel={hotel}></HotelRender>
              ))}
              <div className="col-md-6 last-home-hotel">
                <p>
                  اكتشف الرفاهية في أفضل حالاتها مع سلسلة فنادقنا. نحن نقدم
                  تجربة فريدة من نوعها تجمع بين الضيافة الحارة والخدمة المتميزة.
                  سواء كنت تبحث عن ملاذ هادئ بعيدًا عن صخب الحياة اليومية، أو
                  مكان مريح لإقامة رحلة عمل، فإن سلسلة فنادقنا توفر كل ما
                  تحتاجه.
                  <br />
                  تتميز فنادقنا بأماكنها المثالية في قلب المدينة، مما يتيح لك
                  الوصول بسهولة إلى أبرز المعالم السياحية والأماكن التجارية. كما
                  أن غرفنا وأجنحتنا مصممة بعناية لتوفير أقصى درجات الراحة
                  والرفاهية.
                  <br />
                  انضم إلينا واستمتع بتجربة لا تُنسى، حيث الجودة تلتقي بالضيافة.
                </p>
              </div>
            </div>
          </div>
          <div id="contact-us" className="container-fluid contact-us">
            <div className="row">
              <div className="col-md-6 col-12">
                <h2>
                  تواصل معنا.
                  <br />
                  دعنا نساعدك في اختيار مكان
                  <br />
                  اقامتك.
                </h2>
                <div>
                  <FiFacebook className="contact-icon" size={35}></FiFacebook>
                  <FiInstagram className="contact-icon" size={35}></FiInstagram>
                  <FiTwitter className="contact-icon" size={35}></FiTwitter>
                </div>
                <h5>الغانمي</h5>
                <h6>البلد,المدينة,الشارع</h6>
                <h6>+999 99999 99</h6>
                <h6>mail@mail.com</h6>
              </div>
              <div className="col-md-6 col-12">
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="ادخل اسمك هنا"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="ادخل بريدك الإكتروني هنا"
                  />
                  <input
                    name="phone"
                    type="text"
                    required
                    placeholder="ادخل رقم هاتفك هنا"
                  />
                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder="ادخل رسالتك هنا"
                  />
                  <input type="submit" value={"ارسال"} />
                </form>
              </div>
            </div>
          </div>
        {/* </Fade> */}
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
          {props.hotel.home_description.split(".").map((item, index) => (
            <p key={index}>{item}.</p>
          ))}
        </p>
        <div>
          <Link to={"/hotels/" + props.hotel.name}>اكتشف المزيد</Link>
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
