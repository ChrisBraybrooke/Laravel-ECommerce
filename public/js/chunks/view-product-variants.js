webpackJsonp([14],{K0x1:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("product-page-layout",{attrs:{"product-id":t.productId,"current-page":"/products/"+t.productId+"/variants","request-with":["variants.media"],form:{variants:{data:[]}},"request-includes":["slug"]},scopedSlots:t._u([{key:"product_page",fn:function(n){return[n.productForm.variants?t._l(n.productForm.variants.data,function(t){return r("el-card",{key:t.id,staticClass:"product_variant_card box-card"},[r("product-variant-component",{attrs:{model:t,variants:n.productForm.variants.data}})],1)}):t._e(),t._v(" "),r("el-button",{staticClass:"add_variant_btn",attrs:{type:"primary",icon:"el-icon-plus",plain:""},on:{click:function(t){n.productForm.variants.data.push({main_img:{}})}}},[t._v("Add Variant")])]}}])})],1)},staticRenderFns:[]}},QRQZ:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"ViewProductVariants",components:{ProductPageLayout:function(){return r.e(32).then(r.bind(null,"98Ok"))},ProductVariantComponent:function(){return r.e(43).then(r.bind(null,"whzO"))}},props:{productId:{type:String,required:!0}},data:function(){return{}},computed:{},watch:{},mounted:function(){},methods:{}}},WpNS:function(t,n,r){var a=r("g15H");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("fd098d18",a,!0,{})},fppd:function(t,n,r){var a=r("VU/8")(r("QRQZ"),r("K0x1"),!1,function(t){r("WpNS")},"data-v-6c0b7248",null);t.exports=a.exports},g15H:function(t,n,r){(t.exports=r("FZ+f")(!1)).push([t.i,".add_variant_btn[data-v-6c0b7248],.product_variant_card[data-v-6c0b7248]{margin-top:40px}",""])}});