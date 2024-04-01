import React, { useEffect } from "react";
import useLocales from "../../../../../hooks/useLocales";
import Layout from "../../../../../layouts";
import Banner from "../../../../../component/Banner";
import { Breadcrumb, Col, Divider, Row, Select } from "antd";
import banner from "../../../../../assets/images/banner/banner trang CUAHANG.png";
import styles from "./index.module.scss";
import ProductDetail from "../../../../../views/product-detail/product-information";
import RelatedProduct from "../../../../../views/product-detail/related-product";
import TableOrderConFirm from "../../../../../views/order-confirm/table-order-confirm";
import ContactInformation from "../../../../../views/order-confirm/contact-information";
import PageWrapper from "../../../../../hocs/page-wrapper";
import Link from "next/link";
import { ROUTER_PATH } from "../../../../../constants/router-constants";
import useResponsive from "../../../../../hooks/useResponsive";
import MobileOrderTable from "../../../../../views/order-confirm/table-order-confirm/mobile";
import { useRouter } from "next/router";
import { dispatch, useSelector } from "../../../../../redux/store";
import {
  addOne,
  getProductDetail,
} from "../../../../../redux/slices/ProductSlice";
import { OBJECT_TYPE } from "../../../../../constants/app-constants";

const OrderConfirmPage = () => {
  const { t } = useLocales();
  const router = useRouter();
  const { isMobile } = useResponsive();
  const { productDetail } = useSelector((state) => state.product);

  const getOrder = async (id) => {
    await dispatch(getProductDetail(id));
  };
  useEffect(() => {
    if (router.query.slug) {
      getOrder(router.query.slug);
    }
  }, [router.query.slug]);

  return (
    <PageWrapper title={t("orderConfirm")}>
      <Banner
        srcBanner={banner.src}
        title={t("store")}
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link href="/">{t("home")}</Link>
            </Breadcrumb.Item>

            {isMobile ? (
              <Breadcrumb.Item>...</Breadcrumb.Item>
            ) : (
              <>
                <Breadcrumb.Item>
                  <Link href={ROUTER_PATH.store}>{t("store")}</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link href={{
                    pathname:ROUTER_PATH.storeGeneral,
                    query:{
                      tab:OBJECT_TYPE.storeTabs.all
                    }
                  }}>
                    {t("storeGeneral")}
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{productDetail?.name}</Breadcrumb.Item>
              </>
            )}

            <Breadcrumb.Item>{t("orderConfirm")}</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <div className="containerCustom">
        <div className={styles.order}>
          <div className={styles.order__header}>{t("orderConfirm")}</div>
          <div className={styles.order__table}>
            {isMobile ? <MobileOrderTable /> : <TableOrderConFirm />}
          </div>
          <div className={styles.order__contact}>
            <ContactInformation />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
OrderConfirmPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default OrderConfirmPage;
