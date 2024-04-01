import { Col, Divider, Row } from "antd";
import React, { useEffect } from "react";
import picture from "../../../assets/images/web-and-system/Picture1.png";
import picture2 from "../../../assets/images/web-and-system/Picture2.png";
import picture3 from "../../../assets/images/web-and-system/Picture3.png";
import picture4 from "../../../assets/images/web-and-system/Picture4.png";
import picture5 from "../../../assets/images/web-and-system/Picture5.png";
import picture6 from "../../../assets/images/web-and-system/Picture6.png";
import picture7 from "../../../assets/images/web-and-system/vr360.png";
import useLocales from "../../../hooks/useLocales";
import styles from "./index.module.scss";
import { dispatch, useSelector } from "../../../redux/store";
import { getEditor } from "../../../redux/slices/GetImagesSlice";

const WebsiteAndSystem = () => {
  const { listImages } = useSelector((state) => state.imagesList);
  const { editorWebsiteAndSystem } = listImages.webAndSystemPage;
  const { t } = useLocales();
  useEffect(()=>{
    dispatch(getEditor())
  },[])
  return (
    <>
    {editorWebsiteAndSystem ? 
    <div dangerouslySetInnerHTML={{ __html: editorWebsiteAndSystem[0].description }} />
    :
<>
        <Row gutter={[40, 0]} align='middle' data-aos="fade-up">
          <Col xs={24} xl={16}>
            <div className={styles.content}>
              <div className={styles.content__title} >
                {t("webAndSystemPage.content1.title")}
              </div>
              <div className={styles.content__text}>
                <p>{t("webAndSystemPage.content1.text")}</p>
                <ul>
                  <li>{t("webAndSystemPage.content1.li1")}</li>
                  <li>{t("webAndSystemPage.content1.li2")}</li>
                  <li>{t("webAndSystemPage.content1.li3")}</li>
                </ul>
                <img src={picture2.src} alt="target" />
              </div>
            </div>
          </Col>
          <Col xs={24} xl={8} data-aos="fade-up">
            <div className={styles.webImage}>
              <img src={picture.src} alt="system" />
            </div>
          </Col>
        </Row>
        <div className={styles.basicFeature}>
          <p>{t("webAndSystemPage.content1.basicFeature")}</p>
          <img src={picture3.src} alt="system" />
          <p>{t("webAndSystemPage.content1.andMore")}</p>
        </div>
        <Divider />
        <div className={styles.content2} >
          <div className={styles.content2__title} data-aos="fade-right">
            {t("webAndSystemPage.content2.title")}
          </div>
          <Row gutter={[30, 30]}>
            <Col xs={24} xl={12} data-aos="fade-right">
              <div className={styles.content2__text}>
                {t("webAndSystemPage.content2.text")}
              </div>
            </Col>
            <Col xs={24} xl={12} data-aos="fade-left">
              <div className={styles.content2__image}>
                <img src={picture4.src} alt="system" />
              </div>
            </Col>
            <Col xs={24} xl={12} data-aos="fade-right" data-aos-delay = {400}>
              <div className={styles.content2__image}>
                <img src={picture5.src} alt="system" />
              </div>
              <p className={styles.projectName}>
                {t("webAndSystemPage.content2.projectName1")}
              </p>
            </Col>
            <Col xs={24} xl={12} data-aos="fade-left"  data-aos-delay = {400}>
              <div className={styles.content2__image}>
                <img src={picture6.src} alt="system" />
              </div>
              <p className={styles.projectName}>
                {t("webAndSystemPage.content2.projectName2")}
              </p>
            </Col>
          </Row>
          <div className={styles.listContent2} data-aos="fade-up">
            <ul>
              <li> {t("webAndSystemPage.content2.li1")}</li>
              <li> {t("webAndSystemPage.content2.li2")}</li>
            </ul>
            <img src={picture7.src} alt="VR 360" />
          </div>
        </div>
</>
    }
    </>
  );
};

export default WebsiteAndSystem;
