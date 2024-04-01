import React, { useEffect, useState } from "react";
import Banner from "../../../component/Banner";
import { Breadcrumb, Button, Col, Drawer, Row, Select } from "antd";
import styles from "./index.module.scss";
import banner1 from "../../../assets/images/banner/banner trang CUAHANG.png";
import useLocales from "../../../hooks/useLocales";
import Layout from "../../../layouts";
import useResponsive from "../../../hooks/useResponsive";
import { CaretDownOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import PageWrapper from "../../../hocs/page-wrapper";
import image from "../../../assets/images/other-service-page/event.png";
import Link from "next/link";
import { ROUTER_PATH } from "../../../constants/router-constants";
import { notificationCustom } from "../../../utils/notification";
import { COMING_SOON } from "../../../constants/app-constants";
 

const navList = ["salesPromotion1", "salesPromotion2"];

const StorePromotionPage = () => {
  const { t } = useLocales();
  const router = useRouter();
  const { isMobile, isTablet } = useResponsive();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [itemActive, setItemActive] = useState("salesPromotion1");
  const handleSelect = (value) => {
    setItemActive(value);
    const arrayString = value.split("");
    const index = arrayString?.[arrayString.length - 1];
    setCurrentIndex(index);
    router.push(
      {
        pathname: ROUTER_PATH.promotion,
        query: {
          nav: value,
        },
      },
      undefined,
      { shallow: true }
    );
  };
  const handleActiveNav = async (item) => {
    setItemActive(item);
    router.push(
      {
        pathname: ROUTER_PATH.promotion,
        query: {
          nav: item,
        },
      },
      undefined,
      { shallow: true }
    );
  };
  useEffect(() => {
    if (router.query.nav) {
      setItemActive(router.query.nav);
    }
  }, [router.query.nav]);
  useEffect(() => {
    if (COMING_SOON) {
      notificationCustom("info", "Coming soon");
      router.push("/");
      return;
    }
  }, []);
  return (
    <PageWrapper title={t("store")}>
      <Banner
        srcBanner={banner1.src}
        title={t("store")}
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link href="/">{t("home")}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href={ROUTER_PATH.store}>{t("store")}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{t("promotion")}</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <div className="containerCustom">
        <Row gutter={[{ xs: 0, sm: 0, md: 0, xl: 30 }, 0]}>
          {isMobile || isTablet ? (
            <Col xs={24}>
              <div className={`${styles.select} selectCustomMobile`}>
                <Select
                  suffixIcon={<CaretDownOutlined style={{ color: "black" }} />}
                  defaultValue={t("salesPromotion")}
                  size="large"
                  style={{ width: "100%", marginBottom: 40 }}
                  onChange={handleSelect}
                  options={[
                    {
                      value: "salesPromotion1",
                      label: `${t("salesPromotion")} 1`,
                    },
                    {
                      value: "salesPromotion2",
                      label: `${t("salesPromotion")} 2`,
                    },
                  ]}
                />
              </div>
            </Col>
          ) : (
            <Col xs={24} xl={6}>
              <div className={styles.navContainer}>
                <div className={styles.navContainer__title}>
                  {t("promotion")}
                </div>
                <div className={styles.navContainer__body}>
                  <ul>
                    {navList?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => {
                            setCurrentIndex(index + 1);
                            handleActiveNav(item);
                          }}
                          className={
                            navList[index] === itemActive
                              ? styles.activeNav
                              : ""
                          }
                        >
                          {`${t("salesPromotion")} ${index + 1}`}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Col>
          )}

          <Col xs={24} sm={24} md={24} xl={18}>
            <div className={styles.content}>
              <div className={styles.content__header}>{`${t(
                "salesPromotion"
              )} ${currentIndex}`}</div>
              <div className={styles.content__text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>
                <div>
                  Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit
                </div>
                <p>
                  Sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                  magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                  quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                  ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat
                  volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                  tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                  commodo consequat. Duis autem vel eum iriure dolor in
                  hendrerit in vulputate velit esse molestie consequat, vel
                  illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.
                  Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                  wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse molestie consequat, vel illum dolore eu
                  feugiat nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit
                  amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat
                  volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                  tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                  commodo consequat.
                </p>
                <div>Lorem ipsum dolor sit amet</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.
                  Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </PageWrapper>
  );
};
StorePromotionPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default StorePromotionPage;
