import React from "react";
import Layout from "../../layouts";
import styles from "./index.module.scss";
import Banner from "../../component/Banner";
import banner from "../../assets/images/banner/banner trang  LIENHE.png";
import { Breadcrumb } from "antd";
import useLocales from "../../hooks/useLocales";
import ContactInformationSection from "../../views/contact/contact-infomation";
import PageWrapper from "../../hocs/page-wrapper";
import Link from "next/link";
ContactPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function ContactPage() {
  const { t } = useLocales();
  return (
    <PageWrapper title={t('contact')} >
      <Banner
        srcBanner={banner.src}
        title={t("contact")}
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link href="/">{t("home")}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{t("contact")}</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <div className="containerCustom">
        <ContactInformationSection/>
      </div>
    </PageWrapper>
  );
}
