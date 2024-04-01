import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import snackbar from "../../utils/snackbar";
import { notification } from "antd";
import { Toast, notificationCustom } from "../../utils/notification";
import EventApi from "../../apis/event.api";

export const getTabs = createAsyncThunk(
  "get/eventTabs",
  async (options, { dispatch }) => {
    const { data } = await EventApi.getEventTabs(options);
    return data;
  }
);

export const getEvent = createAsyncThunk(
  "get/event",
  async (params, { dispatch }) => {
    const { data } = await EventApi.getEvents(params);
    return data;
  }
);

export const getEventDetail = createAsyncThunk(
  "get/eventDetail",
  async (id, { dispatch }) => {
    const { data } = await EventApi.getDetail(id);
    return data;
  }
);

const initialState = {
  tabsList: [],
  eventList: [],
  eventDetail: {},
};
export const EventSlice = createSlice({
  name: "Event",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTabs.fulfilled, (state, action) => {
        state.tabsList = action.payload;
      })
      .addCase(getEvent.fulfilled, (state, action) => {
        state.eventList = action.payload.items;
      })
      .addCase(getEventDetail.fulfilled, (state, action) => {
        state.eventDetail = action.payload;
      });
  },
});

export const { t } = EventSlice.actions;

export default EventSlice.reducer;
