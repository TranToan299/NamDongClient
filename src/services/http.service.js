import axios from "axios";
import Router from "next/router";
import { toast } from "react-toastify";
import { LOCAL_STORAGE_KEYS } from "../constants/app-constants";
import { ROUTER_PATH } from "../constants/router-constants";
import { hideLoading, showLoading } from "../redux/slices/LoadingSlice";
import { dispatch } from "../redux/store";
import LocalUtils from "../utils/localUtils";

const axiosInstance = (
  isShowLoading = true,
  isShowSuccessMessage = true,
  isShowErrorMessage = true
) => {
  if (isShowLoading) dispatch(showLoading());
  const baseURL = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${process.env.NEXT_PUBLIC_API_PREFIX}`;

  const instance = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
      // Authorization: LocalUtils.get(LOCAL_STORAGE_KEYS.ACCESS_TOKEN),
    },
  });

  instance.interceptors.response.use(
    (response) => {
      if (isShowLoading) dispatch(hideLoading());
      if (isShowSuccessMessage) {
        if (response.data.success) {
          if (isShowErrorMessage) {
            toast.success(response.data.msg);
          }
        } else {
          toast.error(response.data.msg);
        }
      }

      return response;
    },
    (error) => {
      let message = "";

      if (error.response) {
        let status = error.response.status;
        // when UnAuthorize
        if (
          status === 401 &&
          window.location.href.indexOf(ROUTER_PATH.login) === -1
        ) {
          handleUnAuthorize();
        } else if (error.response.data) {
          if (error.response.data.message) {
            message = error.response.data.message;
          } else if (error.response.data.error_description) {
            message = error.response.data.error_description;
          } else if (error.response.data.title) {
            message = error.response.data.title;
          } else if (typeof error.response.data === "string") {
            message = error.response.data;
          } else if (error.response.data.error.data) {
            message = error.response.data.error.data;
          }
        } else {
          message = "Đã có lỗi xảy ra vui lòng thử lại sau";
        }
      }

      if (message) {
        toast.error(message);
      }

      if (isShowLoading) dispatch(hideLoading());
      return Promise.reject(error);
    }
  );

  return instance;
};

export const getAsync = (url, params, isShowLoading, isShowSuccessMessage) => {
  return axiosInstance(isShowLoading, isShowSuccessMessage).get(url, {
    params: params,
  });
};

export const postAsync = (
  url,
  json,
  isShowLoading,
  isShowSuccessMessage,
  isShowErrorMessage
) => {
  return axiosInstance(
    isShowLoading,
    isShowSuccessMessage,
    isShowErrorMessage
  ).post(url, json);
};

export const putAsync = (url, json, isShowLoading, isShowSuccessMessage) => {
  return axiosInstance(isShowLoading, isShowSuccessMessage).put(url, json);
};

export const deleteAsync = (url, json, isShowLoading, isShowSuccessMessage) => {
  return axiosInstance(isShowLoading, isShowSuccessMessage).delete(url, {
    data: json,
  });
};

function handleUnAuthorize() {
  LocalUtils.clear();
  Router.push(ROUTER_PATH.login);
}
