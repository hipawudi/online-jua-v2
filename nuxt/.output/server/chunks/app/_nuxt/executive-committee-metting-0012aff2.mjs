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
    return {
      classes: [
        { text: "About", to: "/about" },
        { text: "JUA Executive committee metting", to: "/executive-committee-metting" }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_page_header = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_page_header, {
    classes: $data.classes,
    title: "JUA Executive Committee Meeting"
  }, null, _parent));
  _push(`<section class="bg-white 2xl:pl-24 lg:pl-16 pl-0" style="${ssrRenderStyle({ "background-image": "url('/flex-ui-assets/elements/pattern-white.svg')", "background-position": "center" })}"><div class="container mx-auto px-4 xl:pl-16"><p class="py-8 text-lg md:text-xl text-gray-500 font-medium"> The executive committee acts as a liaison between the board and management, making decisions and providing recommendations for organizational issues. </p><div class="flex flex-wrap justify-center -mx-4"></div></div></section><section class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0"><div class="container mx-auto xl:pl-16 px-4 flex flex-col gap-6"><div class="border-t-2 border-t-red-500 p-4 border shadow-md"><div class="flex flex-col gap-3"><div class="text-xl font-bold text-red-500"> JUA Executive Committee Meeting TASHKENT </div><div class="text-md">Venue : Hotel Markaz, Tashkent</div><div class="text-md">Date : Wednesday, 13, 2016</div><div class="flex items-center gap-3"><div class="shrink-0">PDF :</div><a href="/pdf/2016-MINUTES-JUA-EC-2016-TASHKENT.pdf" target="_blank"><div class="border-2 border-[#2e99b0] p-2 hover:border-red-500"> Minutes of JUA Executive Committee Meeting, 13th April 2016 TASHKENT </div></a></div></div></div><div class="border-t-2 border-t-red-500 p-4 border shadow-md"><div class="flex flex-col gap-3"><div class="text-xl font-bold text-red-500"> JUA Executive Committee Meeting KUWAIT </div><div class="text-md">Venue : Hotel Jumeirah, Kuwait</div><div class="text-md">Date : Sunday, 10, 2015</div><div class="flex items-center gap-3"><div class="shrink-0">PDF :</div><a href="/pdf/MINUTES-ECM-10-5-2015.pdf" target="_blank"><div class="border-2 border-[#2e99b0] p-2 hover:border-red-500"> Minutes of JUA Executive Committee Meeting, 10th MAY 2015 KUWAIT </div></a></div></div></div><div class="border-t-2 border-t-red-500 p-4 border shadow-md"><div class="flex flex-col gap-3"><div class="text-xl font-bold text-red-500"> Minutes of JUA Executive Committee Meeting, KUWAIT - 2014 </div><div class="text-md">Venue : Crowne Plaza Kuwait Hotel</div><div class="text-md">Date : Thursday, 30, 2014</div><div class="flex items-center gap-3"><div class="shrink-0">PDF :</div><a href="/pdf/MINUTES-JUA-ECM-30-1-2014-KUWAIT-3-3-14.pdf" target="_blank"><div class="border-2 border-[#2e99b0] p-2 hover:border-red-500"> Minutes of JUA Executive Committee Meeting, KUWAIT - 2014 </div></a></div></div></div><div class="border-t-2 border-t-red-500 p-4 border shadow-md"><div class="flex flex-col gap-3"><div class="text-xl font-bold text-red-500"> Minutes of JUA Executive Committee Meeting, KUWAIT-2012 </div><div class="text-md">Venue : Crowne Plaza Kuwait Hotel</div><div class="text-md">Date : Thursday, 16, 2012</div><div class="flex items-center gap-3"><div class="shrink-0">PDF :</div><a href="/pdf/MINUTES-JUA-ECM-16-2-12-KUWAIT.pdf" target="_blank"><div class="border-2 border-[#2e99b0] p-2 hover:border-red-500"> Minutes of JUA Executive Committee Meeting, KUWAIT - 2012 </div></a></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/executive-committee-metting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const executiveCommitteeMetting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { executiveCommitteeMetting as default };
//# sourceMappingURL=executive-committee-metting-0012aff2.mjs.map
