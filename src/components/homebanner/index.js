import React from "react";
import Content from "../../utils/content.json";
import ImgUrl from "../../Theme/images.json";
import "./styleSheet.css";
const HomeBanner = () => {
  return (
    <div
      className="banner_bg"
      style={{ backgroundImage: `url(${ImgUrl.banner_bg})` }}
    >
      <div className="container">
        <div className="banner_content">
          <h2>
            <span>{Content.csraTitle}</span> {Content.csraFeaturesTitle}
          </h2>
          <ul>{Content.homeBanList.map((item) => Options(item))}</ul>
          <a className="btn readmore" href="#csraFeatures">
            {Content.homeBanReadMre}
          </a>
        </div>
      </div>
    </div>
  );
};

function Options(type) {
  return (
    <li key={type} style={{ backgroundImage: `url(${ImgUrl.bannerLists})` }}>
      {type}
    </li>
  );
}

export default HomeBanner;
