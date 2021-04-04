import React from "react";
import Content from "../../utils/content.json";
import ImgUrl from "../../Theme/images.json";
import "./styleSheet.css";
const HomeContent = () => {
  return (
    <section className="content_bg">
      <div className="container">
        <div className="row">
          <div className="content_section">
            <div className="col-12 col-sm-6">
              <img src={ImgUrl.content_img} alt="" />
            </div>
            <div className="col-12 col-sm-6 right_content">
              <div className="content_box">
                <h4>{Content.homeContentTitle}</h4>
                <p>{Content.homeContent}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
