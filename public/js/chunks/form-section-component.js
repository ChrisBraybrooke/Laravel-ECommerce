webpackJsonp([48],{K7fa:function(e,n,t){var o=t("R0RC");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("rjj0")("3209edf8",o,!0,{})},N4jG:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.model.fields?e._l(e.model.fields.data,function(n){return t("form-field-component",{key:n.id,attrs:{model:n,section:e.model,form:e.form}})}):e._e(),e._v(" "),t("el-button",{attrs:{type:"info",size:"mini",icon:"el-icon-plus",plain:""},on:{click:e.addField}},[e._v("Add Field")])],2)},staticRenderFns:[]}},R0RC:function(e,n,t){(e.exports=t("FZ+f")(!1)).push([e.i,"",""])},VtB8:function(e,n,t){var o=t("VU/8")(t("Z0Uc"),t("N4jG"),!1,function(e){t("K7fa")},null,null);e.exports=o.exports},Z0Uc:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"FormSectionComponent",components:{FormFieldComponent:function(){return t.e(49).then(t.bind(null,"Ivjj"))}},props:{form:{type:Object,required:!0},model:{type:Object,required:!0}},data:function(){return{loading:!1}},computed:{},watch:{},mounted:function(){},methods:{addField:function(){this.model.fields.data.push({rules:{required:!1},options:[]})}}}}});