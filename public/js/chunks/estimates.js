webpackJsonp([26],{"7YHC":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"ul.order_address_list{list-style:none;-webkit-margin-before:0;-webkit-padding-start:0}",""])},XFTX:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-table",{attrs:{"type-name":"estimate","base-url":"orders","edit-path":"estimates","bulk-update-url":"orders/bulk","with-params":{withStatus:"estimate"},"request-with":"content","table-options":t.tableOptions,"request-includes":["created_at"],"create-form":{}},scopedSlots:t._u([{key:"actionButtons",fn:function(e){return[r("el-popover",{attrs:{trigger:"hover",placement:"top"}},[r("router-link",{attrs:{to:{path:e.editPathFormated+"/"+e.row.id}}},[r("el-button",{staticClass:"action_btn view_btn",attrs:{size:"mini",type:"success"}},[t._v("View\n                ")])],1),t._v(" "),r("a",{attrs:{href:"mailto:"+e.row.customer.email+"?subject=Order Ref "+e.row.ref_number+"&body=Hello "+e.row.customer.first_name+","}},[r("el-button",{staticClass:"action_btn view_btn",attrs:{size:"mini",plain:""}},[t._v("Email Customer\n                ")])],1),t._v(" "),r("a",{attrs:{href:"/ecommerce-templates/invoice-download?reports="+e.row.id,target:"_blank"}},[r("el-button",{staticClass:"action_btn view_btn",attrs:{size:"mini",plain:""}},[t._v("Download PDF\n                ")])],1),t._v(" "),r("el-button",{staticClass:"action_btn view_btn",attrs:{size:"mini",type:"danger"},on:{click:function(t){e.delete(e.row)}}},[t._v("Delete\n            ")]),t._v(" "),r("div",{attrs:{slot:"reference"},slot:"reference"},[r("el-button",{attrs:{size:"mini"}},[t._v("Actions")])],1)],1)]}}])},[r("template",{slot:"createButton"},[r("router-link",{attrs:{to:{name:"estimates.new"}}},[r("el-button",{staticClass:"create_btn",attrs:{type:"primary",plain:""}},[t._v("New Estimate")])],1)],1)],2)},staticRenderFns:[]}},YS0X:function(t,e,r){var n=r("VU/8")(r("mITc"),r("XFTX"),!1,function(t){r("c0HM")},null,null);t.exports=n.exports},c0HM:function(t,e,r){var n=r("7YHC");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("421ba0c7",n,!0,{})},mITc:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=r("GzQy"),s=(n=a)&&n.__esModule?n:{default:n};var o=r("P/uL");e.default={name:"Estimates",components:{DataTable:function(){return r.e(32).then(r.bind(null,"bnM4"))}},props:{},data:function(){var t=this.$createElement;return{loading:!1,errors:{},tableOptions:{collumns:[{prop:"ref_number",sortable:!0,label:"Ref",align:"left",resizable:!0},{prop:"name",sortable:!0,label:"Customer",formatter:function(e,r,n){var a=this,s=[],i=[];return o(e.shipping_address,function(e,r){e&&i.push(e),s.push(t("li",[e]))}),t("el-popover",{attrs:{trigger:"hover",placement:"top"}},[t("ul",{class:"order_address_list table_col_list"},[s]),t("el-button",{attrs:{size:"mini",plain:!0},on:{click:function(){return a.copy(i.join(", "))}}},["Copy"]),t("div",{slot:"reference"},[t("strong",[e.customer.first_name," ",e.customer.last_name])])])}.bind(this),align:"left",resizable:!1},{prop:"created_at.date",sortable:!0,label:"Created",align:"left",resizable:!0},{prop:"items",sortable:!0,label:"Summary",align:"left",resizable:!1,formatter:function(e,r,n){var a=[],s=[];return o(e.items,function(e){Array(e.quantity).fill().map(function(t,e){return e*e}).forEach(function(){s.push(e.name)}),a.push(t("li",[e.quantity+" * "+e.name]))}),t("el-popover",{attrs:{trigger:"hover",placement:"top"}},[t("ul",{class:"order_items_list table_col_list"},[a]),t("div",{slot:"reference"},[t("strong",[s.length," items"])])])}},{prop:"amount",sortable:!0,label:"Total",formatter:function(t,e,r){return t.cart.currency?t.cart.currency+t.cart.totals.Total:"-"},align:"left",resizable:!0},{prop:"invoice",sortable:!0,label:"Create Invoice",formatter:function(e,r,n){var a=this;return t("el-button",{on:{click:function(){return a.createInvoice(e)}},attrs:{type:"success",size:"mini",plain:!0},class:"action_btn"},["Create Invoice"])}.bind(this),align:"left",resizable:!0}]}}},computed:{},watch:{},mounted:function(){},methods:{createInvoice:function(t){var e=this,r=window.ecommerceConfig.orders.statuses;t.status=r.STATUS_AWAITING_PAYMENT,s.default.persist("put",{path:"orders/"+t.id,object:t}).then(function(t){e.$router.push({name:"orders"})}).catch(function(t){})}}}}});