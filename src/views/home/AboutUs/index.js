import { Carousel, Col, Image, Row } from "antd";
import React, { useCallback, useEffect, useMemo } from "react";
import styles from "./index.module.scss";
import employeePic from "../../../assets/images/aboutUs/employee.png";
import departmentPic from "../../../assets/images/aboutUs/department.png";
import aboutPic from "../../../assets/images/aboutUs/pic.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import ButtonCusTom from "../../../component/ButtonCustom";
import useLocales from "../../../hooks/useLocales";
import visaPic from "../../../assets/images/aboutUs/Visa.png";
import uberPic from "../../../assets/images/aboutUs/uber.png";
import aboutUs1 from "../../../assets/images/home-page/about-small1.png";
import aboutUs2 from "../../../assets/images/home-page/about-small2.png";
import aboutUs3 from "../../../assets/images/home-page/about-big.png";

import parsonPic from "../../../assets/images/aboutUs/Parsons_Corporation_logo 1.png";
import schneiderPic from "../../../assets/images/aboutUs/Isolation_Mode.png";
import sbmPic from "../../../assets/images/aboutUs/SBM.png";
import { useRouter } from "next/router";
import { ROUTER_PATH } from "../../../constants/router-constants";
import useResponsive from "../../../hooks/useResponsive";
import { useSelector } from "../../../redux/store";
import { listTypeImage } from "../../../constants/app-constants";

const arrayPartner = [
  <Col key="1" xs={4} sm={12} md={4} xl={4}>
    <div className={styles.loyalCustomer__logoItem}>
      <img src={visaPic.src} alt="Visa" />
    </div>
  </Col>,
  <Col key="2" xs={4} sm={12} md={4} xl={4}>
    <div className={styles.loyalCustomer__logoItem}>
      <img src={uberPic.src} alt="Uber" />
    </div>
  </Col>,
  <Col key="3" xs={4} sm={12} md={4} xl={4}>
    <div className={styles.loyalCustomer__logoItem}>
      <img src={parsonPic.src} alt="parson" />
    </div>
  </Col>,
  <Col key="4" xs={4} sm={12} md={4} xl={4}>
    <div className={styles.loyalCustomer__logoItem}>
      <img src={sbmPic.src} alt="SBM" />
    </div>
  </Col>,
  <Col key="5" xs={4} sm={12} md={4} xl={4}>
    <div className={styles.loyalCustomer__logoItem}>
      <img src={schneiderPic.src} alt="Schneider" />
    </div>
  </Col>,
];

const pageType = listTypeImage.homePage.page;
const pageSection = listTypeImage.homePage.homeAboutUs;
const pagePartner = listTypeImage.homePage.homePartner;

