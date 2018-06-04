webpackJsonp([43],{Ivjj:function(e,l,t){var o=t("VU/8")(t("pzTl"),t("rWTf"),!1,function(e){t("o4pc")},null,null);e.exports=o.exports},o4pc:function(e,l,t){var o=t("s6du");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("rjj0")("19ed322a",o,!0,{})},pzTl:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default={name:"FormFieldComponent",components:{},props:{form:{type:Object,required:!0},model:{type:Object,required:!0},section:{type:Object,required:!0}},data:function(){return{fieldOptions:[{label:"Text",value:"text"},{label:"Number",value:"number"},{label:"Radio",value:"radio"},{label:"Select",value:"select"}],showRulesModal:!1,showOptionsModal:!1}},computed:{needsOptions:function(){return"radio"===this.model.type||"select"===this.model.type}},watch:{},mounted:function(){console.log("FormFieldComponent.vue Mounted")},methods:{deleteField:function(e){this.section.fields.data.splice(this.section.fields.data.indexOf(e),1)},addOption:function(){this.model.options.push({})},deleteOption:function(e,l){l.splice(l.indexOf(e),1)}}}},rWTf:function(e,l){e.exports={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("div",{class:"form_field_row "+(e.model.rules.required?"required":"")},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{lg:12,xl:4}},[t("el-form-item",{attrs:{label:"Name",size:"small",prop:"name"}},[t("el-input",{attrs:{autofocus:!0},model:{value:e.model.name,callback:function(l){e.$set(e.model,"name",l)},expression:"model.name"}})],1)],1),e._v(" "),t("el-col",{attrs:{lg:12,xl:6}},[t("el-form-item",{attrs:{label:"Description",size:"small",prop:"description"}},[t("el-input",{attrs:{autofocus:!0},model:{value:e.model.description,callback:function(l){e.$set(e.model,"description",l)},expression:"model.description"}})],1)],1),e._v(" "),t("el-col",{attrs:{lg:10,xl:4}},[t("el-form-item",{attrs:{label:"Type",size:"small",prop:"type"}},[t("el-select",{attrs:{placeholder:"Type"},model:{value:e.model.type,callback:function(l){e.$set(e.model,"type",l)},expression:"model.type"}},e._l(e.fieldOptions,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),t("el-col",{attrs:{lg:6,xl:2}},[t("el-form-item",{attrs:{label:"Prepends",size:"small",prop:"prepend"}},[t("el-input",{attrs:{autofocus:!0},model:{value:e.model.prepend,callback:function(l){e.$set(e.model,"prepend",l)},expression:"model.prepend"}})],1)],1),e._v(" "),t("el-col",{attrs:{lg:6,xl:2}},[t("el-form-item",{attrs:{label:"Appends",size:"small",prop:"append"}},[t("el-input",{attrs:{autofocus:!0},model:{value:e.model.append,callback:function(l){e.$set(e.model,"append",l)},expression:"model.append"}})],1)],1)],1),e._v(" "),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{lg:4,xl:2}},[t("el-form-item",{attrs:{label:"",size:"small",prop:"rules"}},[t("el-button",{attrs:{plain:"",size:"mini",type:"primary"},on:{click:function(l){e.showRulesModal=!0}}},[e._v("Show Rules")])],1)],1),e._v(" "),e.needsOptions?t("el-col",{attrs:{lg:4,xl:2}},[t("el-form-item",{attrs:{label:"",size:"small",prop:"options"}},[t("el-button",{attrs:{plain:"",size:"mini",type:"primary"},on:{click:function(l){e.showOptionsModal=!0}}},[e._v("Show Options")])],1)],1):e._e(),e._v(" "),t("el-col",{attrs:{lg:4,xl:2}},[t("el-form-item",{attrs:{label:"",size:"small",prop:"delete"}},[t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(l){e.deleteField(e.model)}}},[e._v("Delete")])],1)],1)],1)],1),e._v(" "),e.showRulesModal?t("el-dialog",{attrs:{title:e.model.name+" Rules",visible:e.showRulesModal,width:"70%"},on:{"update:visible":function(l){e.showRulesModal=l}}},[t("el-row",{attrs:{type:"flex"}},[t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"Required",prop:"required"}},[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.model.rules.required,callback:function(l){e.$set(e.model.rules,"required",l)},expression:"model.rules.required"}})],1)],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:function(l){e.showRulesModal=!1}}},[e._v("Done")])],1)],1):e._e(),e._v(" "),e.showOptionsModal?t("el-dialog",{attrs:{title:e.model.name+" Options",visible:e.showOptionsModal,width:"70%"},on:{"update:visible":function(l){e.showOptionsModal=l}}},[e._l(e.model.options,function(l){return e.model.options?t("el-row",{key:l.id,staticClass:"form_field_row",attrs:{gutter:20}},[t("el-col",{attrs:{lg:12,xl:4}},[t("el-form-item",{attrs:{label:"Label",size:"small",prop:"label"}},[t("el-input",{attrs:{autofocus:!0},model:{value:l.name,callback:function(t){e.$set(l,"name",t)},expression:"option.name"}})],1)],1),e._v(" "),t("el-col",{attrs:{lg:12,xl:4}},[t("el-form-item",{attrs:{label:"Value",size:"small",prop:"value"}},[t("el-input",{attrs:{autofocus:!0},model:{value:l.value,callback:function(t){e.$set(l,"value",t)},expression:"option.value"}})],1)],1),e._v(" "),e.form.effects_price?t("el-col",{attrs:{lg:12,xl:4}},[t("el-form-item",{attrs:{label:"Price Mutator",size:"small",prop:"price_mutator"}},[t("el-select",{attrs:{placeholder:""},model:{value:l.price_mutator,callback:function(t){e.$set(l,"price_mutator",t)},expression:"option.price_mutator"}},[t("el-option",{attrs:{value:"+"}}),e._v(" "),t("el-option",{attrs:{value:"-"}})],1)],1)],1):e._e(),e._v(" "),e.form.effects_price?t("el-col",{attrs:{lg:12,xl:4}},[t("el-form-item",{attrs:{label:"Price Value",size:"small",prop:"price_value"}},[t("el-input",{attrs:{type:"number"},model:{value:l.price_value,callback:function(t){e.$set(l,"price_value",t)},expression:"option.price_value"}})],1)],1):e._e(),e._v(" "),t("el-col",{attrs:{lg:4,xl:2}},[t("el-form-item",{attrs:{label:"",size:"small",prop:"delete"}},[t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){e.deleteOption(l,e.model.options)}}},[e._v("Delete")])],1)],1)],1):e._e()}),e._v(" "),t("el-button",{attrs:{type:"info",size:"mini",icon:"el-icon-plus",plain:""},on:{click:e.addOption}},[e._v("Add Option")]),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:function(l){e.showOptionsModal=!1}}},[e._v("Done")])],1)],2):e._e()],1)},staticRenderFns:[]}},s6du:function(e,l,t){(e.exports=t("FZ+f")(!1)).push([e.i,"",""])}});