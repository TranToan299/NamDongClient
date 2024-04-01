import { getAsync, postAsync } from "../services/http.service";

const url = `/product`;
const ProductApi = {
  getTags: (options) => {
    return getAsync(`/objecttype?objectType=${options}`);
  },
  getList: (options) => {
    return getAsync(`${url}`, options);
  },
  getDetail: (id) => {
    return getAsync(`${url}/${id}`);
  },
  getRelatedList: (options) => {
    return getAsync(`${url}/related-list`, options);
  },
  getImages: () => {
    return getAsync(`/projectimages`);
  },
  postOder: (data) => {
    return postAsync("/order", data);
  },
  getListTabs: (options) => {
    return getAsync(`/objecttype`, options);
  },
};

export default ProductApi;
