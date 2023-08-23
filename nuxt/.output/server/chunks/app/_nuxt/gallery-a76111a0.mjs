import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './PageHeader-8e8cb4c2.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + publicAssetsURL("images/photogallery/asian_games_2018_1.jpg");
const _imports_1 = "" + publicAssetsURL("images/photogallery/asian_games_2018_2.jpg");
const _imports_2 = "" + publicAssetsURL("images/photogallery/asian_games_2018_3.jpg");
const _imports_3 = "" + publicAssetsURL("images/photogallery/asian_games_2018_4.jpg");
const _imports_4 = "" + publicAssetsURL("images/photogallery/asian_games_2018_5.jpg");
const _imports_5 = "" + publicAssetsURL("images/photogallery/asian_games_2018_6.jpg");
const _imports_6 = "" + publicAssetsURL("images/photogallery/asian_games_2018_7.jpg");
const _sfc_main = {
  data() {
    return {
      classes: [
        {
          text: "Gallery",
          to: "/gallery"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_page_header = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_page_header, {
    classes: $data.classes,
    title: "GALLERY"
  }, null, _parent));
  _push(`<section class="bg-white lg:pl-16 2xl:pl-24 pl-0"><div class="container mx-auto xl:pl-16 px-4"><div class=""><p class="mb-12 text-lg md:text-xl text-gray-500 font-medium"> JUA all event photo gallery. </p></div><div class="flex flex-wrap"><div class="w-full lg:w-1/2 p-3"><img class="w-full h-72 rounded-lg object-cover"${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="w-full lg:w-1/2 p-3"><img class="w-full h-72 rounded-lg object-cover"${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="w-full lg:w-1/3 p-3"><img class="w-full h-72 rounded-lg object-cover"${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="w-full lg:w-1/3 p-3"><img class="w-full h-72 rounded-lg object-cover"${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="w-full lg:w-1/3 p-3"><img class="w-full h-72 rounded-lg object-cover object-top"${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="w-full lg:w-1/2 p-3"><img class="w-full h-72 rounded-lg object-cover"${ssrRenderAttr("src", _imports_5)} alt=""></div><div class="w-full lg:w-1/2 p-3"><img class="w-full h-72 rounded-lg object-cover"${ssrRenderAttr("src", _imports_6)} alt=""></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { gallery as default };
//# sourceMappingURL=gallery-a76111a0.mjs.map
