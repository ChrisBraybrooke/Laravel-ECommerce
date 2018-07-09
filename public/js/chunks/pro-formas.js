webpackJsonp([20],{"7qEn":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"",""])},"8rtG":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("P/uL");e.default={name:"ProFormas",components:{DataTable:function(){return r.e(32).then(r.bind(null,"bnM4"))}},props:{},data:function(){var t=this.$createElement;return{loading:!1,errors:{},tableOptions:{collumns:[{prop:"ref_number",sortable:!0,label:"Ref",align:"left",resizable:!0},{prop:"name",sortable:!0,label:"Customer",formatter:function(e,r,a){var o=this,s=[],i=[];return n(e.shipping_address,function(e,r){e&&i.push(e),s.push(t("li",[e]))}),t("el-popover",{attrs:{trigger:"hover",placement:"top"}},[t("ul",{class:"order_address_list table_col_list"},[s]),t("el-button",{attrs:{size:"mini",plain:!0},on:{click:function(){return o.copy(i.join(", "))}}},["Copy"]),t("div",{slot:"reference"},[t("strong",[e.customer.first_name," ",e.customer.last_name])])])}.bind(this),align:"left",resizable:!1},{prop:"created_at.date",sortable:!0,label:"Created",align:"left",resizable:!0},{prop:"items",sortable:!0,label:"Summary",align:"left",resizable:!1,formatter:function(e,r,a){var o=[],s=[];return n(e.items,function(e){Array(e.quantity).fill().map(function(t,e){return e*e}).forEach(function(){s.push(e.name)}),o.push(t("li",[e.quantity+" * "+e.name]))}),t("el-popover",{attrs:{trigger:"hover",placement:"top"}},[t("ul",{class:"order_items_list table_col_list"},[o]),t("div",{slot:"reference"},[t("strong",[s.length," items"])])])}},{prop:"amount",sortable:!0,label:"Total",formatter:function(t,e,r){return t.cart.currency?t.cart.currency+t.cart.totals.Total:"-"},align:"left",resizable:!0}]}}},computed:{},watch:{},mounted:function(){},methods:{}}},"A3+M":function(t,e,r){var n=r("VU/8")(r("8rtG"),r("JrYo"),!1,function(t){r("nJh9")},null,null);t.exports=n.exports},JrYo:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-table",{attrs:{"type-name":"pro-forma","base-url":"orders","edit-path":"pro-forma","bulk-update-url":"orders/bulk","with-params":{withStatus:["STATUS_PROFORMA","STATUS_DRAFT","STATUS_CANCELLED","STATUS_AWAITING_PAYMENT","STATUS_PAYMENT_FAILED"]},"request-with":"content","table-options":t.tableOptions,"request-includes":["created_at"],"create-form":{}},scopedSlots:t._u([{key:"actionButtons",fn:function(e){return[r("el-popover",{attrs:{trigger:"hover",placement:"top"}},[r("router-link",{attrs:{to:{path:e.editPathFormated+"/"+e.row.id}}},[r("el-button",{staticClass:"action_btn view_btn",attrs:{size:"mini",type:"success"}},[t._v("View\n                ")])],1),t._v(" "),r("a",{attrs:{href:"mailto:"+e.row.customer.email+"?subject=Order Ref "+e.row.ref_number+"&body=Hello "+e.row.customer.first_name+","}},[r("el-button",{staticClass:"action_btn view_btn",attrs:{size:"mini",plain:""}},[t._v("Email Customer\n                ")])],1),t._v(" "),r("a",{attrs:{href:"/ecommerce-templates/invoice-download?reports="+e.row.id,target:"_blank"}},[r("el-button",{staticClass:"action_btn view_btn",attrs:{size:"mini",plain:""}},[t._v("Download PDF\n                ")])],1),t._v(" "),r("el-button",{staticClass:"action_btn view_btn",attrs:{size:"mini",type:"danger"},on:{click:function(t){e.delete(e.row)}}},[t._v("Delete\n            ")]),t._v(" "),r("div",{attrs:{slot:"reference"},slot:"reference"},[r("el-button",{attrs:{size:"mini"}},[t._v("Actions")])],1)],1)]}}])},[r("template",{slot:"createButton"},[r("router-link",{attrs:{to:{name:"estimates.new"}}},[r("el-button",{staticClass:"create_btn",attrs:{type:"primary",plain:""}},[t._v("New Pro-Forma")])],1)],1)],2)},staticRenderFns:[]}},nJh9:function(t,e,r){var n=r("7qEn");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("3b5f913d",n,!0,{})}});