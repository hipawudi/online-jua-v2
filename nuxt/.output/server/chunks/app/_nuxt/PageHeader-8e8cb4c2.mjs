import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext } from 'vue';

const _sfc_main = {
  __name: "PageHeader",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    classes: {
      type: Array,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="bg-white py-4 2xl:pl-24 lg:pl-16 pl-0"><div class="container mx-auto xl:pl-16 px-4"><div class="flex flex-wrap items-center"><div class="w-full flex flex-col gap-3"><ul class="flex flex-wrap items-center gap-x-3 mb-2 text-red-500"><li><a class="flex font-medium text-sm text-coolGray-500 hover:text-coolGray-700" href="/"><svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3334 5.33334L9.3334 1.82667C8.96671 1.4987 8.49202 1.31738 8.00006 1.31738C7.50811 1.31738 7.03341 1.4987 6.66673 1.82667L2.66673 5.33334C2.45498 5.52272 2.286 5.75504 2.17104 6.01483C2.05609 6.27463 1.9978 6.55592 2.00006 6.84V12.6667C2.00006 13.1971 2.21078 13.7058 2.58585 14.0809C2.96092 14.456 3.46963 14.6667 4.00006 14.6667H12.0001C12.5305 14.6667 13.0392 14.456 13.4143 14.0809C13.7894 13.7058 14.0001 13.1971 14.0001 12.6667V6.83334C14.0014 6.55038 13.9426 6.27036 13.8277 6.01179C13.7128 5.75322 13.5443 5.52197 13.3334 5.33334ZM9.3334 13.3333H6.66673V10C6.66673 9.82319 6.73697 9.65362 6.86199 9.5286C6.98702 9.40357 7.15659 9.33334 7.3334 9.33334H8.66673C8.84354 9.33334 9.01311 9.40357 9.13813 9.5286C9.26316 9.65362 9.3334 9.82319 9.3334 10V13.3333ZM12.6667 12.6667C12.6667 12.8435 12.5965 13.0131 12.4715 13.1381C12.3464 13.2631 12.1769 13.3333 12.0001 13.3333H10.6667V10C10.6667 9.46957 10.456 8.96086 10.0809 8.58579C9.70587 8.21072 9.19716 8 8.66673 8H7.3334C6.80296 8 6.29426 8.21072 5.91918 8.58579C5.54411 8.96086 5.3334 9.46957 5.3334 10V13.3333H4.00006C3.82325 13.3333 3.65368 13.2631 3.52866 13.1381C3.40363 13.0131 3.3334 12.8435 3.3334 12.6667V6.83334C3.33352 6.73868 3.35379 6.64513 3.39287 6.55892C3.43196 6.47271 3.48895 6.39581 3.56006 6.33334L7.56006 2.83334C7.68172 2.72646 7.83812 2.66751 8.00006 2.66751C8.162 2.66751 8.3184 2.72646 8.44006 2.83334L12.4401 6.33334C12.5112 6.39581 12.5682 6.47271 12.6073 6.55892C12.6463 6.64513 12.6666 6.73868 12.6667 6.83334V12.6667Z" fill="#BBC3CF"></path></svg><p>Home</p></a></li><!--[-->`);
      ssrRenderList(__props.classes, (c, idx) => {
        _push(`<div class="flex gap-3 items-center"><li><svg width="6" height="15" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.34 0.671999L2.076 14.1H0.732L3.984 0.671999H5.34Z" fill="#BBC3CF"></path></svg></li><li><a class="flex font-medium text-sm text-coolGray-500 hover:text-coolGray-700"${ssrRenderAttr("href", c.to)}>${ssrInterpolate(c.text)}</a></li></div>`);
      });
      _push(`<!--]--></ul><h2 class="font-semibold uppercase text-red-500 text-3xl border-b-2 pb-4">${ssrInterpolate(__props.title)}</h2></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=PageHeader-8e8cb4c2.mjs.map
