webpackJsonp([13],{"/sOc":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Quotes",components:{DataTable:function(){return r.e(32).then(r.bind(null,"bnM4"))}},props:{},data:function(){var t=this.$createElement;return{tableOptions:{collumns:[{prop:"id",sortable:!0,label:"ID",align:"left",resizable:!0},{prop:"name",sortable:!0,label:"Customer Name",formatter:function(t,e,r){return t.customer.full_name},align:"left",resizable:!0},{prop:"created_at.date",sortable:!0,label:"Order Placed",align:"left",resizable:!0},{prop:"items",sortable:!0,label:"Order Summary",align:"left",resizable:!0,formatter:function(e,r,a){var n=[];return e.items.forEach(function(e){n.push(t("li",[e.quantity+" * "+e.name]))}),t("ul",[n])}},{prop:"amount",sortable:!0,label:"Total",formatter:function(t,e,r){return t.cart.currency?t.cart.currency+t.cart.totals.Total:"-"},align:"left",resizable:!0},{prop:"status",sortable:!0,label:"Status",formatter:function(e,r,a){var n="Completed"==e.status?"success":"Processing"==e.status?"danger":"info";return t("el-tag",{attrs:{type:n,size:"medium"}},[e.status])},align:"left",resizable:!0}]}}},computed:{},watch:{},mounted:function(){},methods:{}}},"72vW":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"",""])},"7WUS":function(t,e,r){var a=r("72vW");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("23a42260",a,!0,{})},iOX2:function(t,e,r){var a=r("VU/8")(r("/sOc"),r("sV8P"),!1,function(t){r("7WUS")},null,null);t.exports=a.exports},sV8P:function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("data-table",{attrs:{"type-name":"quote","base-url":"orders","edit-path":"orders","bulk-update-url":"orders/bulk","with-params":{withStatus:"quote"},"request-with":"content","table-options":this.tableOptions,"request-includes":["created_at"],"create-form":{}}})},staticRenderFns:[]}}});