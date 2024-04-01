import React, { useState } from "react";
import { Button, Popconfirm, Space, Table, Tag } from "antd";
import useLocales from "../../../hooks/useLocales";
import order1 from "../../../assets/images/order-confirm/order1.png";
import { useMemo } from "react";
import styles from "./index.module.scss";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import useResponsive from "../../../hooks/useResponsive";
import { dispatch, useSelector } from "../../../redux/store";
import {
  addOne,
  deleteProduct,
  minusOne,
} from "../../../redux/slices/ProductSlice";

const TableOrderConFirm = () => {
  const { t } = useLocales();
  const { cartProduct } = useSelector((state) => state.product);
  const { isMobile } = useResponsive;
  const columns = [
    {
      title: t("image"),
      dataIndex: "thumbnail",
      key: "image",
      className: "thCustom",
      render: (text) => (
        <img style={{ width: 150, height: 150 }} src={text} alt="Image" />
      ),
    },
    {
      title: t("productName"),
      dataIndex: "name",
      key: "productName",
      className: "thCustom",
      width: 200,
    },
    {
      title: t("description"),
      dataIndex: "description",
      key: "description",
      className: "thCustom",
      width: 400,
    },
      {
      title: t("price"),
      key: "price",
      dataIndex: "price",
      className: "thCustom",
      width: 200,
      render: (text, record) => (
        <div className={styles.price}>
          {record.salePrice ?  record.salePrice?.toLocaleString().replace(/,/g, ".") : record.price?.toLocaleString().replace(/,/g, ".")}
        </div>
      ),
    },

    {
      title: t("quantity"),
      className: "thCustom",
      key: "quantity",
      width: 150,

      render: (text, record) => (
        <div className={styles.quantity}>
          <Button
            onClick={() => {
              dispatch(minusOne(record));
            }}
            className={styles.quantity__button}
          >
            <MinusOutlined />
          </Button>
          <div className={styles.quantity__number}>{record?.quantity}</div>
          <Button
            onClick={() => {
              dispatch(addOne(record));
              console.log(record);
            }}
            className={styles.quantity__button}
          >
            <PlusOutlined />
          </Button>
        </div>
      ),
    },
    {
      title: t("total"),
      key: "total",
      dataIndex: "total",
      className: "thCustom",
      width: 150,

      render: (text, record, index) => {
        const price = record.salePrice ? Number(record?.salePrice) : Number(record?.price)
        return (
          <div className={styles.total}>
            {(Number(record?.quantity) * price)
              ?.toLocaleString()
              .replace(/,/g, ".")}
          </div>
        );
      },
    },
    {
      title: "",
      key: "action",
      dataIndex: "",
      className: "thCustom",
      render: (text, record, index) => {
        return (
          <div>
            <Popconfirm
              width={250}
              title={t("isDeteleProduct")}
              onConfirm={() => {
                dispatch(deleteProduct(record));
              }}
              okText={t("delete")}
              okType="danger"
              okButtonProps="primary"
            >
              <Button type="danger" icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  const data = cartProduct;
  return <Table pagination={false} columns={columns} dataSource={data} />;
};

export default TableOrderConFirm;
