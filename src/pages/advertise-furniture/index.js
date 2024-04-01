import React from "react";
import Banner from "../../component/Banner";
import banner1 from "../../assets/images/banner/banner trang NOITHATQUANGCAO.png";
import { Breadcrumb } from "antd";
import useLocales from "../../hooks/useLocales";
import Layout from "../../layouts";
import AdvertiseContent from "../../views/advertise-furniture/content";
import PageWrapper from "../../hocs/page-wrapper";
import Link from "next/link";
import { useEffect } from "react";
import { dispatch, useSelector } from "../../redux/store";
import { getImages } from "../../redux/slices/GetImagesSlice";
import { listTypeImage } from "../../constants/app-constants";
import { useMemo } from "react";

const pageType = listTypeImage.advertiseFurniturePage.page;
const pageSection = listTypeImage.advertiseFurniturePage.serviceAdvertiseBg;

const AdvertiseFurniturePage = () => {
  const { t } = useLocales();
  const { listImages } = useSelector((state) => state.imagesList);
  const arrayImage = useMemo(() => {
    return listImages?.[pageType]?.[pageSection]?.[0]?.images.split(",");
  }, [listImages]);
  useEffect(() => {
    dispatch(
      getImages(listTypeImage.advertiseFurniturePage.serviceAdvertiseBg)
    );
  }, []);
  return (
    <PageWrapper title={t("advFurniture")}>
      <Banner
        srcBanner={arrayImage?.[0] ?? banner1.src}
        title={t("advFurniture")}
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link href="/">{t("home")}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{t("advFurniture")}</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <AdvertiseContent />
    </PageWrapper>
  );
};
AdvertiseFurniturePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default AdvertiseFurniturePage;
