import React from "react";
import styles from "./index.module.scss";
import useLocales from "../../../hooks/useLocales";
import { CrownOutlined, FireOutlined, RocketOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

const CompanyMission = () => {
  const { t } = useLocales();
  return (
    <div className="containerCustom">
      <Row className={styles.mission}>
        <Col xs={24}>
          <div className={styles.mission__title} data-aos="fade-up">
            <div className="title">{t("usMission")}</div>
            <p className={`${styles.title__subtitle} subTitle`}>
              {t("aboutPage.mission.subTitle")}
            </p>
          </div>
        </Col>
        <Col xs={24}>
          <Row gutter={[30, {xs:20}]} justify="space-between">
            <Col xs={24} sm={24} md={24} xl={8}>
              <div className={styles.mission__item} data-aos="fade-right">
                <div className={styles.mission__item__header}>
                  <div className={styles.mission__item__header__icon}>
                    <CrownOutlined />
                  </div>
                  {t("aboutPage.mission.product")}
                </div>
                <div className={styles.mission__item__content}>
                  <p>{t("aboutPage.mission.contentProduct")}</p>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} xl={8}>
              <div className={styles.mission__item} data-aos="fade-up">
                <div className={styles.mission__item__header}>
                  <div className={styles.mission__item__header__icon}>
                    <FireOutlined />
                  </div>
                  {t("aboutPage.mission.price")}
                </div>
                <p className={styles.mission__item__content}>
                  {t("aboutPage.mission.contentPrice1")}
                  <br />
                  <br />

                  {t("aboutPage.mission.contentPrice2")}
                </p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} xl={8}>
              <div className={styles.mission__item} data-aos="fade-left">
                <div className={styles.mission__item__header}>
                  <div className={styles.mission__item__header__icon}>
                    <RocketOutlined />
                  </div>
                  {t("aboutPage.mission.tech")}
                </div>
                <p className={styles.mission__item__content}>
                  {t("aboutPage.mission.contentTech")}
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CompanyMission;
