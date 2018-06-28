webpackJsonp([18],{"1m2T":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("product-page-layout",{attrs:{"product-id":t.productId,"current-page":"/products/"+t.productId,"request-with":["collectionTypes","content"],"request-includes":["live_at","slug","list_in_shop","featured"],"form-rules":t.productFormRules},scopedSlots:t._u([{key:"product_page",fn:function(e){return[o("el-row",{attrs:{type:"flex"}},[o("el-col",{attrs:{span:4}},[e.productForm.live_at?o("el-form-item",{attrs:{label:"Live",prop:"live_at.live",size:"small"}},[o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.productForm.live_at.live,callback:function(o){t.$set(e.productForm.live_at,"live",o)},expression:"props.productForm.live_at.live"}})],1):t._e()],1),t._v(" "),o("el-col",{attrs:{span:4}},[o("el-form-item",{attrs:{label:"List In Shop",prop:"list_in_shop",size:"small"}},[o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.productForm.list_in_shop,callback:function(o){t.$set(e.productForm,"list_in_shop",o)},expression:"props.productForm.list_in_shop"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:4}},[o("el-form-item",{attrs:{label:"Featured",prop:"featured",size:"small"}},[o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.productForm.featured,callback:function(o){t.$set(e.productForm,"featured",o)},expression:"props.productForm.featured"}})],1)],1)],1),t._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{lg:12,md:24}},[o("el-form-item",{attrs:{label:"Name",prop:"name",size:"small"}},[o("el-input",{attrs:{autofocus:!0},model:{value:e.productForm.name,callback:function(o){t.$set(e.productForm,"name",o)},expression:"props.productForm.name"}})],1)],1),t._v(" "),o("el-col",{attrs:{lg:12,md:24}},[o("el-form-item",{attrs:{label:"Slug / Url",prop:"slug",size:"small"}},[o("el-input",{model:{value:e.productForm.slug,callback:function(o){t.$set(e.productForm,"slug",o)},expression:"props.productForm.slug"}},[o("template",{slot:"prepend"},[t._v(t._s(t.getSiteBaseURL)+"products/")])],2)],1)],1)],1),t._v(" "),e.productForm.content?o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:24}},[e.productForm.content?o("content-component",{attrs:{content:e.productForm.content.data}}):t._e()],1)],1):t._e(),t._v(" "),Object.keys(t.collectionErrors).length>0?o("errors",{attrs:{errors:t.collectionErrors}}):t._e(),t._v(" "),o("el-row",{attrs:{gutter:20}},[t._l(t.collections,function(r){return[o("el-col",{attrs:{md:6,sm:12,xs:24}},[e.productForm.collections&&t.collections?o("el-form-item",{attrs:{label:r.name,prop:"collections.data.collection_types_sync"+[r.id-1],size:"small"}},[o("el-select",{staticClass:"collection_type_select",attrs:{filterable:"",multiple:"","allow-create":"",placeholder:"Select"},model:{value:e.productForm.collections.data.collection_types_sync[r.id],callback:function(o){t.$set(e.productForm.collections.data.collection_types_sync,r.id,o)},expression:"props.productForm.collections.data.collection_types_sync[collection.id]"}},t._l(r.types.data,function(t){return o("el-option",{key:t.name,attrs:{label:t.name,value:t.id}})}))],1):t._e()],1)]})],2)]}}])})],1)},staticRenderFns:[]}},"7FWL":function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,".collection_type_select[data-v-db761fda]{width:100%}.product_variant_card[data-v-db761fda]{margin:30px 0}.product_variant_card.minimised .el-card__body[data-v-db761fda]{padding:0!important}",""])},"8iwf":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,l=o("GzQy"),c=(r=l)&&r.__esModule?r:{default:r};e.default={name:"ViewProduct",components:{ProductPageLayout:function(){return o.e(32).then(o.bind(null,"98Ok"))},ContentComponent:function(){return o.e(33).then(o.bind(null,"6S5T"))}},props:{productId:{type:String,required:!0}},data:function(){return{collections:{},collectionErrors:{}}},computed:{productFormRules:function(){return{name:[{required:!0,message:"The product name field is required",trigger:"blur"}],slug:[{required:!0,message:"The product slug field is required",trigger:"blur"}]}}},watch:{},mounted:function(){this.getCollections()},methods:{getCollections:function(){c.default.get({path:"collections",params:{with:"types"}}).then(function(t){this.collections=t.data}.bind(this)).catch(function(t){this.collectionErrors=t}.bind(this))}}}},DUxO:function(t,e,o){var r=o("VU/8")(o("8iwf"),o("1m2T"),!1,function(t){o("vUm/")},"data-v-db761fda",null);t.exports=r.exports},"vUm/":function(t,e,o){var r=o("7FWL");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);o("rjj0")("5d065247",r,!0,{})}});