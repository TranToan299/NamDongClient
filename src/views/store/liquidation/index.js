import { Col, Row } from "antd";
import React, { useEffect } from "react";
import useLocales from "../../../hooks/useLocales";
import styles from "./index.module.scss";
import store16 from "../../../assets/images/store-page/store16.png";
import store17 from "../../../assets/images/store-page/store17.png";
import store18 from "../../../assets/images/store-page/store18.png";
import store19 from "../../../assets/images/store-page/store19.png";
import ProductThumnail from "../../../component/product";
import ProductThumbnail from "../../../component/product";
import ButtonCusTom from "../../../component/ButtonCustom";
import { ROUTER_PATH } from "../../../constants/router-constants";
import { useRouter } from "next/router";
import { ArrowRightOutlined } from "@ant-design/icons";
import { dispatch, useSelector } from "../../../redux/store";
import { getListProductLiquid } from "../../../redux/slices/ProductSlice";
import { DEFAULT_PARAMS, OBJECT_TYPE } from "../../../constants/app-constants";

const LiquidationProduct = () => {
  const router = useRouter();
  const { productList, productListLiquid } = useSelector(
    (state) => state.product
  );

  const { t } = useLocales();
  const items = [
    {
      picture: store16.src,
      name: "Bộ bàn ghế sofa",
      price: "2.600.000",
      originalPrice: "3.200.000",
    },
    {
      picture: store17.src,
      name: "Ghế kiểu hiện đại",
      price: "1.500.000",
      originalPrice: "2.700.000",
    },
    {
      picture: store18.src,
      name: "Ghế trắng châu Âu",
      price: "1.500.000",
      originalPrice: "3.500.000",
    },
    {
      picture: store19.src,
      name: "Ghế  chân đen",
      price: "1.500.000",
      originalPrice: "3.500.000",
    },
  ];

  useEffect(() => {
    dispatch(
      getListProductLiquid({
        keyword: "",
        type: OBJECT_TYPE.product.type.store,
        isSale: null,
        isLiquid: true,
        categoryId: OBJECT_TYPE.product.productCategory.all,
        pageSize: DEFAULT_PARAMS.PAGE_SIZE,
        pageIndex: DEFAULT_PARAMS.PAGE_INDEX,
      })
    );
  }, []);
  return (
    <div className={styles.liquidation} data-aos="fade-up">
      <Row>
        <Col xs={24}>
          <div className={styles.header}>
            <div className="title" >{t("liquidateProduct")}</div>
            {/* <p className="center">
              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet
              <br /> dolore magna aliquam erat volutpat.
            </p> */}
          </div>
        </Col>
        <Col xs={24}>
          <Row
            gutter={[
              { xs: 20, sm: 0, md: 20, xl: 20 },
              { xs: 20, sm: 20, md: 20, xl: 20 },
            ]}
          >
            {productListLiquid?.map((item, index) => {
              return (
                <Col key={index} xs={12} sm={12} md={12} xl={6}>
                  <ProductThumbnail item={item} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
      <div className={styles.button}>
        <ButtonCusTom
          onClick={() => {
            router.push(
              `${ROUTER_PATH.storeGeneral}?tab=${ROUTER_PATH.liquidation}`
            );
          }}
          title={t("viewMore")}
          icon={<ArrowRightOutlined />}
        />
      </div>
    </div>
  );
};

export default LiquidationProduct;
