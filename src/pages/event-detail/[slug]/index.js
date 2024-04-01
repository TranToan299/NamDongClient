import React, { useEffect, useMemo, useState } from "react";
import Banner from "../../../component/Banner";
import PageWrapper from "../../../hocs/page-wrapper";
import useLocales from "../../../hooks/useLocales";
import styles from "./index.module.scss";
import { Breadcrumb } from "antd";
import Link from "next/link";
import banner from "../../../assets/images/banner/banner1.png";
import { ROUTER_PATH } from "../../../constants/router-constants";
import { useRouter } from "next/router";
import { dispatch, useSelector } from "../../../redux/store";
import { getEventDetail, getTabs } from "../../../redux/slices/EventSlice";
import Layout from "../../../layouts";
import { OBJECT_TYPE, listTypeImage } from "../../../constants/app-constants";
import { getImages } from "../../../redux/slices/GetImagesSlice";

const pageType = listTypeImage.otherPage.page;
const pageSection = listTypeImage.otherPage.serviceOtherBg;

const EventDetailPage = () => {
  const { t } = useLocales();
  const router = useRouter();
  const { listImages } = useSelector((state) => state.imagesList);
  const arrayImage = useMemo(() => {
    return listImages?.[pageType]?.[pageSection]?.[0]?.images.split(",");
  }, [listImages]);

  const { eventDetail, tabsList } = useSelector((state) => state.event);
  // find name event tag
  const res = tabsList.find((item) => item.id === eventDetail.type);
  let nameTag = 'Dịch vụ';
  if(res){
    nameTag = res.objectName;
  }

  useEffect(() => {
    if (router.query.slug) {
      dispatch(getEventDetail(router.query.slug));
    }
  }, [router.query.slug]);
  useEffect(() => {
    dispatch(getImages(listTypeImage.otherPage.serviceOtherBg));

  }, []);

  useEffect(() => {
    if (eventDetail.type && !tabsList.length) {
      dispatch(getTabs(OBJECT_TYPE.eventType.eventType));
    }
  }, [eventDetail, tabsList])

  return (
    <>
      <PageWrapper title={eventDetail?.name}>
        <Banner
          srcBanner={arrayImage?.[0] ?? banner.src}
          title={nameTag ?? eventDetail?.name}
          breadcrumb={
            <Breadcrumb separator=">">
              <Breadcrumb.Item>
                <Link href="/">{t("home")}</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link href={ROUTER_PATH.otherService}>
                  {t("otherServices")}
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{eventDetail?.name}</Breadcrumb.Item>
            </Breadcrumb>
          }
        />
        <div className="containerCustom">
          <div className="title center" data-aos="fade-up">{eventDetail?.name}</div>
          <div className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: eventDetail?.content }} />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
EventDetailPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default EventDetailPage;
