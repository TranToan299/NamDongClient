import { Col, Row, Select, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import useLocales from "../../../hooks/useLocales";
import TabAll from "../tabs/all";
import useResponsive from "../../../hooks/useResponsive";
import { CaretDownOutlined, CarryOutOutlined } from "@ant-design/icons";
import { DEFAULT_PARAMS, OBJECT_TYPE } from "../../../constants/app-constants";
import { dispatch, useSelector } from "../../../redux/store";
import {
  getListProduct,
  getListTabs,
} from "../../../redux/slices/ProductSlice";

const AdvertiseContent = () => {
  const { isMobile, isTablet } = useResponsive();
  const [loading, setLoading] = useState(false);
  const { tabsList } = useSelector((state) => state.product);
 
  const [activeKey, setActiveKey] = useState(
    OBJECT_TYPE.product.adFurPage.tabs.all
  );
  const [params, setParams] = useState({
    keyword: "",
    type: OBJECT_TYPE.product.type.advertiseFurniture,
    pageSize: DEFAULT_PARAMS.PAGE_SIZE + 6,
    pageIndex: DEFAULT_PARAMS.PAGE_INDEX,
    typeDetailId: null,
  });

  const { t } = useLocales();
  const onChange = (key) => {
    setActiveKey(key);
    setParams({
      keyword: "",
      type: OBJECT_TYPE.product.type.advertiseFurniture,
      pageSize: DEFAULT_PARAMS.PAGE_SIZE + 6,
      pageIndex: DEFAULT_PARAMS.PAGE_INDEX,
      typeDetailId: key === OBJECT_TYPE.product.adFurPage.tabs.all ? null : key,
    });
  };
  const getProductList = async (options) => {
    setLoading(true);
    try {
      await dispatch(getListProduct(options));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dispatch(
      getListTabs({
        objectType: OBJECT_TYPE.product.type.advertisePageTabs,
        parentId: OBJECT_TYPE.product.type.advertiseFurniture,
      })
    );
  }, []);
  useEffect(() => {
    getProductList(params);
  }, [params]);

  const items = tabsList?.map((tab) => {
    return {
      key: tab.id,
      label: tab.objectName,
      children: <TabAll loading={loading} setParams={setParams} params={params}/>,
    };
  });
  return (
    <div className="containerCustom">
      {isMobile ? (
        <Tabs
          renderTabBar={(value) => {
            return (
              <div className="selectBox">
                <Select
                  suffixIcon={<CaretDownOutlined style={{ color: "black" }} />}
                  defaultValue={OBJECT_TYPE.product.adFurPage.tabs.all}
                  size="large"
                  style={{ width: "100%", marginBottom: 30 }}
                  onChange={onChange}
                  options={[
                    {
                      value: OBJECT_TYPE.product.adFurPage.tabs.all,
                      label: t("all"),
                    },
                    {
                      value: OBJECT_TYPE.product.adFurPage.tabs.shelf,
                      label: t("shelf"),
                    },
                    {
                      value: OBJECT_TYPE.product.adFurPage.tabs.showroom,
                      label: t("showroom"),
                    },
                    {
                      value: OBJECT_TYPE.product.adFurPage.tabs.office,
                      label: t("office"),
                    },
                    {
                      value: OBJECT_TYPE.product.adFurPage.tabs.boothEvent,
                      label: t("boothEvent"),
                    },
                  ]}
                />
              </div>
            );
          }}
          tabBarGutter={isMobile || isTablet ? 20 : 60}
          centered={true}
          activeKey={activeKey}
          defaultActiveKey={OBJECT_TYPE.product.adFurPage.tabs.all}
          items={items}
          onChange={onChange}
        />
      ) : (
        <Tabs
          tabBarGutter={isMobile || isTablet ? 20 : 60}
          centered={true}
          defaultActiveKey={OBJECT_TYPE.product.adFurPage.tabs.all}
          items={items}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default AdvertiseContent;
