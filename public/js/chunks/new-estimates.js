webpackJsonp([24],{"3OGr":function(t,r,e){var o=e("VU/8")(e("Q+br"),e("UP+w"),!1,function(t){e("yhrK")},null,null);t.exports=o.exports},"Q+br":function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e("nCXa"),n=e("GzQy");function s(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}r.default={name:"NewEstimate",components:{NewProductForm:function(){return e.e(36).then(e.bind(null,"vseG"))},ProductTable:function(){return e.e(35).then(e.bind(null,"tAls"))},Errors:function(){return e.e(31).then(e.bind(null,"DqGP"))},CustomerInformationForm:function(){return e.e(40).then(e.bind(null,"jTxB"))},OrderRef:function(){return e.e(39).then(e.bind(null,"nguq"))}},props:{isProForma:{type:Boolean,required:!1,default:function(){return!1}}},data:function(){return{loading:!1,errors:{},order:{status:null,customer:{},shipping_rate:60,discount_rate:0,billing_address:{},shipping_address:{},items:[],cart:{totals:{Shipping:60,Discount:0}},use_billing_for_shipping:!1,needs_address:"No Address"}}},computed:{orderTotals:function(){return o.a.totals(this.order.items,this.order.cart.totals.Shipping,this.order.cart.totals.Discount)},documentName:function(){return this.isProForma?"Pro-Forma":"Estimate"}},mounted:function(){this.order.status=this.documentName},methods:{addProductToTable:function(t){this.order.items.push(t)},updateProductOnTable:function(t){},processSubmit:function(){var t=this;this.loading=!0,this.errors={},n.a.persist("post",{path:"orders",object:this.order}).then(function(r){t.loading=!1,t.$router.push({name:"orders.view",params:{orderId:r.data.id.toString()}})}).catch(function(r){t.loading=!1,t.errors=r})},handleProductUpdate:function(t){var r=function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(r){s(t,r,e[r])})}return t}({},this.order.items[t.index],t.product);this.order.items.splice(t.index,1,r)}}}},"UP+w":function(t,r){t.exports={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[e("el-breadcrumb",{staticClass:"breadcrumbs",attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{name:"estimates"}}},[t._v("Estimates")]),t._v(" "),e("el-breadcrumb-item",[t._v("New "+t._s(t.documentName))])],1),t._v(" "),e("el-row",{attrs:{align:"middle",type:"flex"}},[e("el-col",{attrs:{span:12}},[e("h1",{staticClass:"page_title"},[t._v("New "+t._s(t.documentName)+" "+t._s(t.order.ref?"- "+t.order.ref:""))])])],1),t._v(" "),e("hr",{staticClass:"page_hr"}),t._v(" "),Object.keys(t.errors).length>0?e("errors",{attrs:{errors:t.errors}}):t._e(),t._v(" "),e("el-form",{ref:"orderForm",attrs:{model:t.order,"label-position":"top"},nativeOn:{submit:function(t){t.preventDefault()}}},[e("order-ref",{attrs:{form:t.order}}),t._v(" "),e("hr"),t._v(" "),e("customer-information-form",{attrs:{form:t.order}})],1),t._v(" "),e("el-row",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"},attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("new-product-form",{attrs:{"on-product-add":t.addProductToTable}})],1)],1),t._v(" "),t.order.items?e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:24}},[e("product-table",{attrs:{editable:!0,order:t.order,"order-totals":t.orderTotals,"on-product-update":t.handleProductUpdate}})],1)],1):t._e(),t._v(" "),e("el-row",{staticStyle:{"margin-top":"40px"},attrs:{gutter:20}},[e("el-col",{attrs:{md:{span:24}}},[e("el-button",{attrs:{type:"primary"},on:{click:function(r){t.processSubmit()}}},[t._v("Create "+t._s(t.documentName))])],1)],1)],1)},staticRenderFns:[]}},jG7f:function(t,r,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])},yhrK:function(t,r,e){var o=e("jG7f");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("a9443190",o,!0,{})}});