const arrayImageHandle = (list) => {
  return list.map((item, index) => (
    <Col xs={4} sm={12} md={4} xl={4} key={index}>
      <div className={styles.loyalCustomer__logoItem}>
        <img src={item} alt={index} />
      </div>
    </Col>
  ));
};
const AboutUs = () => {
  const { t } = useLocales();
  const router = useRouter();
  const { isMobile, isTablet } = useResponsive();
  const { listImages } = useSelector((state) => state.imagesList);
  const listArrayPartner = useMemo(() => {
    return listImages?.[pageType]?.[pagePartner]?.[0]?.images.split(",");
  }, [listImages]);
  let arrayPartners = arrayPartner;
  if (listArrayPartner && listArrayPartner.length) {
    arrayPartners = arrayImageHandle(listArrayPartner);
    console.log(
      "🚀 ~ file: index.js:77 ~ AboutUs ~ arrayPartners:",
      arrayPartners
    );
  }

  const arrayImage = useMemo(() => {
    return listImages?.[pageType]?.[pageSection]?.[0]?.images.split(",");
  }, [listImages]);

  useEffect(() => {
    setTimeout(() => {
      if (router.asPath === `#${ROUTER_PATH.partner}`) {
        window.scrollTo({
          top: 1000,
          behavior: "smooth",
        });
      }
    }, 1000);
  }, [router.asPath, isMobile]);

  return (
    <div className="containerCustom">
      <Row className={styles.aboutUs}>
        <Col xs={24} sm={24} xl={14}>
          <div data-aos="fade-right">
            <h1 className={styles.aboutUs__title}>{t("aboutUs")}</h1>
            <p className={styles.aboutUs__text}>
              {t("homePage.about.aboutUs")}
            </p>

            <ButtonCusTom
              className={styles.viewMore}
              onClick={() => {
                router.push("./about");
              }}
              title={t("viewMore")}
              icon={<ArrowRightOutlined />}
            />
          </div>
        </Col>
        {isMobile ? (
          <Row className={styles.aboutFooter} id="partner">
            <Col xs={24} sm={24} xl={14}>
              <Row
                gutter={[
                  { xs: 0, md: 2 },
                  { xs: 5, md: 0 },
                ]}
                className={styles.aboutFooterLeft}
              >
                <Col xs={24} sm={12} md={12}>
                  <div className={styles.aboutFooterLeft__image}>
                    <img src={arrayImage?.[2] ?? aboutUs1.src} alt="employee" />
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12}>
                  <div className={styles.aboutFooterLeft__image}>
                    <img src={arrayImage?.[2] ?? aboutUs1.src} alt="employee" />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        ) : (
          ""
        )}

        <Col xs={24} sm={24} xl={10} className={styles.aboutUs__headquarters}>
          <div data-aos="fade-left">
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={arrayImage?.[0] ?? aboutUs1.src}
              alt="about picture"
            />
          </div>
        </Col>
      </Row>
      {!isMobile ? (
        <Row className={styles.aboutFooter} id="partner">
          <Col xs={24} sm={24} xl={14}>
            <div data-aos="fade-up">
              <Row
                gutter={[
                  { xs: 0, md: 3 },
                  { xs: 10, md: 0 },
                ]}
                className={styles.aboutFooterLeft}
              >
                <Col xs={24} sm={12} md={12}>
                  <div className={styles.aboutFooterLeft__image}>
                    <img src={arrayImage?.[2] ?? aboutUs1.src} alt="employee" />
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12}>
                  <div className={styles.aboutFooterLeft__image}>
                    <img src={arrayImage?.[1] ?? aboutUs2.src} alt="employee" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={24} sm={24} xl={10}>
            <div data-aos="fade-up" className={styles.aboutFooterRight}>
              <div className={styles.aboutFooterRight__subtitle}>
                {t("homePage.about.headOffice")}
              </div>
              <div className={styles.aboutFooterRight__title}>
                <span style={{ fontWeight: "bold" }}>
                  Cùng một đội ngũ nhân viên năng động,
                </span>
                nhiệt huyết, và chuyên nghiệp
                <span style={{ fontWeight: "bold" }}>TỰ HÀO</span> mang đến cho
                Quý Khách Hàng các sản phẩm, dịch vụ đạt chất và lượng.
              </div>
            </div>
          </Col>
        </Row>
      ) : (
        ""
      )}

      <Row
        gutter={[
          { xs: 10, md: 20 },
          { xs: 20, md: 0 },
        ]}
        className={styles.loyalCustomer}
        justify="space-between"
      >
        <Col xs={24} sm={24} md={24} xl={6}>
          <div data-aos="fade-right">
            <h5 className={styles.loyalCustomer__title}>
              {t("loyalCustomer")}
            </h5>
            <p className={styles.loyalCustomer__article}>
              {t("homePage.about.partner")}
            </p>
          </div>
        </Col>
        {arrayPartners.length <= 5 ? (
          <Col
            style={{ marginRight: "-10px" }}
            xs={24}
            sm={24}
            md={24}
            xl={{ span: 17, pull: 1 }}
          >
            <div data-aos="fade-left">
              <Row
                gutter={[
                  { xs: 0, md: 20, xl: 20 },
                  { xs: 20, md: 0 },
                ]}
                justify="space-between"
              >
                {arrayPartners}
              </Row>
            </div>
          </Col>
        ) : (
          <Col xs={24} sm={24} md={24} xl={18}>
            <Carousel dots={false} autoplay slidesToShow={5}>
              {arrayPartners}
            </Carousel>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default AboutUs;
