import React, { useEffect, useMemo, useState } from "react";
import Banner from "../../component/Banner";
import { Breadcrumb, Button, Col, Drawer, Row, Select } from "antd";
import styles from "./index.module.scss";
import banner1 from "../../assets/images/sales-policy-page/banner.png";
import useLocales from "../../hooks/useLocales";
import Layout from "../../layouts";
import useResponsive from "../../hooks/useResponsive";
import { FullscreenOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import PageWrapper from "../../hocs/page-wrapper";
import image from "../../assets/images/other-service-page/event.png";
import Link from "next/link";
import { OBJECT_TYPE, listTypeImage } from "../../constants/app-constants";
import { CaretDownOutlined } from "@ant-design/icons";
import WebsiteAndSystem from "../../views/website-page/website-and-system/WebsiteAndSystem";
import ModalListImage from "../../component/ModalListImage/ModalListImage";
import { dispatch, useSelector } from "../../redux/store";
import { getProjectImages } from "../../redux/slices/ProductSlice";
import { getImages } from "../../redux/slices/GetImagesSlice";

const navList = ["webAndSystem", "projectImage"];
const pageType = listTypeImage.webAndSystemPage.page;
const pageSection = listTypeImage.webAndSystemPage.serviceWebsiteBg;

const WebsiteAndSystemPage = () => {
  const { t } = useLocales();
  const router = useRouter();
  const { isMobile, isTablet } = useResponsive();
  const { projectImages } = useSelector((state) => state.product);
  const { listImages } = useSelector((state) => state.imagesList);
  const arrayImage = useMemo(() => {
    return listImages?.[pageType]?.[pageSection]?.[0]?.images.split(",");
  }, [listImages]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemActive, setItemActive] = useState("webAndSystem");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [listImage, setCurrentListImage] = useState([]);
  const [nameProject, setCurrentNameProject] = useState(t("project"));

  const handleSelect = (value) => {
    setItemActive(value);
  };
  const handleActiveNav = async (item) => {
    setItemActive(item);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    dispatch(getProjectImages());
    dispatch(getImages(listTypeImage.webAndSystemPage.serviceWebsiteBg));
  }, []);

  return (
    <PageWrapper title={t("webAndSystem")}>
      <ModalListImage
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        listImage={listImage}
        name={nameProject}
      />
      <Banner
        srcBanner={arrayImage?.[0] ?? banner1.src}
        title={t("webAndSystem")}
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link href="/">{t("home")}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{t("webAndSystem")}</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <div className="containerCustom">
        <Row gutter={[{ xs: 0, sm: 0, md: 0, xl: 30 }, 0]}>
          {isMobile || isTablet ? (
            <Col xs={24}>
              <div className={`${styles.select} selectCustomMobile`}>
                <Select
                  suffixIcon={<CaretDownOutlined style={{ color: "black" }} />}
                  defaultValue="webAndSystem"
                  size="large"
                  style={{ width: "100%" }}
                  onChange={handleSelect}
                  options={[
                    {
                      value: "webAndSystem",
                      label: t("webAndSystem"),
                    },
                    {
                      value: "projectImage",
                      label: t("projectImage"),
                    },
                  ]}
                />
              </div>
            </Col>
          ) : (
            <Col xs={24} xl={6}>
              <div className={styles.navContainer}>
                <div className={styles.navContainer__title}>
                  {t("information")}
                </div>
                <div className={styles.navContainer__body}>
                  <ul>
                    {navList?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => {
                            handleActiveNav(item);
                          }}
                          className={
                            navList[index] === itemActive
                              ? styles.activeNav
                              : ""
                          }
                        >
                          {t(item)}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Col>
          )}

          <Col xs={24} sm={24} md={24} xl={18}>
            {itemActive === "projectImage" ? (
              <Row gutter={[{ xs: 0, sm: 0, md: 30, xl: 30 }, 30]}>
                {projectImages
                  ?.filter((item) => item.type === null)
                  .map((project, index) => {
                    return (
                      <Col
                        key={project.id}
                        xs={24}
                        sm={24}
                        md={8}
                        xl={8}
                        data-aos="fade-up"
                        data-aos-delay={index * 300}
                      >
                        <div className={styles.projectHeader}>
                          <p className={styles.projectHeader__projectName}>
                            {project.name}
                          </p>
                          <p className={styles.projectHeader__projectDesc}>
                            {project?.description.length > 50
                              ? project?.description.substring(0, 50) + "..."
                              : project?.description.substring(0, 50)}
                          </p>
                        </div>

                        <div
                          className={styles.projectImage}
                          onClick={() => {
                            showModal();
                            setCurrentListImage(project.images.split(","));
                            setCurrentNameProject(project.name);
                          }}
                          style={{backgroundImage: `url(${project.images.split(",")?.[0]})`}}

                        >
                          {/* <img
                            src={project.images.split(",")?.[0]}
                            alt="Image"
                          /> */}
                          <div className={styles.projectImage__modalOpen}>
                            <FullscreenOutlined style={{ fontSize: 32 }} />
                          </div>
                        </div>
                      </Col>
                    );
                  })}
              </Row>
            ) 
            : 
            (
              <div className={styles.content}>
                <div className={styles.content__header}>{t(itemActive)}</div>
                <WebsiteAndSystem />
              </div>
            )
            }
          </Col>
        </Row>
      </div>
    </PageWrapper>
  );
};
WebsiteAndSystemPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default WebsiteAndSystemPage;
