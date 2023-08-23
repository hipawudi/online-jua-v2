import { _ as __nuxt_component_0 } from './PageHeader-8e8cb4c2.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-563b35af.mjs';
import { ref, withAsyncContext, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { a as useRoute } from '../server.mjs';
import { u as useStrapi } from './useStrapi-a6820de4.mjs';
import { u as useStrapiMedia } from './useStrapiMedia-a794f02e.mjs';
import { u as useList } from './useList-0e5dd3a5.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRoute();
    useStrapi();
    const media = useStrapiMedia();
    const classes = [{ text: "JUA Members", to: "/jua-members" }];
    const zones = [
      "All Zone",
      "Central Zone",
      "South East Zone",
      "East Zone",
      "West Zone",
      "South Zone"
    ];
    const zone_index = ref(0);
    const jua_members = useList("jua-members", {
      populate: "*",
      sort: ["name:asc"]
    });
    [__temp, __restore] = withAsyncContext(() => jua_members.load()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_page_header = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_page_header, {
        classes,
        title: "JUA Members"
      }, null, _parent));
      _push(`<section class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0" style="${ssrRenderStyle({ "background-image": "url('/flex-ui-assets/elements/pattern-white.svg')", "background-position": "center" })}"><div class="container mx-auto xl:pl-16 px-4"><div class="block md:hidden text-center mb-8"><select class="px-2 w-64 h-10 border rounded-md shadow-md after:bg-red-500"><!--[-->`);
      ssrRenderList(zones, (z, idx) => {
        _push(`<option${ssrRenderAttr("value", idx)}>${ssrInterpolate(z)}</option>`);
      });
      _push(`<!--]--></select></div><div class="flex gap-3"><div class="flex flex-wrap md:w-3/4"><!--[-->`);
      ssrRenderList(unref(jua_members).data.filter(function(x) {
        if (unref(zone_index) != 0) {
          return x.attributes.zone == zones[unref(zone_index)];
        } else {
          return x;
        }
      }), (m, idx) => {
        _push(`<div class="w-full md:w-1/2 xl:w-1/3 mb-10 px-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/jua-members/" + m.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mx-auto md:ml-0 flex gap-3"${_scopeId}><div class="flex justify-between items-center shrink-0"${_scopeId}><img${ssrRenderAttr("src", unref(media) + m.attributes.member_image.data.attributes.url)} class="w-32 h-20 mb-6 shadow-lg"${_scopeId}></div><div class="flex flex-col"${_scopeId}><div${_scopeId}><h3 class="mb-1 text-sm text-coolGray-800 font-semibold"${_scopeId}>${ssrInterpolate(m.attributes.name)}</h3></div><div class="inline-block mb-4 text-sm font-medium text-red-500"${_scopeId}>${ssrInterpolate(m.attributes.title)}</div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "mx-auto md:ml-0 flex gap-3" }, [
                  createVNode("div", { class: "flex justify-between items-center shrink-0" }, [
                    createVNode("img", {
                      src: unref(media) + m.attributes.member_image.data.attributes.url,
                      class: "w-32 h-20 mb-6 shadow-lg"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "mb-1 text-sm text-coolGray-800 font-semibold" }, toDisplayString(m.attributes.name), 1)
                    ]),
                    createVNode("div", { class: "inline-block mb-4 text-sm font-medium text-red-500" }, toDisplayString(m.attributes.title), 1)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="hidden md:flex flex-col shrink-0 bg-gray-200 shadow-lg p-2 h-[340px] text-sm rounded-md"><div class="font-bold text-xl px-2 py-2 mx-1">JUA Members</div><!--[-->`);
      ssrRenderList(zones, (z, idx) => {
        _push(`<button class="${ssrRenderClass([idx == unref(zone_index) ? "text-red-500 border-red-500" : "border-white", "p-2 mx-4 border-b border-red-500 text-left text-lg"])}">${ssrInterpolate(z)}</button>`);
      });
      _push(`<!--]--></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jua-members/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-6c8920d0.mjs.map
