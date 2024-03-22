import React from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonProduct from "../component/ButtonProduct";

import shopeeImg from "/assets/logo/shopee.svg";
import tokopediaImg from "/assets/logo/tokopedia.svg";

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container" data-aos="fade-up">
        <h1 className="text-center ">Contact Us</h1>
        <div className="row pt-3 pb-5 justify-content-center">
          <div className="col">
            <Link
              to={`https://www.instagram.com/bucket_bylisa/`}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-black d-flex align-items-center gap-2 p-3"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-instagram"
                size="2xl"
                style={{ color: "#769FCD" }}
              />
              <h3>Instagram</h3>
            </Link>
            <Link
              to={`#`}
              rel="noreferrer"
              className="text-decoration-none text-black d-flex align-items-center gap-2 p-3"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-whatsapp"
                size="2xl"
                style={{ color: "#769FCD" }}
              />
              <h3>085156893702</h3>
            </Link>
            <Link
              to={`#`}
              rel="noreferrer"
              className="text-decoration-none text-black d-flex align-items-center gap-2 p-3"
            >
              <FontAwesomeIcon
                icon="fa-regular fa-envelope"
                size="2xl"
                style={{ color: "#769FCD" }}
              />
              <h3>bucket.by.lisa@gmail.com</h3>
            </Link>
            <Link
              to={`https://shopee.co.id/lisamaulina11?smtt=0.0.9`}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-black d-flex align-items-center gap-2 p-3"
            >
              <img src={shopeeImg} width={35} alt="" />
              <h3>Bucket By Lisa</h3>
            </Link>
            <Link
              to={`https://www.tokopedia.com/bucket-bylisa?utm_source=Android&utm_medium=Share&utm_campaign=Shop%20Share&_branch_match_id=1006152324165597597&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8nPzi9ITclM1MvJzMvWNwlMMckpzSvOT00CAOHCjNwiAAAA`}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-black d-flex align-items-center gap-2 p-3"
            >
              <img src={tokopediaImg} width={40} alt="" />
              <h3>Bucket By Lisa</h3>
            </Link>
            <div className="text-center text-md-start pb-3">
              <ButtonProduct
                target={"_blank"}
                to={`https://api.whatsapp.com/send/?phone=6285156893702&text=Order+list+%0ANama%3A+%0ANo.telp%3A+%0AJenis+bucket+%3A+%0AWarna+wrapping+%3A+%0AUcapan%3A+%0A%0A%0AForm+pengiriman%3A%0AMetode+%3Aambil+langsung%2FCoD%2Freguler%2Finstant%2Fsameday%0ANama+penerima+%3A%0ANo+telp+penerima+%3A%0AAlamat+lengkap+penerima+%3A%0A%0ALocation+%3A+https%3A%2F%2Fg.co%2Fkgs%2FkLccXDB&type=phone_number&app_absent=0`}
                text={"Order Here!!"}
                className="m-4"
              />
            </div>
          </div>
          <div className="col">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d350.54693626735843!2d106.73100658830694!3d-6.265590396477944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11f9d8572db%3A0x163a02b345fa808e!2sBucket%20by%20Lisa!5e0!3m2!1sid!2sid!4v1704787008824!5m2!1sid!2sid`}
              className="w-100"
              // width={350}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
