import React, { useEffect, useMemo } from "react";
import Layout from "../../layouts";
import Banner from "../../component/Banner";
import banner1 from "../../assets/images/banner/Banner INTRODUCTION.png";
import useLocales from "../../hooks/useLocales";
import { Breadcrumb } from "antd";
import CompanyIntro from "../../views/about/company-intro";
import CompanyMission from "../../views/about/mission";
import ActivityCompany from "../../views/about/activity";
import Facility from "../../views/about/facility";
import PageWrapper from "../../hocs/page-wrapper";
import Link from "next/link";
import { dispatch, useSelector } from "../../redux/store";
import { getImages } from "../../redux/slices/GetImagesSlice";
import { listTypeImage } from "../../constants/app-constants";


const pageType = listTypeImage.aboutPage.page; 
const pageSection = listTypeImage.aboutPage.aboutUsBackground

const AboutPage = () => {
  const { t } = useLocales();
  const { listImages } = useSelector((state) => state.imagesList);
  const arrayImage = useMemo(() => {
    return listImages?.[pageType]?.[pageSection]?.[0]?.images.split(',');
  },[listImages])
  useEffect(() => {
    dispatch(getImages(listTypeImage.aboutPage.aboutUsBackground));
    dispatch(getImages(listTypeImage.aboutPage.aboutUsCompany));
    dispatch(getImages(listTypeImage.aboutPage.activity));
  }, []);
  
  return (
    <PageWrapper title={t("about")}>
      <Banner
        srcBanner={arrayImage?.[0] ?? banner1.src}
        title={t("aboutUs")}
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link href="/">{t("home")}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{t("aboutUs")}</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <CompanyIntro />
      <CompanyMission />
      <ActivityCompany />
      <Facility />
    </PageWrapper>
  );
};

AboutPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default AboutPage;
