import React from "react";
import styles from "./mobile.module.scss";
import { Col, Row } from "antd";
import useLocales from "../../../hooks/useLocales";
import { ExpandAltOutlined, ArrowRightOutlined } from "@ant-design/icons";
import store1 from "../../../assets/images/home-page/Mobile/white-chair-isolated-white-background-great-article-about-home-decor-essentials 2.png";
import store2 from "../../../assets/images/home-page/Mobile/2.png";
import store3 from "../../../assets/images/home-page/Mobile/3.png";
import store4 from "../../../assets/images/home-page/Mobile/4.png";
import store5 from "../../../assets/images/home-page/Mobile/5.png";
import store6 from "../../../assets/images/home-page/Mobile/6.png";
import store7 from "../../../assets/images/home-page/Mobile/7.png";
import store8 from "../../../assets/images/home-page/Mobile/8.png";
import store9 from "../../../assets/images/home-page/Mobile/9.png";
import store10 from "../../../assets/images/home-page/Mobile/10.png";
import Link from "next/link";
import { ROUTER_PATH } from "../../../constants/router-constants";
const StoreSectionHomePageMobile = () => {
  const { t } = useLocales();
  return (
    <Row className={styles.store}>
      <div className={styles.modal}>
        <h1 className={`${styles.modal__content} title`}>{t("comingSoon")}</h1>
      </div>
      <Col xs={24}>
        <div className={styles.store__itemContent}>
          <div className={styles.store__itemContent__header}>
            <span className="title">{t("store")}</span>
          </div>
          <p>{t("homePage.store.content")}</p>
          <Link href={ROUTER_PATH.store}>
            {t("viewMore")} <ArrowRightOutlined />
          </Link>
        </div>
      </Col>
      <Col xs={24} sm={12}>
        <div className={styles.store__itemImage}>
          <img src={store1.src} alt="Store" />
        </div>
        <div
          className={styles.store__itemImage__modal}
          onClick={() => {
            window.open(store1.src);
          }}
        >
          <ExpandAltOutlined style={{ color: "white", fontSize: 40 }} />
        </div>
      </Col>
      <Col xs={24} sm={12}>
        <div className={styles.store__itemImage}>
          <img src={store2.src} alt="Store" />
        </div>
      </Col>

      <Col xs={24} sm={12}>
        <div className={styles.store__itemImage}>
          <img src={store3.src} alt="Store" />
        </div>
      </Col>
      <Col xs={24} sm={12}>
        <div className={styles.store__itemImage}>
          <img src={store4.src} alt="Store" />
        </div>
      </Col>
      <Col xs={24} sm={12}>
        <div className={styles.store__itemImage}>
          <img src={store10.src} alt="Store" />
        </div>
      </Col>
      <Col xs={24} sm={12}>
        <div className={styles.store__itemImage}>
          <img src={store5.src} alt="Store" />
        </div>
      </Col>
      <Col xs={24} sm={12}>
        <div className={styles.store__itemImage}>
          <img src={store6.src} alt="Store" />
        </div>
      </Col>

      <Col xs={24} sm={12}>
        <Row>
          <Col xs={24}>
            <div className={styles.store__itemImage}>
              <img src={store7.src} alt="Store" />
            </div>
          </Col>
          <Col xs={24}>
            <div className={styles.store__itemImage}>
              <img src={store8.src} alt="Store" />
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={12}></Col>
      <Col xs={24}>
        <div className={styles.store__itemImage}>
          <img src={store9.src} alt="Store" />
        </div>
      </Col>
    </Row>
  );
};

export default StoreSectionHomePageMobile;
