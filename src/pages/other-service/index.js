import { Breadcrumb, Select, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import banner from "../../assets/images/banner/banner trang DICHVUKHAC.png";
import Banner from "../../component/Banner";
import useLocales from "../../hooks/useLocales";
import Layout from "../../layouts";

import { CaretDownOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  DEFAULT_PARAMS,
  OBJECT_TYPE,
  listTypeImage,
} from "../../constants/app-constants";
import PageWrapper from "../../hocs/page-wrapper";
import useResponsive from "../../hooks/useResponsive";
import { getEvent, getTabs } from "../../redux/slices/EventSlice";
import { dispatch, useSelector } from "../../redux/store";
import TabsContent from "../../views/other-service/tabs/TabsTabsContent";
import { useMemo } from "react";
import { getImages } from "../../redux/slices/GetImagesSlice";

const pageType = listTypeImage.otherPage.page;
const pageSection = listTypeImage.otherPage.serviceOtherBg;

const OtherServicePage = () => {
  const { t } = useLocales();
  const { listImages } = useSelector((state) => state.imagesList);
  const arrayImage = useMemo(() => {
    return listImages?.[pageType]?.[pageSection]?.[0]?.images.split(",");
  }, [listImages]);

  const { tabsList, tabsCurrentId } = useSelector((state) => state.event);
  const router = useRouter();
  const { isMobile, isTablet } = useResponsive();
  const [params, setParams] = useState({
    pageSize: DEFAULT_PARAMS.PAGE_SIZE,
    pageIndex: DEFAULT_PARAMS.PAGE_INDEX,
    keyword: "",
    eventType: OBJECT_TYPE.eventType.all,
  });
  const [activeKey, setActiveKey] = useState("all");
  const [currentTab, setCurrentTab] = useState();
  const [value, setValue] = useState(OBJECT_TYPE.eventType.all);
  const onChange = (key) => {
    setCurrentTab((currentTab) => {
      if (key === "all") {
        return (currentTab = "all");
      }
      if (key === OBJECT_TYPE.eventType.event) {
        return (currentTab = "event");
      }
      if (key === OBJECT_TYPE.eventType.gift) {
        return (currentTab = "gift");
      }
      if (key === OBJECT_TYPE.eventType.warehouse) {
        return (currentTab = "warehouses");
      }
    });
    setValue(key);
    setActiveKey(key);
    setParams({
      pageSize: DEFAULT_PARAMS.PAGE_SIZE,
      pageIndex: DEFAULT_PARAMS.PAGE_INDEX,
      keyword: "",
      eventType: key === "all" ? null : key,
    });
  };
  const listTabs = tabsList?.map((item) => {
    return {
      key: item.id,
      label: item.objectName,
      children: <TabsContent params={params} setParams={setParams} />,
    };
  });
  const items = [
    {
      key: "all",
      label: t("all"),
      children: <TabsContent params={params} setParams={setParams} />,
    },
    ...listTabs,
  ];



  const getListEvent = async (options) => {
    await dispatch(getEvent(options));
  };
  useEffect(() => {
    getListEvent(params);
  }, [params]);

  useEffect(() => {
    dispatch(getTabs(OBJECT_TYPE.eventType.eventType));
    dispatch(getImages(listTypeImage.otherPage.serviceOtherBg));
  }, []);

  return (
    <PageWrapper title={t("otherServices")}>
      <Banner
        srcBanner={arrayImage?.[0] ?? banner.src}
        title={t("otherServices")}
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link href="/">{t("home")}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{t("otherServices")}</Breadcrumb.Item>
            {currentTab !== "all" && currentTab ? (
              <Breadcrumb.Item>{t(currentTab)}</Breadcrumb.Item>
            ) : (
              ""
            )}
          </Breadcrumb>
        }
      />
      <div className="containerCustom">
        {isMobile ? (
          <Tabs
            renderTabBar={(props) => {
              return (
                <div className="selectBox">
                  <Select
                    suffixIcon={
                      <CaretDownOutlined style={{ color: "black" }} />
                    }
                    defaultValue={OBJECT_TYPE.eventType.all}
                    size="large"
                    value={value}
                    style={{ width: "100%", marginBottom: 30 }}
                    onChange={onChange}
                    options={[
                      { value: OBJECT_TYPE.eventType.all, label: t("all") },
                      { value: OBJECT_TYPE.eventType.event, label: t("event") },
                      { value: OBJECT_TYPE.eventType.gift, label: t("gift") },
                      {
                        value: OBJECT_TYPE.eventType.warehouse,
                        label: t("warehouses"),
                      },
                    ]}
                  />
                </div>
              );
            }}
            tabBarGutter={isMobile || isTablet ? 20 : 60}
            tabBarStyle={{
              marginBottom: isMobile || isTablet ? 40 : 85,
            }}
            activeKey={activeKey}
            centered={true}
            items={items}
            onChange={onChange}
          />
        ) : (
          <Tabs
            tabBarGutter={isMobile || isTablet ? 20 : 60}
            tabBarStyle={{
              marginBottom: isMobile || isTablet ? 40 : 85,
            }}
            defaultActiveKey="all"
            activeKey={activeKey}
            centered={true}
            items={items}
            onChange={onChange}
          />
        )}
      </div>
    </PageWrapper>
  );
};

OtherServicePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default OtherServicePage;
