import { Button, Col, Drawer, Input, Menu, Popover, Row, Space } from "antd";
import { useEffect, useRef, useState } from "react";
import {
  CaretDownOutlined,
  CaretRightOutlined,
  CloseOutlined,
  MailOutlined,
  SettingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import i18next from "i18next";
import { ROUTER_PATH } from "../../../constants/router-constants";
import Link from "next/link";
import useLocales from "../../../hooks/useLocales";
import styles from "./drawer-header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { DEFAULT_PARAMS, OBJECT_TYPE } from "../../../constants/app-constants";
import { getListProductSearch } from "../../../redux/slices/ProductSlice";
import { useRouter } from "next/router";
function getItem(label, key, children, icon, type) {
  return {
    key,
    children,
    label,
    icon,
    type,
  };
}
const items = [
  getItem(i18next.t("aboutUs"), "about", [
    getItem(
      <Link href={ROUTER_PATH.about}>{i18next.t("introduce")}</Link>,
      "introduce"
    ),
    getItem(
      <Link href={"/#partner"} scroll={false}>
        {i18next.t("partner")}
      </Link>,
      "partner"
    ),
  ]),
  getItem(i18next.t("service"), "service", [
    getItem(
      <Link href={ROUTER_PATH.advertiseFurniture}>
        {i18next.t("advFurniture")}
      </Link>,
      "advFurniture"
    ),
    getItem(
      <Link href={ROUTER_PATH.houseFurniture}>
        {i18next.t("houseFurniture")}
      </Link>,
      "houseFurniture"
    ),
    getItem(
      <Link href={ROUTER_PATH.webAndSystem}>{i18next.t("webAndSystem")}</Link>,
      "webAndSystem"
    ),
    getItem(
      <Link href={ROUTER_PATH.otherService}>{i18next.t("otherServices")}</Link>,
      "otherServices"
    ),
  ]),
  getItem(i18next.t("store"), "store", [
    getItem(
      <Link href={ROUTER_PATH.store}>{i18next.t("production")}</Link>,
      "production"
    ),
    getItem(
      <Link
        shallow={true}
        href={{
          pathname: ROUTER_PATH.storeGeneral,
          query: {
            tab: OBJECT_TYPE.storeTabs.promotion,
          },
        }}
      >
        {i18next.t("promotion")}
      </Link>,
      "promotion"
    ),
    getItem(
      <Link
        shallow={true}
        href={{
          pathname: ROUTER_PATH.storeGeneral,
          query: {
            tab: OBJECT_TYPE.storeTabs.liquidate,
          },
        }}
      >
        {i18next.t("outlet")}
      </Link>,
      "outlet"
    ),
  ]),
  getItem(
    <Link href={ROUTER_PATH.contact}>{i18next.t("contact")}</Link>,
    "contact"
  ),
  getItem(i18next.t("lang"), "lang", [
    getItem("Việt Nam", "vn"),
    getItem("English", "en"),
  ]),
];

const DrawerHeader = (props) => {
  const { open, onClose } = props;
  const dispatch = useDispatch();
  const router = useRouter();
  const { productList, productSearch } = useSelector((state) => state.product);
  const [collapsed, setCollapsed] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [search, setSearch] = useState("");
  const { onChangeLang, currentLang, t } = useLocales();

  const [paramsSearch, setParamsSearch] = useState({
    keyword: "",
    pageSize: DEFAULT_PARAMS.PAGE_SIZE - 5,
    pageIndex: DEFAULT_PARAMS.PAGE_INDEX,
  });
  const onSelect = (props) => {
    const { key } = props;
    setSelectedKeys([]);
    onClose();
    onChangeLang(key);
  };
  const handleSearch = (e) => {
    setOpenPopover(true);
    setParamsSearch({
      ...paramsSearch,
      keyword: e.target.value,
    });
    setSearch(e.target.value);
  };
  const onOpenChange = (keys) => {
    console.log(keys);
  };
  const activeSearch = () => {
    setSearchActive(!searchActive);
    setSearch("");
  };
  const handleDirect = (item) => {
    if (item.type === OBJECT_TYPE.product.type.houseFurniture) {
      router.push(
        `${ROUTER_PATH.furnitureDetail}/${OBJECT_TYPE.product.type.houseFurniture}/${item.id}`
      );
    }
    if (item.type === OBJECT_TYPE.product.type.advertiseFurniture) {
      router.push(
        `${ROUTER_PATH.furnitureDetail}/${OBJECT_TYPE.product.type.advertisePage}/${item.id}`
      );
    } else {
      router.push(`${ROUTER_PATH.productDetail}/${item.id}`);
    }
    setOpenPopover(false);
    onClose();
    setSearch("");
    setSearchActive(false);
  };
  useEffect(() => {
    dispatch(getListProductSearch(paramsSearch));
  }, [paramsSearch]);
  useEffect(() => {
    if (!search) {
      setOpenPopover(false);
    }
  }, [search]);
  return (
    <>
      <Drawer
        // title="Basic Drawer"
        placement="right"
        closeIcon={null}
        open={open}
        extra={
          <Space size="large">
            <SearchOutlined
              className={styles.toolbarItem}
              onClick={activeSearch}
            />
            <CloseOutlined className={styles.toolbarItem} onClick={onClose} />
          </Space>
        }
      >
        {searchActive ? (
          <Popover
            content={
              <>
                {productSearch?.map((item, index) => {
                  return (
                    <Row
                      onClick={() => {
                        handleDirect(item);
                      }}
                      style={{ marginBottom: 20 }}
                      key={index}
                      gutter={[20, 20]}
                      justify="space-between"
                    >
                      <Col xl={5}>
                        <img
                          style={{ width: 50, height: 50 }}
                          src={item.thumbnail}
                          alt="Hình ảnh"
                        />
                      </Col>
                      <Col xl={11}>
                        <div>{item.name}</div>
                      </Col>
                      <Col xl={8}>
                        <div>{item.price}</div>
                      </Col>
                    </Row>
                  );
                })}
              </>
            }
            title="Danh sách sản phẩm"
            className="popoverCustom"
            style={{ width: "100%" }}
            showArrow={false}
            open={openPopover}
          >
            <Input
              onChange={handleSearch}
              value={search}
              size="large"
              name="search"
              placeholder="Tìm kiếm"
            />
          </Popover>
        ) : (
          ""
        )}

        <Menu
          mode="inline"
          onOpenChange={onOpenChange}
          expandIcon={({ isOpen }) => {
            return isOpen ? <CaretDownOutlined /> : <CaretRightOutlined />;
          }}
          selectedKeys={[selectedKeys]}
          inlineCollapsed={collapsed}
          onSelect={onSelect}
          items={items}
        />
      </Drawer>
    </>
  );
};

export default DrawerHeader;
