webpackJsonp([45],{"1Xs8":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ProductVariantComponent",components:{FilePickerModal:function(){return r.e(33).then(r.bind(null,"kSKK"))}},props:{model:{type:Object,required:!0},variants:{type:Array,required:!0,default:function(){return[]}},onRemoveProduct:{type:Function,required:!1,default:function(){return function(t){}}}},data:function(){return{productVariant:{main_img:[]}}},mounted:function(){this.productVariant=this.model},methods:{removeProduct:function(){this.variants.splice(this.variants.indexOf(this.productVariant),1),this.onRemoveProduct(this.productVariant)}}}},Z0ej:function(t,e,r){var a=r("sDmc");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("7c466aa9",a,!0,{})},sDdL:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{lg:12,md:24}},[r("el-form-item",{attrs:{label:"Name",prop:"name"}},[r("el-input",{attrs:{autofocus:!0},model:{value:t.productVariant.name,callback:function(e){t.$set(t.productVariant,"name",e)},expression:"productVariant.name"}})],1)],1),t._v(" "),r("el-col",{attrs:{lg:12,md:24}},[r("el-form-item",{attrs:{label:"Slug / Url",prop:"slug"}},[r("el-input",{attrs:{disabled:!!t.productVariant.id},model:{value:t.productVariant.slug,callback:function(e){t.$set(t.productVariant,"slug",e)},expression:"productVariant.slug"}},[r("template",{slot:"prepend"},[t._v(t._s(t.getSiteBaseURL)+"products/")])],2)],1)],1)],1),t._v(" "),t.productVariant.id?t._e():r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:24}},[r("el-form-item",{attrs:{label:"Main Img",prop:"main_img"}},[t.productVariant.main_img?r("file-picker-modal",{attrs:{"current-files":t.productVariant.main_img.id?[t.productVariant.main_img]:void 0,"show-btn":!0,name:"Main Img",selectable:1,"picker-id":"main_img"},on:{"update:files":function(e){return t.productVariant.main_img=e}}}):t._e()],1)],1)],1),t._v(" "),t.productVariant.id?r("router-link",{attrs:{to:{name:"products.view",params:{productId:t.productVariant.id.toString()}}}},[r("el-button",{attrs:{plain:"",type:"success",size:"small"}},[t._v("Edit Product")])],1):r("el-button",{attrs:{type:"danger",size:"small"},on:{click:t.removeProduct}},[t._v("Remove")])],1)},staticRenderFns:[]}},sDmc:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"",""])},whzO:function(t,e,r){var a=r("VU/8")(r("1Xs8"),r("sDdL"),!1,function(t){r("Z0ej")},null,null);t.exports=a.exports}});