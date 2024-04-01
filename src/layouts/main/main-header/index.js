import { CloseOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, Menu, Popover, Row, Select } from "antd";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import enFlag from "../../../assets/icons/flags/enFlag.svg";
import vnFlag from "../../../assets/icons/flags/vnFlag.svg";
import logo from "../../../assets/icons/iconSvg/logoHeader.svg";
import {
  COMING_SOON,
  DEFAULT_PARAMS,
  OBJECT_TYPE,
} from "../../../constants/app-constants";
import { ROUTER_PATH } from "../../../constants/router-constants";
import useLocales from "../../../hooks/useLocales";
import useResponsive from "../../../hooks/useResponsive";
import { getListProductSearch } from "../../../redux/slices/ProductSlice";
import DrawerHeader from "./drawer-header";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const disabled = true;
const MainHeader = () => {
  const { isMobile, isTablet } = useResponsive();
  const router = useRouter();
  const dispatch = useDispatch();
  const ref = useRef(null);
  const refSearch = useRef(null);

  const { productList, productSearch } = useSelector((state) => state.product);
  const { onChangeLang, currentLang, t } = useLocales();
  const [activeNav, setActiveNav] = useState(true);
  const [activeSearch, setActiveSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);
  const [paramsSearch, setParamsSearch] = useState({
    keyword: "",
    pageSize: DEFAULT_PARAMS.PAGE_SIZE,
    pageIndex: DEFAULT_PARAMS.PAGE_INDEX,
  });
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        !ref.current?.contains(event.target) &&
        !refSearch.current?.contains(event.target)
      ) {
        setActiveSearch(false);
        setOpenPopover(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleActiveNav = () => {
    setActiveNav(!activeNav);
  };
  const handleActiveSearch = () => {
    setActiveSearch(!activeSearch);
  };
  const handleChangeLang = (newLang) => {
    onChangeLang(newLang);
  };

  // handle Search

  const handleSearch = async (e) => {
    setOpenPopover(true);
    dispatch(
      getListProductSearch({
        ...paramsSearch,
        keyword: e.target.value,
      })
    );
    setSearch(e.target.value);
  };
  const handleClickItemSearch = async (item) => {
    setSearch("");
    setOpenPopover(false);
    setActiveSearch(false);

    switch (item.type) {
      case OBJECT_TYPE.product.type.houseFurniture:
        router.push(
          `${ROUTER_PATH.furnitureDetail}/${OBJECT_TYPE.product.type.advertisePage}/${item.id}`
        );
        break;
      case OBJECT_TYPE.product.type.advertiseFurniture:
        router.push(
          `${ROUTER_PATH.furnitureDetail}/${OBJECT_TYPE.product.type.housePage}/${item.id}`
        );
        break;
      default:
        return router.push(`${ROUTER_PATH.productDetail}/${item.id}`);
    }
  };

  useEffect(() => {
    if (!search) {
      setOpenPopover(false);
    }
  }, [search]);
  const items = [
    {
      label: t("aboutUs"),
      key: "aboutUs",
      className: `${activeNav ? styles.hideItem : styles.nav__item}`,
      style: { marginRight: "40px" },
      children: [
        {
          type: "group",
          style: { width: 164 },
          children: [
            {
              label: <Link href={ROUTER_PATH.about}>{t("introduce")}</Link>,
              key: "introduce",
            },
            {
              label: (
                <Link href={"/#partner"} shallow scroll={false}>
                  {t("partner")}
                </Link>
              ),
              key: "partner",
            },
          ],
        },
      ],
    },
    {
      label: t("service"),
      key: "service",
      style: { marginRight: "40px" },
      className: `${activeNav ? styles.hideItem : styles.nav__item}`,
      children: [
        {
          type: "group",
          style: { width: 260 },
          children: [
            {
              label: (
                <Link href={ROUTER_PATH.advertiseFurniture}>
                  {t("advFurniture")}
                </Link>
              ),
              key: "advFurniture",
            },
            {
              label: (
                <Link href={ROUTER_PATH.houseFurniture}>
                  {t("houseFurniture")}
                </Link>
              ),
              key: "houseFurniture",
            },
            {
              label: (
                <Link href={ROUTER_PATH.webAndSystem}>{t("webAndSystem")}</Link>
              ),
              key: "webAndSystem",
            },
            {
              label: (
                <Link href={ROUTER_PATH.otherService}>
                  {t("otherServices")}
                </Link>
              ),
              key: "otherServices",
            },
          ],
        },
      ],
    },
    {
      label: (
        <Link href="/" style={{ marginRight: 40 }}>
          <img src={logo.src} alt="..." />
        </Link>
      ),
      key: "logo",
      className: `${styles.logo} logo`,
      style: {
        marginTop: "10px",

        after: {
          borderBottom: "none",
        },
      },
    },
    {
      label: t("store"),
      key: "store",
      style: {
        marginRight: "40px",
      },
      className: `${activeNav ? styles.hideItem : styles.nav__item}`,

      children: [
        {
          type: "group",
          style: { width: 164 },
          children: [
            {
              label: (
                <Link href={ROUTER_PATH.store} style={{ marginRight: 40 }}>
                  {t("production")}
                </Link>
              ),
              key: "production",
              disabled: COMING_SOON,
            },
            {
              label: (
                <Link
                  shallow={true}
                  href={{
                    pathname: ROUTER_PATH.storeGeneral,
                    query: {
                      tab: OBJECT_TYPE.storeTabs.promotion,
                    },
                  }}
                >
                  {t("promotion")}
                </Link>
              ),
              disabled: COMING_SOON,
              key: "promotion",
            },
            {
              label: (
                <Link
                  shallow={true}
                  href={{
                    pathname: ROUTER_PATH.storeGeneral,
                    query: {
                      tab: OBJECT_TYPE.storeTabs.liquidate,
                    },
                  }}
                >
                  {t("outlet")}
                </Link>
              ),
              disabled: COMING_SOON,
              key: "outlet",
            },
          ],
        },
      ],
    },
    {
      label: <Link href={ROUTER_PATH.contact}>{t("contact")}</Link>,
      key: "contact",
      className: `${activeNav ? styles.hideItem : styles.nav__item}`,
    },
  ];
  return (
    <div className={styles.mainHeader} align="middle">
      {isMobile || isTablet ? (
        <Row
          className={styles.mobileHeader}
          justify="space-between"
          style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}
        >
          <Col xs={6}></Col>
          <Col xs={6}>
            <Link href="/" className={styles.mobileHeader__logo}>
              <img src={logo.src} alt="logo" />
            </Link>
          </Col>
          <Col xs={6}>
            <Button
              onClick={showDrawer}
              className={styles.mobileHeader__drawer}
            >
              <MenuOutlined />
            </Button>
          </Col>
        </Row>
      ) : (
        <Menu
          mode="horizontal"
          items={items}
          className={styles.navContainer}
          style={{ height: "100%", width: "100%", justifyContent: "center" }}
        />
      )}

      <Row className={styles.toolbar}>
        {productSearch.length > 0 ? (
          <div
            className={`${styles.searchResult} ${
              !openPopover ? styles.searchResult__unActive : ""
            }`}
            ref={refSearch}
          >
            {productSearch?.map((item, index) => {
              return (
                <Row
                  onClick={() => {
                    handleClickItemSearch(item);
                  }}
                  className={styles.itemSearch}
                  key={index}
                  gutter={[30, 30]}
                  justify="space-between"
                  align="middle"
                >
                  <Col xl={6}>
                    <img
                      style={{ width: 50, height: 50 }}
                      src={item.thumbnail}
                      alt="Hình ảnh"
                    />
                  </Col>
                  <Col xl={10}>
                    <div className={styles.itemSearch__text}>{item.name}</div>
                  </Col>

                  {item.type === OBJECT_TYPE.product.type.store ? (
                    <Col xl={8}>
                      <div className={styles.itemSearch__text}>
                        {item.price}
                      </div>
                    </Col>
                  ) : (
                    <Col xl={8}>{/* {t('viewMore')} */}</Col>
                  )}
                </Row>
              );
            })}{" "}
          </div>
        ) : (
          ""
        )}

        <Col xs={0} sm={0} md={0} xl={8}>
          {activeNav ? (
            <CloseOutlined
              onClick={handleActiveNav}
              className={`${styles.toolbar__item} ${
                styles.toolbar__btnSearch
              } ${activeSearch ? styles.searchActive : ""}`}
            />
          ) : (
            <MenuOutlined
              onClick={handleActiveNav}
              className={`${styles.toolbar__item} ${
                styles.toolbar__btnSearch
              } ${activeSearch ? styles.searchActive : ""}`}
            />
          )}
        </Col>
        <Col xs={0} sm={0} md={0} xl={8}>
          <div className={styles.toolbar__search} ref={ref}>
            <button
              onClick={handleActiveSearch}
              className={`${styles.toolbar__btnSearch} ${
                activeSearch ? styles.searchActive : ""
              }`}
            >
              <SearchOutlined className={`${styles.toolbar__item} `} />
            </button>
            <input
              value={search}
              onChange={handleSearch}
              placeholder="Tìm kiếm"
              className={`${styles.inputSearch} ${
                activeSearch ? styles.searchActive : ""
              }`}
            />
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} xl={8}>
          <div
            className={`${activeSearch ? styles.searchActive : ""} ${
              styles.flag
            }`}
          >
            <Select
              bordered={false}
              showArrow={false}
              defaultValue="vn"
              // size="small"
              optionLabelProp="img"
              onChange={handleChangeLang}
              popupClassName="custom-dropdown-flag"
              options={[
                {
                  value: "vn",
                  label: "Việt Nam",
                  img: (
                    <img
                      className={styles.flag__icon}
                      src={vnFlag.src}
                      alt="VN"
                    />
                  ),
                },
                {
                  value: "en",
                  label: "English",
                  img: (
                    <img
                      className={styles.flag__icon}
                      src={enFlag.src}
                      alt="EN"
                    />
                  ),
                },
              ]}
            />
          </div>
        </Col>
      </Row>
      <DrawerHeader open={open} onClose={onClose} showDrawer={showDrawer} />
    </div>
  );
};

export default MainHeader;
