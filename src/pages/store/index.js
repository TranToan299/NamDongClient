import { Breadcrumb, Col, Row, Select, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import banner from "../../assets/images/banner/banner trang CUAHANG.png";
import storePic1 from "../../assets/images/store-page/store1.png";
import storePic2 from "../../assets/images/store-page/store2.png";
import storePic3 from "../../assets/images/store-page/store3.png";
import useLocales from "../../hooks/useLocales";
import Layout from "../../layouts";
import styles from "./index.module.scss";

import { CaretDownOutlined } from "@ant-design/icons";
import Link from "next/link";
import Banner from "../../component/Banner";
import {
  COMING_SOON,
  DEFAULT_PARAMS,
  OBJECT_TYPE,
  listTypeImage,
} from "../../constants/app-constants";
import PageWrapper from "../../hocs/page-wrapper";
import useResponsive from "../../hooks/useResponsive";
import { getListProduct } from "../../redux/slices/ProductSlice";
import { dispatch, useSelector } from "../../redux/store";
import LiquidationProduct from "../../views/store/liquidation";
import PromotionProduct from "../../views/store/promotion";
import TabAllInStore from "../../views/store/tabs/tab-all";
import TabChairInStore from "../../views/store/tabs/tab-chair";
import TabShelfInStore from "../../views/store/tabs/tab-shelf";
import TabTableInStore from "../../views/store/tabs/tab-table";
import { hideLoading, showLoading } from "../../redux/slices/LoadingSlice";
import { getImages } from "../../redux/slices/GetImagesSlice";
import { useMemo } from "react";
import { notificationCustom } from "../../utils/notification";
import { useRouter } from "next/router";

const pageType = listTypeImage.storePage.page;
const pageSection = listTypeImage.storePage.storeBackground;
const pageSectionBanner = listTypeImage.storePage.storeBanner;


const StorePage = () => {
  const { isMobile, isTablet } = useResponsive();
  const router = useRouter();

  const { listImages } = useSelector((state) => state.imagesList);
  const arrayImageBackground = useMemo(() => {
    return listImages?.[pageType]?.[pageSection]?.[0]?.images.split(",");
  }, [listImages]);
  const arrayImageBanner = useMemo(() => {
    return listImages?.[pageType]?.[pageSectionBanner]?.[0]?.images.split(",");
  }, [listImages]);
  const { productList, productListLiquid } = useSelector(
    (state) => state.product
  );
  const [params, setParams] = useState({
    keyword: "",
    type: OBJECT_TYPE.product.type.store,
    categoryId: OBJECT_TYPE.product.productCategory.all,
    pageSize: DEFAULT_PARAMS.PAGE_SIZE,
    pageIndex: DEFAULT_PARAMS.PAGE_INDEX,
  });
  const { t } = useLocales();
  const [activeKey, setActiveKey] = useState("all");
  const onChange = (key) => {
    setParams({
      keyword: "",
      type: OBJECT_TYPE.product.type.store,
      categoryId: key === "all" ? null : key,
      pageSize: DEFAULT_PARAMS.PAGE_SIZE,
      pageIndex: DEFAULT_PARAMS.PAGE_INDEX,
    });
    setActiveKey(key);
  };
  const items = [
    {
      key: "all",
      label: t("all"),
      children: <TabAllInStore />,
    },
    {
      key: OBJECT_TYPE.product.productCategory.table,
      label: t("table"),
      children: <TabTableInStore />,
    },
    {
      key: OBJECT_TYPE.product.productCategory.chair,
      label: t("chair"),
      children: <TabChairInStore />,
    },
    {
      key: OBJECT_TYPE.product.productCategory.shelf,
      label: t("shelfStore"),
      children: <TabShelfInStore />,
    },
  ];

  const getProductList = async (options) => {
    await dispatch(showLoading());
    try {
      await dispatch(getListProduct(options));
    } finally {
      await dispatch(hideLoading());
    }
  };
  useEffect(() => {
    getProductList(params);
  }, [params]);

  useEffect(() => {
    dispatch(getImages(listTypeImage.storePage.storeBanner));
    dispatch(getImages(listTypeImage.storePage.storeBackground));
  }, []);
  // Coming soon
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
        srcBanner={arrayImageBackground?.[0]}
        title={t("store")}
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link href="/">{t("home")}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{t("store")}</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <div className="containerCustom">
        <Row
          gutter={[
            { xs: 0, sm: 0, md: 0, xl: 30 },
            { xs: 15, sm: 15, md: 15, xl: 0 },
          ]}
          justify="space-between"
        >
          <Col xs={24} sm={24} md={24} xl={8} data-aos="fade-up">
            <div className={styles.card}>
              <div className={styles.card__image}>
                <img src={arrayImageBanner?.[2]} alt="Chair" />
              </div>

              {/* <div className={styles.card__content}>
                <p>Sản phẩm mới</p>
                <div>Bộ đôi ghế nhựa</div>
              </div> */}
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} xl={8} data-aos="fade-up">
            <div className={styles.card}>
              <div className={styles.card__image}>
                <img src={arrayImageBanner?.[1]} alt="Chair" />
              </div>
              {/* <div className={styles.card__content}>
                <p>Chào tháng mới</p>
                <div>
                  Giảm giá <span>50%</span>
                </div>
              </div> */}
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} xl={8} data-aos="fade-up">
            <div className={styles.card}>
              <div className={styles.card__image}>
                <img src={arrayImageBanner?.[0]} alt="Chair" />
              </div>
              {/* <div className={styles.card__content}>
                <p>Bán chạy nhất</p>
                <div>
                  Bộ bàn ghế
                  <br /> gỗ ghép
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
        <PromotionProduct />

        <div style={{ marginTop: isMobile ? 30 : 80 }}>
          {isMobile ? (
            <Tabs
              renderTabBar={(props) => {
                return (
                  <div className="selectBox">
                    <Select
                      suffixIcon={
                        <CaretDownOutlined style={{ color: "black" }} />
                      }
                      defaultValue="all"
                      size="large"
                      style={{ width: "100%", marginBottom: 30 }}
                      onChange={onChange}
                      options={[
                        {
                          value: "all",
                          label: t("all"),
                        },
                        {
                          value: OBJECT_TYPE.product.productCategory.table,
                          label: t("table"),
                        },
                        {
                          value: OBJECT_TYPE.product.productCategory.chair,
                          label: t("chair"),
                        },
                        {
                          value: OBJECT_TYPE.product.productCategory.shelf,
                          label: t("shelfStore"),
                        },
                      ]}
                    />
                  </div>
                );
              }}
              tabBarGutter={isMobile || isTablet ? 20 : 60}
              tabBarStyle={{
                marginBottom: 35,
              }}
              centered={true}
              activeKey={activeKey}
              defaultActiveKey="all"
              items={items}
              onChange={onChange}
            />
          ) : (
            <Tabs
              data-aos="fade-up"
              tabBarGutter={isMobile || isTablet ? 20 : 60}
              tabBarStyle={{
                fontSize: 18,
                marginBottom: 35,
              }}
              centered={true}
              defaultActiveKey="all"
              items={items}
              onChange={onChange}
            />
          )}
        </div>

        <LiquidationProduct />
      </div>
    </PageWrapper>
  );
};
StorePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default StorePage;
