import customReq from "@/services/request";

export default {
  methods: {
    request(url, method = "get", data, params) {
      return customReq({
        url,
        method,
        params: {
          ...params,
        },
        data: {
          ...data,
        },
      });
    },
  },
};