import React from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { ROUTER_PATH } from "../../constants/router-constants";
import useResponsive from "../../hooks/useResponsive";

const ProductThumbnail = (props) => {
  const { isMobile } = useResponsive();
  const router = useRouter();
  const { small, item } = props;
  const { thumbnail, name, price, salePrice, id } = item;
  const handleClick = () => {
    router.push(`${ROUTER_PATH.productDetail}/${id}`);
  };
  return (
    <div className={styles.product} onClick={handleClick}>
      <div
        className={!small ? styles.product__image : styles.product__imageSmall}
      >
        <img src={thumbnail} alt="product" />
      </div>
      <div className={styles.product__content}>
        <div className={styles.product__content__name}>{name}</div>
        <div className={styles.product__content__price}>
          {salePrice
            ? salePrice?.toLocaleString().replace(/,/g, ".")
            : price?.toLocaleString().replace(/,/g, ".")}
          {isMobile && <br />}
          <span>
            {salePrice ? price?.toLocaleString().replace(/,/g, ".") : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductThumbnail;
