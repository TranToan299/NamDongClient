import React, { useState } from "react";
import styles from "./index.module.scss";
import Layout from "../../layouts";
import { Breadcrumb, Button, Collapse } from "antd";
import {
  MinusOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import useLocales from "../../hooks/useLocales";
import Banner from "../../component/Banner";
import banner1 from "../../assets/images/question-page/banner.png";
import PageWrapper from "../../hocs/page-wrapper";
import Link from "next/link";
const { Panel } = Collapse;

const FrequentlyQuestion = () => {
  const { t } = useLocales();

  return (
    <PageWrapper title={t("protectInformation")}>
      <Banner
        srcBanner={banner1.src}
        title={t("protectInformation")}
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link href="/">{t("home")}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{t("supportCustomer")}</Breadcrumb.Item>
            <Breadcrumb.Item>{t("protectInformation")}</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <div className="containerCustom">
        <div className={styles.content} data-aos="fade-up">
          <div className={styles.intro}>
            <div>
              {t("protectInformationPage.intro1")}
              <br /> {t("protectInformationPage.intro2")}
            </div>
            <div>{t("protectInformationPage.intro3")}</div>
          </div>
          <div className={styles.title}>
            {" "}
            {t("protectInformationPage.content1.title")}
          </div>
          <ul>
            <li>{t("protectInformationPage.content1.li1")}</li>
            <li>{t("protectInformationPage.content1.li2")}</li>

            <li>
              {t("protectInformationPage.content1.li3.title")}
              <ul className={styles.subList}>
                <li>{t("protectInformationPage.content1.li3.li1")}</li>
                <li>{t("protectInformationPage.content1.li3.li2")}</li>

                <li>{t("protectInformationPage.content1.li3.li3")}</li>

                <li>{t("protectInformationPage.content1.li3.li4")} </li>

                <li>{t("protectInformationPage.content1.li3.li5")}</li>
              </ul>
            </li>
            <li>
              {t("protectInformationPage.content1.li4.title")}
              <ul className={styles.subList}>
                <li>{t("protectInformationPage.content1.li4.li1")}</li>
                <li>{t("protectInformationPage.content1.li4.li2")}</li>

                <li>{t("protectInformationPage.content1.li4.li3")}</li>

                <li>{t("protectInformationPage.content1.li4.li4")}</li>

                <li>{t("protectInformationPage.content1.li4.li5")}</li>
              </ul>
            </li>
          </ul>
          <div className={styles.title}>
            {" "}
            {t("protectInformationPage.content2.title")}
          </div>
          <div className={styles.title__sub}>
            {t("protectInformationPage.content2.subTitle")}
          </div>
          <ul>
            <li>{t("protectInformationPage.content2.li1")}</li>
            <li>{t("protectInformationPage.content2.li2")}</li>

            <li>{t("protectInformationPage.content2.li3")}</li>
          </ul>
          <div className={styles.title}>
            {t("protectInformationPage.content3.title")}
          </div>
          <ul>
            <li>{t("protectInformationPage.content3.li1")}</li>
            <li>
              {t("protectInformationPage.content3.li2.title")}
              <ul className={styles.subList}>
                <li> {t("protectInformationPage.content3.li2.li1")}</li>
                <li> {t("protectInformationPage.content3.li2.li2")}</li>
                <li>{t("protectInformationPage.content3.li2.li3")}</li>
                <li>{t("protectInformationPage.content3.li2.li4")} </li>
                <li>{t("protectInformationPage.content3.li2.li5")}</li>
              </ul>
            </li>
            <li>{t("protectInformationPage.content3.li3")}</li>
          </ul>
          <div className={styles.title}>
            {" "}
            {t("protectInformationPage.content4.title")}
          </div>
          <ul>
            <li>{t("protectInformationPage.content4.li1")}</li>
          </ul>
          <div className={styles.title}>
            {t("protectInformationPage.content5.title")}
          </div>
          <ul>
            <li>
              {t("protectInformationPage.content5.li1.title")}
              <ul className={styles.subList}>
                <li>{t("protectInformationPage.content5.li1.li1")}</li>
                <li>{t("protectInformationPage.content5.li1.li2")}</li>

                <li>{t("protectInformationPage.content5.li1.li3")}.</li>

                <li>{t("protectInformationPage.content5.li1.li4")}</li>
              </ul>
            </li>
          </ul>
          <div className={styles.title}>
            {t("protectInformationPage.content6.title")}
          </div>
          <ul>
            <li>
              {t("protectInformationPage.content6.li1.title")}
              <ul className={styles.subList}>
                <li>{t("protectInformationPage.content6.li1.li1")}</li>
                <li>{t("protectInformationPage.content6.li1.li2")}</li>

                <li>{t("protectInformationPage.content6.li1.li3")}</li>
              </ul>
            </li>
          </ul>
          <div className={styles.title}>
            {t("protectInformationPage.content7.title")}
          </div>
          <ul>
            <li>{t("protectInformationPage.content7.li1")}</li>
            <li>{t("protectInformationPage.content7.li2")}</li>
          </ul>
          <div className={styles.title}>
            {t("protectInformationPage.content8.title")}
          </div>
          <div className={styles.company}>
            <p> {t("protectInformationPage.content8.li1")}</p>
            <p>{t("protectInformationPage.content8.li2")}</p>

            <p>{t("protectInformationPage.content8.li3")}</p>
          </div>

          <div className={styles.title}>
            {" "}
            {t("protectInformationPage.content8.date")}
          </div>

          <p>{t("protectInformationPage.content8.protectPolicy")}</p>
        </div>
      </div>
    </PageWrapper>
  );
};
FrequentlyQuestion.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default FrequentlyQuestion;
