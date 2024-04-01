import React from "react";
import { Breadcrumb, Col, Row, Spin, Tabs } from "antd";
import styles from "./index.module.scss";
import useLocales from "../../../../hooks/useLocales";
import ProductThumbnail from "../../../../component/product";
import store8 from "../../../../assets/images/store-page/store8.png";
import store9 from "../../../../assets/images/store-page/store9.png";
import store10 from "../../../../assets/images/store-page/store10.png";
import store11 from "../../../../assets/images/store-page/store11.png";
import store12 from "../../../../assets/images/store-page/store12.png";
import store13 from "../../../../assets/images/store-page/store13.png";
import store14 from "../../../../assets/images/store-page/store14.png";
import store15 from "../../../../assets/images/store-page/store8.png";
import ButtonCusTom from "../../../../component/ButtonCustom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { ROUTER_PATH } from "../../../../constants/router-constants";
import { useSelector } from "../../../../redux/store";
import { OBJECT_TYPE } from "../../../../constants/app-constants";

const TabChairInStore = () => {
  const { t } = useLocales();
  const { loading } = useSelector((state) => state.loading);

  const { productList } = useSelector((state) => state.product);
  const router = useRouter();
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
                <ProductThumbnail
      item={item}
                />
              </Col>
            );
          })}

          <div className={styles.button}>
            <ButtonCusTom
              onClick={() => {
                router.push(
                  `${ROUTER_PATH.storeGeneral}?tab=${OBJECT_TYPE.storeTabs.chair}`
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

export default TabChairInStore;
