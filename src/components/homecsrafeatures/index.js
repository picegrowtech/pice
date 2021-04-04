import React from "react";
import Content from "../../utils/content.json";
import ImgUrl from "../../Theme/images.json";
import "./styleSheet.css";
const HomeCsraFeatures = () => {
  return (
    <section className="csra_features_bg" id="csraFeatures">
      <div className="container">
        <div className="row">
          <h3>
            <span>{Content.csraTitle}</span> {Content.csraFeaturesTitle}
          </h3>
          <div className="csra_features_cnt">
            <div className="features_box">
              <img src={ImgUrl.csraFeaturesImg1} alt="" />
              <p>{Content.csraFeaturesCnt1}</p>
            </div>
            <div className="features_box">
              <img src={ImgUrl.csraFeaturesImg2} alt="" />
              <p>{Content.csraFeaturesCnt2}</p>
            </div>
            <div className="features_box">
              <img src={ImgUrl.csraFeaturesImg3} alt="" />
              <p>{Content.csraFeaturesCnt3}</p>
            </div>
            <div className="features_box">
              <img src={ImgUrl.csraFeaturesImg4} alt="" />
              <p>{Content.csraFeaturesCnt4}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCsraFeatures;
