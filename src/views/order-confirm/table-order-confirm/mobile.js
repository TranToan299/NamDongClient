import React, { useState } from "react";
import { Button, Row, Space, Table, Tag, Col, Divider } from "antd";
import useLocales from "../../../hooks/useLocales";
import order1 from "../../../assets/images/order-confirm/order1.png";
import { useMemo } from "react";
import styles from "./mobile.module.scss";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import useResponsive from "../../../hooks/useResponsive";
import { dispatch, useSelector } from "../../../redux/store";
import { addOne, minusOne } from "../../../redux/slices/ProductSlice";
const MobileOrderTable = () => {
  const { cartProduct, productDetail } = useSelector((state) => state.product);
  return (
    <>
      <Row gutter={[40, 20]} justify="space-between">
        {cartProduct?.map((product) => {
          return (
            <>
              <Col xs={7}>
                <img
                  style={{ width: 80, height: 80 }}
                  src={product?.thumbnail}
                  alt="product"
                />
              </Col>
              <Col xs={17}>
                <div>{product.name}</div>
                <div className={styles.price}>
                  {product.salePrice ? product.salePrice : product?.price}
                </div>
                <div className={styles.quantity}>
                  <Button
                    onClick={() => {
                      dispatch(minusOne(product));
                    }}
                    className={styles.quantity__button}
                  >
                    <MinusOutlined />
                  </Button>
                  <div className={styles.quantity__number}>
                    {product?.quantity}
                  </div>
                  <Button
                    onClick={() => {
                      dispatch(addOne(product));
                    }}
                    className={styles.quantity__button}
                  >
                    <PlusOutlined />
                  </Button>
                </div>
              </Col>
            </>
          );
        })}
      </Row>
      <Divider />
    </>
  );
};

export default MobileOrderTable;
