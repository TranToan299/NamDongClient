import React, { useEffect, useState } from "react";
import Banner from "../../component/Banner";
import { Breadcrumb, Col, Row } from "antd";
import useLocales from "../../hooks/useLocales";
import banner from "../../assets/images/banner/banner trang NOITHATNHACUA.png";
import CardHouseFurniture from "../../component/house-furniture/card-component";
import Layout from "../../layouts";
import PageWrapper from "../../hocs/page-wrapper";
import { useRouter } from "next/router";
import { ROUTER_PATH } from "../../constants/router-constants";
import Link from "next/link";
import ButtonCusTom from "../../component/ButtonCustom";
import {
  DEFAULT_PARAMS,
  OBJECT_TYPE,
  listTypeImage,
} from "../../constants/app-constants";
import { dispatch, useSelector } from "../../redux/store";
import { getListProduct } from "../../redux/slices/ProductSlice";
import { useMemo } from "react";
import { getImages } from "../../redux/slices/GetImagesSlice";

const pageType = listTypeImage.houseFurniturePage.page;
const pageSection = listTypeImage.houseFurniturePage.serviceHouseBg;

const HouseFurniturePage = () => {
  const router = useRouter();
  const { listImages } = useSelector((state) => state.imagesList);
  const arrayImage = useMemo(() => {
    return listImages?.[pageType]?.[pageSection]?.[0]?.images.split(",");
  }, [listImages]);

  const { productList } = useSelector((state) => state.product);

  const [params, setParams] = useState({
    keyword: "",
    type: OBJECT_TYPE.product.type.houseFurniture,
    pageSize: DEFAULT_PARAMS.PAGE_SIZE - 1,
    pageIndex: DEFAULT_PARAMS.PAGE_INDEX,
  });

  const { t } = useLocales();

  const handleClick = (id) => {
    router.push(`${ROUTER_PATH.furnitureDetail}/houseFurniture/${id}`);
  };
  const handleViewMore = () => {
    setParams({
      ...params,
      pageSize: (params.pageSize += 9),
    });
  };
  const getProductList = async (options) => {
    await dispatch(getListProduct(options));
  };
  useEffect(() => {
    getProductList(params);
  }, [params]);
  // Get Images
  useEffect(() => {
    dispatch(getImages(listTypeImage.houseFurniturePage.serviceHouseBg));
  }, []);
  return (
    <PageWrapper title={t("houseFurniture")}>
      <Banner
        srcBanner={arrayImage?.[0] ?? banner.src}
        title={t("houseFurniture")}
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link href="/">{t("home")}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{t("houseFurniture")}</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <div className="containerCustom">
        <Row gutter={[60, 60]}>
          {productList?.map((item, index) => {
            return (
              <Col
                key={item.id}
                xs={24}
                sm={24}
                md={12}
                xl={8}
                data-aos="fade-up"
                data-aos-delay={index * 400}
              >
                <CardHouseFurniture
                  index={index}
                  itemDetail={item}
                  onClick={() => {
                    handleClick(item.id);
                  }}
                />
              </Col>
            );
          })}
          {/* <Col xs={24} sm={24} md={12} xl={8}>
            <CardHouseFurniture onClick={handleClick} />
          </Col>
          <Col xs={24} sm={24} md={12} xl={8}>
            <CardHouseFurniture onClick={handleClick} />
          </Col>
          <Col xs={24} sm={24} md={12} xl={8}>
            <CardHouseFurniture onClick={handleClick} />
          </Col>
          <Col xs={24} sm={24} md={12} xl={8}>
            <CardHouseFurniture onClick={handleClick} />
          </Col>
          <Col xs={24} sm={24} md={12} xl={8}>
            <CardHouseFurniture onClick={handleClick} />
          </Col>
          <Col xs={24} sm={24} md={12} xl={8}>
            <CardHouseFurniture onClick={handleClick} />
          </Col> */}
        </Row>
        {productList?.length > 9 ? (
          <div style={{ marginTop: 30 }} className="center">
            <ButtonCusTom
              onClick={handleViewMore}
              title={t("viewMore")}
            ></ButtonCusTom>
          </div>
        ) : (
          ""
        )}
      </div>
    </PageWrapper>
  );
};
HouseFurniturePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default HouseFurniturePage;
