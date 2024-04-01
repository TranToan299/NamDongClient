import { CaretDownFilled, CaretDownOutlined } from "@ant-design/icons";
import { Breadcrumb, Col, Row, Select, Spin } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import sortIcon from "../../../assets/images/store-page-general/Sort (1).svg";
import table from "../../../assets/images/store-page-general/Vector.svg";
import chair from "../../../assets/images/store-page-general/chair.svg";
import sales from "../../../assets/images/store-page-general/sales.png";
import shelf from "../../../assets/images/store-page-general/shelf.svg";
import banner from "../../../assets/images/banner/banner trang CUAHANG.png";
import Banner from "../../../component/Banner";
import ProductThumbnail from "../../../component/product";
import {
  COMING_SOON,
  DEFAULT_PARAMS,
  OBJECT_TYPE,
  listTypeImage,
} from "../../../constants/app-constants";
import { ROUTER_PATH } from "../../../constants/router-constants";
import PageWrapper from "../../../hocs/page-wrapper";
import useLocales from "../../../hooks/useLocales";
import useResponsive from "../../../hooks/useResponsive";
import Layout from "../../../layouts";
import {
  getListProduct,
  getListTagsProduct,
} from "../../../redux/slices/ProductSlice";
import { dispatch, useSelector } from "../../../redux/store";
import styles from "./index.module.scss";
import ButtonCusTom from "../../../component/ButtonCustom";
import { getImages } from "../../../redux/slices/GetImagesSlice";
import { notificationCustom } from "../../../utils/notification";

const pageType = listTypeImage.storeGeneralPage.page;
const pageSection = listTypeImage.storeGeneralPage.storeSale;

