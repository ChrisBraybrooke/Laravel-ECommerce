webpackJsonp([39],{"9URT":function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("a",{staticStyle:{float:"right","margin-bottom":"20px"},attrs:{href:t.downloadLink,target:"_blank"}},[e("el-button",{staticClass:"action_btn view_btn",attrs:{size:"small",plain:""}},[t._v("Download PDF\n    ")])],1),t._v(" "),e("el-button",{staticStyle:{float:"right","margin-bottom":"20px","margin-right":"10px"},attrs:{disabled:t.loading,size:"small",type:"success"},on:{click:t.printInvoice}},[t._v("Print\n  ")]),t._v(" "),e("iframe",{staticStyle:{position:"absolute",top:"-9999px",left:"-9999px",border:"0px",overfow:"none","z-index":"-1"},attrs:{id:"printLinkIframe",src:t.printUrl,name:"printLinkIframe"},on:{load:function(n){t.loading=!1}}})],1)},staticRenderFns:[]}},IhMH:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},o=e("NYxO");n.default={name:"PrintDownloadButton",components:{},props:{orderId:{type:[String,Number],required:!0}},data:function(){return{loading:!0}},computed:r({downloadLink:function(){return"/ecommerce-templates/invoice-download?reports="+this.orderId},printUrl:function(){return this.shopData.url+"/ecommerce-templates/invoice?reports="+this.orderId}},(0,o.mapGetters)(["shopData"])),watch:{},mounted:function(){},methods:{printInvoice:function(){navigator.userAgent.match(/opera/i)||navigator.userAgent.match(/trident/i)||navigator.userAgent.match(/msie/i)&&window.addEventListener?window.open(this.printUrl,"_blank"):(frames.printLinkIframe.focus(),frames.printLinkIframe.print())}}}},d1Qw:function(t,n,e){var r=e("VU/8")(e("IhMH"),e("9URT"),!1,function(t){e("h4/M")},null,null);t.exports=r.exports},"h4/M":function(t,n,e){var r=e("oy7c");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("3e264096",r,!0,{})},oy7c:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])}});