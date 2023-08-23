import { _ as __nuxt_component_0 } from './PageHeader-8e8cb4c2.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
  data() {
    return { classes: [{ text: "Regulations", to: "/regulations" }] };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_page_header = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_page_header, {
    classes: $data.classes,
    title: "Regulations"
  }, null, _parent));
  _push(`<section class="bg-white 2xl:pl-24 lg:pl-16 pl-0" style="${ssrRenderStyle({ "background-image": "url('/flex-ui-assets/elements/pattern-white.svg')", "background-position": "center" })}"><div class="container mx-auto px-4 xl:pl-16"><p class="py-8 text-lg md:text-xl text-gray-500 font-medium"> Judo regulations govern the conduct and techniques used in the martial art of Judo, ensuring fair and safe competition. </p><div class="flex flex-wrap justify-center -mx-4"></div></div></section><section class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0"><div class="container mx-auto xl:pl-16 px-4 flex flex-col gap-6"><h3 class="font-bold text-xl">Which one would you like to see?</h3><div><a href="/jua-statues"><button class="block w-full py-4 px-6 text-lg leading-6 text-white font-medium text-center bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md shadow-sm"> JUA Statues </button></a></div><div><a href="/jua-procedure"><button class="block w-full py-4 px-6 text-lg leading-6 text-white font-medium text-center bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md shadow-sm"> JUA F&amp;A Procedure </button></a></div><div><a href="/jua-technical-code"><button class="block w-full py-4 px-6 text-lg leading-6 text-white font-medium text-center bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md shadow-sm"> JUA Technical Code </button></a></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/regulations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const regulations = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { regulations as default };
//# sourceMappingURL=regulations-17fed21f.mjs.map
