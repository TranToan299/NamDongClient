import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import imagesApi from "../../apis/getImages.api";
import { listTypeImage } from "../../constants/app-constants";

export const getImages = createAsyncThunk(
  "images/getList",
  async (params, { dispatch }) => {
    const { data } = await imagesApi.get({type: params});
    return data;
  }
);

export const getEditor = createAsyncThunk(
  "images/getEditor",
  async (_, { dispatch }) => {
    const { data } = await imagesApi.get({type: 'editorWebsiteAndSystem'});
    return data;
  }
);



const initialState = {
  listImages: {
    homePage: {
      homeAboutUs: [],
      homePartner: [],
      homeBanners: []
    },
    aboutPage: {
      aboutUsCompany: [],
      aboutUsBackground: [],
      aboutUsActivity: [],
    },
    // Store Page
    storePage: {
      storeBanner: [],
      storeBackground: [],
    },
    storeGeneralPage: {
      storeSale: [],
    },
    // Service
    advertiseFurniturePage: {
      serviceAdvertiseBg: [],
    },
    houseFurniturePage: {
      serviceHouseBg: [],
    },
    webAndSystemPage: {
      serviceWebsiteBg: [],
      editorWebsiteAndSystem: '',
    },
    otherPage: {
      serviceOtherBg: [],
    },
    // Contact
    contactPage: {
      contactBackground: [],
    },
  },
};
export const slice = createSlice({
  name: "imagesList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImages.fulfilled, (state, action) => {
      const type = action.payload?.[0]?.type;
      switch (type) {
        case listTypeImage.homePage.homeAboutUs:
          state.listImages.homePage.homeAboutUs = action.payload;
          break;
        case listTypeImage.homePage.homePartner:
          state.listImages.homePage.homePartner = action.payload;
          break;
        case listTypeImage.aboutPage.aboutUsCompany:
          state.listImages.aboutPage.aboutUsCompany = action.payload;
          break;
        case listTypeImage.aboutPage.aboutUsBackground:
          state.listImages.aboutPage.aboutUsBackground = action.payload;
          break;
        case listTypeImage.aboutPage.activity:
          state.listImages.aboutPage.aboutUsActivity = action.payload;
          break;
        //   Store Page
        case listTypeImage.storePage.storeBanner:
          state.listImages.storePage.storeBanner = action.payload;
          break;
        case listTypeImage.storePage.storeBackground:
          state.listImages.storePage.storeBackground = action.payload;
          break;
        case listTypeImage.storeGeneralPage.storeSale:
          state.listImages.storeGeneralPage.storeSale = action.payload;
          break;
        case listTypeImage.advertiseFurniturePage.serviceAdvertiseBg:
          state.listImages.advertiseFurniturePage.serviceAdvertiseBg =
            action.payload;
          break;
        case listTypeImage.houseFurniturePage.serviceHouseBg:
          state.listImages.houseFurniturePage.serviceHouseBg = action.payload;
          break;
        case listTypeImage.webAndSystemPage.serviceWebsiteBg:
          state.listImages.webAndSystemPage.serviceWebsiteBg = action.payload;
          break;
        case listTypeImage.otherPage.serviceOtherBg:
          state.listImages.otherPage.serviceOtherBg = action.payload;
          break;
        case listTypeImage.contactPage.contactBackground:
          state.listImages.contactPage.contactBackground = action.payload;
          break;
          case listTypeImage.homePage.homeBanners:
            state.listImages.homePage.homeBanners = action.payload;
            break;
        default:
          return;
      }
    })
    .addCase(getEditor.fulfilled, (state, action) => {
      state.listImages.webAndSystemPage.editorWebsiteAndSystem = action.payload;
    })
    ;
  },
});

// export const {  } = namDongSlice.actions;

export default slice.reducer;
