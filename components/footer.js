import React from "react";
import styles from "../styles/Footer.module.scss";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.containerTop}>
          <div className={styles.social}>
            <h3>БЛОG</h3>
            <p>Check me on:</p>
            <div className={styles.icons}>
              <FaInstagramSquare size="2em" className={styles.socialIcons} />
              <FaTwitterSquare size="2em" className={styles.socialIcons} />
              <FaLinkedin size="2em" className={styles.socialIcons} />
              <FaFacebookSquare size="2em" className={styles.socialIcons} />
            </div>
          </div>
          <div className={styles.info}>
            <h3>Info</h3>
            <ul>
              <li>about</li>
              <li>smth else</li>
              <li>smth else</li>
              <li>smth else</li>
            </ul>
          </div>
          <div className={styles.adress}>
            <h3>Contact me</h3>
            <p>
              <FaMap className={styles.contactIcons} />
              412A, Erdbergstrasse 220, 1110, Vienna, Austria
            </p>
            <p>
              <FaPhone className={styles.contactIcons} />
              +4368120722018
            </p>
            <p>
              <FaWhatsapp className={styles.contactIcons} />
              +77086572266
            </p>
            <p>
              <FaEnvelope className={styles.contactIcons} />
              abaynk123@gmail.com
            </p>
          </div>
        </div>
        <div className={styles.containerBottom}>
          <p>Copyright©2021 All rights reserved</p>
          <a href="https://www.buymeacoffee.com/abaynurpeissov">
            <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=abaynurpeissov&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
