import { CaretDownOutlined } from "@ant-design/icons";
import { Breadcrumb, Col, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import banner1 from "../../assets/images/sales-policy-page/banner.png";
import Banner from "../../component/Banner";
import useLocales from "../../hooks/useLocales";
import useResponsive from "../../hooks/useResponsive";
import Layout from "../../layouts";
import styles from "./index.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import PageWrapper from "../../hocs/page-wrapper";
import { OBJECT_TYPE } from "../../constants/app-constants";
import { ROUTER_PATH } from "../../constants/router-constants";
import SalesPolicy from "../../views/policy/sales";
import WarrantyPolicy from "../../views/policy/warranty";
import ReturnPolicy from "../../views/policy/return";
import DeliveryPolicy from "../../views/policy/delivery";

const navList = [
  "salesPolicy",
  "warrantyPolicy",
  "returnPolicy",
  "deliveryAndInstallPolicy",
];

const SalesPolicyPage = () => {
  const { t } = useLocales();
  const router = useRouter();
  const { isMobile, isTablet } = useResponsive();
  const [itemActive, setItemActive] = useState("salesPolicy");

  const handleActiveNav = async (item) => {
    setItemActive(item);
    router.push(
      {
        pathname: ROUTER_PATH.policy,
        query: {
          name: item,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleSelect = (value) => {
    setItemActive(value);
  };
  useEffect(() => {
    setItemActive(router.query.name);
  }, [router.query.name]);

  const renderContent = () => {
    switch (router.query.name) {
      case "salesPolicy":
        return <SalesPolicy />;
      case "warrantyPolicy":
        return <WarrantyPolicy />;
      case "returnPolicy":
        return <ReturnPolicy />;
      case "deliveryAndInstallPolicy":
        return <DeliveryPolicy />;
    }
  };

  return (
    <PageWrapper title={t("policy")}>
      <Banner
        srcBanner={banner1.src}
        title={t("policy")}
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link href="/">{t("home")}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{t("policy")}</Breadcrumb.Item>
            <Breadcrumb.Item>{itemActive?.title}</Breadcrumb.Item>
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
                  defaultValue={OBJECT_TYPE.policy.sales}
                  size="large"
                  style={{ width: "100%" }}
                  onChange={handleSelect}
                  options={[
                    {
                      value: OBJECT_TYPE.policy.sales,
                      label: t("salesPolicy"),
                    },
                    {
                      value: OBJECT_TYPE.policy.warranty,
                      label: t("warrantyPolicy"),
                    },
                    {
                      value: OBJECT_TYPE.policy.return,
                      label: t("returnPolicy"),
                    },
                    {
                      value: OBJECT_TYPE.policy.deliveryAndInstall,
                      label: t("deliveryAndInstallPolicy"),
                    },
                  ]}
                />
              </div>
            </Col>
          ) : (
            <Col xs={24} xl={6}>
              <div className={styles.navContainer}>
                <div className={styles.navContainer__title}>{t("policy")}</div>
                <div className={styles.navContainer__body}>
                  <ul>
                    {navList?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => {
                            handleActiveNav(item);
                          }}
                          className={
                            navList[index] === itemActive
                              ? styles.activeNav
                              : ""
                          }
                          name={item.name}
                        >
                          {t(navList[index])}
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
              <div className={styles.content__header}>{t(itemActive)}</div>
              {renderContent()}
              <div className={styles.content__text}></div>
            </div>
          </Col>
        </Row>
      </div>
    </PageWrapper>
  );
};
SalesPolicyPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default SalesPolicyPage;
