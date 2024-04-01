import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Breadcrumb, Col, Row, Tabs } from "antd";
import ButtonCusTom from "../../../component/ButtonCustom";
import storePic4 from "../../../assets/images/store-page/store4.png";
import storePic5 from "../../../assets/images/store-page/store5.png";
import storePic6 from "../../../assets/images/store-page/store6.png";
import storePic7 from "../../../assets/images/store-page/store7.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import useLocales from "../../../hooks/useLocales";
import moment from "moment";
import { useRouter } from "next/router";
import { ROUTER_PATH } from "../../../constants/router-constants";
const PromotionProduct = () => {
  const router = useRouter();

  const { t } = useLocales();
  const [countdown, setCountdown] = useState({
    days: 15,
    hours: 20,
    minutes: 30,
    seconds: 50,
  });

  useEffect(() => {
    // CountDown
    let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    let countDown = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      setCountdown({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(countDown);
      }
    }, 1000);
    // EndCountDown
  }, []);
  return (
    <>
      <Row gutter={[0, { xs: 10, xl: 10 }]} className={styles.promotion}>
        <Col xs={7} sm={24} md={24} xl={4}>
          <Row
            gutter={[
              { xs: 10, sm: 15, md: 15, xl: 0 },
              { xs: 10, sm: 15, md: 15, xl: 15 },
            ]}
            justify="space-between"
            align="middle"
            style={{
              height: "100%",
            }}
            data-aos="fade-right"
          >
            <Col xs={24} md={24} xl={24}>
              <div className={styles.promotion__image}>
                <img src={storePic4.src} alt="chair" />
              </div>
            </Col>
            <Col xs={24} md={24} xl={24}>
              <div className={styles.promotion__image}>
                <img src={storePic5.src} alt="chair" />
              </div>
            </Col>
            <Col xs={24} md={24} xl={24}>
              <div className={styles.promotion__image}>
                <img src={storePic6.src} alt="chair" />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={17} xl={10} className={styles.content__image}>
          <img src={storePic7.src} alt="chair" data-aos="fade-zoom-in" />
        </Col>
        <Col xs={24} sm={24} md={24} xl={10}>
          <Row className={styles.content}>
            <Col xs={24} xl={24} className={styles.body} data-aos="fade-left">
              <div className={styles.body__header}>
                <span> Ghế Mây</span> (giảm 30%)
              </div>
              {/* <p className={styles.body__text}>
                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p> */}
              <div className={styles.body__price}>
                900.000
                <span>1.200.000</span>
              </div>
              <Row
                gutter={[
                  { xs: 15, sm: 15, md: 10, xl: 15 },
                  { xs: 15, sm: 15, xl: 0 },
                ]}
                style={{
                  marginBottom: "20px",
                }}
              >
                <Col xs={6} sm={6} xl={6}>
                  <div className={styles.body__date}>
                    <p>{countdown.days}</p> {t("day")}
                  </div>
                </Col>
                <Col xs={6} sm={6} xl={6}>
                  <div className={styles.body__date}>
                    <p>{countdown.hours}</p> {t("hours")}
                  </div>
                </Col>
                <Col xs={6} sm={6} xl={6}>
                  <div className={styles.body__date}>
                    <p>{countdown.minutes}</p> {t("minute")}
                  </div>
                </Col>
                <Col xs={6} sm={6} xl={6}>
                  <div className={styles.body__date}>
                    <p>{countdown.seconds}</p>
                    {t("second")}
                  </div>
                </Col>
              </Row>
              <div className={styles.body__button}>
                <ButtonCusTom
                  onClick={() => {
                    router.push(ROUTER_PATH.productDetail);
                  }}
                  title={t("viewMore")}
                  icon={<ArrowRightOutlined />}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default PromotionProduct;
