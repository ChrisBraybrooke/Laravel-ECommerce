webpackJsonp([15],{L3dB:function(t,e,r){var o=r("i1zo");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r("rjj0")("ccf41af0",o,!0,{})},MpLp:function(t,e,r){var o=r("VU/8")(r("RfrY"),r("j5de"),!1,function(t){r("L3dB")},"data-v-66d10a93",null);t.exports=o.exports},RfrY:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},n=r("NYxO");e.default={name:"ViewProductPricing",components:{ProductPageLayout:function(){return r.e(34).then(r.bind(null,"98Ok"))}},props:{productId:{type:String,required:!0}},data:function(){return{}},computed:o({},(0,n.mapGetters)(["shopData"]),{includesVat:function(){return window.ecommerceConfig.vat_included}}),watch:{},mounted:function(){},methods:{}}},i1zo:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"",""])},j5de:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("product-page-layout",{attrs:{"product-id":t.productId,"current-page":"/products/"+t.productId+"/pricing","request-includes":["price"]},scopedSlots:t._u([{key:"product_page",fn:function(e){return[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{lg:12,md:24}},[r("el-form-item",{attrs:{label:t.includesVat?"Price (includes VAT)":"Price (excludes VAT)",prop:"price"}},[r("el-input",{attrs:{autofocus:!0},model:{value:e.productForm.price,callback:function(r){t.$set(e.productForm,"price",r)},expression:"props.productForm.price"}},[r("template",{slot:"prepend"},[t._v(t._s(t.shopData?t.shopData.currency:""))])],2)],1)],1)],1)]}}])})],1)},staticRenderFns:[]}}});