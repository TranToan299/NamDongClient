import { Breadcrumb, Button, Carousel, Col, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import Banner from "../../../component/Banner";
import useLocales from "../../../hooks/useLocales";
import Layout from "../../../layouts";

import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CloseOutlined,
  FullscreenOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import banner from "../../../assets/images/advertise-furniture-detail-page/Screen Shot 2023-05-16 at 16.39 1 (2).png";
import logo from "../../../assets/images/logo/Logo 2 116x120.png";
import { ROUTER_PATH } from "../../../constants/router-constants";
import PageWrapper from "../../../hocs/page-wrapper";
import useResponsive from "../../../hooks/useResponsive";
import { getProductDetail } from "../../../redux/slices/ProductSlice";
import { dispatch, useSelector } from "../../../redux/store";
import styles from "./detail.module.scss";
import ModalListImage from "../../../component/ModalListImage/ModalListImage";

const AdvertiseFurnitureDetail = () => {
  const { isMobile, isTablet } = useResponsive();
  const router = useRouter();
  const { productDetail } = useSelector((state) => state.product);
  const { t } = useLocales();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const arrayImageDetail =
    productDetail?.images?.split(",")?.[0] === ""
      ? [productDetail?.thumbnail]
      : productDetail?.images?.split(",");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (router.query.detail) {
      dispatch(getProductDetail(router.query.detail));
    }
  }, [router.query.detail]);

  return (
    <PageWrapper title={t("advFurniture")}>
      <ModalListImage
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        listImage={arrayImageDetail}
        name={productDetail?.name}
      />
      <Banner
        srcBanner={banner.src}
        title={t(router.query.slug)}
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link href="/">{t("home")}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {!isMobile ? (
                router.query.slug === "advFurniture" ? (
                  <Link href={ROUTER_PATH.advertiseFurniture}>
                    {t(router.query.slug)}
                  </Link>
                ) : (
                  <Link href={ROUTER_PATH.houseFurniture}>
                    {t(router.query.slug)}
                  </Link>
                )
              ) : (
                "..."
              )}
            </Breadcrumb.Item>
            <Breadcrumb.Item>{productDetail?.name}</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <div className="containerCustom">
        <Row className={styles.furnitureDetail}>
          <Col xs={24}>
            <div className={styles.furnitureDetail__title} data-aos="fade-up">
              <div className="title" >{productDetail?.name}</div>
              <div className={styles.furnitureDetail__subtitle}>
                {productDetail?.description}
              </div>
            </div>
          </Col>
          <Col xs={24}>
            <Row gutter={[60, 0]} className={styles.furnitureDetail__content}>
              <Col xs={24} sm={24} xl={16} data-aos="fade-right">
                {arrayImageDetail?.length <= 4 ? (
                  <Row
                    // justify="space-between"
                    gutter={[{ xl: 30, xs: 15 }, { xs: 15 }]}
                    className={styles.furnitureDetail__content__imagesContainer}
                  >
                    {arrayImageDetail?.map((item, index) => {
                      return (
                        <Col key={index} xs={12} sm={6}>
                          <div
                            onClick={() => {
                              setCurrentImageIndex(index);
                              showModal();
                            }}
                            className={
                              styles.furnitureDetail__content__imagesContainer__item
                            }
                          >
                            <img
                              src={arrayImageDetail[index]}
                              alt="Furniture Detail"
                            />
                            <div
                              className={
                                styles.furnitureDetail__content__imagesContainer__item__modal
                              }
                            >
                              <FullscreenOutlined style={{ fontSize: 32 }} />
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                ) : (
                  <Carousel
                    autoplaySpeed={1500}
                    dots={false}
                    className={`carouselCustom ${styles.carousel}`}
                    slidesToShow={4}
                    autoplay
                  >
                    {arrayImageDetail?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setCurrentImageIndex(index);
                            showModal();
                          }}
                          className={
                            styles.furnitureDetail__content__imagesContainer__item
                          }
                        >
                          <img
                            src={arrayImageDetail[index]}
                            alt="Furniture Detail"
                          />
                          <div
                            className={
                              styles.furnitureDetail__content__imagesContainer__item__modal
                            }
                          >
                            <FullscreenOutlined style={{ fontSize: 32 }} />
                          </div>
                        </div>
                      );
                    })}
                  </Carousel>
                )}

                <Row className={styles.furnitureDetail__content__left}>
                  {
                    <div
                      dangerouslySetInnerHTML={{
                        __html: productDetail?.content,
                      }}
                    />
                  }
                </Row>
              </Col>

              <Col xs={24} sm={24} xl={8} data-aos="fade-left">
                <div className={styles.right}>
                  <div className={styles.right__top}>
                    <div>Đơn vị thi công</div>
                    <img src={logo.src} alt="logo" />
                  </div>

                  <div className={styles.right__bottom}>
                    <div className={styles.right__bottom__header}>
                      {t("projectInformation")}
                    </div>

                    <div className={styles.right__bottom__content}>
                      {productDetail?.info?.split(",")
                        ? productDetail?.info?.split(",").map((item, index) => {
                            return <div key={index}>{item}</div>;
                          })
                        : t("noData")}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </PageWrapper>
  );
};
AdvertiseFurnitureDetail.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default AdvertiseFurnitureDetail;