const StoreGeneralPage = () => {
  const { t } = useLocales();
  const { isMobile, isTablet } = useResponsive();
  const router = useRouter();
  // useSelector
  const { listImages } = useSelector((state) => state.imagesList);
  const { productList, counter, tagsProductList } = useSelector(
    (state) => state.product
  );

  // useState
  const [loading, setLoading] = useState(true);
  const [navActive, setNavActive] = useState(router.query.tab || "all");
  const [counterState, setCounterState] = useState();
  const [selectValue, setSelectValue] = useState(OBJECT_TYPE.storeTabs.all);
  const [params, setParams] = useState({
    keyword: "",
    type: OBJECT_TYPE.product.type.store,
    isSale: router.query.tab === OBJECT_TYPE.storeTabs.promotion ? true : null,
    isLiquid:
      router.query.tab === OBJECT_TYPE.storeTabs.liquidate ? true : null,
    categoryId: OBJECT_TYPE.product.productCategory.all,
    pageSize: DEFAULT_PARAMS.PAGE_SIZE,
    pageIndex: DEFAULT_PARAMS.PAGE_INDEX,
  });

  // useMemo
  const arrayImage = useMemo(() => {
    return listImages?.[pageType]?.[pageSection]?.[0]?.images.split(",");
  }, [listImages]);
  const navName = useMemo(() => {
    return {
      all: "all",
      table: "table",
      chair: "chair",
      shelf: "shelf",
      promotion: "promotion",
      liquidation: "liquidation",
    };
  }, []);



  const listPortfolio = [
    <>
      <div
        onClick={() => {
          handleActive(navName.all);
        }}
        className={`${styles.list} ${
          navActive === navName.all ? styles.list__active : ""
        }`}
      >
        <div className={`${styles.list__name}`}>
          <span>
            <img src={table.src} alt="table" />
          </span>
          {t("all")}
        </div>
        {/* <div className={styles.list__quantity}>{counterState?.all} sp</div> */}
      </div>
    </>,
    <>
      <div
        onClick={() => {
          handleActive(navName.table);
        }}
        className={`${styles.list} ${
          navActive === navName.table ? styles.list__active : ""
        }`}
      >
        <div className={`${styles.list__name}`}>
          <span>
            <img src={table.src} alt="table" />
          </span>
          {t("table")}
        </div>
        {/* <div className={styles.list__quantity}>{counterState?.table} sp</div> */}
      </div>
    </>,
    <>
      <div
        onClick={() => {
          handleActive(navName.chair);
        }}
        className={`${styles.list} ${
          navActive === navName.chair ? styles.list__active : ""
        }`}
      >
        <div className={styles.list__name}>
          <span>
            <img src={chair.src} alt="chair" />
          </span>
          {t("chair")}
        </div>
        {/* <div className={styles.list__quantity}>{counterState?.chair} sp</div> */}
      </div>
    </>,
    <>
      <div
        onClick={() => {
          handleActive(navName.shelf);
        }}
        className={`${styles.list} ${
          navActive === navName.shelf ? styles.list__active : ""
        }`}
      >
        <div className={styles.list__name}>
          <span>
            <img src={shelf.src} alt="shelf" />
          </span>
          {t("shelfStore")}
        </div>
        {/* <div className={styles.list__quantity}>{counterState?.shelf} sp</div> */}
      </div>
    </>,
  ];

  const handleActive = async (name) => {
    router.push(
      {
        href: ROUTER_PATH.storeGeneral,
        query: {
          tab: name,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  // handle change product
  const handleViewMore = () => {
    setParams({
      ...params,
      pageSize: params.pageSize + 9,
    });
  };
  const handleChangeType = (value) => {
    handleActive(value);
    setSelectValue(value);
  };

  const handleChangeFilter = (value) => {
    setParams({
      keyword: "",
      type: OBJECT_TYPE.product.type.store,
      orderBy: value,
      isSale:
        router.query.tab === OBJECT_TYPE.storeTabs.promotion ? true : null,
      isLiquid:
        router.query.tab === OBJECT_TYPE.storeTabs.liquidate ? true : null,
      categoryId: OBJECT_TYPE.product.productCategory[router.query.tab],
      pageSize: DEFAULT_PARAMS.PAGE_SIZE,
      pageIndex: DEFAULT_PARAMS.PAGE_INDEX,
    });
  };

  useEffect(() => {
    if (router.query.tab) {
      setNavActive(router.query.tab);
      setSelectValue(router.query.tab);
      setParams({
        keyword: "",
        type: OBJECT_TYPE.product.type.store,
        isSale:
          router.query.tab === OBJECT_TYPE.storeTabs.promotion ? true : null,
        isLiquid:
          router.query.tab === OBJECT_TYPE.storeTabs.liquidate ? true : null,
        categoryId: OBJECT_TYPE.product.productCategory[router.query.tab],
        pageSize: DEFAULT_PARAMS.PAGE_SIZE,
        pageIndex: DEFAULT_PARAMS.PAGE_INDEX,
      });
    }
  }, [router.query.tab]);

  // Get Product
  const getProductList = async (options) => {
    setLoading(true);
    try {
      const { payload } = await dispatch(getListProduct(options));
      setCounterState({
        all: payload?.counter?.totalCount,
        table: payload?.counter?.tableCount,
        chair: payload?.counter?.chairCount,
        shelf: payload?.counter?.shelfCount,
        promotion: payload?.counter?.saleCount,
        liquidation: payload?.counter?.liquidCount,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProductList(params);
  }, [params]);
  // Get tags
  useEffect(() => {
    dispatch(getListTagsProduct(OBJECT_TYPE.product.tags));
    dispatch(getImages(listTypeImage.storeGeneralPage.storeSale));
  }, []);
  useEffect(() => {
    if (COMING_SOON) {
      notificationCustom("info", "Coming soon");
      router.push("/");
      return;
    }
  }, []);

  return (
    <PageWrapper title={t("storeGeneral")}>
      <Banner
        srcBanner={banner.src}
        title={t("store")}
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link href="/">{t("home")}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href={ROUTER_PATH.store}>{t("store")}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{t("storeGeneral")}</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <div className="containerCustom">
        <Row gutter={[40, { xs: 15, sm: 15, md: 15, xl: 0 }]}>
          <Col xs={24} sm={24} md={24} xl={6}>
            <Row gutter={[{ xs: 0, sm: 0, md: 25, xl: 0 }, 0]}>
              {isMobile ? (
                ""
              ) : (
                <>
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    xl={24}
                    className={styles.portfolio}
                    data-aos="fade-right"
                  >
                    <div className={styles.portfolio__header}>
                      {t("productPortfolio")}
                    </div>
                    <div >

                    {listPortfolio}
                    </div>
                    <div
                      onClick={() => {
                        handleActive(navName.promotion);
                      }}
                      className={`${styles.promotion} ${
                        navActive === navName.promotion
                          ? styles.list__active
                          : ""
                      }`}
                    >
                      <div className={styles.promotion__name}>
                        {t("promotion")}
                      </div>
                      {/* <div className={styles.promotion__quantity}>
                        {counterState?.promotion} sp
                      </div> */}
                    </div>
                    <div
                      onClick={() => {
                        handleActive(navName.liquidation);
                      }}
                      className={`${styles.liquidation} ${
                        navActive === navName.liquidation
                          ? styles.list__active
                          : ""
                      }`}
                    >
                      <div className={styles.liquidation__name}>
                        {t("liquidation")}
                      </div>
                      {/* <div className={styles.liquidation__quantity}>
                        {counterState?.liquidation} sp
                      </div> */}
                    </div>
                    {/* <div className={styles.tags}>
                      <div className={styles.tags__header}>Tags</div>
                      <div className={styles.tags__container}>
                        {tagsProductList?.map((item) => {
                          return (
                            <div key={item.id} className={styles.tags__item}>
                              {item.objectName}
                            </div>
                          );
                        })}
                      </div>
                    </div> */}
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    xl={24}
                    className={styles.bannerSales}
                    data-aos="fade-zoom-in"
                  >
                    <img src={arrayImage?.[0] ?? sales.src} alt="Sales Banner" />
                  </Col>
                </>
              )}
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24} xl={18}>
            <Row justify="space-between" className={styles.filter}>
              {isMobile ? (
                ""
              ) : (
                <Col xs={12} xl={16} data-aos="fade-up">
                  <div className={styles.filter__name}>
                    <span className="title">{t(navActive)}</span>
                    {/* {counterState?.[navActive]} sản phẩm */}
                    {`${productList.length} ${t("product")}`}
                  </div>
                </Col>
              )}
              <Col xs={24} xl={8}>
                {isMobile ? (
                  <div className={`${styles.select} selectCustomMobile`}>
                    <Select
                      suffixIcon={
                        <CaretDownOutlined style={{ color: "black" }} />
                      }
                      defaultValue={OBJECT_TYPE.storeTabs.all}
                      size="large"
                      value={selectValue}
                      style={{ width: "100%",height:60 }}
                      
                      onChange={handleChangeType}
                      options={[
                        { value: OBJECT_TYPE.storeTabs.all, label: t("all") },
                        {
                          value: OBJECT_TYPE.storeTabs.table,
                          label: t("table"),
                        },
                        {
                          value: OBJECT_TYPE.storeTabs.chair,
                          label: t("chair"),
                        },
                        {
                          value: OBJECT_TYPE.storeTabs.shelfStore,
                          label: t("shelfStore"),
                        },
                        {
                          value: OBJECT_TYPE.storeTabs.promotion,
                          label: t("promotion"),
                        },
                        {
                          value: OBJECT_TYPE.storeTabs.liquidate,
                          label: t("liquidation"),
                        },
                      ]}
                    />
                  </div>
                ) : (
                  ""
                )}
                <div className={`${styles.select} selectCustomMobile`}>
                  <Select
                  data-aos="fade-up"
                    defaultValue="normal"
                    suffixIcon={<CaretDownFilled style={{ color: "black" }} />}
                    style={{
                      width: isMobile ? "100%" : 261,
                      marginBottom: 30,
                      marginTop: 10,
                      float: "right",
                    }}
                    className={styles.filter}
                    size="large"
                    onChange={handleChangeFilter}
                    options={[
                      {
                        value: "normal",
                        label: (
                          <div className={styles.sortIcon}>
                            <img
                              src={sortIcon.src}
                              alt="sort"
                              style={{ marginRight: 5 }}
                            />
                            Sắp xếp: Mặc định
                          </div>
                        ),
                      },
                      {
                        value: "desc",
                        label: t("descending"),
                      },
                      {
                        value: "asc",
                        label: t("ascending"),
                      },
                    ]}
                  />
                </div>
              </Col>
            </Row>
            <Row
              gutter={[
                { xs: 10, sm: 10, md: 10, xl: 20 },
                { xs: 30, sm: 20, md: 20, xl: 40 },
              ]}
            >
              {loading ? (
                <div className="center">
                  <Spin />
                </div>
              ) : (
                productList?.map((item, index) => {
                  return (
                    <Col key={index} xs={12} sm={12} md={12} xl={8} data-aos="fade-up" data-aos-delay={index*300}>
                      <ProductThumbnail item={item} />
                    </Col>
                  );
                })
              )}
            </Row>
            <div className="center" style={{ marginTop: 20 }} data-aos="fade-up">
              {productList.length >= 10 ? (
                <ButtonCusTom
                  className={styles.viewMore}
                  onClick={() => {
                    handleViewMore();
                  }}
                  title={t("viewMore")}
                />
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
      </div>
    </PageWrapper>
  );
};
StoreGeneralPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default StoreGeneralPage;
