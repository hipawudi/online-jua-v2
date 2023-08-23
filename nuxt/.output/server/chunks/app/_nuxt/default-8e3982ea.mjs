import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, withCtx, createVNode, defineComponent } from 'vue';
import { _ as _export_sfc, a as useRoute } from '../server.mjs';
import { u as useStrapiMedia } from './useStrapiMedia-a794f02e.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
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

const Head = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const _imports_0$1 = "" + publicAssetsURL("logo/logo.png");
const _sfc_main$2 = {
  setup() {
    useStrapiMedia();
    const route = useRoute();
    return { route };
  },
  data() {
    return {
      openedMenu: false,
      menu: [
        { title: "HOME", link: "/" },
        { title: "NEWS", link: "/jua-news" },
        { title: "Organization", link: "/organization" },
        { title: "JUA MEMBERS", link: "/jua-members" },
        { title: "PHOTO GALLERY", link: "/gallery" },
        { title: "EVENT", link: "/event" },
        { title: "REGULATION", link: "/regulation" },
        { title: "RANKING", link: "/ranking" },
        { title: "ABOUT", link: "/about" },
        { title: "CONTACT US", link: "/contact" }
      ]
    };
  },
  methods: {
    openMeun() {
      this.openedMenu = !this.openedMenu;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = Head;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>JUDO UNION OF ASIA</title>`);
      } else {
        return [
          createVNode("title", null, "JUDO UNION OF ASIA")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<section class="overflow-hidden min-h-full"><div class="h-2 bg-red-500"></div><div class="relative z-50 flex flex-col gap-3 items-center justify-between xl:hidden mb-1 shadow shadow-gray-500 py-5 px-2"><div class="flex items-center"><div class="w-auto px-3"><a class="block max-w-max" href="#"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></a></div><div class="w-auto px-3"><button class="navbar-burger self-center ml-auto block xl:hidden"><svg width="35" height="35" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="text-gray-100" width="32" height="32" rx="6" fill="currentColor"></rect><path class="text-gray-400" d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z" fill="currentColor"></path></svg></button></div></div><div class="flex justify-center w-1/2 md:w-1/3"><div class="relative"><svg class="absolute top-1/2 left-4 transform -translate-y-1/2" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0467 11.22L12.6667 9.80667C12.3698 9.5245 11.9954 9.33754 11.5915 9.26983C11.1876 9.20211 10.7726 9.25673 10.4 9.42667L9.80001 8.82667C10.5071 7.88194 10.8299 6.70445 10.7037 5.53122C10.5775 4.358 10.0115 3.27615 9.11963 2.50347C8.2278 1.73078 7.07637 1.32464 5.89712 1.36679C4.71788 1.40894 3.59838 1.89626 2.76399 2.73065C1.92961 3.56503 1.44229 4.68453 1.40014 5.86378C1.35799 7.04302 1.76413 8.19446 2.53681 9.08629C3.3095 9.97812 4.39134 10.5441 5.56457 10.6704C6.7378 10.7966 7.91529 10.4737 8.86001 9.76667L9.45335 10.36C9.26341 10.7331 9.19534 11.1564 9.25873 11.5702C9.32212 11.984 9.51377 12.3675 9.80668 12.6667L11.22 14.08C11.595 14.4545 12.1033 14.6649 12.6333 14.6649C13.1633 14.6649 13.6717 14.4545 14.0467 14.08C14.2372 13.8937 14.3885 13.6713 14.4919 13.4257C14.5952 13.1802 14.6484 12.9164 14.6484 12.65C14.6484 12.3836 14.5952 12.1198 14.4919 11.8743C14.3885 11.6287 14.2372 11.4063 14.0467 11.22V11.22ZM8.39335 8.39333C7.92684 8.85866 7.33288 9.1753 6.68651 9.30323C6.04013 9.43117 5.37034 9.36466 4.76175 9.11212C4.15315 8.85958 3.63305 8.43234 3.26716 7.88436C2.90126 7.33638 2.70597 6.69224 2.70597 6.03333C2.70597 5.37442 2.90126 4.73029 3.26716 4.18231C3.63305 3.63433 4.15315 3.20708 4.76175 2.95454C5.37034 2.702 6.04013 2.6355 6.68651 2.76343C7.33288 2.89137 7.92684 3.208 8.39335 3.67333C8.70377 3.98297 8.95005 4.35081 9.1181 4.75577C9.28614 5.16074 9.37264 5.59488 9.37264 6.03333C9.37264 6.47178 9.28614 6.90592 9.1181 7.31089C8.95005 7.71586 8.70377 8.08369 8.39335 8.39333V8.39333ZM13.1067 13.1067C13.0447 13.1692 12.971 13.2187 12.8897 13.2526C12.8085 13.2864 12.7214 13.3039 12.6333 13.3039C12.5453 13.3039 12.4582 13.2864 12.377 13.2526C12.2957 13.2187 12.222 13.1692 12.16 13.1067L10.7467 11.6933C10.6842 11.6314 10.6346 11.5576 10.6008 11.4764C10.5669 11.3951 10.5495 11.308 10.5495 11.22C10.5495 11.132 10.5669 11.0449 10.6008 10.9636C10.6346 10.8824 10.6842 10.8086 10.7467 10.7467C10.8087 10.6842 10.8824 10.6346 10.9636 10.6007C11.0449 10.5669 11.132 10.5495 11.22 10.5495C11.308 10.5495 11.3952 10.5669 11.4764 10.6007C11.5576 10.6346 11.6314 10.6842 11.6933 10.7467L13.1067 12.16C13.1692 12.222 13.2188 12.2957 13.2526 12.3769C13.2865 12.4582 13.3039 12.5453 13.3039 12.6333C13.3039 12.7213 13.2865 12.8085 13.2526 12.8897C13.2188 12.971 13.1692 13.0447 13.1067 13.1067V13.1067Z" fill="#BBC3CF"></path></svg><input class="w-full md:w-52 h-9 py-1 pl-9 pr-4 text-sm text-gray-500 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 border border-gray-200 rounded-lg" type="text" placeholder="Search"></div></div></div><div class="${ssrRenderClass([$data.openedMenu ? "flex" : "hidden xl:flex", "navbar-menu z-50 fixed top-0 flex-col justify-between border-r border-gray-100 w-28 h-full"])}"><div class="${ssrRenderClass([$data.openedMenu ? "fixed xl:hidden " : "hidden", "navbar-backdrop fixed xl:hidden inset-0 bg-gray-900 opacity-60"])}"></div><div class="relative bg-red-500 h-full overflow-y-auto overflow-x-hidden"><div class="flex flex-col gap-px"><a href="/"><div class="${ssrRenderClass([$setup.route.matched[0].path.slice(1) == "" ? "bg-[#2e99b0]" : "", "h-20 flex flex-col justify-center items-center p-3"])}"><svg t="1691047579544" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1520" width="95" height="80"><path d="M243.32384 972.8c-64 0-118.4-54.4-118.4-118.4v-243.2H83.32384c-35.2 0-67.2-22.4-76.8-54.4-12.8-32-6.4-67.2 16-92.8L425.72384 64C448.12384 41.6 480.12384 32 512.12384 32c32 0 60.8 12.8 83.2 32l403.2 403.2c28.8 25.6 35.2 60.8 16 96-12.8 32-44.8 51.2-80 51.2h-41.6v243.2c0 64-54.4 118.4-118.4 118.4H243.32384z m534.4-80c22.4 0 38.4-16 38.4-38.4v-272c0-25.6 22.4-48 48-48h73.6c3.2 0 3.2 0 6.4-6.4 0 0 0-6.4-3.2-9.6L537.72384 115.2c-6.4-6.4-16-9.6-28.8-9.6s-19.2 3.2-28.8 9.6L76.92384 521.6v3.2c-3.2 3.2-3.2 3.2 0 6.4 3.2 6.4 3.2 6.4 6.4 6.4h73.6c25.6 0 48 22.4 48 48v272c0 22.4 16 38.4 38.4 38.4h153.6v-204.8c0-41.6 35.2-73.6 80-73.6h70.4c44.8 0 80 35.2 80 73.6V896h150.4z m-230.4 0v-198.4h-70.4v198.4h70.4z" p-id="1521" fill="#ffffff"></path></svg><div class="text-white text-xs">HOME</div></div></a><a href="/jua-news"><div class="${ssrRenderClass([
    $setup.route.matched[0].path.slice(1) == "jua-news" ? "bg-[#2e99b0]" : "",
    "h-20 flex flex-col justify-center items-center p-3"
  ])}"><svg t="1692070142709" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1507" width="200" height="200"><path d="M928 0l-704 0c-53.024 0-96 42.944-96 96l0 64-32 0c-53.024 0-96 42.944-96 96l0 640c0 70.688 57.312 128 128 128l768 0c70.688 0 128-57.312 128-128l0-800c0-53.056-43.008-96-96-96zM960 896c0 35.264-28.736 64-64 64l-768 0c-35.296 0-64-28.736-64-64l0-640c0-17.664 14.336-32 32-32l32 0 0 640c0 17.696 14.304 32 32 32s32-14.304 32-32l0-768c0-17.664 14.336-32 32-32l704 0c17.632 0 32 14.336 32 32l0 800zM623.936 416.16c-8.8 0-16-7.168-16-16s7.2-16 16-16l256 0c8.864 0 16 7.168 16 16s-7.136 16-16 16l-256 0zM623.936 320.16c-8.8 0-16-7.168-16-16s7.2-16 16-16l256 0c8.864 0 16 7.168 16 16s-7.136 16-16 16l-256 0zM623.936 224.16c-8.8 0-16-7.168-16-16s7.2-16 16-16l256 0c8.864 0 16 7.168 16 16s-7.136 16-16 16l-256 0zM528 864.128c8.832 0 16 7.2 16 16 0 8.864-7.2 16-16 16l-256 0c-8.832 0-16-7.136-16-16 0-8.8 7.168-16 16-16l256 0zM528 768.128c8.832 0 16 7.2 16 16 0 8.864-7.2 16-16 16l-256 0c-8.832 0-16-7.136-16-16 0-8.8 7.168-16 16-16l256 0zM528 672.128c8.832 0 16 7.2 16 16 0 8.864-7.2 16-16 16l-256 0c-8.832 0-16-7.136-16-16 0-8.8 7.168-16 16-16l256 0zM880 864.128c8.8 0 16 7.2 16 16 0 8.864-7.2 16-16 16l-256 0c-8.864 0-16-7.136-16-16 0-8.8 7.136-16 16-16l256 0zM880 768.128c8.8 0 16 7.2 16 16 0 8.864-7.2 16-16 16l-256 0c-8.864 0-16-7.136-16-16 0-8.8 7.136-16 16-16l256 0zM880 672.128c8.8 0 16 7.2 16 16 0 8.864-7.2 16-16 16l-256 0c-8.864 0-16-7.136-16-16 0-8.8 7.136-16 16-16l256 0zM880 480.128c8.8 0 16 7.168 16 16s-7.2 16-16 16l-608 0c-8.832 0-16-7.168-16-16s7.168-16 16-16l608 0zM880 576.128c8.8 0 16 7.2 16 16 0 8.864-7.2 16-16 16l-608 0c-8.832 0-16-7.136-16-16 0-8.8 7.168-16 16-16l608 0zM288 416l224 0c17.696 0 32-14.304 32-32l0-223.872c0-17.696-14.304-32-32-32l-224 0c-17.696 0-32 14.304-32 32l0 223.872c0 17.664 14.304 32 32 32zM320 192l160 0 0 160-160 0 0-160z" fill="#ffffff" p-id="1508"></path></svg><div class="text-white text-xs">NEWS</div></div></a><a href="/organization"><div class="${ssrRenderClass([
    $setup.route.matched[0].path.slice(1) == "organization" ? "bg-[#2e99b0]" : "",
    "h-20 flex flex-col justify-center items-center p-3"
  ])}"><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.5 21C21.8807 21 23 19.8807 23 18.5C23 16.1726 21.0482 15.1988 19 14.7917M15 11C17.2091 11 19 9.20914 19 7C19 4.79086 17.2091 3 15 3M3.5 21.0001H14.5C15.8807 21.0001 17 19.8808 17 18.5001C17 14.4194 11 14.5001 9 14.5001C7 14.5001 1 14.4194 1 18.5001C1 19.8808 2.11929 21.0001 3.5 21.0001ZM13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg><div class="text-white text-xs">ORGANIZATION</div></div></a><a href="/jua-members"><div class="${ssrRenderClass([
    $setup.route.matched[0].path.slice(1) == "jua-members" ? "bg-[#2e99b0]" : "",
    "h-20 flex flex-col justify-center items-center p-3"
  ])}"><svg t="1691049883790" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3548" width="200" height="200"><path d="M773.08 558.14a116 116 0 1 0-116-116 116 116 0 0 0 116 116z m0-175.9a60 60 0 1 1-60 60 60 60 0 0 1 60-60zM251.72 562.14a116 116 0 1 0-116-116 116 116 0 0 0 116 116z m0-175.9a60 60 0 1 1-60 60 60 60 0 0 1 60-60z" p-id="3549" fill="#ffffff"></path><path d="M772.68 571.78a202.92 202.92 0 0 0-72.86 13.36 267.44 267.44 0 0 0-374.88 0.32 204.84 204.84 0 0 0-278.44 191.12 28 28 0 0 0 28 28h875a28 28 0 0 0 28-28 205.04 205.04 0 0 0-204.82-204.8z m-260.14-7.16a212 212 0 0 1 184 106.76c0.28 0.48 0.56 0.96 0.82 1.44 1.1 2 2.18 4 3.22 6l2 3.82c0.62 1.24 1.22 2.48 1.82 3.74 0.96 2 2 4.14 2.82 6.24 0.22 0.5 0.44 1 0.64 1.5a211.18 211.18 0 0 1 14.88 54.54H302.44a212 212 0 0 1 11.56-46.38c1-2.68 2-5.3 3.16-8 0.18-0.42 0.34-0.84 0.52-1.24 0.94-2.2 2-4.36 2.96-6.54 0.58-1.24 1.18-2.46 1.78-3.7s1.3-2.58 2-3.88c1.08-2 2.2-4.14 3.34-6.18l0.7-1.22a212 212 0 0 1 184.08-106.9z m-261.22 63.16a149.34 149.34 0 0 1 35.58 4.22 266.8 266.8 0 0 0-20.74 39.26l-0.56 1.26c-0.44 1.04-0.86 2.1-1.28 3.16s-1.08 2.64-1.6 4l-0.84 2.22c-0.66 1.74-1.3 3.48-2 5.24l-0.48 1.32a266.92 266.92 0 0 0-13.4 60.12H105.14a149.06 149.06 0 0 1 146.18-120.8z m527.72 120.8c-0.26-2.6-0.58-5.2-0.92-7.78a243.6 243.6 0 0 0-1.14-7.66v-0.14a265.54 265.54 0 0 0-9.06-37.7c0-0.14-0.1-0.28-0.14-0.44-0.68-2.12-1.4-4.22-2.12-6.32-0.2-0.56-0.4-1.1-0.58-1.66-0.6-1.64-1.2-3.28-1.82-4.9-0.3-0.84-0.62-1.66-0.94-2.48-0.46-1.22-0.96-2.42-1.46-3.62s-0.92-2.32-1.4-3.46A269 269 0 0 0 738 631.8a149.14 149.14 0 0 1 180.82 116.78z" p-id="3550" fill="#ffffff"></path><path d="M512.54 495.04a140.8 140.8 0 1 0-140.78-140.8 140.96 140.96 0 0 0 140.78 140.8z m0-225.58a84.8 84.8 0 1 1-84.78 84.78 84.88 84.88 0 0 1 84.78-84.78z" p-id="3551" fill="#ffffff"></path></svg><div class="text-white text-xs">JUA MEMBERS</div></div></a><a href="/calendar"><div class="${ssrRenderClass([
    $setup.route.matched[0].path.slice(1) == "calendar" ? "bg-[#2e99b0]" : "",
    "h-20 flex flex-col justify-center items-center p-3"
  ])}"><svg t="1691054765870" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4576" width="200" height="200"><path d="M245.76 122.88h40.96v81.92H245.76zM737.28 122.88h40.96v81.92h-40.96z" p-id="4577" fill="#ffffff"></path><path d="M840.9088 942.08h-655.36A61.44 61.44 0 0 1 122.88 880.64v-614.4a61.0304 61.0304 0 0 1 17.6128-43.4176A62.2592 62.2592 0 0 1 184.7296 204.8h655.36A61.44 61.44 0 0 1 901.12 266.24v614.4a60.2112 60.2112 0 0 1-18.0224 43.4176 61.44 61.44 0 0 1-42.1888 18.0224zM184.7296 245.76a20.0704 20.0704 0 0 0-14.7456 6.144 20.48 20.48 0 0 0-6.144 14.336v614.4a20.48 20.48 0 0 0 20.48 20.48h655.36a20.0704 20.0704 0 0 0 14.7456-6.144 20.48 20.48 0 0 0 5.7344-14.336v-614.4a20.48 20.48 0 0 0-20.48-20.48z" p-id="4578" fill="#ffffff"></path><path d="M143.36 327.68h736.8704v40.96H143.36zM655.36 696.32h122.88v122.88h-122.88z" p-id="4579" fill="#ffffff"></path></svg><div class="text-white text-xs">CALENDAR</div></div></a><a href="/gallery"><div class="${ssrRenderClass([$setup.route.matched[0].path.slice(1) == "gallery" ? "bg-[#2e99b0]" : "", "h-20 flex flex-col justify-center items-center p-3"])}"><svg t="1691054822757" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5659" width="200" height="200"><path d="M783.058824 602.352941V0H0v783.058824h783.058824v-180.705883zM60.235294 60.235294h662.588235v481.882353h-45.477647L522.902588 342.196706 453.089882 415.322353 317.680941 181.549176 102.279529 542.117647H60.235294V60.235294z m541.033412 481.882353H172.453647l144.444235-241.784471L441.223529 515.011765 518.023529 434.477176 601.268706 542.117647zM60.235294 722.823529v-120.470588h662.588235v120.470588H60.235294z m963.764706-542.117647v783.058824H240.941176v-119.506824h60.235295V903.529412h662.588235V240.941176h-120.470588V180.705882h180.705882z" p-id="5660" fill="#ffffff"></path></svg><div class="text-white text-xs">GALLERY</div></div></a><a href="/regulations"><div class="${ssrRenderClass([
    $setup.route.matched[0].path.slice(1) == "regulations" ? "bg-[#2e99b0]" : "",
    "h-20 flex flex-col justify-center items-center p-3"
  ])}"><svg t="1691055027066" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3191" width="200" height="200"><path d="M96 128a32 32 0 0 1 32-32h288a32 32 0 0 1 32 32v288a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128z m64 32v224h224V160H160z m384-32h384v64H544V128z m0 224h384v64H544v-64z m384 256H544v64h384v-64z m-384 224h384v64H544v-64zM128 576a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h288a32 32 0 0 0 32-32v-288a32 32 0 0 0-32-32H128z m32 288v-224h224v224H160z" fill="#ffffff" p-id="3192"></path></svg><div class="text-white text-xs">REGULATION</div></div></a><a href="/ranking"><div class="${ssrRenderClass([$setup.route.matched[0].path.slice(1) == "ranking" ? "bg-[#2e99b0]" : "", "h-20 flex flex-col justify-center items-center p-3"])}"><svg t="1691055072319" class="icon" viewBox="0 0 1216 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4255" width="200" height="200"><path d="M1088 224c-35.328 0-64 28.672-64 64 0 16.64 6.496 31.68 16.928 43.04l-233.568 171.296L576 128l-231.36 374.336-233.568-171.296C121.472 319.68 128 304.64 128 288c0-35.328-28.672-64-64-64S0 252.672 0 288s28.672 64 64 64c13.408 0 25.856-4.16 36.16-11.232L224 960l704 0 123.84-619.232C1062.112 347.84 1074.56 352 1088 352c35.328 0 64-28.672 64-64S1123.328 224 1088 224zM640 64c0-35.328-28.672-64-64-64s-64 28.672-64 64 28.672 64 64 64S640 99.328 640 64z" p-id="4256" fill="#ffffff"></path></svg><div class="text-white text-xs">RANKING</div></div></a><a href="/about"><div class="${ssrRenderClass([$setup.route.matched[0].path.slice(1) == "about" ? "bg-[#2e99b0]" : "", "h-20 flex flex-col justify-center items-center p-3"])}"><svg width="800px" height="800px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>about</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="about-white" fill="#ffffff" transform="translate(42.666667, 42.666667)"><path d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z" id="Shape"></path></g></g></g></svg><div class="text-white text-xs">ABOUT</div></div></a><a href="/contact"><div class="${ssrRenderClass([$setup.route.matched[0].path.slice(1) == "contact" ? "bg-[#2e99b0]" : "", "h-20 flex flex-col justify-center items-center p-3"])}"><svg t="1691055105733" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5338" width="200" height="200"><path d="M863.9 361.1c0-1-0.1-2.1-0.3-3.2-11.5-74.9-53.5-143.9-118-194.1-64.5-50.1-146.9-77.7-232.1-77.7-87.2 0-171 28.7-236.1 80.9C212 219.4 171 290.8 162 368.1c-0.1 0.9-0.2 1.8-0.2 2.7-47 8-82.8 49-82.8 98.2v136.9c0 54.9 44.7 99.6 99.6 99.6h4.3c54.9 0 99.6-44.7 99.6-99.6v-137c0-45.6-30.8-84.1-72.7-95.9 16-134 149.2-238.9 303.7-238.9 151.3 0 280.6 98 302.2 228.5-42.7 11.2-74.2 50.2-74.2 96.3v136.9c0 54.9 44.7 99.6 99.6 99.6h4.3c54.9 0 99.6-44.7 99.6-99.6V458.9c0-48.6-35-89.2-81.1-97.8zM234.5 468.9v136.9c0 28.4-23.1 51.6-51.6 51.6h-4.3c-28.4 0-51.6-23.1-51.6-51.6V468.9c0-28.4 23.1-51.6 51.6-51.6h4.3c28.5 0 51.6 23.2 51.6 51.6zM897 595.8c0 28.4-23.1 51.6-51.6 51.6h-4.3c-28.4 0-51.6-23.1-51.6-51.6V458.9c0-28.4 23.1-51.6 51.6-51.6h4.3c28.4 0 51.6 23.1 51.6 51.6v136.9zM459.8 769.4c-38.6 0-71.3 25.8-81.7 61.1h-96c-33.9 0-63.4-23.1-71.7-56.1-3.2-12.9-16.3-20.7-29.1-17.4-12.9 3.2-20.7 16.3-17.4 29.1 6.5 25.9 21.7 49.3 42.7 66 21.4 17 48.3 26.4 75.5 26.4h96c10.4 35.3 43 61.1 81.7 61.1 46.9 0 85.1-38.2 85.1-85.1s-38.2-85.1-85.1-85.1z m0 122.3c-20.5 0-37.1-16.7-37.1-37.1 0-20.5 16.7-37.1 37.1-37.1s37.1 16.7 37.1 37.1-16.7 37.1-37.1 37.1z" p-id="5339" fill="#ffffff"></path></svg><div class="text-white text-xs">CONTACT</div></div></a></div></div></div></section><section class="bg-white mb-1 shadow shadow-gray-300 hidden xl:block"><nav class="flex justify-between px-10 py-4"><div class="flex items-center justify-center xl:justify-start w-full xl:ml-24 xl:gap-32"><div class=""><img${ssrRenderAttr("src", _imports_0$1)} class="w-full h-12"></div><div class="flex justify-center w-1/2 md:w-1/3"><div class="relative"><svg class="absolute top-1/2 left-4 transform -translate-y-1/2" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0467 11.22L12.6667 9.80667C12.3698 9.5245 11.9954 9.33754 11.5915 9.26983C11.1876 9.20211 10.7726 9.25673 10.4 9.42667L9.80001 8.82667C10.5071 7.88194 10.8299 6.70445 10.7037 5.53122C10.5775 4.358 10.0115 3.27615 9.11963 2.50347C8.2278 1.73078 7.07637 1.32464 5.89712 1.36679C4.71788 1.40894 3.59838 1.89626 2.76399 2.73065C1.92961 3.56503 1.44229 4.68453 1.40014 5.86378C1.35799 7.04302 1.76413 8.19446 2.53681 9.08629C3.3095 9.97812 4.39134 10.5441 5.56457 10.6704C6.7378 10.7966 7.91529 10.4737 8.86001 9.76667L9.45335 10.36C9.26341 10.7331 9.19534 11.1564 9.25873 11.5702C9.32212 11.984 9.51377 12.3675 9.80668 12.6667L11.22 14.08C11.595 14.4545 12.1033 14.6649 12.6333 14.6649C13.1633 14.6649 13.6717 14.4545 14.0467 14.08C14.2372 13.8937 14.3885 13.6713 14.4919 13.4257C14.5952 13.1802 14.6484 12.9164 14.6484 12.65C14.6484 12.3836 14.5952 12.1198 14.4919 11.8743C14.3885 11.6287 14.2372 11.4063 14.0467 11.22V11.22ZM8.39335 8.39333C7.92684 8.85866 7.33288 9.1753 6.68651 9.30323C6.04013 9.43117 5.37034 9.36466 4.76175 9.11212C4.15315 8.85958 3.63305 8.43234 3.26716 7.88436C2.90126 7.33638 2.70597 6.69224 2.70597 6.03333C2.70597 5.37442 2.90126 4.73029 3.26716 4.18231C3.63305 3.63433 4.15315 3.20708 4.76175 2.95454C5.37034 2.702 6.04013 2.6355 6.68651 2.76343C7.33288 2.89137 7.92684 3.208 8.39335 3.67333C8.70377 3.98297 8.95005 4.35081 9.1181 4.75577C9.28614 5.16074 9.37264 5.59488 9.37264 6.03333C9.37264 6.47178 9.28614 6.90592 9.1181 7.31089C8.95005 7.71586 8.70377 8.08369 8.39335 8.39333V8.39333ZM13.1067 13.1067C13.0447 13.1692 12.971 13.2187 12.8897 13.2526C12.8085 13.2864 12.7214 13.3039 12.6333 13.3039C12.5453 13.3039 12.4582 13.2864 12.377 13.2526C12.2957 13.2187 12.222 13.1692 12.16 13.1067L10.7467 11.6933C10.6842 11.6314 10.6346 11.5576 10.6008 11.4764C10.5669 11.3951 10.5495 11.308 10.5495 11.22C10.5495 11.132 10.5669 11.0449 10.6008 10.9636C10.6346 10.8824 10.6842 10.8086 10.7467 10.7467C10.8087 10.6842 10.8824 10.6346 10.9636 10.6007C11.0449 10.5669 11.132 10.5495 11.22 10.5495C11.308 10.5495 11.3952 10.5669 11.4764 10.6007C11.5576 10.6346 11.6314 10.6842 11.6933 10.7467L13.1067 12.16C13.1692 12.222 13.2188 12.2957 13.2526 12.3769C13.2865 12.4582 13.3039 12.5453 13.3039 12.6333C13.3039 12.7213 13.2865 12.8085 13.2526 12.8897C13.2188 12.971 13.1692 13.0447 13.1067 13.1067V13.1067Z" fill="#BBC3CF"></path></svg><input class="w-full md:w-52 h-9 py-1 pl-9 pr-4 text-sm text-gray-500 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 border border-gray-200 rounded-lg" type="text" placeholder="Search"></div></div></div></nav></section></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + publicAssetsURL("images/s2-min.jpg");
const _imports_1 = "" + publicAssetsURL("images/s1-min.jpg");
const _imports_2 = "" + publicAssetsURL("images/s3-min.jpg");
const _imports_3 = "" + publicAssetsURL("images/s7-min.jpg");
const _imports_4 = "" + publicAssetsURL("images/logo4.png");
const _sfc_main$1 = {
  setup() {
    useStrapiMedia();
  },
  data() {
    return {
      menu: [
        {
          title: "ORGANISATION",
          subMenu: [
            { title: "History of JUA" },
            { title: "Origin of JUDO" },
            { title: "Organziation" },
            { title: "JUA Members" },
            { title: "JUA Bank A/C Details" },
            { title: "JUA Minutes" }
          ]
        },
        {
          title: "NEWS",
          subMenu: [
            { title: "What's News" },
            { title: "IJF News" },
            { title: "Photo Gallery" }
          ]
        },
        {
          title: "EVENTS",
          subMenu: [
            { title: "IJF Ranking Tournaments" },
            { title: "World Judo Championships" },
            { title: "JUA Meetings" },
            { title: "Zonal Championships" },
            { title: "AYJC & AJJC" },
            { title: "Olympic" },
            { title: "Member Events" },
            { title: "Asioan Judo Championships" }
          ]
        },
        {
          title: "REGULATION",
          subMenu: [
            { title: "JUA Statues" },
            { title: "JUA F&A Procedure" },
            { title: "JUA Technical Code" }
          ]
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="bg-white overflow-hidden pl-0 2xl:pl-24 xl:pl-20" style="${ssrRenderStyle({ "background-image": "url('/flex-ui-assets/elements/pattern-white.svg')", "background-position": "center" })}"><div class="container mx-auto px-4"><div class="container px-4 mx-auto"><h3 class="mb-8 text-center leading-6 text-red-500 font-bold text-2xl mt-8"> Meet Our Partners </h3><div class="flex flex-wrap justify-center -mx-4"><div class="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0"><img class="mx-auto"${ssrRenderAttr("src", _imports_0)} alt=""><div class="font-bold text-center">International Judo Federation</div></div><div class="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0"><img class="mx-auto"${ssrRenderAttr("src", _imports_1)} alt=""><div class="font-bold text-center">International Olympic Committee</div></div><div class="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0"><img class="mx-auto"${ssrRenderAttr("src", _imports_0)} alt=""><div class="font-bold text-center">IJF World Ranking</div></div><div class="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 md:mb-0"><img class="mx-auto"${ssrRenderAttr("src", _imports_2)} alt=""><div class="font-bold text-center">IJF Back Number</div></div><div class="w-1/2 md:w-1/3 lg:w-1/5 px-4"><img class="mx-auto"${ssrRenderAttr("src", _imports_3)} alt=""><div class="font-bold text-center">JUA Calendar</div></div></div></div><div class="flex flex-wrap lg:items-center pt-24 pb-12 -mx-4"><div class="w-full md:w-1/4 lg:w-auto px-4"><a class="block mb-5 md:mb-0 max-w-max" href="/"><img class="h-8"${ssrRenderAttr("src", _imports_4)} alt=""></a></div><div class="w-full md:w-3/4 lg:flex-1 px-4"><div class="flex flex-wrap -mx-3 lg:-mx-6 gap-3"><div class="w-full md:w-auto p-3 md:py-0 md:px-6"><a class="inline-block text-lg md:text-xl text-gray-500 hover:text-gray-600 font-medium" href="/">HOME</a></div><div class="w-full md:w-auto p-3 md:py-0 md:px-6"><a class="inline-block text-lg md:text-xl text-gray-500 hover:text-gray-600 font-medium" href="/organization">ORGANIZATION</a></div><div class="w-full md:w-auto p-3 md:py-0 md:px-6"><a class="inline-block text-lg md:text-xl text-gray-500 hover:text-gray-600 font-medium" href="#">NEWS</a></div><div class="w-full md:w-auto p-3 md:py-0 md:px-6"><a class="inline-block text-lg md:text-xl text-gray-500 hover:text-gray-600 font-medium" href="/gallery">PHOTO GALLERY</a></div><div class="w-full md:w-auto p-3 md:py-0 md:px-6"><a class="inline-block text-lg md:text-xl text-gray-500 hover:text-gray-600 font-medium" href="/event"> EVENTS</a></div><div class="w-full md:w-auto p-3 md:py-0 md:px-6"><a class="inline-block text-lg md:text-xl text-gray-500 hover:text-gray-600 font-medium" href="#">REGULATION</a></div><div class="w-full md:w-auto p-3 md:py-0 md:px-6"><a class="inline-block text-lg md:text-xl text-gray-500 hover:text-gray-600 font-medium" href="/ranking">RANKING</a></div><div class="w-full md:w-auto p-3 md:py-0 md:px-6"><a class="inline-block text-lg md:text-xl text-gray-500 hover:text-gray-600 font-medium" href="/contact">CONTACT US</a></div></div></div></div><div class="border-b border-gray-100"></div></div></section><section class="bg-red-500 xl:pl-24 2xl:pl-24"><div class="container px-4 mx-auto"><div class="flex flex-wrap items-center py-12"><div class="w-full md:w-1/2 mb-6 md:mb-0"><p class="text-white font-medium">\xA9 2023 Hubis. All Rights Reserved.</p></div><div class="w-full md:w-1/2"><div class="flex flex-wrap md:justify-end -mx-5"><div class="px-5"><a class="inline-block text-white" href="#"><svg width="10" height="18" viewbox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z" fill="currentColor"></path></svg></a></div><div class="px-5"><a class="inline-block text-white" href="#"><svg width="19" height="16" viewbox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z" fill="currentColor"></path></svg></a></div><div class="px-5"><a class="inline-block text-white" href="#"><svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z" fill="currentColor"></path></svg></a></div><div class="px-5"><a class="inline-block text-white" href="#"><svg width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z" fill="currentColor"></path></svg></a></div></div></div></div></div></section></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0;
  const _component_AppFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-8e3982ea.mjs.map
