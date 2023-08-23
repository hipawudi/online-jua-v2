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
        { text: "Regulations", to: "/regulations" },
        { text: "JUA F&A Procedure", to: "/jua-procedure" }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_page_header = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_page_header, {
    classes: $data.classes,
    title: "JUA F&A Procedure"
  }, null, _parent));
  _push(`<section class="bg-white 2xl:pl-24 lg:pl-16 pl-0" style="${ssrRenderStyle({ "background-image": "url('/flex-ui-assets/elements/pattern-white.svg')", "background-position": "center" })}"></section><section class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0"><div class="container mx-auto xl:pl-16 px-4 flex flex-col gap-6"><div class="flex flex-col gap-3"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><p><strong>Contents<br> -----------------------------------------------------------------------</strong></p><ul><li><strong>Basic Principles </strong></li><li><strong>Budget and Accounting </strong><blockquote><p> 2.1 General<br> 2.2 Budget<br> 2.3 Accounting<br> 2.4 Bank Transaction<br> 2.5 Office Transfer </p></blockquote></li><li><strong>Income</strong><blockquote><p> 3.1 Membership Fee<br> 3.2 Profit Dividend from IN<br> 3.3 TV Broadcasting Rights Income<br> 3.4 Advertising Income<br> 3.5 Sponsorship Income<br> 3.6 Endorsement Income<br> 3.7 UF Dan Certificate and Diploma<br> 3.8 Publication Income<br> 3.9 Emblem Income<br> 3.0 Other Income </p></blockquote></li><li><strong>Expenses </strong><blockquote><p> 4.1 General<br> 4.2 Office Expenses<br> 4.3 Traveling Expenses<br> 4.4 Accommodation Expenses<br> 4.5 Allowance<br> 4.6 Insurance<br> 4.7 Reserve Expense Account </p></blockquote></li><li><strong>Asian Judo Championships / Asian Junior Judo Championships </strong><blockquote><p> 5.1 General<br> 5.2 Income<br> 5.3 Expenses<br> 5.4 Profit Sharing<br> 5.5 TV Broadcasting and Advertising General Rule<br> 5.6 TV Broadcasting Rights<br> 5.7 Advertising Rights </p></blockquote></li><li><strong>Sponsorship, Endorsement and JUA Emblem </strong><blockquote><p> 6.1 Sponsorship<br> 6.2 Endorsement<br> 6.3 JUA Emblem </p></blockquote></li><li><strong>Others</strong></li></ul></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jua-procedure.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const juaProcedure = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { juaProcedure as default };
//# sourceMappingURL=jua-procedure-16858058.mjs.map
