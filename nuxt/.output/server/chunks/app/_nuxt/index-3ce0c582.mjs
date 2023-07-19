import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { withAsyncContext, resolveDirective, withCtx, createTextVNode, createVNode, unref, mergeProps, useSSRContext, defineComponent } from 'vue';
import { a as useRoute, u as useHead } from '../server.mjs';
import { u as useStrapi, a as useDayjs } from './useStrapi-8a5d6780.mjs';
import { u as useStrapiMedia } from './useStrapiMedia-605edd67.mjs';
import { u as useList } from './useList-e4e3ff2c.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const Title = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    return {
      title: ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null
    };
  })
});
const Head = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const _imports_0 = "" + publicAssetsURL("partners/s2.jpg");
const _imports_1 = "" + publicAssetsURL("partners/s1.jpg");
const _imports_2 = "" + publicAssetsURL("partners/s3.jpg");
const _imports_3 = "" + publicAssetsURL("partners/s7.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRoute();
    const dayjs = useDayjs();
    useStrapi();
    const media = useStrapiMedia();
    const news = useList("news", {
      populate: "*",
      sort: ["publish_date:desc"],
      pagination: {
        start: 0,
        limit: 4
      }
    });
    const event_images = useList("event-images", {
      populate: "*"
    });
    const results = useList("results", {
      populate: "*"
    });
    const events = useList("events", {
      populate: "*"
    });
    [__temp, __restore] = withAsyncContext(() => news.load()), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => event_images.load()), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => results.load()), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => events.load()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _directive_motion_fade_visible = resolveDirective("motion-fade-visible");
      const _directive_motion_roll_visible_left = resolveDirective("motion-roll-visible-left");
      const _directive_motion_roll_visible_top = resolveDirective("motion-roll-visible-top");
      _push(`<!--[--><div class="container mx-auto p-4 md:pl-10 flex flex-col gap-12">`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Index`);
                } else {
                  return [
                    createTextVNode("Index")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Index")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section><div class="text-red-500 font-bold text-2xl mb-4">Latest News</div>`);
      if (unref(news).data) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row gap-12" }, ssrGetDirectiveProps(_ctx, _directive_motion_fade_visible)))}><div class="md:w-2/5"><div class="flex flex-col gap-3"><img class="h-80 object-cover rounded-[4rem] shadow-lg"${ssrRenderAttr("src", unref(media) + unref(news).data[0].attributes.banner.data.attributes.url)}><div class="text-4xl font-bold">${ssrInterpolate(unref(news).data[0].attributes.title)}</div><div class="text-lg line-clamp-4">${ssrInterpolate(unref(news).data[0].attributes.description)}</div><div class="text-sm text-gray-500">${ssrInterpolate(unref(dayjs)(unref(news).data[0].attributes.publish_date).format("YYYY-MM-DD HH:mm:ss"))}</div></div></div><div class="md:w-3/5"><div class="flex flex-col gap-6"><!--[-->`);
        ssrRenderList(unref(news).data, (data, idx) => {
          _push(`<div>`);
          if (idx != 0) {
            _push(`<div class="flex flex-col md:flex-row items-center"><img class="w-80 object-cover rounded-[4rem]"${ssrRenderAttr("src", unref(media) + data.attributes.banner.data.attributes.url)}><div class="flex flex-col"><div class="text-3xl font-bold">${ssrInterpolate(data.attributes.title)}</div><div class="text-lg line-clamp-2">${ssrInterpolate(data.attributes.description)}</div><div class="text-sm text-gray-500">${ssrInterpolate(unref(dayjs)(unref(news).data[0].attributes.publish_date).format(
              "YYYY-MM-DD HH:mm:ss"
            ))}</div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section><div class="flex flex-col md:flex-row">`);
      if (unref(results).data) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:w-1/3 gap-3" }, ssrGetDirectiveProps(_ctx, _directive_motion_roll_visible_left)))}><div class="text-red-500 font-bold text-2xl mb-4">JUA Results</div><!--[-->`);
        ssrRenderList(unref(results).data, (result, idx) => {
          _push(`<div><div class="flex items-center"><img class="h-16 object-cover"${ssrRenderAttr("src", unref(media) + result.attributes.banner.data.attributes.url)}><div class="flex flex-col"><div class="text-lg font-bold">${ssrInterpolate(result.attributes.title)}</div><div class="text-sm text-gray-500">${ssrInterpolate(unref(dayjs)(result.attributes.publish_date).format("YYYY-MM-DD"))}</div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:w-1/3 gap-3" }, ssrGetDirectiveProps(_ctx, _directive_motion_roll_visible_top)))}><div class="text-red-500 font-bold text-2xl mb-4">JUA Events</div><!--[-->`);
      ssrRenderList(unref(events).data, (event, idx) => {
        _push(`<div><div class="flex items-center"><img class="h-16 object-cover"${ssrRenderAttr("src", unref(media) + event.attributes.banner.data.attributes.url)}><div class="flex flex-col"><div class="text-lg font-bold">${ssrInterpolate(event.attributes.title)}</div><div class="text-sm font-bold">${ssrInterpolate(event.attributes.type)}</div><div class="text-sm text-gray-500">${ssrInterpolate(unref(dayjs)(event.attributes.publish_date).format("YYYY-MM-DD"))}</div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section${ssrRenderAttrs(mergeProps({ class: "mb-4" }, ssrGetDirectiveProps(_ctx, _directive_motion_fade_visible)))}><div class="text-red-500 font-bold text-2xl mb-4">JUA Gallery</div><div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-1"><!--[-->`);
      ssrRenderList(unref(event_images).data, (event_image, idx) => {
        _push(`<div><div class="w-full"><img class="${ssrRenderClass([
          (idx == 0 ? "md:rounded-tl-[4rem] " : "") + (idx == 2 ? "md:rounded-tr-[4rem] " : "") + (idx == 6 ? "md:rounded-bl-[4rem] " : "") + (idx == 8 ? "md:rounded-br-[4rem] " : ""),
          "w-full h-80 object-cover rounded-none"
        ])}"${ssrRenderAttr("src", unref(media) + event_image.attributes.content.data.attributes.url)}></div></div>`);
      });
      _push(`<!--]--></div></section></div><section${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion_fade_visible))}><div class="bg-red-500"><div class="flex flex-col sm:flex-row mx-auto container min-h-64 items-center p-4"><div class="text-white font-bold text-6xl md:text-7xl mb-4 text-center md:text-left"> Meet Our Partners </div><div class="sm:w-4/5 flex flex-wrap text-white"><div class="flex flex-col items-center w-1/3 mb-4"><img class="w-24 h-24"${ssrRenderAttr("src", _imports_0)}><div class="text-center">International Judo Federation</div></div><div class="flex flex-col items-center w-1/3"><img class="w-24 h-24"${ssrRenderAttr("src", _imports_1)}><div class="text-center">International Olympic Committee</div></div><div class="flex flex-col items-center w-1/3"><img class="w-24 h-24"${ssrRenderAttr("src", _imports_0)}><div class="text-center">IJF World Ranking</div></div><div class="flex flex-col items-center w-1/3"><img class="w-24 h-24"${ssrRenderAttr("src", _imports_2)}><div class="text-center">IJF Back Number</div></div><div class="flex flex-col items-center w-1/3"><img class="w-24 h-24"${ssrRenderAttr("src", _imports_3)}><div class="text-center">JUA Calendar</div></div></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-3ce0c582.mjs.map