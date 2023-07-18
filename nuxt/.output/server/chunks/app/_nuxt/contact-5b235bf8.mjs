import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="bg-red-500"><div class="mx-auto container h-24 flex items-center justify-center md:justify-normal md:pl-10"><div class="text-3xl text-white font-bold">Contact Us</div></div></div><div class="h-96 mt-6 container mx-auto md:pl-10"><div class="flex flex-col gap-10"><div class="text-2xl font-bold">JUDO UNION OF ASIA</div><div class="flex items-center gap-3"><div class="text-bold text-xl">Address:</div><div class="text-red-500">P.O. Box No. 795, Safat, 13008 Kuwait</div></div><div class="flex items-center gap-3"><div class="text-bold text-xl">Tel/Fax:</div><div class="text-red-500">965 - 2265349</div></div><div class="flex items-center gap-3"><div class="text-bold text-xl">Email:</div><div class="text-red-500">alanzi@jua-president.com</div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contact as default };
//# sourceMappingURL=contact-5b235bf8.mjs.map
