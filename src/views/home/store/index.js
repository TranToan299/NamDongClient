import { Col, Row } from "antd";
import React from "react";
import useLocales from "../../../hooks/useLocales";
import { ExpandAltOutlined, ArrowRightOutlined } from "@ant-design/icons";

import styles from "./index.module.scss";
import store1 from "../../../assets/images/home-page//white-chair-isolated-white-background-great-article-about-home-decor-essentials 1.png";
import store2 from "../../../assets/images/home-page/chair2.png";
import store3 from "../../../assets/images/home-page/shelf.png";
import store4 from "../../../assets/images/home-page/store4.png";
import store5 from "../../../assets/images/home-page/store5.png";
import store6 from "../../../assets/images/home-page/store6.png";
import store7 from "../../../assets/images/home-page/store7.png";
import store8 from "../../../assets/images/home-page/store8.png";
import store9 from "../../../assets/images/home-page/store9.png";
import store10 from "../../../assets/images/home-page/store10.png";
import Link from "next/link";
import { ROUTER_PATH } from "../../../constants/router-constants";

const StoreSectionHomePage = () => {
  const { t } = useLocales();
  return (
    <div data-aos="fade-zoom-in" className={`${styles.storeContainer} containerCustom`}>
      <div className={styles.store}>
        <div className={styles.modal}>
          <h1 className={`${styles.modal__content} title`}>
            {t('comingSoon')}
          </h1>
        </div>
        <Row wrap={false}>
          <Col
            flex="1 1 980px"
            //  flex ='1 1 1500px'
            //  style={{flexBasis: {xxl: '1500px'}}}
            className={styles.test}
          >
            <Row>
              <Col md={{ span: 5 }}>
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
              <Col md={{ span: 5 }}>
                <div className={styles.store__itemImage}>
                  <img src={store2.src} alt="Store" />
                </div>
              </Col>
              <Col md={{ span: 14 }}>
                <div className={styles.store__itemContent}>
                  <div className={styles.store__itemContent__header}>
                    <span className="title">{t("store")}</span>
                    <Link href={ROUTER_PATH.store}>
                      {t("viewMore")} <ArrowRightOutlined />
                    </Link>
                  </div>
                  <p>{t("homePage.store.content")}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={14}>
                <div className={styles.store__itemImage}>
                  <img src={store3.src} alt="Store" />
                </div>
              </Col>
              <Col md={5}>
                <div className={styles.store__itemImage}>
                  <img src={store4.src} alt="Store" />
                </div>
              </Col>
              <Col md={5}>
                <div className={styles.store__itemImage}>
                  <img src={store5.src} alt="Store" />
                </div>
              </Col>
            </Row>
          </Col>
          <Col flex="1 1 auto">
            <div className={styles.store__itemImage__end}>
              <img src={store6.src} alt="Store" />
            </div>
          </Col>
        </Row>
        <Row wrap={false}>
          <Col flex="1 1 auto">
            <Row>
              <Col md={8}>
                <div className={styles.store__itemImage}>
                  <img src={store7.src} alt="Store" />
                </div>
              </Col>
              <Col md={8}>
                <div className={styles.store__itemImage}>
                  <img src={store8.src} alt="Store" />
                </div>
              </Col>
              <Col md={8}>
                <div className={styles.store__itemImage}>
                  <img src={store9.src} alt="Store" />
                </div>
              </Col>
            </Row>
          </Col>

          <Col flex="1 1 453px">
            <div className={styles.store__itemImage}>
              <img src={store10.src} alt="Store" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StoreSectionHomePage;
