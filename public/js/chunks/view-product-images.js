webpackJsonp([14],{"6EzV":function(e,t,r){var o=r("LDMQ");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("40c4942c",o,!0)},LDMQ:function(e,t,r){t=e.exports=r("FZ+f")(void 0),t.push([e.i,"",""])},P9Ev:function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("product-page-layout",{attrs:{"product-id":e.productId,"current-page":"/products/"+e.productId+"/images","request-with":["media"]},scopedSlots:e._u([{key:"product_page",fn:function(t){return[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"Main Img",prop:"main_img"}},[t.productForm.id?r("file-picker-modal",{ref:"mainImgFilePicker",attrs:{"current-files":t.productForm.main_img?[t.productForm.main_img]:void 0,"show-btn":!0,name:t.productForm.name+" Main Img",selectable:1,"picker-id":"main_img"},on:{"update:files":function(e){return t.productForm.main_img=e}}}):e._e()],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"Gallery",prop:"gallery"}},[t.productForm.gallery?r("file-picker-modal",{ref:"galleryFilePicker",attrs:{"current-files":t.productForm.gallery.data?t.productForm.gallery.data:void 0,name:t.productForm.name+" Gallery","picker-id":"gallery","show-btn":!0},on:{"update:files":function(e){return t.productForm.gallery.data=e}}}):e._e()],1)],1)],1)]}}])})],1)},o=[];e.exports={render:r,staticRenderFns:o}},StE9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ViewProductImages",components:{ProductPageLayout:function(){return r.e(22).then(r.bind(null,"98Ok"))},FilePickerModal:function(){return r.e(21).then(r.bind(null,"kSKK"))}},props:{productId:{type:String,required:!0}},data:function(){return{}},computed:{},watch:{},mounted:function(){},methods:{}}},qrbf:function(e,t,r){function o(e){r("6EzV")}var n=r("VU/8"),a=r("StE9"),i=r("P9Ev"),c=o,u=n(a,i,!1,c,"data-v-360baf2c",null);e.exports=u.exports}});