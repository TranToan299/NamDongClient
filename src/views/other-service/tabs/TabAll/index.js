import { Col, Divider, Row } from "antd";
import Link from "next/link";
import React from "react";
import eventPic from "../../../../assets/images/other-service-page/event.png";
import giftPic from "../../../../assets/images/other-service-page/gift.png";
import warehousePic from "../../../../assets/images/other-service-page/warehouse.png";

import ThumbnailComponent from "../../../../component/Thumnail";
import { ROUTER_PATH } from "../../../../constants/router-constants";
import useLocales from "../../../../hooks/useLocales";
import useResponsive from "../../../../hooks/useResponsive";
import { dispatch } from "../../../../redux/store";
import { changeTab, getEvent } from "../../../../redux/slices/EventSlice";
import { DEFAULT_PARAMS } from "../../../../constants/app-constants";

const TabAllOtherService = (props) => {
  const { listTabs, setActiveKey, setCurrentTab, setValue } = props;
  const { t } = useLocales();
  const { isMobile, isTablet } = useResponsive();
  const handleChangeTabs = (tab) => {
    setCurrentTab(tab.key);
    setActiveKey(tab.key);
    setValue(tab.key);
    dispatch(
      getEvent({
        eventType: tab?.id,
        keyword: "",
        pageIndex: DEFAULT_PARAMS.PAGE_INDEX,
        pageSize: DEFAULT_PARAMS.PAGE_SIZE,
      })
    );
  };
  return (
    <Row gutter={[30, { xs: 30, sm: 30, md: 30, xl: 30 }]}>
      {listTabs?.map((tab) => {
        return (
          <Col xs={24} sm={24} md={24} xl={8} key={tab.id}>
            <ThumbnailComponent
              onClick={() => {
                handleChangeTabs(tab);
              }}
              picture={tab?.picture}
              date="Ngày 23/5/2023"
              name={tab?.label}
              content="Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
      nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
      volutpat."
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default TabAllOtherService;
