webpackJsonp([18],{ANLx:function(r,e){r.exports={render:function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",[t("product-page-layout",{attrs:{"product-id":r.productId,"current-page":"/products/"+r.productId+"/ordering","form-loaded":r.formLoaded,"request-with":["orderForm","frontendForm"]},scopedSlots:r._u([{key:"product_page",fn:function(e){return[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{md:6,sm:12,xs:24}},[e.productForm.order_form?t("el-form-item",{attrs:{label:"Order Form",prop:"order_form.id",size:"small"}},[t("el-select",{staticClass:"collection_type_select",attrs:{filterable:"",placeholder:"Select"},model:{value:e.productForm.order_form.id,callback:function(t){r.$set(e.productForm.order_form,"id",t)},expression:"props.productForm.order_form.id"}},r._l(r.forms,function(r){return t("el-option",{key:r.id,attrs:{label:r.name,value:r.id}})}))],1):r._e()],1),r._v(" "),t("el-col",{attrs:{md:6,sm:12,xs:24}},[e.productForm.frontend_form?t("el-form-item",{attrs:{label:"Frontend Order Form",prop:"frontend_form.id",size:"small"}},[t("el-select",{staticClass:"collection_type_select",attrs:{filterable:"",placeholder:"Select"},model:{value:e.productForm.frontend_form.id,callback:function(t){r.$set(e.productForm.frontend_form,"id",t)},expression:"props.productForm.frontend_form.id"}},r._l(r.forms,function(r){return t("el-option",{key:r.id,attrs:{label:r.name,value:r.id}})}))],1):r._e()],1)],1)]}}])})],1)},staticRenderFns:[]}},AUMI:function(r,e,t){var o=t("VU/8")(t("GLHp"),t("ANLx"),!1,function(r){t("h3aO")},"data-v-31fc746e",null);r.exports=o.exports},GLHp:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,n=t("GzQy"),d=(o=n)&&o.__esModule?o:{default:o};e.default={name:"ViewProductOrdering",components:{ProductPageLayout:function(){return t.e(34).then(t.bind(null,"98Ok"))}},props:{productId:{type:String,required:!0}},data:function(){return{forms:{},formErrors:{}}},computed:{},watch:{},mounted:function(){this.getForms()},methods:{formLoaded:function(r){r.order_form||this.$set(r,"order_form",{}),r.frontend_form||this.$set(r,"frontend_form",{})},getForms:function(){d.default.get({path:"forms"}).then(function(r){this.forms=r.data}.bind(this)).catch(function(r){this.formErrors=r}.bind(this))}}}},h035:function(r,e,t){(r.exports=t("FZ+f")(!1)).push([r.i,"",""])},h3aO:function(r,e,t){var o=t("h035");"string"===typeof o&&(o=[[r.i,o,""]]),o.locals&&(r.exports=o.locals);t("rjj0")("073c2f12",o,!0,{})}});