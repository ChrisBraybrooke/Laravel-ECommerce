webpackJsonp([19],{"Mjt+":function(e,r){var t=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[Object.keys(e.userErrors).length>0?t("errors",{attrs:{errors:e.userErrors}}):e._e(),e._v(" "),t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e.user.name?t("span",[e._v("Welcome, "),t("strong",[e._v(e._s(e.user.name.first))])]):e._e()])])],1)},n=[];e.exports={render:t,staticRenderFns:n}},"fjX/":function(e,r,t){r=e.exports=t("FZ+f")(void 0),r.push([e.i,"",""])},gmOI:function(e,r,t){var n=t("fjX/");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t("rjj0")("2462dad0",n,!0)},qyE7:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s=t("GzQy"),o=(function(e){e&&e.__esModule}(s),t("NYxO"));r.default={name:"Dashboard",components:{Errors:function(){return t.e(20).then(t.bind(null,"DqGP"))}},props:{},data:function(){return{loading:!1}},computed:n({},(0,o.mapGetters)(["user","userErrors"])),watch:{},mounted:function(){this.getUser()},methods:n({},(0,o.mapActions)(["getUser"]))}},thZJ:function(e,r,t){function n(e){t("gmOI")}var s=t("VU/8"),o=t("qyE7"),a=t("Mjt+"),i=n,c=s(o,a,!1,i,null,null);e.exports=c.exports}});