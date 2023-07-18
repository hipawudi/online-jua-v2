import { d as useStrapiClient, e as useStrapiVersion, b as useNuxtApp } from '../server.mjs';

const useDayjs = () => {
  const { $dayjs: dayjs } = useNuxtApp();
  return dayjs;
};
const useStrapi4 = () => {
  const client = useStrapiClient();
  const version = useStrapiVersion();
  if (version !== "v4") {
    console.warn("useStrapi4 is only available for v4");
  }
  const find = (contentType, params) => {
    return client(`/${contentType}`, { method: "GET", params });
  };
  const findOne = (contentType, id, params) => {
    if (typeof id === "object") {
      params = id;
      id = void 0;
    }
    const path = [contentType, id].filter(Boolean).join("/");
    return client(path, { method: "GET", params });
  };
  const create = (contentType, data) => {
    return client(`/${contentType}`, { method: "POST", body: { data } });
  };
  const update = (contentType, id, data) => {
    if (typeof id === "object") {
      data = id;
      id = void 0;
    }
    const path = [contentType, id].filter(Boolean).join("/");
    return client(path, { method: "PUT", body: { data } });
  };
  const _delete = (contentType, id) => {
    const path = [contentType, id].filter(Boolean).join("/");
    return client(path, { method: "DELETE" });
  };
  return {
    find,
    findOne,
    create,
    update,
    delete: _delete
  };
};
const useStrapi = () => {
  return useStrapi4();
};

export { useDayjs as a, useStrapi as u };
//# sourceMappingURL=useStrapi-8a5d6780.mjs.map
