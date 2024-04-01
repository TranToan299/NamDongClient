import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";
import PageWrapper from "../hocs/page-wrapper";
import useLocales from "../hooks/useLocales";
import MainLayout from "../layouts/main";
import AboutUs from "../views/home/AboutUs";
import MainHeader from "../layouts/main/main-header";
import MainFooter from "../layouts/main/main-footer";
import ServicesHome from "../views/home/ServicesCustomer";
import CarouselHomePage from "../views/home/carousel-home";
import Layout from "../layouts";
import StoreSectionHomePage from "../views/home/store";
import useResponsive from "../hooks/useResponsive";
import StoreSectionHomePageMobile from "../views/home/store/mobile";
import { dispatch, useSelector } from "../redux/store";
import { getImages } from "../redux/slices/GetImagesSlice";
import { listTypeImage } from "../constants/app-constants";

const Home = () => {
  const { onChangeLang, currentLang, t } = useLocales();
  const { isMobile, isTablet } = useResponsive();
  const handleChangeLang = (newLang) => {
    onChangeLang(newLang);
  };

  useEffect(() => {
    dispatch(getImages(listTypeImage.homePage.homeAboutUs));
    dispatch(getImages(listTypeImage.homePage.homePartner));
  }, []);

  return (
    <PageWrapper title="Home">
      <Layout>
        <CarouselHomePage />
        <AboutUs />
        <ServicesHome />
        {isMobile && !isTablet ? (
          <StoreSectionHomePageMobile />
        ) : (
          <StoreSectionHomePage />
        )}
      </Layout>
    </PageWrapper>
  );
};
// Home.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };
export default Home;

// export async function getServerSideProps() {
//   return {
//     props: {
//       abc: "Note that irrespective of rendering type, any",
//     },
//   };
// }
