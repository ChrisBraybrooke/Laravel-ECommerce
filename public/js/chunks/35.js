webpackJsonp([35],{"+bTH":function(t,o,r){function e(t){r("U/yl")}var a=r("VU/8"),s=r("+gaO"),i=r("+eIH"),n=e,l=a(s,i,!1,n,null,null);t.exports=l.exports},"+eIH":function(t,o){var r=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",[r("el-button",{attrs:{loading:t.loading,size:"small",type:"primary"},on:{click:function(o){t.showModal=!0}}},[t._v(t._s(t.loading?"Loading Products":"Add Product(s)")+"\n  ")]),t._v(" "),r("el-dialog",{attrs:{title:(t.editForm?"Edit":"Add")+" Product","close-on-click-modal":!1,"before-close":t.closeAndClearModal,visible:t.showModal,width:"70%"},on:{"update:visible":function(o){t.showModal=o}}},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[r("el-form",{ref:"addProductForm",attrs:{"label-position":"top",model:t.form},nativeOn:{submit:function(t){t.preventDefault()}}},[t.editForm?t._e():r("div",{staticClass:"form_option_section"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:12}},[r("h5",[t._v("Product Type")])])],1),t._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:{span:16,offset:4}}},[r("el-form-item",{attrs:{label:"Choose Category",size:"small",prop:"productCategory"}},[r("div",[r("el-radio-group",{attrs:{size:"small"},model:{value:t.productCategory,callback:function(o){t.productCategory=o},expression:"productCategory"}},t._l(t.collectionToShow.types.data,function(o){return r("el-radio-button",{key:o.id,attrs:{label:o}},[t._v(t._s(o.name))])}))],1)])],1)],1),t._v(" "),r("el-row",{directives:[{name:"show",rawName:"v-show",value:t.productCategory,expression:"productCategory"}],attrs:{gutter:20}},[r("el-col",{attrs:{md:{span:16,offset:4}}},[r("el-form-item",{attrs:{label:"Choose Product",size:"small",prop:"productFirst"}},[r("div",[r("el-radio-group",{attrs:{size:"small"},model:{value:t.productFirst,callback:function(o){t.productFirst=o},expression:"productFirst"}},t._l(t.productsToShow,function(o){return r("el-radio-button",{key:o.id,attrs:{label:o}},[t._v(t._s(o.name))])}))],1)])],1)],1),t._v(" "),r("el-row",{directives:[{name:"show",rawName:"v-show",value:t.productFirst&&t.productVariantsToShow.length>=1,expression:"productFirst && productVariantsToShow.length >= 1"}],attrs:{gutter:20}},[r("el-col",{attrs:{md:{span:16,offset:4}}},[r("el-form-item",{attrs:{label:"Choose Variant",size:"small",prop:"product"}},[r("div",[r("el-radio-group",{attrs:{size:"small"},model:{value:t.form.product,callback:function(o){t.$set(t.form,"product",o)},expression:"form.product"}},t._l(t.productVariantsToShow,function(o){return r("el-radio-button",{key:o.id,attrs:{label:o}},[t._v(t._s(o.name))])}))],1)])],1)],1)],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.objectHas(t.form,"product.id"),expression:"objectHas(form, 'product.id')"}]},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:12}},[r("h5",[t._v("Quantity")])])],1),t._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:{span:16,offset:4}}},[r("el-form-item",{attrs:{label:"Quantity",size:"small",prop:"product.quantity"}},[r("el-select",{model:{value:t.form.product.quantity,callback:function(o){t.$set(t.form.product,"quantity",o)},expression:"form.product.quantity"}},t._l(t.quantityRange,function(t){return r("el-option",{key:t,attrs:{value:t}})}))],1)],1)],1)],1)]),t._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(o){t.closeAndClearModal(null)}}},[t._v(t._s(t.editForm?"Discard Changes":"Cancel"))]),t._v(" "),t.editForm?t._e():r("el-button",{attrs:{type:"primary"},on:{click:function(o){t.addProduct()}}},[t._v("Add Product")]),t._v(" "),t.editForm?r("el-button",{attrs:{type:"primary"},on:{click:function(o){t.saveProduct()}}},[t._v("Save Changes")]):t._e()],1)],1)])],1)},e=[];t.exports={render:r,staticRenderFns:e}},"+gaO":function(t,o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},a=r("GzQy"),s=function(t){return t&&t.__esModule?t:{default:t}}(a),i=r("NYxO"),n=r("8r4o"),l={product:{quantity:1,variants:{data:[],order_form:{}}}};o.default={name:"ProductAddForm",components:{Errors:function(){return r.e(20).then(r.bind(null,"DqGP"))}},props:{editForm:{type:Boolean,required:!1,default:function(){return!1}}},data:function(){return{loading:!0,showModal:!1,errors:{},form:l,productCategory:"",productFirst:"",collectionToShow:{types:{data:[]}}}},computed:e({},(0,i.mapGetters)(["shopData"]),{quantityRange:function(){return n(1,251)},productsToShow:function(){return this.productCategory?this.productCategory.products.data:[]},productVariantsToShow:function(){return this.productFirst?this.productFirst.variants.data:[]}}),watch:{productCategory:function(){this.productFirst=""},productFirst:function(t){this.objectHas(t,"variants.data")?t.variants.data.length>=1?this.form.product={}:this.form.product=t:this.form.product={}}},mounted:function(){this.getProductCollection()},methods:{getProductCollection:function(){if(this.shopData.collection_mappings_values){var t=this.shopData.collection_mappings_values["Product Categories Collection"];this.loading=!0,s.default.get({path:"collections/"+t,params:{include:["type","options","price","effects_price","no_shop_data"],with:["types.products.variants.orderForm.sections.fields"]}}).then(function(t){this.collectionToShow=t.data,this.loading=!1}.bind(this)).catch(function(t){this.loading=!1,this.errors=t}.bind(this))}},closeAndClearModal:function(){var t=this;this.$confirm("Are you sure to close the product selector?").then(function(o){t.clearAll(),t.showModal=!1}).catch(function(t){})},clearAll:function(){this.errors={},this.form=l,this.productCategory="",this.productFirst=""},addProduct:function(){},saveProduct:function(){}}}},"/vCo":function(t,o,r){o=t.exports=r("FZ+f")(void 0),o.push([t.i,"",""])},"U/yl":function(t,o,r){var e=r("/vCo");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);r("rjj0")("789f35b4",e,!0)}});