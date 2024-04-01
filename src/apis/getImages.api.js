import { getAsync } from "../services/http.service";



const imagesApi = {
  get: (params) => {
    return getAsync("/projectimages", params);
  },
};

export default imagesApi;
