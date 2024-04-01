import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import useLocales from "../../../hooks/useLocales";
import ProductThumbnail from "../../../component/product";
import relatedProduct1 from "../../../assets/images/store-page-general/Detail/related-product-1.png";
import relatedProduct2 from "../../../assets/images/store-page-general/Detail/related-product-2.png";
import relatedProduct3 from "../../../assets/images/store-page-general/Detail/related-product-3.png";
import relatedProduct4 from "../../../assets/images/store-page-general/Detail/related-product-4.png";
import relatedProduct5 from "../../../assets/images/store-page-general/Detail/related-product-5.png";
import relatedProduct6 from "../../../assets/images/store-page-general/Detail/related-product-6.png";
import styles from "./index.module.scss";
import { dispatch, useSelector } from "../../../redux/store";
import { getProductRelated } from "../../../redux/slices/ProductSlice";

const items = [
  {
    thumbnail: relatedProduct1.src,
    name: "Bộ bàn ghế sofa",
    price: "2.600.000",
    originalPrice: "3.200.000",
  },
  {
    thumbnail: relatedProduct2.src,
    name: "Ghế kiểu hiện đại",
    price: "1.500.000",
    originalPrice: "2.700.000",
  },
  {
    thumbnail: relatedProduct3.src,
    name: "Ghế trắng châu Âu",
    price: "1.500.000",
    originalPrice: "3.500.000",
  },
  {
    thumbnail: relatedProduct4.src,
    name: "Ghế chân đen",
    price: "1.500.000",
    originalPrice: "3.500.000",
  },
  {
    thumbnail: relatedProduct5.src,
    name: "Ghế đen",
    price: "1.500.000",
  },
  {
    thumbnail: relatedProduct6.src,
    name: "Ghế treo châu Âu",
    price: "1.500.000",
  },
];
const RelatedProduct = () => {
  const { t } = useLocales();
  const [data, setData] = useState(items);
  const { productDetail, productRelated } = useSelector(
    (state) => state.product
    );
    console.log("🚀 ~ file: index.js:55 ~ RelatedProduct ~ productRelated:", productRelated)
    console.log("🚀 ~ file: index.js:55 ~ RelatedProduct ~ productDetail:", productDetail)

    const productRelatedData = productRelated.filter((item) => item.id !== productDetail.id
    );
  useEffect(() => {
    dispatch(getProductRelated({ type: productDetail.type }));
  }, [productDetail]);
  return (
    <div className={styles.related}>
      <div className={styles.related__header}>{t("relatedProduct")}</div>
      <Row gutter={[30, 30]}>
        {productRelatedData?.map((item, index) => {
          return (
            <Col key={index} xs={12} sm={12} md={8} xl={4}>
              <ProductThumbnail
                small
          item={item}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default RelatedProduct;
