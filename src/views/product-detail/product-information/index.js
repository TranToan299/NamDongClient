import { Col, Row } from "antd";
import React from "react";
import styles from "./index.module.scss";
import productDetail1 from "../../../assets/images/store-page-general/Detail/product1.png";
import productDetail2 from "../../../assets/images/store-page-general/Detail/product2.png";
import productDetail3 from "../../../assets/images/store-page-general/Detail/product3.png";
import productDetail4 from "../../../assets/images/store-page-general/Detail/product4.png";
import useLocales from "../../../hooks/useLocales";
import ButtonCusTom from "../../../component/ButtonCustom";
import informationDetail from "../../../assets/images/store-page-general/Detail/informationDetail.png";
import { useRouter } from "next/router";
import { ROUTER_PATH } from "../../../constants/router-constants";
import { dispatch, useSelector } from "../../../redux/store";
import { addOne } from "../../../redux/slices/ProductSlice";

const ProductDetail = () => {
  const { t } = useLocales();
  const router = useRouter();
  const { productDetail } = useSelector((state) => state.product);
  const arrayImage = productDetail.images?.split(",");
  // const arrayImage = [productDetail1.src,productDetail2.src,productDetail3.src,productDetail4.src]
  return (
    <>
      <Row gutter={[{md:30,xs:10}, { xs: 10, sm: 10 }]} className={styles.promotion}>
        <Col
          xs={arrayImage?.[0] === "" ? 0 : 7}
          sm={24}
          md={4}
          xl={arrayImage?.[0] === "" ? 0 : 4}
        >
          <Row
            gutter={[
              { xs: 10, sm: 15, md: 15, xl: 0 },
              { xs: 10, sm: 15, md: 15, xl: 30 },
            ]}
            justify="space-between"
            align="middle"
          >
            <Col xs={24} md={24} xl={24}>
              <div className={styles.promotion__image}>
                <img src={arrayImage?.[0]} alt={productDetail?.name} />
              </div>
            </Col>
            <Col xs={24} md={24} xl={24}>
              <div className={styles.promotion__image}>
                <img src={arrayImage?.[1]} alt={productDetail?.name} />
              </div>
            </Col>
            <Col xs={24} md={24} xl={24}>
              <div className={styles.promotion__image}>
                <img src={arrayImage?.[2]} alt={productDetail?.name} />
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          xs={arrayImage?.[0] === "" ? 24 : 17}
          xl={arrayImage?.[0] === "" ? 14 : 12}
        >
          <div className={styles.content__image}>
            <img
              src={arrayImage?.[3] || productDetail?.thumbnail}
              alt={productDetail?.name}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} xl={8}>
          <Row className={styles.content}>
            <Col xl={24} className={styles.body}>
              <div className={styles.body__header}>
                <span> {productDetail?.name}</span>
              </div>
              <p>{productDetail?.description}</p>
              <div className={styles.body__price}>
              {productDetail?.salePrice ? productDetail?.salePrice?.toLocaleString()
              .replace(/,/g, ".") : productDetail?.price?.toLocaleString()
              .replace(/,/g, ".")}
          <span>{productDetail?.salePrice ? productDetail?.price?.toLocaleString()
              .replace(/,/g, ".") : ''}</span>
              </div>
              <div className={styles.body__technical}>
                <div>{t("technicalDetail")}</div>
                <p>{productDetail?.specifications}</p>
              </div>
              <div className={styles.body__meterial}>
                <div>{t("meterial")}</div>
                <p>{productDetail?.material}</p>
              </div>
              <div className={styles.body__button}>
                <ButtonCusTom
                  onClick={() => {
                    const slug = productDetail.id;
                    router.push(
                      `${ROUTER_PATH.storeGeneral}/${slug}/${ROUTER_PATH.orderConfirm}`
                    );
                    dispatch(addOne(productDetail));
                  }}
                  title={t("contact")}
                  style={{ fontSize: "14px", width: "164px", height: "40px" }}
                  small
                />
              </div>
              <div className={styles.body__categories}>
                Categories:<span> {productDetail?.CategoriesName}</span>{" "}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className={styles.information}>
        <div className={styles.information__header}>
          {t("detailInformation")}
        </div>
        <div className={styles.informationDetail}>
          <div dangerouslySetInnerHTML={{ __html: productDetail?.content }} />
        </div>

        {/* <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
        <br />
        <div className={styles.information__image}>
          <img src={informationDetail.src} alt="Information Image" />
        </div> */}
      </div>
    </>
  );
};

export default ProductDetail;
