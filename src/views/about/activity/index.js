import { Button, Carousel, Col, Row } from "antd";
import React, { useEffect, useMemo, useRef } from "react";
import styles from "./index.module.scss";
import useLocales from "../../../hooks/useLocales";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import activityPic from "../../../assets/images/about-page/activity.png";
import { useState } from "react";
import useResponsive from "../../../hooks/useResponsive";
import activityPic1 from "../../../assets/images/home-page/study.png";
import activityPic2 from "../../../assets/images/home-page/sx.png";
import activityPic3 from "../../../assets/images/home-page/party.png";
import { useSelector } from "../../../redux/store";
import { listTypeImage } from "../../../constants/app-constants";
const acactivityPic1Src = activityPic1.src;
const acactivityPic2Src = activityPic2.src;
const acactivityPic3Src = activityPic3.src;


const contentStyle = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const pageType = listTypeImage.aboutPage.page; 
const pageSection = listTypeImage.aboutPage.activity

const ActivityCompany = () => {
  const { t } = useLocales();
   const { listImages } = useSelector((state) => state.imagesList);
  const arrayImage = useMemo(() => {
    return listImages?.[pageType]?.[pageSection]?.[0]?.images.split(',');
  },[listImages])

  
  const { isMobile, isTablet } = useResponsive();
  const [image, setImage] = useState(arrayImage ? arrayImage[0] : acactivityPic1Src);
  const refCarousel = useRef();
  const [activeActivity, setActiveActivity] = useState();

  useEffect(()=>{
    if(arrayImage && arrayImage[0]){
      setImage(arrayImage[0])
    }
  },[arrayImage])
 

  const onChange = (current, next) => {
    switch (next) {
      case 0:
        setImage(arrayImage[0] ? arrayImage[0] : acactivityPic1Src);
        break;
      case 1:
        setImage(arrayImage[1] ? arrayImage[1] : acactivityPic2Src);
        break;
      default:
        setImage(arrayImage[2] ? arrayImage[2] : acactivityPic3Src);
    }
  };
  return (
    <div className="containerCustom">
      <Row className={styles.activity}>
        <Col xs={24}>
          <Row gutter={[{ xl: 30, xs: 0 }, 0]} justify="space-between">
            <Col xs={24} sm={24} md={24} xl={16}>
              <div data-aos="fade-right">
                <Carousel
                  className={styles.carousel}
                  dots={false}
                  ref={refCarousel}
                  beforeChange={onChange}
                >
                  <div className={styles.content}>
                    <div className={`${styles.content__header} title`}>
                      {t("aboutPage.activity.nameActivity1")}
                    </div>
                    <div className={styles.content__body}>
                      <p>{t("aboutPage.activity.content1")}</p>
                      {/* <div className={styles.content__body__list}>
                      Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                      <ul>
                        <li>
                          <ArrowRightOutlined style={{ color: "#fff" }} />
                          <span>
                            Lorem ipsum dolor sit amet, cons ectetuer adipiscing
                            elit
                          </span>
                        </li>
                        <li>
                          <ArrowRightOutlined style={{ color: "#fff" }} />
                          <span>
                            Lorem ipsum dolor sit amet, cons ectetuer adipiscing
                            elit
                          </span>
                        </li>
                      </ul>
                    </div> */}
                    </div>
                  </div>
                  <div className={styles.content}>
                    <div className={`${styles.content__header} title`}>
                      {t("aboutPage.activity.nameActivity2")}
                    </div>
                    <div className={styles.content__body}>
                      <p>{t("aboutPage.activity.content2")}</p>
                      {/* <div className={styles.content__body__list}>
                      Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                      <ul>
                        <li>
                          <ArrowRightOutlined style={{ color: "#fff" }} />
                          <span>
                            Lorem ipsum dolor sit amet, cons ectetuer adipiscing
                            elit
                          </span>
                        </li>
                        <li>
                          <ArrowRightOutlined style={{ color: "#fff" }} />
                          <span>
                            Lorem ipsum dolor sit amet, cons ectetuer adipiscing
                            elit
                          </span>
                        </li>
                      </ul>
                    </div> */}
                    </div>
                  </div>
                  <div className={styles.content}>
                    <div className={`${styles.content__header} title`}>
                      {t("aboutPage.activity.nameActivity3")}
                    </div>
                    <div className={styles.content__body}>
                      <p> {t("aboutPage.activity.content3")}</p>
                      {/* <div className={styles.content__body__list}>
                      Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                      <ul>
                        <li>
                          <ArrowRightOutlined style={{ color: "#fff" }} />
                          <span>
                            Lorem ipsum dolor sit amet, cons ectetuer adipiscing
                            elit
                          </span>
                        </li>
                        <li>
                          <ArrowRightOutlined style={{ color: "#fff" }} />
                          <span>
                            Lorem ipsum dolor sit amet, cons ectetuer adipiscing
                            elit
                          </span>
                        </li>
                      </ul>
                    </div> */}
                    </div>
                  </div>
                </Carousel>

                <div className={styles.icons}>
                  <Button
                    type="text"
                    className={styles.icons__prev}
                    onClick={() => {
                      refCarousel.current.prev();
                    }}
                  >
                    <ArrowLeftOutlined
                      style={{
                        color: "#fff",
                        fontSize: "20px",
                        marginRight: 10,
                      }}
                    />
                  </Button>
                  <Button
                    type="text"
                    className={styles.icons__next}
                    onClick={() => {
                      refCarousel.current.next();
                    }}
                  >
                    <ArrowRightOutlined
                      style={{ color: "#fff", fontSize: "20px" }}
                    />
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} xl={8}>
              <div className={styles.activity__image} data-aos="fade-left">
                <img src={image} alt="Company Activity" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ActivityCompany;
