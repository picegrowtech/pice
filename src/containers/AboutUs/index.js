import React from "react";
import Navbar from "../../components/navbar/index";
import InnerpgeBanner from "../../components/innerpgebanner/index";
import Footer from "../../components/footer/index";
import Content from "../../utils/content.json";
import { Menu } from "../../components/identicalFunc/index";
import ImgUrl from "../../Theme/images.json";

class AboutUs extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Navbar menu={Menu(Content.homeMenuOpt)} />
        <InnerpgeBanner />
        <div className="aboutContentbg">
          <div className="container">
            <div className="teamContentSection">
              <h4>{Content.teamLeadTxt}</h4>
              <div className="teamMemSection">
                <div className="teamMemBox">
                  <img
                    src={ImgUrl.teamInfoImg}
                    class="img-thumbnail rounded-circle"
                    alt=""
                  />
                  <h5>{Content.AbtOmrAnj}</h5>
                  <h6>{Content.AbtPrjctTle}</h6>
                  <a href={Content.AbtOmrMail}>{Content.AbtOmrMail}</a>
                </div>
              </div>
              <h4>{Content.AbtTeam}</h4>
              <div className="teamMemSection">
                <div className="teamMemBox">
                  <img
                    src={ImgUrl.teamInfoImg}
                    class="img-thumbnail rounded-circle"
                    alt=""
                  />
                  <h5>{Content.AbtHgyuGng}</h5>
                  <h6>{Content.AbtPrjctTle}</h6>
                </div>
                <div className="teamMemBox">
                  <img
                    src={ImgUrl.teamInfoImg}
                    class="img-thumbnail rounded-circle"
                    alt=""
                  />
                  <h5>{Content.AbtXinZu}</h5>
                  <h6>{Content.AbtPrjctTle}</h6>
                </div>
                <div className="teamMemBox">
                  <img
                    src={ImgUrl.teamInfoImg}
                    class="img-thumbnail rounded-circle"
                    alt=""
                  />
                  <h5>{Content.AbtJiaWu}</h5>
                  <h6>{Content.AbtPrjctTle}</h6>
                </div>
                <div className="teamMemBox">
                  <img
                    src={ImgUrl.teamInfoImg}
                    class="img-thumbnail rounded-circle"
                    alt=""
                  />
                  <h5>{Content.AbtAlkKmtar}</h5>
                  <h6>{Content.AbtPrjctTle}</h6>
                </div>
              </div>
              <h4>{Content.AbtAdvsrs}</h4>
              <div className="teamMemSection">
                <div className="teamMemBox">
                  <img
                    src={ImgUrl.teamInfoImg}
                    class="img-thumbnail rounded-circle"
                    alt=""
                  />
                  <h5>{Content.AbtWnmiHwa}</h5>
                  <h6>{Content.AbtPrjctTle}</h6>
                </div>
                <div className="teamMemBox">
                  <img
                    src={ImgUrl.teamInfoImg}
                    class="img-thumbnail rounded-circle"
                    alt=""
                  />
                  <h5>{Content.AbtJinjun}</h5>
                  <h6>{Content.Abtibm}</h6>
                </div>
              </div>
              <h4>{Content.AbtClbratrs}</h4>
              <div className="teamMemSection">
                <div className="teamMemBox">
                  <img
                    src={ImgUrl.teamInfoImg}
                    class="img-thumbnail rounded-circle"
                    alt=""
                  />
                  <h5>{Content.AbtQianNg}</h5>
                  <h6 className="text-capitalize">{Content.AbtInsforAI}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default AboutUs;
