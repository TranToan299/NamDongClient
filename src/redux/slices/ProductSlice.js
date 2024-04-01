import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import snackbar from "../../utils/snackbar";
import { notification } from "antd";
import { Toast, notificationCustom } from "../../utils/notification";
import i18next from "i18next";
import { Router } from "next/router";
import { ROUTER_PATH } from "../../constants/router-constants";
import ProductApi from "../../apis/product.api";

export const getListTagsProduct = createAsyncThunk(
  "get/tagsProduct",
  async (options, { dispatch }) => {
    const { data } = await ProductApi.getTags(options);
    return data;
  }
);

export const getListProduct = createAsyncThunk(
  "get/productList",
  async (options, { dispatch }) => {
    const { data } = await ProductApi.getList(options);
    return data;
  }
);

export const getListProductLiquid = createAsyncThunk(
  "get/productListLiquid",
  async (options, { dispatch }) => {
    const { data } = await ProductApi.getList(options);
    return data;
  }
);
export const getListProductSearch = createAsyncThunk(
  "get/productListSearch",
  async (options, { dispatch }) => {
    const { data } = await ProductApi.getList(options);
    return data;
  }
);
export const getProductDetail = createAsyncThunk(
  "get/productDetail",
  async (id, { dispatch }) => {
    const { data } = await ProductApi.getDetail(id);
    return data;
  }
);

export const getProductRelated = createAsyncThunk(
  "get/productRelated",
  async (type, { dispatch }) => {
    const { data } = await ProductApi.getRelatedList(type);
    return data;
  }
);

export const getProjectImages = createAsyncThunk(
  "get/projectImages",
  async () => {
    const { data } = await ProductApi.getImages();
    return data;
  }
);

// Order
export const postOrder = createAsyncThunk(
  "order/post",
  async (options, { dispatch }) => {
    await ProductApi.postOder(options.submitValues)
    await notificationCustom("success", i18next.t("orderSuccess"));
    options.navigate();
  }
);
// Advertise Furniture
export const getListTabs = createAsyncThunk(
  "get/tabsAdvertiseFurniture",
  async (options, { dispatch }) => {
    const { data } = await ProductApi.getListTabs(options)
  console.log(data)
    return data;
  }
);

const initialState = {
  counter: {},
  tabsList: [],
  cartProduct: [],
  tagsProductList: [],
  productList: [],
  productListLiquid: [],
  productDetail: {},
  productSearch: [],
  productRelated: [],
  projectImages: []
};
export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    addOne: (state, action) => {
      const index = state.cartProduct.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (index !== -1) {
        state.cartProduct[index].quantity += 1;
      } else {
        state.cartProduct.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    minusOne: (state, action) => {
      const index = state.cartProduct.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (state.cartProduct[index].quantity === 1) {
        return;
      } else {
        state.cartProduct[index].quantity -= 1;
      }
    },
    deleteProduct: (state, action) => {
      const updateCart = state.cartProduct.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.cartProduct = updateCart;
      notificationCustom("success", i18next.t("deleteSuccess"));
    },
    resetCart: (state, action) => {
      state.cartProduct = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListProduct.fulfilled, (state, action) => {
        state.productList = action.payload.items;
        state.counter = action.payload.counter;
      })
      .addCase(getListProductLiquid.fulfilled, (state, action) => {
        state.productListLiquid = action.payload.items;
      })
      .addCase(getListTagsProduct.fulfilled, (state, action) => {
        state.tagsProductList = action.payload;
      })
      .addCase(getListProductSearch.fulfilled, (state, action) => {
        state.productSearch = action.payload.items;
      })
      .addCase(getProductRelated.fulfilled, (state, action) => {
        state.productRelated = action.payload;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.productDetail = action.payload;
        state.productDetail.quantity = 1;
      })
      .addCase(getProjectImages.fulfilled, (state, action) => {
        state.projectImages = action.payload;
  
      })
      // Order
      .addCase(postOrder.fulfilled, (state, action) => {
        state.cartProduct = [];
      })
      // Get Tabs List Advertise Furniture
      .addCase(getListTabs.fulfilled, (state, action) => {
        state.tabsList = action.payload;
      })
      
      ;
  },
});

export const { addOne, minusOne, resetCart, deleteProduct } =
  productSlice.actions;

export default productSlice.reducer;
