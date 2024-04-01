import { Col, Row } from "antd";
import React from "react";
import styles from "./index.module.scss";
import company1 from "../../../assets/images/home-page/VECHUNGTOI_1.png";

import useLocales from "../../../hooks/useLocales";
import { ArrowRightOutlined } from "@ant-design/icons";
import { listTypeImage } from "../../../constants/app-constants";
import { useSelector } from "../../../redux/store";
import { useMemo } from "react";

const pageType = listTypeImage.aboutPage.page; 
const pageSection = listTypeImage.aboutPage.aboutUsCompany


const CompanyIntro = () => {
  const { t } = useLocales();
  const { listImages } = useSelector((state) => state.imagesList);

  const arrayImage = useMemo(() => {
    return listImages?.[pageType]?.[pageSection]?.[0]?.images.split(',');
  },[listImages])
  return (
    <>
      <Row className="containerCustom" justify="space-between">
        <Col xs={24} sm={24} md={24} xl={12}>
          <div className={styles.image} data-aos="fade-up">
            <img src={arrayImage?.[0] ?? company1.src} alt="Company Image" />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} xl={12}>
          <div className={styles.content} data-aos="fade-up">
            <div className={`title ${styles.content__title}`}>
              {t("NamDongCompany")}
            </div>
            <div className={styles.content__subtitle}>
            {t("aboutPage.intro.est")}
            </div>
            <div className={styles.content__list}>
              <p>
              {t("aboutPage.intro.ul")}
              </p>
              <ul>
                <li>
                  <span>
                    <ArrowRightOutlined />
                  </span>
                  {t("aboutPage.intro.li1")}
                </li>
                <li>
                  <span>
                    <ArrowRightOutlined />
                  </span>
                  {t("aboutPage.intro.li2")}
                </li>
                <li>
                  <span>
                    <ArrowRightOutlined />
                  </span>
                  {t("aboutPage.intro.li3")}
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CompanyIntro;
