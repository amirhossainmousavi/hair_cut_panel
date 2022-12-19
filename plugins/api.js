import https from "https";

export default function ({ $axios, error, store, $config }, inject) {
  const api = $axios.create({
    baseURL: $config.baseUrl,
    https: false,
    headers: {
      common: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    },
  });

  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  api.onRequest((config) => {
    config.httpsAgent = agent;
    store.dispatch("global/setIsLoading", true);
    store.dispatch("global/setApiStatus", {
      [config.apiName]: true,
    });
  });

  api.onResponse((response) => {
    store.dispatch("global/setIsLoading", false);
    store.dispatch("global/setApiStatus", {
      [response.config.apiName]: false,
    });
  });

  api.onError((e) => {
    store.dispatch("global/setIsLoading", false);
    store.dispatch("global/setApiStatus", {
      [e.message || e.config.apiName]: false,
    });
    const code = parseInt(e.response && e.response.status);
    switch (code) {
      case 400:
        error({ statusCode: 400, message: "400" });
        break;

      case 404:
        // error({ statusCode: 404, message: '404' });
        break;

      case 500:
        error({ statusCode: 500, message: "500" });
        break;

      default:
        break;
    }
  });

  api.onRequestError((e) => {
    store.dispatch("global/setIsLoading", false);
    store.dispatch("global/setApiStatus", {
      [e.config.apiName]: false,
    });
    return Promise.reject(e);
  });

  api.onResponseError((e) => {
    store.dispatch("global/setIsLoading", false);
    store.dispatch("global/setApiStatus", {
      [e.message || e.config.apiName]: false,
    });
    return Promise.reject(e);
  });

  inject("api", api);
}
