webpackJsonp([15],{Cxr3:function(e,r,t){var o=t("vWCQ");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("rjj0")("48948d62",o,!0,{})},mGz9:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("product-page-layout",{attrs:{"product-id":e.productId,"current-page":"/products/"+e.productId+"/images","request-with":["media"]},scopedSlots:e._u([{key:"product_page",fn:function(r){return[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"Main Img",prop:"main_img"}},[r.productForm.id?t("file-picker-modal",{ref:"mainImgFilePicker",attrs:{"current-files":r.productForm.main_img?[r.productForm.main_img]:void 0,"show-btn":!0,name:r.productForm.name+" Main Img",selectable:1,"picker-id":"main_img"},on:{"update:files":function(e){return r.productForm.main_img=e}}}):e._e()],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"Gallery",prop:"gallery"}},[r.productForm.gallery?t("file-picker-modal",{ref:"galleryFilePicker",attrs:{"current-files":r.productForm.gallery.data?r.productForm.gallery.data:void 0,name:r.productForm.name+" Gallery","picker-id":"gallery","show-btn":!0},on:{"update:files":function(e){return r.productForm.gallery.data=e}}}):e._e()],1)],1)],1)]}}])})],1)},staticRenderFns:[]}},qrbf:function(e,r,t){var o=t("VU/8")(t("unRv"),t("mGz9"),!1,function(e){t("Cxr3")},"data-v-259ed669",null);e.exports=o.exports},unRv:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"ViewProductImages",components:{ProductPageLayout:function(){return t.e(27).then(t.bind(null,"98Ok"))},FilePickerModal:function(){return t.e(25).then(t.bind(null,"kSKK"))}},props:{productId:{type:String,required:!0}},data:function(){return{}},computed:{},watch:{},mounted:function(){console.log("ViewProductImages.vue mounted")},methods:{}}},vWCQ:function(e,r,t){(e.exports=t("FZ+f")(!1)).push([e.i,"",""])}});