"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    goToOne() {
      common_vendor.index.navigateTo({
        url: "/pages/index/one"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goToOne && $options.goToOne(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/tab1.js.map
