import { f as useRuntimeConfig } from '../server.mjs';
import { joinURL } from 'ufo';

const useStrapiMedia = (path) => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  return joinURL(config.strapi.url, path);
};

export { useStrapiMedia as u };
//# sourceMappingURL=useStrapiMedia-a794f02e.mjs.map
