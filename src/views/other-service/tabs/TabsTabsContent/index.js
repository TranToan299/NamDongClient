import { Col, Divider, Row } from "antd";
import { useRouter } from "next/router";
import React from "react";
import eventPic from "../../../../assets/images/other-service-page/event.png";
import ButtonCusTom from "../../../../component/ButtonCustom";
import ThumbnailComponent from "../../../../component/Thumnail";
import { ROUTER_PATH } from "../../../../constants/router-constants";
import useLocales from "../../../../hooks/useLocales";
import useResponsive from "../../../../hooks/useResponsive";
import { useSelector } from "../../../../redux/store";
import styles from "./index.module.scss";

const TabsContent = (props) => {
  const { params, setParams } = props;
  const router = useRouter();
  const { tabsCurrentId, eventList, tabsList } = useSelector(
    (state) => state.event
  );

  const { t } = useLocales();
  const handleViewMore = () => {
    setParams({
      ...params,
      pageSize: params.pageSize + 9,
    });
  };
  const { isMobile, isTablet } = useResponsive();

  return (
    <>
      <Row gutter={[30, { xs: 30, sm: 30, md: 30, xl: 0 }]}>
        {eventList?.map((event,index) => {
          return (
            <Col xs={24} sm={24} md={24} xl={8} key={event.id} data-aos="fade-up" data-aos-delay={index*300}>
              <ThumbnailComponent
              
                onClick={() => {
                  router.push(`${ROUTER_PATH.eventDetail}/${event.id}`);
                }}
                picture={event.thumbnail}
                name={event.name}
              />
              {isMobile || isTablet ? <Divider /> : ""}
            </Col>
          );
        })}
      </Row>
      <div className="center">
        {eventList.length >= 10 ? (
          <ButtonCusTom
            className={styles.viewMore}
            onClick={() => {
              handleViewMore();
            }}
            title={t("viewMore")}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default TabsContent;
