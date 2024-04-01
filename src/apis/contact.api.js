import { postAsync } from "../services/http.service";

const ContactApi = {
  post: (data) => {
    return postAsync("/contact", data);
  },
};

export default ContactApi;
