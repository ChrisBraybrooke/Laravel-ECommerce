webpackJsonp([39],{"+cU0":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{lg:12,md:24}},[n("el-form-item",{attrs:{label:"Name",prop:"name"}},[n("el-input",{attrs:{autofocus:!0},model:{value:e.productVariant.name,callback:function(t){e.$set(e.productVariant,"name",t)},expression:"productVariant.name"}})],1)],1),e._v(" "),n("el-col",{attrs:{lg:12,md:24}},[n("el-form-item",{attrs:{label:"Slug / Url",prop:"slug"}},[n("el-input",{model:{value:e.productVariant.slug,callback:function(t){e.$set(e.productVariant,"slug",t)},expression:"productVariant.slug"}},[n("template",{slot:"prepend"},[e._v(e._s(e.getSiteBaseURL)+"products/")])],2)],1)],1)],1),e._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{md:24}},[n("el-form-item",{attrs:{label:"Main Img",prop:"main_img"}},[n("el-button",{attrs:{type:"info",plain:"",size:"mini"},on:{click:function(t){e.displayFilePicker("mainImgFilePicker")}}},[e._v("Select File "),n("i",{staticClass:"el-icon-document"})]),e._v(" "),e.productVariant?n("file-picker-modal",{ref:"mainImgFilePicker",attrs:{"current-files":e.productVariant.main_img?[e.productVariant.main_img]:void 0,name:"Main Img",selectable:1,"picker-id":"main_img","open-on-mount":!1},on:{filesChosen:e.handleFilesChosen,filesUnChosen:e.handleFilesUnChosen}}):e._e()],1)],1)],1)],1)},staticRenderFns:[]}},"1Xs8":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ProductVariantComponent",components:{FilePickerModal:function(){return n.e(27).then(n.bind(null,"kSKK"))}},props:{model:{type:Object,required:!0}},data:function(){return{productVariant:{}}},computed:{},watch:{},mounted:function(){console.log("ProductVariantComponent.vue mounted"),this.productVariant=this.model},methods:{displayFilePicker:function(e){this.$refs[e]&&this.$refs[e].openModal()},handleFilesChosen:function(e){this.$set(this.productVariant,e.id,e.files)},handleFilesUnChosen:function(e){this.$set(this.productVariant,e.id,e.files)}}}},f13g:function(e,t,n){var i=n("mEJZ");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("3f13cfbd",i,!0,{})},mEJZ:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"",""])},whzO:function(e,t,n){var i=n("VU/8")(n("1Xs8"),n("+cU0"),!1,function(e){n("f13g")},null,null);e.exports=i.exports}});