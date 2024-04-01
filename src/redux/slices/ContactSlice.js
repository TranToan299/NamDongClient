import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import snackbar from "../../utils/snackbar";
import { notification } from "antd";
import { Toast, notificationCustom } from "../../utils/notification";
import { Router } from "next/router";
import ContactApi from "../../apis/contact.api";

export const postContact = createAsyncThunk(
  "post/contact",
  async (options, { dispatch }) => {
    await ContactApi.post(options.data);
    notificationCustom("success", "Gửi thành công");
    options.navigate();
  }
);

const initialState = {};
export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

// export const {  } = namDongSlice.actions;

export default contactSlice.reducer;
