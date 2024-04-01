import { notification } from "antd";
import { toast } from "react-toastify";

export const Toast = (type, message) => {
  // type: success, warn, error
  toast[type](message, {
    theme: "colored",
  });
};


export const notificationCustom = (type,message) => {
  notification[type]({
    message: message,
    style: {width:250},
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
}