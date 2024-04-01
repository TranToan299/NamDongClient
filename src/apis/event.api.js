import { getAsync, postAsync } from "../services/http.service";

const EventApi = {
  getEventTabs: (params) => {
    return getAsync(`/objecttype?objectType=${params}`);
  },
  getEvents: (params) => {
    return getAsync(`/event`, params);
  },
  getDetail: (id) => {
    return getAsync(`/event/${id}`);
  },
};

export default EventApi;
