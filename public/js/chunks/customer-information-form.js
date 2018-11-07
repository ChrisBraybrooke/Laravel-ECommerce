webpackJsonp([41],{Umdc:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o,r=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t("GzQy"),l=(o=a)&&o.__esModule?o:{default:o};s.default={name:"CustomerInformationForm",components:{AddressForm:function(){return t.e(37).then(t.bind(null,"G1R4"))}},props:{form:{required:!0,type:Object}},data:function(){return{}},computed:{},watch:{},mounted:function(){this.form.billing_address.billing_address||(this.form.billing_address={country:"United Kingdom"}),this.form.shipping_address.billing_address||(this.form.shipping_address={country:"United Kingdom"})},methods:{getCustomers:function(e,s){l.default.get({path:"users",params:{search:e}}).then(function(e){s(e.data)}).catch(function(){})},resetCustomer:function(){this.form.customer.id=null,this.form.customer.company=null},handleCustomerSelect:function(e){this.form.customer.id=e.id,this.form.customer.first_name=e.name.first,this.form.customer.last_name=e.name.last,this.form.customer.phone=e.phone,this.form.customer.email=e.email,this.form.billing_address=r({},e.billing_address,this.form.billing_address),this.form.shipping_address=r({},e.shipping_address,this.form.shipping_address)}}}},gSwf:function(e,s,t){(e.exports=t("FZ+f")(!1)).push([e.i,"",""])},jTxB:function(e,s,t){var o=t("VU/8")(t("Umdc"),t("owR2"),!1,function(e){t("oBS7")},null,null);e.exports=o.exports},oBS7:function(e,s,t){var o=t("gSwf");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("rjj0")("46467590",o,!0,{})},owR2:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{md:{span:8,offset:4}}},[t("el-form-item",{attrs:{label:"Customer Company",size:"small",prop:"customer.company"}},[t("el-autocomplete",{attrs:{autofocus:!0,disabled:!!e.form.customer.id,"fetch-suggestions":e.getCustomers,"value-key":"email"},on:{select:e.handleCustomerSelect},model:{value:e.form.customer.company,callback:function(s){e.$set(e.form.customer,"company",s)},expression:"form.customer.company"}}),e._v(" "),e.form.customer.id?t("el-button",{attrs:{type:"warning",size:"mini"},on:{click:e.resetCustomer}},[e._v("Reset Customer")]):e._e()],1)],1)],1),e._v(" "),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{md:{span:8,offset:4}}},[t("el-form-item",{attrs:{label:"Customer First Name",size:"small",prop:"customer.first_name"}},[t("el-input",{attrs:{autofocus:!0,"auto-complete":"off"},model:{value:e.form.customer.first_name,callback:function(s){e.$set(e.form.customer,"first_name",s)},expression:"form.customer.first_name"}})],1)],1),e._v(" "),t("el-col",{attrs:{md:8}},[t("el-form-item",{attrs:{label:"Customer Last Name",size:"small",prop:"customer.last_name"}},[t("el-input",{attrs:{autofocus:!0,"auto-complete":"off"},model:{value:e.form.customer.last_name,callback:function(s){e.$set(e.form.customer,"last_name",s)},expression:"form.customer.last_name"}})],1)],1)],1),e._v(" "),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{md:{span:8,offset:4}}},[t("el-form-item",{attrs:{label:"Customer Phone",size:"small",prop:"customer.phone"}},[t("el-input",{attrs:{autofocus:!0,"auto-complete":"off"},model:{value:e.form.customer.phone,callback:function(s){e.$set(e.form.customer,"phone",s)},expression:"form.customer.phone"}})],1)],1),e._v(" "),t("el-col",{attrs:{md:8}},[t("el-form-item",{attrs:{label:"Customer Email",size:"small",prop:"customer.email"}},[t("el-input",{attrs:{autofocus:!0,"auto-complete":"off"},model:{value:e.form.customer.email,callback:function(s){e.$set(e.form.customer,"email",s)},expression:"form.customer.email"}})],1)],1)],1),e._v(" "),t("hr"),e._v(" "),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{md:{span:8,offset:4}}},[t("el-form-item",{attrs:{label:"Address",size:"small",prop:"needs_address"}},[t("div",[t("el-radio-group",{attrs:{size:"small"},model:{value:e.form.needs_address,callback:function(s){e.$set(e.form,"needs_address",s)},expression:"form.needs_address"}},[t("el-radio-button",{attrs:{label:"Needs Address"}}),e._v(" "),t("el-radio-button",{attrs:{label:"No Address"}})],1)],1)])],1)],1),e._v(" "),"Needs Address"===e.form.needs_address?t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{md:{span:8,offset:4}}},[t("h5",[e._v("Shipping Address")]),e._v(" "),t("address-form",{attrs:{offset:0,span:12,form:e.form.billing_address,prop:"billing_address"}})],1),e._v(" "),t("el-col",{attrs:{md:8}},[t("h5",[e._v("Billing Address")]),e._v(" "),e.form.use_billing_for_shipping?e._e():t("address-form",{attrs:{offset:0,span:12,form:e.form.shipping_address,prop:"shipping_address"}}),e._v(" "),t("el-col",{attrs:{md:{span:24}}},[t("el-checkbox",{model:{value:e.form.use_billing_for_shipping,callback:function(s){e.$set(e.form,"use_billing_for_shipping",s)},expression:"form.use_billing_for_shipping"}},[e._v("Same As Billing Address")])],1)],1)],1):e._e()],1)},staticRenderFns:[]}}});