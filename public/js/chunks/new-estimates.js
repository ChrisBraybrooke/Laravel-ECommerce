webpackJsonp([23],{"+hWg":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(r("nCXa")),o=a(r("GzQy"));function a(e){return e&&e.__esModule?e:{default:e}}t.default={name:"NewEstimate",components:{ProductForm:function(){return r.e(36).then(r.bind(null,"mBvu"))},ProductTable:function(){return r.e(35).then(r.bind(null,"tAls"))},AddressForm:function(){return r.e(37).then(r.bind(null,"G1R4"))},Errors:function(){return r.e(30).then(r.bind(null,"DqGP"))}},data:function(){return{loading:!1,errors:{},order:{status:"Estimate",customer:{},shipping_rate:60,discount_rate:0,billing_address:{},shipping_address:{},items:[],cart:{totals:{Shipping:60,Discount:0}},use_billing_for_shipping:!1,needs_address:"No Address"}}},computed:{orderTotals:function(){return s.default.totals(this.order.items,this.order.cart.totals.Shipping,this.order.cart.totals.Discount)}},mounted:function(){},methods:{addProductToTable:function(e){this.order.items.push(e)},processSubmit:function(){var e=this;this.loading=!0,this.errors={},o.default.persist("post",{path:"orders",object:this.order}).then(function(t){e.loading=!1,e.$router.push({name:"orders.view",params:{orderId:t.data.id.toString()}})}).catch(function(t){e.loading=!1,e.errors=t})}}}},"3OGr":function(e,t,r){var s=r("VU/8")(r("+hWg"),r("9QO8"),!1,function(e){r("qcX7")},null,null);e.exports=s.exports},"9QO8":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[r("el-breadcrumb",{staticClass:"breadcrumbs",attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{name:"estimates"}}},[e._v("Estimates")]),e._v(" "),r("el-breadcrumb-item",[e._v("New Estimate")])],1),e._v(" "),r("el-row",{attrs:{align:"middle",type:"flex"}},[r("el-col",{attrs:{span:12}},[r("h1",{staticClass:"page_title"},[e._v("New Estimate")])])],1),e._v(" "),r("hr",{staticClass:"page_hr"}),e._v(" "),Object.keys(e.errors).length>0?r("errors",{attrs:{errors:e.errors}}):e._e(),e._v(" "),r("el-form",{ref:"orderForm",attrs:{"label-position":"top",model:e.order},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:{span:8,offset:4}}},[r("el-form-item",{attrs:{label:"Customer First Name",size:"small",prop:"customer.first_name"}},[r("el-input",{attrs:{autofocus:!0,"auto-complete":"off"},model:{value:e.order.customer.first_name,callback:function(t){e.$set(e.order.customer,"first_name",t)},expression:"order.customer.first_name"}})],1)],1),e._v(" "),r("el-col",{attrs:{md:8}},[r("el-form-item",{attrs:{label:"Customer Last Name",size:"small",prop:"customer.last_name"}},[r("el-input",{attrs:{autofocus:!0,"auto-complete":"off"},model:{value:e.order.customer.last_name,callback:function(t){e.$set(e.order.customer,"last_name",t)},expression:"order.customer.last_name"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:{span:8,offset:4}}},[r("el-form-item",{attrs:{label:"Customer Phone",size:"small",prop:"customer.phone"}},[r("el-input",{attrs:{autofocus:!0,"auto-complete":"off"},model:{value:e.order.customer.phone,callback:function(t){e.$set(e.order.customer,"phone",t)},expression:"order.customer.phone"}})],1)],1),e._v(" "),r("el-col",{attrs:{md:8}},[r("el-form-item",{attrs:{label:"Customer Email",size:"small",prop:"customer.email"}},[r("el-input",{attrs:{autofocus:!0,"auto-complete":"off"},model:{value:e.order.customer.email,callback:function(t){e.$set(e.order.customer,"email",t)},expression:"order.customer.email"}})],1)],1)],1),e._v(" "),r("hr"),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:{span:24}}},[r("el-form-item",{attrs:{label:"Address",size:"small",prop:"needs_address"}},[r("div",[r("el-radio-group",{attrs:{size:"small"},model:{value:e.order.needs_address,callback:function(t){e.$set(e.order,"needs_address",t)},expression:"order.needs_address"}},[r("el-radio-button",{attrs:{label:"Needs Address"}}),e._v(" "),r("el-radio-button",{attrs:{label:"No Address"}})],1)],1)])],1)],1),e._v(" "),"Needs Address"===e.order.needs_address?r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:12}},[r("h5",[e._v("Billing Adress")]),e._v(" "),r("address-form",{attrs:{form:e.order.billing_address,prop:"billing_address"}})],1),e._v(" "),r("el-col",{attrs:{md:12}},[r("h5",[e._v("Billing Adress")]),e._v(" "),r("el-col",{attrs:{md:{span:24}}},[r("el-checkbox",{model:{value:e.order.use_billing_for_shipping,callback:function(t){e.$set(e.order,"use_billing_for_shipping",t)},expression:"order.use_billing_for_shipping"}},[e._v("Same As Billing Address")])],1),e._v(" "),e.order.use_billing_for_shipping?e._e():r("address-form",{attrs:{form:e.order.shipping_address,prop:"shipping_address"}})],1)],1):e._e()],1),e._v(" "),r("el-row",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"},attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("product-form",{attrs:{"on-product-add":e.addProductToTable}})],1)],1),e._v(" "),e.order.items?r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("product-table",{attrs:{editable:!0,order:e.order,"order-totals":e.orderTotals}})],1)],1):e._e(),e._v(" "),r("el-row",{staticStyle:{"margin-top":"40px"},attrs:{gutter:20}},[r("el-col",{attrs:{md:{span:24}}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.processSubmit()}}},[e._v("Create Estimate")])],1)],1)],1)},staticRenderFns:[]}},qcX7:function(e,t,r){var s=r("tRjK");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r("rjj0")("4803fdde",s,!0,{})},tRjK:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"",""])}});