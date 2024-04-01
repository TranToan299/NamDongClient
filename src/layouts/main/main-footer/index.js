import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import zalo from "../../../assets/icons/flags/Zalo.svg";
import facebook from "../../../assets/icons/iconSvg/facebook.svg";

import insta from "../../../assets/icons/iconSvg/instagram.svg";

import register1 from "../../../assets/images/footer/logo1.png";
import register2 from "../../../assets/images/footer/logo.png";
import logo from "../../../assets/icons/iconSvg/logoFooter.svg";
import { ROUTER_PATH } from "../../../constants/router-constants";
import useLocales from "../../../hooks/useLocales";
import styles from "./index.module.scss";
import useResponsive from "../../../hooks/useResponsive";

const MainFooter = () => {
  const { t } = useLocales();
  const { isMobile } = useResponsive();
  return (
    <>
      {isMobile && <hr className={styles.line} />}
      <div className={`containerCustom ${styles.footerContainer}`}>
        {!isMobile && <hr className={styles.line} />}
        <Row
          gutter={[{ xs: 10, sm: 10, md: 30 }, 0]}
          className={styles.mainFooter}
        >
          <Col xs={24} sm={24} md={12} xl={6} className={styles.colItem}>
            <Row>
              <div className={styles.logo}>
                <img src={logo.src} alt="" width={80} height={80} />
              </div>
              <Col xs={24}>
                <div className={styles.socialMedia}>
                  <span className={styles.follow}>Follow us</span>
                  <Link href="/" className={styles.socialMedia__item}>
                    <img src={facebook.src} alt="zalo" />
                  </Link>
                  <Link href="/" className={styles.socialMedia__item}>
                    <img src={insta.src} alt="zalo" />
                  </Link>
                  <Link href="/" className={styles.socialMedia__itemlast}>
                    <img src={zalo.src} alt="zalo" />
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={12} md={12} xl={6} className={styles.colItem}>
            <div className={styles.policy}>
              <div className={styles.title}>{t("policy")}</div>
              <ul>
                <li className={styles.policy__item}>
                  <Link
                    href={{
                      pathname: ROUTER_PATH.policy,
                      query: {
                        name: "salesPolicy",
                      },
                    }}
                  >
                    {t("salesPolicy")}
                  </Link>
                </li>
                <li className={styles.policy__item}>
                  <Link
                    href={{
                      pathname: ROUTER_PATH.policy,
                      query: {
                        name: "warrantyPolicy",
                      },
                    }}
                  >
                    {t("warrantyPolicy")}
                  </Link>
                </li>
                <li className={styles.policy__item}>
                  <Link
                    href={{
                      pathname: ROUTER_PATH.policy,
                      query: {
                        name: "returnPolicy",
                      },
                    }}
                  >
                    {t("returnPolicy")}
                  </Link>
                </li>
                <li className={styles.policy__item}>
                  <Link
                    href={{
                      pathname: ROUTER_PATH.policy,
                      query: {
                        name: "deliveryAndInstallPolicy",
                      },
                    }}
                  >
                    {t("deliveryAndInstallPolicy")}
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={24} sm={24} md={12} xl={6} className={styles.colItem}>
            <div className={styles.support}>
              <div className={styles.title}>{t("supportCustomer")}</div>
              <ul>
                <li className={styles.support__item}>
                  <Link href={ROUTER_PATH.question}>{t("question")}</Link>
                </li>
                <li className={styles.support__item}>
                  <Link href={ROUTER_PATH.protectInformation}>
                    {t("protectInformation")}
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} xl={6} className={styles.colItem}>
            <div className={styles.contact}>
              <div className={styles.contact__item}>
                <div>
                  <PhoneOutlined
                    className={styles.contact__icons}
                    style={{ fontSize: "24px", transform: "rotate(90deg)" }}
                  />
                </div>
                <a className={styles.contact__phone} href="tel:0979765648">
                  0979765648
                </a>
              </div>
              <div className={styles.contact__item}>
                <div>
                  <MailOutlined
                    className={styles.contact__icons}
                    style={{ fontSize: "24px" }}
                  />
                </div>

                <a
                  className={styles.contact__mail}
                  href="mailto:contact@nadobranding.com"
                  target="blank"
                >
                  contact@nadobranding.com
                </a>
              </div>

              <div className={styles.contact__item}>
                <div>
                  <EnvironmentOutlined
                    className={styles.contact__icons}
                    style={{ fontSize: "24px" }}
                  />
                </div>
                <div className={styles.contact__address}>
                  Số 7, đường 14, HimLam, P. Tân Hưng, Quận 7, TPHCM
                </div>
              </div>
              <div className={styles.contact__register}>
                <img src={register1.src} alt="Bộ công thương" />
                <img src={register2.src} alt="Bộ công thương" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MainFooter;
