webpackJsonp([41],{"825h":function(t,e,o){var i=o("wzZb");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("2c84cd92",i,!0,{})},TNEL:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{lg:8,md:24}},[o("el-form-item",{attrs:{label:"Name",prop:"name"}},[o("el-input",{attrs:{autofocus:!0},model:{value:t.productCustomisationOption.name,callback:function(e){t.$set(t.productCustomisationOption,"name",e)},expression:"productCustomisationOption.name"}})],1)],1),t._v(" "),o("el-col",{attrs:{lg:5,md:24}},[o("el-form-item",{attrs:{label:"Selector Img",prop:"selector_img"}},[o("file-picker-modal",{ref:"customisationSelectorFile",attrs:{"current-files":t.productCustomisationOption.selector_img?[t.productCustomisationOption.selector_img]:void 0,name:t.productCustomisationOption+" Selector Img",selectable:1,"show-btn":!0,"picker-id":"selector_img"},on:{filesChosen:t.handleFilesChosen,filesUnChosen:t.handleFilesUnChosen}})],1)],1),t._v(" "),o("el-col",{attrs:{lg:5,md:24}},[o("el-form-item",{attrs:{label:"Main Img",prop:"main_img"}},[o("file-picker-modal",{ref:"customisationOptionFile",attrs:{"current-files":t.productCustomisationOption.main_img?[t.productCustomisationOption.main_img]:void 0,name:t.productCustomisationOption+" Main Img",selectable:1,"picker-id":"main_img","show-btn":!0},on:{filesChosen:t.handleFilesChosen,filesUnChosen:t.handleFilesUnChosen}})],1)],1),t._v(" "),o("el-col",{attrs:{lg:3,md:24}},[o("el-form-item",{attrs:{label:"Default",prop:"default"}},[o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.productCustomisationOption.default,callback:function(e){t.$set(t.productCustomisationOption,"default",e)},expression:"productCustomisationOption.default"}})],1)],1),t._v(" "),o("el-col",{staticClass:"customisation_option_delete_col",attrs:{lg:3,md:24}},[o("el-form-item",{attrs:{label:"Actions"}},[o("el-button",{staticClass:"customisation_option_delete_btn",attrs:{type:"danger",size:"mini"},on:{click:function(e){t.deleteOption(t.productCustomisationOption)}}},[t._v("Delete")])],1)],1)],1)],1)},staticRenderFns:[]}},eEsK:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ProductCustomisationOptionComponent",components:{FilePickerModal:function(){return o.e(30).then(o.bind(null,"kSKK"))}},props:{model:{type:Object,required:!0}},data:function(){return{productCustomisationOption:{}}},computed:{},watch:{},mounted:function(){this.productCustomisationOption=this.model},methods:{displayFilePicker:function(t){this.$refs[t]&&this.$refs[t].openModal()},handleFilesChosen:function(t){this.$set(this.productCustomisationOption,t.id,t.files)},handleFilesUnChosen:function(t){this.$set(this.productCustomisationOption,t.id,t.files)},deleteOption:function(t){this.$emit("optionDeleted",t)}}}},lm9E:function(t,e,o){var i=o("VU/8")(o("eEsK"),o("TNEL"),!1,function(t){o("825h")},null,null);t.exports=i.exports},wzZb:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,"",""])}});