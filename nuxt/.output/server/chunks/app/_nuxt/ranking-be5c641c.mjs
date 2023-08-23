import { _ as __nuxt_component_0 } from './PageHeader-8e8cb4c2.mjs';
import { mergeProps, useSSRContext } from 'vue';
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
    return {
      classes: [
        {
          text: "Ranking",
          to: "/ranking"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_page_header = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_page_header, {
    classes: $data.classes,
    title: "RANKING"
  }, null, _parent));
  _push(`<section class="bg-white 2xl:pl-24 lg:pl-16 pl-0" style="${ssrRenderStyle({ "background-image": "url('/flex-ui-assets/elements/pattern-white.svg')", "background-position": "center" })}"><div class="container mx-auto px-4 xl:pl-16"><h3 class="mb-4 text-3xl md:text-5xl text-gray-900 font-bold tracking-tighter"> TEAM RANKING 2023 </h3><p class="mb-12 text-lg md:text-xl text-gray-500 font-medium"> Headlining the calendar is the Dubai World Cup. </p><div class="flex flex-wrap justify-center -mx-4"></div></div></section><section class="bg-gray-50 py-4 2xl:pl-24 lg:pl-16 pl-0s"><div class="container mx-auto xl:pl-16 px-4"><div class="pt-6 bg-white overflow-hidden border border-gray-100 rounded-md shadow-dashboard"><div class="px-6 overflow-x-auto"><table class="w-full"><tbody><tr class="whitespace-nowrap h-11 bg-gray-50 bg-opacity-80"><th class="px-4 font-semibold text-xs text-gray-500 uppercase text-left rounded-l-md"><p>RANK</p></th><th class="whitespace-nowrap px-4 font-semibold text-xs text-gray-500 uppercase text-center"> TEAMS </th><th class="whitespace-nowrap px-4 font-semibold text-xs text-gray-500 uppercase text-center"> gold </th><th class="whitespace-nowrap px-4 font-semibold text-xs text-gray-500 uppercase text-center"> silver </th><th class="whitespace-nowrap px-4 font-semibold text-xs text-gray-500 uppercase text-center"> bronze </th><th class="whitespace-nowrap px-4 font-semibold text-xs text-gray-500 uppercase text-center rounded-r-md"> points </th></tr><tr class="h-20 border-b border-gray-100"><th class="whitespace-nowrap px-4 bg-white text-left">01</th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> Republic of Korea </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> 6 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> 7 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"> 12 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"> 44 </th></tr><tr class="h-20 border-b border-gray-100"><th class="whitespace-nowrap px-4 bg-white text-left">02</th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> Chinese Taipei </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> 3 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> 5 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"> 7 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"> 26 </th></tr><tr class="h-20 border-b border-gray-100"><th class="whitespace-nowrap px-4 bg-white text-left">03</th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> Japan </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> 3 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> 1 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"> 2 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"> 13 </th></tr><tr class="h-20 border-b border-gray-100"><th class="whitespace-nowrap px-4 bg-white text-left">04</th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> Australia </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> 1 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> 0 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"> 1 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"> 4 </th></tr><tr class="h-20 border-b border-gray-100"><th class="whitespace-nowrap px-4 bg-white text-left">05</th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> India </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> 1 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> 0 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"> 0 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"> 3 </th></tr><tr class="h-20 border-b border-gray-100"><th class="whitespace-nowrap px-4 bg-white text-left">06</th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> Kazakhstan </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> 0 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-gray-800 text-center"> 1 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"> 0 </th><th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-center"> 2 </th></tr></tbody></table></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ranking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ranking = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ranking as default };
//# sourceMappingURL=ranking-be5c641c.mjs.map
