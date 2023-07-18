import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-7a607302.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode } from 'vue';
import { u as useStrapiMedia } from './useStrapiMedia-605edd67.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import '@vue/shared';
import 'cookie-es';
import 'qs';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';

const _imports_0 = "" + publicAssetsURL("logo/logo.png");
const _sfc_main$2 = {
  setup() {
    useStrapiMedia();
  },
  data() {
    return {
      openedMenu: false,
      menu: [
        { title: "HOME", link: "/" },
        { title: "ORGANISATION", link: "/" },
        { title: "NEWS", link: "/news" },
        { title: "PHOTO GALLERY", link: "/" },
        { title: "EVENTS", link: "/" },
        { title: "REGULATION", link: "/" },
        { title: "RESULT", link: "/" },
        { title: "CONTACT US", link: "/contact" }
      ]
    };
  },
  methods: {
    openMeun() {
      this.openedMenu = !this.openedMenu;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-white border-gray-200 dark:bg-gray-900" }, _attrs))}><div class="container mx-auto p-4"><div class="flex gap-3">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)}${_scopeId}>`);
      } else {
        return [
          createVNode("img", { src: _imports_0 })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button></div><div class="hidden sm:block"><div class="flex mt-2 gap-3 text-gray-800 font-bold text-lg pl-6"><!--[-->`);
  ssrRenderList($data.menu, (m, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: m.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="hover:text-red-600"${_scopeId}>${ssrInterpolate(m.title)}</div>`);
        } else {
          return [
            createVNode("div", { class: "hover:text-red-600" }, toDisplayString(m.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="${ssrRenderClass([$data.openedMenu ? "block" : "hidden", "w-full md:w-auto md:hidden"])}"><ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"><!--[-->`);
  ssrRenderList($data.menu, (m, index) => {
    _push(`<li>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: m.link,
      class: "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-red-500"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(m.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(m.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div></div></nav>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  setup() {
    useStrapiMedia();
  },
  data() {
    return {
      menu: [
        {
          title: "ORGANISATION",
          subMenu: [
            { title: "History of JUA" },
            { title: "Origin of JUDO" },
            { title: "JUA EC" },
            { title: "JUA Members" },
            { title: "JUA Bank A/C Details" },
            { title: "JUA Minutes" }
          ]
        },
        {
          title: "NEWS",
          subMenu: [
            { title: "What's News" },
            { title: "IJF News" },
            { title: "Photo Gallery" }
          ]
        },
        {
          title: "EVENTS",
          subMenu: [
            { title: "IJF Ranking Tournaments" },
            { title: "World Judo Championships" },
            { title: "JUA Meetings" },
            { title: "Zonal Championships" },
            { title: "AYJC & AJJC" },
            { title: "Olympic" },
            { title: "Member Events" },
            { title: "Asioan Judo Championships" }
          ]
        },
        {
          title: "REGULATION",
          subMenu: [
            { title: "JUA Statues" },
            { title: "JUA F&A Procedure" },
            { title: "JUA Technical Code" }
          ]
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><section><div class="container mx-auto"><div class="flex flex-col md:flex-row justify-between my-4 gap-6"><div class="flex items-center"><img${ssrRenderAttr("src", _imports_0)}></div><!--[-->`);
  ssrRenderList($data.menu, (m) => {
    _push(`<div class="flex flex-col mt-2 gap-3 mx-4"><div class="text-gray-900 font-bold text-lg">${ssrInterpolate(m.title)}</div><!--[-->`);
    ssrRenderList(m.subMenu, (subm) => {
      _push(`<div class="font-bold text-sm hover:text-red-500">${ssrInterpolate(subm.title)}</div>`);
    });
    _push(`<!--]--></div>`);
  });
  _push(`<!--]--></div></div></section><section><div class="bg-blue-700 min-h-16 flex items-center"><div class="container text-white mx-auto flex flex-col sm:flex-row justify-between p-4 gap-3"><div class="flex gap-6"><div>Terms of Use</div><div class="">Privacy Policy</div></div><div class="">Copyrights \xA9 2023 Hubis. All Rights Reserved.</div><div class="flex gap-6"><div class="flex gap-1 items-center"><svg fill="#000000" width="22" height="20" viewBox="0 0 24 24" id="facebook" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path id="primary" d="M14,6h3a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H14A5,5,0,0,0,9,7v3H7a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H9v7a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V14h2.22a1,1,0,0,0,1-.76l.5-2a1,1,0,0,0-1-1.24H13V7A1,1,0,0,1,14,6Z" style="${ssrRenderStyle({ "fill": "rgb(255, 255, 255)" })}"></path></svg> Facebook </div><div class="flex gap-1 items-center"><svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="svg-inline1"><path d="M16.0809 1.78777C15.5109 2.03477 14.9219 2.20577 14.2949 2.28177C14.9409 1.90177 15.4349 1.29377 15.6629 0.552768C15.0549 0.913768 14.3899 1.16077 13.6869 1.31277C13.1169 0.704768 12.2999 0.324768 11.4069 0.324768C9.67786 0.324768 8.29086 1.73077 8.29086 3.44077C8.29086 3.68777 8.30986 3.91577 8.36686 4.14377C5.78286 4.02977 3.50286 2.77577 1.96386 0.894768C0.861859 2.87077 2.09686 4.50477 2.91386 5.05577C2.41986 5.05577 1.92586 4.90377 1.50786 4.67577C1.50786 6.21477 2.59086 7.48777 3.99686 7.77277C3.69286 7.86777 3.00886 7.92477 2.59086 7.82977C2.98986 9.06477 4.14886 9.97677 5.49786 9.99577C4.43386 10.8318 2.87586 11.4968 0.880859 11.2878C2.26786 12.1808 3.90186 12.6938 5.66886 12.6938C11.4069 12.6938 14.5229 7.94377 14.5229 3.83977C14.5229 3.70677 14.5229 3.57377 14.5039 3.44077C15.1499 2.96577 15.6819 2.41477 16.0809 1.78777Z" fill="currentColor"></path></svg>Twitter </div><div class="flex gap-1 items-center"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="svg-inline3"><path d="M13.1004 13.0993V8.30161C13.1004 5.94368 12.5928 4.14249 9.84186 4.14249C8.51552 4.14249 7.6313 4.86297 7.27106 5.55069H7.23831V4.35536H4.63477V13.0993H7.35294V8.7601C7.35294 7.61388 7.5658 6.51679 8.97401 6.51679C10.3658 6.51679 10.3822 7.81038 10.3822 8.8256V13.083H13.1004V13.0993Z" fill="currentColor"></path><path d="M0.212891 4.35538H2.93106V13.0994H0.212891V4.35538Z" fill="currentColor"></path><path d="M1.57195 -9.15527e-05C0.704104 -9.15527e-05 0 0.704012 0 1.57186C0 2.43971 0.704104 3.16019 1.57195 3.16019C2.4398 3.16019 3.14391 2.43971 3.14391 1.57186C3.14391 0.704012 2.4398 -9.15527e-05 1.57195 -9.15527e-05Z" fill="currentColor"></path></svg>Linkedin </div></div></div></div></section></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0;
  const _component_AppFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-660b56a7.mjs.map
