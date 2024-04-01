import React, { useEffect } from "react";
import useLocales from "../../../../hooks/useLocales";
import Layout from "../../../../layouts";
import Banner from "../../../../component/Banner";
import { Breadcrumb, Col, Divider, Row, Select } from "antd";
import banner from "../../../../assets/images/banner/banner trang CUAHANG.png";
import styles from "./index.module.scss";
import ProductDetail from "../../../../views/product-detail/product-information";
import RelatedProduct from "../../../../views/product-detail/related-product";
import Link from "next/link";
import { ROUTER_PATH } from "../../../../constants/router-constants";
import useResponsive from "../../../../hooks/useResponsive";
import { getProductDetail } from "../../../../redux/slices/ProductSlice";
import { dispatch, useSelector } from "../../../../redux/store";
import { useRouter } from "next/router";
import PageWrapper from "../../../../hocs/page-wrapper";
import { notificationCustom } from "../../../../utils/notification";
import { COMING_SOON } from "../../../../constants/app-constants";

const ProductDetailPage = () => {
  const { t } = useLocales();
  const router = useRouter();
  const { isMobile } = useResponsive();
  const { productDetail } = useSelector((state) => state.product);
  const getDetailProduct = async (id) => {
    await dispatch(getProductDetail(id));
  };
  useEffect(() => {
    if (router.query.slug) {
      getDetailProduct(router.query.slug);
    }
  }, [router.query.slug]);

  return (
    <PageWrapper title={productDetail?.name}>
  
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
                      tab:'all'
                    }
                  }}>
                    {t("storeGeneral")}
                  </Link>
                </Breadcrumb.Item>
              </>
            )}

            <Breadcrumb.Item>{productDetail?.name}</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <div className={`${styles.container} containerCustom`}>
        <ProductDetail />
        <RelatedProduct />
      </div>
   </PageWrapper>
  );
};
ProductDetailPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default ProductDetailPage;

