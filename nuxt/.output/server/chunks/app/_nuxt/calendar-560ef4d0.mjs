import { _ as __nuxt_component_0 } from './PageHeader-8e8cb4c2.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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
      continent: [
        "All continents",
        "Central Zone",
        "South East Zone",
        "East Zone",
        "West Zone",
        "South Zone"
      ],
      type: ["All types", "Competitions", "Others"],
      category: ["All categories", "JUA", "Seniors", "Juniors", "Cadets", "Others"],
      year: ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"],
      ranges: [
        "Whole year",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      classes: [
        {
          text: "Calendar",
          to: "/calendar"
        }
      ],
      range_index: 0
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_page_header = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_page_header, {
    classes: $data.classes,
    title: "Calendar"
  }, null, _parent));
  _push(`<section class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0" style="${ssrRenderStyle({ "background-image": "url('/flex-ui-assets/elements/pattern-white.svg')", "background-position": "center" })}"><div class="container mx-auto xl:pl-16 px-4"><div class="flex flex-col md:flex-row mb-4 gap-3"><div class="flex flex-col gap-2 grow"><div class="font-bold">Continent</div><div class="mb-4"><select class="w-full px-2 h-10 border rounded-md shadow-md after:bg-red-500"><!--[-->`);
  ssrRenderList($data.continent, (c, idx) => {
    _push(`<option${ssrRenderAttr("value", c)}>${ssrInterpolate(c)}</option>`);
  });
  _push(`<!--]--></select></div></div><div class="flex flex-col gap-2 grow"><div class="font-bold">Type</div><div class="text-center mb-4 grow"><select class="w-full px-2 h-10 border rounded-md shadow-md after:bg-red-500"><!--[-->`);
  ssrRenderList($data.type, (t, idx) => {
    _push(`<option${ssrRenderAttr("value", t)}>${ssrInterpolate(t)}</option>`);
  });
  _push(`<!--]--></select></div></div><div class="flex flex-col gap-2 grow"><div class="font-bold">Category</div><div class="text-center"><select class="w-full px-2 h-10 border rounded-md shadow-md after:bg-red-500"><!--[-->`);
  ssrRenderList($data.category, (cy, idx) => {
    _push(`<option${ssrRenderAttr("value", cy)}>${ssrInterpolate(cy)}</option>`);
  });
  _push(`<!--]--></select></div></div></div><div class="flex flex-col md:flex-row 2xl:gap-16 xl:gap-12 lg:gap-3 md:gap-2 mb-4"><div class="flex flex-col"><div class="font-bold">Year</div><div class="mb-4"><select class="w-full px-2 md:w-56 h-10 border rounded-md shadow-md after:bg-red-500"><!--[-->`);
  ssrRenderList($data.year, (y, idx) => {
    _push(`<option${ssrRenderAttr("value", y)}>${ssrInterpolate(y)}</option>`);
  });
  _push(`<!--]--></select></div></div><div class="flex flex-col grow"><div class="font-bold mb-1">Range</div><div class="md:flex hidden"><!--[-->`);
  ssrRenderList($data.ranges, (r, idx) => {
    _push(`<button class="${ssrRenderClass([idx == $data.range_index ? "bg-red-500 text-white " : "", "border py-1 text-center grow"])}">${ssrInterpolate(r)}</button>`);
  });
  _push(`<!--]--></div><div class="md:hidden flex"><select class="w-full px-2 md:w-56 h-10 border rounded-md shadow-md after:bg-red-500"><!--[-->`);
  ssrRenderList($data.ranges, (r, idx) => {
    _push(`<option${ssrRenderAttr("value", r)}>${ssrInterpolate(r)}</option>`);
  });
  _push(`<!--]--></select></div></div></div><div class="flex flex-col border border-red-500 rounded-md shadow-md"><div class="flex flex-col md:flex-row text-lg gap-2 md:gap-9 bg-gray-200 p-4 rounded-t-md"><div class="md:text-center"><div>Augest</div><div>22</div></div><div class=""><div class="font-bold"> Tashkent Asian Cadet Cup and Tashkent Asian Junior Cup </div><div class="">50 ahtletes -7 nations</div></div></div><div class="flex flex-col md:flex-row text-lg gap-2 md:gap-9 bg-white p-4 rounded-b-md"><div class="md:text-center"><div>Augest</div><div>22</div></div><div class=""><div class="font-bold"> Tashkent Asian Cadet Cup and Tashkent Asian Junior Cup </div><div class="">50 ahtletes -7 nations</div></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/calendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const calendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { calendar as default };
//# sourceMappingURL=calendar-560ef4d0.mjs.map
