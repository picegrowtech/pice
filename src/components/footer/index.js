import React from "react";
import Content from "../../utils/content.json";
import ImgUrl from "../../Theme/images.json";
import "./styleSheet.css";
const Footer = () => {
  return (
    <div>
      <footer>
            <div className="footer">
              <div className="footer_left">
                <ul>{Content.footerMenuOpt.map((item) => Options(item))}</ul>
                <img src={ImgUrl.footerC3SRLogo} className="footerC3sr" alt="" />
              </div>
              <div className="copyright_txt">
                <p>{Content.copyRighttxt}</p>
                <div className="footerLogos">
                  <img src={ImgUrl.footerIbmlogo} className="" alt="" />
                  <img src={ImgUrl.footerIllionslogo} className="" alt="" />
                </div>
              </div>
            </div>
      </footer>
    </div>
  );
};

function Options(type) {
  return (
    <li key={type.name}>
      <a href={type.link}>
        {type.name}
      </a>
    </li>
  );
}

export default Footer;
