import eventPic from "../assets/images/other-service-page/event.png";
import giftPic from "../assets/images/other-service-page/gift.png";
import warehousePic from "../assets/images/other-service-page/warehouse.png";

export const LOCAL_STORAGE_KEYS = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
  LOCALE: "i18nextLng",
};

export const COMING_SOON = true;

export const OBJECT_TYPE = {
  // Other Services Page
  eventType: {
    eventType: "eventType",
    all: null,
    event: 12,
    gift: 14,
    warehouse: 15,
  },
  // Store Page
  product: {
    // Call tags list object type
    tags: "tags",
    // id type product
    type: {
      advertiseFurniture: 8,
      advertisePage: "advFurniture",
      advertisePageTabs: "productDetailsType",
      houseFurniture: 9,
      housePage: "houseFurniture",
      store: 11,
    },
    // id categories
    productCategory: {
      table: 1,
      chair: 2,
      shelf: 3,
      all: null,
    },
    // Advertise Furniture Page
    adFurPage: {
      tabs: {
        all: 28,
        shelf: 16,
        showroom: 17,
        office: 18,
        boothEvent: 19,
      },
    },
  },
  storeTabs: {
    all: "all",
    table: "table",
    chair: "chair",
    shelfStore: "shelf",
    promotion: "promotion",
    liquidate: "liquidation",
  },
  policy: {
    sales: "salesPolicy",
    warranty: "warrantyPolicy",
    return: "returnPolicy",
    deliveryAndInstall: "deliveryAndInstallPolicy",
  },
};

export const DEFAULT_PARAMS = {
  PAGE_INDEX: 1,
  PAGE_SIZE: 10,
};
export const listPicTabs = [eventPic, giftPic, warehousePic, warehousePic];

// Type Api projectImages
export const listTypeImage = {
  homePage: {
    page: "homePage",
    homeAboutUs: "homeAboutUs",
    homePartner: "homePartner",
    homeBanners: "homeBanners"
  },
  aboutPage: {
    page: "aboutPage",
    aboutUsCompany: "aboutUsCompany",
    aboutUsBackground: "aboutUsBackground",
    activity: "aboutUsActivity",
  },
  storePage: {
    page: "storePage",
    storeBanner: "storeBanner",
    storeBackground: "storeBackground",
  },
  storeGeneralPage: {
    page: "storeGeneralPage",
    storeSale: "storeSale",
  },
  // Service
  advertiseFurniturePage: {
    page: "advertiseFurniturePage",
    serviceAdvertiseBg: "serviceAdvertiseBg",
  },
  houseFurniturePage: {
    page: "houseFurniturePage",
    serviceHouseBg: "serviceHouseBg",
  },
  webAndSystemPage: {
    page: "webAndSystemPage",
    serviceWebsiteBg: "serviceWebsiteBg",
  },
  otherPage: {
    page: "otherPage",
    serviceOtherBg: "serviceOtherBg",
  },
  // Contact
  contactPage: {
    page: "contactPage",
    contactBackground: "contactBackground",
  },
};
