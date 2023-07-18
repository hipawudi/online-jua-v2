import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { a as useRoute } from '../server.mjs';
import { u as useStrapi, a as useDayjs } from './useStrapi-8a5d6780.mjs';
import { u as useStrapiMedia } from './useStrapiMedia-605edd67.mjs';
import { u as useList } from './useList-e4e3ff2c.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import '@vue/shared';
import 'destr';
import 'cookie-es';
import 'ohash';
import 'qs';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRoute();
    const dayjs = useDayjs();
    useStrapi();
    const media = useStrapiMedia();
    const news = useList("news", {
      populate: "*",
      sort: ["publish_date:desc"]
    });
    [__temp, __restore] = withAsyncContext(() => news.load()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="bg-red-500"><div class="mx-auto container h-24 flex items-center justify-center md:justify-normal md:pl-10"><div class="text-3xl text-white font-bold">JUA News</div></div></div><div class="mt-6 container mx-auto p-4 md:p-0 mb-12"><div class="flex flex-col md:flex-row gap-3"><div class="flex flex-col gap-3"><!--[-->`);
      ssrRenderList(unref(news).data, (data, index) => {
        _push(`<div class="gap-3">`);
        if (index % 2 == 1) {
          _push(`<div class="flex flex-col md:flex-row gap-3 items-center"><img class="w-80 object-cover rounded-[4rem]"${ssrRenderAttr("src", unref(media) + data.attributes.banner.data.attributes.url)}><div class="flex flex-col"><div class="text-3xl font-bold">${ssrInterpolate(data.attributes.title)}</div><div class="text-lg line-clamp-2">${ssrInterpolate(data.attributes.description)}</div><div class="text-sm text-gray-500">${ssrInterpolate(unref(dayjs)(unref(news).data[0].attributes.publish_date).format(
            "YYYY-MM-DD HH:mm:ss"
          ))}</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="flex flex-col gap-3"><!--[-->`);
      ssrRenderList(unref(news).data, (data, index) => {
        _push(`<div>`);
        if (index % 2 == 1) {
          _push(`<div class="flex flex-col gap-3 md:flex-row items-center"><img class="w-80 object-cover rounded-[4rem]"${ssrRenderAttr("src", unref(media) + data.attributes.banner.data.attributes.url)}><div class="flex flex-col"><div class="text-3xl font-bold">${ssrInterpolate(data.attributes.title)}</div><div class="text-lg line-clamp-2">${ssrInterpolate(data.attributes.description)}</div><div class="text-sm text-gray-500">${ssrInterpolate(unref(dayjs)(unref(news).data[0].attributes.publish_date).format(
            "YYYY-MM-DD HH:mm:ss"
          ))}</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-dc642d8c.mjs.map
