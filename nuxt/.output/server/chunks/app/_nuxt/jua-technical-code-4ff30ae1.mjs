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
  _push(`<section class="bg-white 2xl:pl-24 lg:pl-16 pl-0" style="${ssrRenderStyle({ "background-image": "url('/flex-ui-assets/elements/pattern-white.svg')", "background-position": "center" })}"></section><section class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0"><div class="container mx-auto xl:pl-16 px-4 flex flex-col gap-6"><div class="flex flex-col gap-3"><p><strong>Basic Principles</strong></p><ol><li><p> This code is binding for Asian Judo Championships held under the responsibility of the JUA. It is not allowed to depart from the IJF SOR. </p></li><li><p> These championships shall be allocated by the Congress. In exceptional cases the JUA Directing Committee may make such an allocation on behalf of the JUA Congress. The host country to hold the Asian Judo Championships shall be decided at the Congress to take place 2 or 3 years prior to the Championships. </p></li><li><p> These championships will take place every year except the year Judo competitions are held in the Asian Games under the OCA.<br> Men\\&#39;s and Women\\&#39;s competition are separately held in accordance with Article 5, 8 and 9 of the IJF SOR. There is not age limit. Weight categories are as follows:\xA0 </p></li></ol><p><br><strong>[MEN]</strong></p><ul><li><p>Extra Light weight - up to and including 60kg</p></li><li><p>Half-Light weight - over 60kg up to and including 66g</p></li><li><p>Light weight - over 66g up to and including 73g</p></li><li><p>Half-Middle weight - over 73k up to and including 81kg</p></li><li><p>Middle weight - over 81kg up to and including 90kg</p></li><li><p>Half-Heavy weight - over 90kg up to and including 100kg</p></li><li><p>Heavy weight - over 100kg</p></li><li><p> Open category - no weight limit\xA0<br> \xA0 </p></li></ul><p><strong>[WOMEN]</strong></p><ul><li><p>Extra Light weight - up to and including 48kg</p></li><li><p>Half-Light weight - over 48kg up to and including 52kg</p></li><li><p>Light weight - over 52kg up to and including 57kg</p></li><li><p>Half-Middle weight - over 57kg up to and including 63kg</p></li><li><p>Middle weight - over 63kg up to and including 70kg</p></li><li><p>\xA0Half-Heavy weight - over 70kg up to and including 78kg</p></li><li><p>Heavy weight - over 78kg</p></li><li><p> Open category - no weight limit\xA0<br> \xA0<br> \xA0 </p></li></ul><p><strong>SYSTEM OF COMPETITION </strong><br><br> The competitions at these championships will be staged in accordance with the IJF Refereeing Rules and along the direct elimination stem with repechages. The competitors of each category will be separated into two groups by a draw. From each group one finalist will be established by the direct elimination system. The two winners established by double repechage system will be awarded the joint 3rd place. The judo events that make the object of seeding and its order are shown below. The competitors will be seeded only when they entered in the same category as they won a medal. </p><ol><li><p>Judo events that make the object of seeding</p></li></ol><ul><li><p> Olympic Games or World Judo Championships whose date is nearest to the current Asian Judo Championships. </p></li><li><p> Asian Games or Asian Judo Championships whose date is nearest to the current Asian Judo Championships. </p></li></ul><ol><li><p>Order of seeding</p></li></ol><ul><li><p>Winners of the Olympic Games or World Judo Championships</p></li><li><p>Winners in the Asian Games or Asian Judo Championships</p></li><li><p>Runner-up in the Olympic Games or World Judo Championships</p></li><li><p>Runner-up in the Asian Games or Asian Judo Championships</p></li><li><p>3rd place in the Olympic Games or World Judo Championships</p></li><li><p>3rd place in the Asian Games or Asian Judo Championships\xA0</p></li></ul></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jua-technical-code.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const juaTechnicalCode = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { juaTechnicalCode as default };
//# sourceMappingURL=jua-technical-code-4ff30ae1.mjs.map
