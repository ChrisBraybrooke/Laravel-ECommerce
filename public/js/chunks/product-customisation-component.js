webpackJsonp([47],{Lqua:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{lg:12,md:24}},[n("el-form-item",{attrs:{label:"Name",prop:"name"}},[n("el-input",{attrs:{autofocus:!0},model:{value:t.productCustomisation.name,callback:function(o){t.$set(t.productCustomisation,"name",o)},expression:"productCustomisation.name"}})],1)],1)],1),t._v(" "),n("el-row",{attrs:{gutter:20}},[t.productCustomisation.options?n("el-col",{attrs:{lg:24,md:24}},[t._l(t.productCustomisation.options.data,function(o){return[n("product-customisation-option-component",{attrs:{model:o},on:{optionDeleted:t.handleOptionDeleted}})]}),t._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-plus",plain:""},on:{click:t.addOption}},[t._v("Add Option")])],2):t._e()],1)],1)},staticRenderFns:[]}},Xbnq:function(t,o,n){var e=n("YFLY");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("6384fc77",e,!0,{})},Y3E9:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={name:"ProductCustomisationComponent",components:{ProductCustomisationOptionComponent:function(){return n.e(46).then(n.bind(null,"lm9E"))}},props:{model:{type:Object,required:!0}},data:function(){return{productCustomisation:{}}},computed:{},watch:{},mounted:function(){this.productCustomisation=this.model},methods:{addOption:function(){this.productCustomisation.options.data.push({name:"",selector_img:{},main_img:{}})},handleOptionDeleted:function(t){t.id||this.productCustomisation.options.data.splice(this.productCustomisation.options.data.indexOf(t),1)}}}},YFLY:function(t,o,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},zFKx:function(t,o,n){var e=n("VU/8")(n("Y3E9"),n("Lqua"),!1,function(t){n("Xbnq")},null,null);t.exports=e.exports}});