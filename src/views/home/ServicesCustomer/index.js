import React from "react";
import styles from "./index.module.scss";
import { Col, Row } from "antd";
import useLocales from "../../../hooks/useLocales";
import Link from "next/link";
import servicesPic from "../../../assets/images/service/servicePic.png";
import chair from "../../../assets/images/home-page/houseFurniture.png";

import { ArrowRightOutlined } from "@ant-design/icons";
import { ROUTER_PATH } from "../../../constants/router-constants";

const ServicesHome = () => {
  const { t } = useLocales();
  return (
    <div className={`containerCustom` }>
      <Row className={styles.services} align='middle'>
        <Col xs={24} sm={24} md={12}>
          <div className={styles.servicesLeft} data-aos="fade-right">
            <div className={styles.servicesLeft__title}>{t("services")}</div>
            <p className={styles.servicesLeft__text}>
              {t("homePage.services.content")}
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <div className={styles.servicesRight} data-aos="fade-left">
            <div className={styles.servicesRight__title}>
              {t("homePage.services.projectInfo")}
            </div>
            <Row
              gutter={[{ xs: 20, xl: 40 }, 0]}
              className={styles.servicesRight__content}
            >
              <Col xs={8} sx={8} md={8}>
                <div className={styles.servicesRight__contentItem}>
                  <div> {`> 1000`}</div>
                  <p> Nội&nbsp;thất&nbsp;quảng&nbsp;cáo</p>
                </div>
              </Col>
              <Col xs={8} sx={8} md={8}>
                <div className={styles.servicesRight__contentItem}>
                  <div>{`> 50`}</div>
                  <p>{t("homePage.services.event")}</p>
                </div>
              </Col>
              <Col xs={8} sx={8} md={8}>
                <div className={styles.servicesRight__contentItem}>
                  <div>{`> 20`}</div>
                  <p>{t("homePage.services.web")}</p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row
        gutter={[
          { xs: 0, xl: 0 },
          { xs: 0, sm: 0 },
        ]}
        className={styles.servicesFooter}
        justify="space-between"
      >
        <Col xs={24} sm={24} md={12} lg={6}>
          <div
          data-aos="fade-up"
            className={`${styles.servicesFooter__item} ${styles.servicesFooter__itemImage}`}
          >
            <img src={chair.src} alt="advertise" />
            <div className={styles.servicesFooter__itemSubtitle}>
            {t("homePage.services.department")}
            </div>

            <div className={styles.servicesFooter__itemTitle}>
              {t("furniture")}
              <div>{t("house")}</div>
            </div>

            <Link href={ROUTER_PATH.houseFurniture}>
              {t("viewMore")}
              <span>{<ArrowRightOutlined />}</span>
            </Link>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <div className={styles.servicesFooter__item} data-aos="fade-down">
            <div className={styles.servicesFooter__itemSubtitle}>
 
              {t("homePage.services.shelf")}
            </div>

            <div className={styles.servicesFooter__itemTitle}>
              {t("furniture")}
              <div>{t("advertise")}</div>
            </div>

            <Link href={ROUTER_PATH.advertiseFurniture}>
              {t("viewMore")}
              <span>{<ArrowRightOutlined />}</span>
            </Link>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <div className={styles.servicesFooter__item} data-aos="fade-up">
            <div className={styles.servicesFooter__itemSubtitle}>
              {t("homePage.services.virtualStore")}
            </div>
            <div className={styles.servicesFooter__itemTitle}>
              {`${t("webAnd")}`}
              <div>{t("system")}</div>
            </div>
            <Link href={ROUTER_PATH.webAndSystem}>
              {t("viewMore")}
              <span>{<ArrowRightOutlined />}</span>
            </Link>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <div className={styles.servicesFooter__item} data-aos="fade-down">
            <div className={styles.servicesFooter__itemSubtitle}>
              {t("homePage.services.wareHouses")}
            </div>
            <div className={styles.servicesFooter__itemTitle}>
              {t("services")}
              <div>{t("other")}</div>
            </div>
            <Link href={ROUTER_PATH.otherService}>
              {t("viewMore")}
              <span>{<ArrowRightOutlined />}</span>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ServicesHome;
