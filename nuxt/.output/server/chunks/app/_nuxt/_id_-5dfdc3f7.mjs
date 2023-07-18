import { _ as __nuxt_component_0 } from './nuxt-link-7a607302.mjs';
import { u as useStrapi, a as useDayjs } from './useStrapi-8a5d6780.mjs';
import { u as useStrapiMedia } from './useStrapiMedia-605edd67.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { a as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { marked } from 'marked';
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
    const dayjs = useDayjs();
    const media = useStrapiMedia();
    const { findOne } = useStrapi();
    const route = useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(() => findOne("posts", route.params.id, {
      populate: "*"
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "container mx-auto p-4" }, _attrs))}><div class="h-72 rounded-lg overflow-clip mb-12"><img class="w-full h-full object-cover"${ssrRenderAttr("src", unref(media) + unref(data).attributes.cover.data.attributes.url)}></div><header><h1 class="text-4xl mb-6 lg:text-5xl font-bold">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/posts/${unref(data).id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(data).attributes.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(data).attributes.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h1><span class="text-md text-gray-500">${ssrInterpolate(unref(dayjs)(unref(data).attributes.date).format("YYYY-MM-DD"))}</span></header><div class="prose py-20">${unref(marked).parse(unref(data).attributes.content)}</div></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-5dfdc3f7.mjs.map
