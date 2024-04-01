import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row, Spin } from "antd";
import { useRouter } from "next/router";
import React from "react";
import ButtonCusTom from "../../../../component/ButtonCustom";
import ProductThumbnail from "../../../../component/product";
import { OBJECT_TYPE } from "../../../../constants/app-constants";
import { ROUTER_PATH } from "../../../../constants/router-constants";
import useLocales from "../../../../hooks/useLocales";
import { useSelector } from "../../../../redux/store";
import styles from "./index.module.scss";

const TabTableInStore = () => {
  const { t } = useLocales();
  const { productList } = useSelector((state) => state.product);
  const router = useRouter();
  const { loading } = useSelector((state) => state.loading);

  return (
    <>
      {loading ? (
        <div className="center">
          <Spin />
        </div>
      ) : (
        <div className={styles.item}>
          <Row gutter={[20, 40]}>
            {productList?.map((item, index) => {
              return (
                <Col key={index} xs={12} sm={12} md={12} xl={6}>
                  <ProductThumbnail item={item} />
                </Col>
              );
            })}

            <div className={styles.button}>
              <ButtonCusTom
                onClick={() => {
                  router.push(
                    `${ROUTER_PATH.storeGeneral}?tab=${OBJECT_TYPE.storeTabs.table}`
                  );
                }}
                title={t("viewMore")}
                icon={<ArrowRightOutlined />}
              />
            </div>
          </Row>
        </div>
      )}
    </>
  );
};

export default TabTableInStore;
