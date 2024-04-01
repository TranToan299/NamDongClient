import React from "react";
import styles from "./index.module.scss";
import { Row } from "antd";
import houseFurniture1 from "../../../assets/images/House Furniture Page/house-furniture-1.png";
import useLocales from "../../../hooks/useLocales";
const CardHouseFurniture = ({ onClick, itemDetail, index }) => {
  const { t } = useLocales();
  return (
    <div onClick={onClick} className={styles.card}>
      <div className={styles.card__number}>{index + 1}</div>
      <div className={styles.card__header}>
        <div>{itemDetail?.name}</div>
        <p>
          {itemDetail?.description.length > 100
            ? itemDetail?.description.substring(0, 100) + "..."
            : itemDetail?.description.substring(0, 100)}
        </p>
      </div>
      <div className={styles.card__image}>
        <img src={itemDetail?.thumbnail} alt="House Furniture" />
        <div className={styles.card__image__modal}>{index + 1}</div>
      </div>
    </div>
  );
};

export default CardHouseFurniture;
