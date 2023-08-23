import { _ as __nuxt_component_0 } from './PageHeader-8e8cb4c2.mjs';
import { u as useStrapiMedia } from './useStrapiMedia-a794f02e.mjs';
import { u as useStrapi } from './useStrapi-a6820de4.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { a as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const media = useStrapiMedia();
    const { findOne } = useStrapi();
    const route = useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(() => findOne("jua-members", route.params.id, {
      populate: "*"
    })), __temp = await __temp, __restore(), __temp);
    const classes = [
      { text: "JUA Members", to: "/jua-members" },
      { text: data.attributes.title, to: "" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_page_header = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_page_header, {
        title: unref(data).attributes.title,
        classes
      }, null, _parent));
      _push(`<section class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0"><div class="container mx-auto xl:pl-16 px-4"><div class="mb-4"><img${ssrRenderAttr("src", unref(media) + unref(data).attributes.member_image.data.attributes.url)} class="w-40 shadow-lg"></div><div class="flex flex-col md:flex-row gap-6"><div class="flex flex-col text-gray-500 text-lg"><div class="flex gap-6"><div class="w-16">Title</div><div class="text-black font-bold">${ssrInterpolate(unref(data).attributes.title)}</div></div><div class="flex gap-6"><div class="w-16">Address</div><div class="text-black font-bold">${ssrInterpolate(unref(data).attributes.address)}</div></div><div class="flex gap-6"><div class="w-16">Phone</div><div class="text-black font-bold">${ssrInterpolate(unref(data).attributes.phone)}</div></div><div class="flex gap-6"><div class="w-16">Web</div><div class="text-black font-bold">${ssrInterpolate(unref(data).attributes.web)}</div></div><div class="flex gap-6"><div class="w-16">Email</div><div class="text-black font-bold">${ssrInterpolate(unref(data).attributes.email)}</div></div></div><div class="grow md:text-right text-left"><div class="flex md:justify-end justify-start gap-6 md:flex-row flex-row-reverse"><div class="flex flex-col"><div class="text-lg text-gray-500">President</div><div class="text-lg font-bold">${ssrInterpolate(unref(data).attributes.president)}</div></div><div class="w-28 h-32">`);
      if (unref(data).attributes.president_image.data != null) {
        _push(`<img${ssrRenderAttr("src", unref(media) + unref(data).attributes.president_image.data.attributes.url)} class="w-28 h-32 shadow-lg">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jua-members/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-47df7fd3.mjs.map
