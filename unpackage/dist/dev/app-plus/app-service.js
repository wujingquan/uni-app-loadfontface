if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {
    methods: {
      goToOne() {
        uni.navigateTo({
          url: "/pages/index/one"
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("text", { class: "title overpass" }, "Hello World !"),
      vue.createElementVNode("text", { class: "title" }, "Hello World !"),
      vue.createElementVNode("text", { class: "title overpass" }, "Tab1 - 150 - MI"),
      vue.createElementVNode("text", { class: "title" }, "Tab1 - 150 - MI"),
      vue.createElementVNode("button", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.goToOne && $options.goToOne(...args))
      }, "Go to One")
    ]);
  }
  const PagesIndexTab1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/develop/Documents/HBuilderProjects/loadFont/pages/index/tab1.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("text", { class: "title overpass" }, "Hello World !"),
      vue.createElementVNode("text", { class: "title" }, "Hello World !"),
      vue.createElementVNode("text", { class: "title overpass" }, "Tab2 - 150 - MI"),
      vue.createElementVNode("text", { class: "title" }, "Tab2 - 150 - MI")
    ]);
  }
  const PagesIndexTab2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/Users/develop/Documents/HBuilderProjects/loadFont/pages/index/tab2.vue"]]);
  const _sfc_main$1 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("text", { class: "title overpass" }, "Hello World !"),
      vue.createElementVNode("text", { class: "title" }, "Hello World !"),
      vue.createElementVNode("text", { class: "title overpass" }, "One - 150 - MI"),
      vue.createElementVNode("text", { class: "title" }, "One - 150 - MI")
    ]);
  }
  const PagesIndexOne = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/develop/Documents/HBuilderProjects/loadFont/pages/index/one.vue"]]);
  __definePage("pages/index/tab1", PagesIndexTab1);
  __definePage("pages/index/tab2", PagesIndexTab2);
  __definePage("pages/index/one", PagesIndexOne);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      this.loadFont();
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    },
    methods: {
      loadFont: function() {
        setTimeout(() => {
          uni.loadFontFace({
            family: "Overpass",
            global: true,
            source: 'url("http://loadfont.wujingquan.com/Overpass.woff2")',
            success: function(res) {
              formatAppLog("log", "at App.vue:20", "res", res);
              formatAppLog("log", "at App.vue:21", "Overpass Remote Font Load Success");
            },
            fail: function(res) {
              formatAppLog("log", "at App.vue:24", "res", res);
              formatAppLog("log", "at App.vue:25", "Overpass Remote Font Load Failed");
            }
          });
        }, 1e3);
      }
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/develop/Documents/HBuilderProjects/loadFont/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
