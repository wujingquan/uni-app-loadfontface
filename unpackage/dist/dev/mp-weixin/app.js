"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/tab1.js";
  "./pages/index/tab2.js";
  "./pages/index/one.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:4", "App Launch");
  },
  onShow: function() {
    this.loadFont();
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:10", "App Hide");
  },
  methods: {
    loadFont: function() {
      setTimeout(() => {
        common_vendor.index.loadFontFace({
          family: "Overpass",
          global: true,
          source: 'url("http://loadfont.wujingquan.com/Overpass.woff2")',
          success: function(res) {
            common_vendor.index.__f__("log", "at App.vue:20", "res", res);
            common_vendor.index.__f__("log", "at App.vue:21", "Overpass Remote Font Load Success");
          },
          fail: function(res) {
            common_vendor.index.__f__("log", "at App.vue:24", "res", res);
            common_vendor.index.__f__("log", "at App.vue:25", "Overpass Remote Font Load Failed");
          }
        });
      }, 1e3);
    }
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
