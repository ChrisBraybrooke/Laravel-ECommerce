webpackJsonp([8],{"+m4Q":function(t,r,e){(function(t,e){var n=200,o="Expected a function",i="__lodash_hash_undefined__",a=1,c=2,u=1/0,s=9007199254740991,f="[object Arguments]",l="[object Array]",d="[object Boolean]",p="[object Date]",_="[object Error]",m="[object Function]",h="[object GeneratorFunction]",v="[object Map]",b="[object Number]",y="[object Object]",g="[object RegExp]",j="[object Set]",w="[object String]",x="[object Symbol]",k="[object ArrayBuffer]",O="[object DataView]",S=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A=/^\w*$/,F=/^\./,E=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$=/\\(\\)?/g,z=/^\[object .+?Constructor\]$/,P=/^(?:0|[1-9]\d*)$/,C={};C["[object Float32Array]"]=C["[object Float64Array]"]=C["[object Int8Array]"]=C["[object Int16Array]"]=C["[object Int32Array]"]=C["[object Uint8Array]"]=C["[object Uint8ClampedArray]"]=C["[object Uint16Array]"]=C["[object Uint32Array]"]=!0,C[f]=C[l]=C[k]=C[d]=C[O]=C[p]=C[_]=C[m]=C[v]=C[b]=C[y]=C[g]=C[j]=C[w]=C["[object WeakMap]"]=!1;var I="object"==typeof t&&t&&t.Object===Object&&t,M="object"==typeof self&&self&&self.Object===Object&&self,R=I||M||Function("return this")(),D="object"==typeof r&&r&&!r.nodeType&&r,U=D&&"object"==typeof e&&e&&!e.nodeType&&e,G=U&&U.exports===D&&I.process,N=function(){try{return G&&G.binding("util")}catch(t){}}(),Q=N&&N.isTypedArray;function T(t,r){for(var e=-1,n=t?t.length:0,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o}function V(t,r){for(var e=-1,n=t?t.length:0;++e<n;)if(r(t[e],e,t))return!0;return!1}function q(t){return function(r){return t(r)}}function B(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function L(t){var r=-1,e=Array(t.size);return t.forEach(function(t,n){e[++r]=[n,t]}),e}function W(t){var r=-1,e=Array(t.size);return t.forEach(function(t){e[++r]=t}),e}var H,J,K,Z=Array.prototype,X=Function.prototype,Y=Object.prototype,tt=R["__core-js_shared__"],rt=(H=/[^.]+$/.exec(tt&&tt.keys&&tt.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"",et=X.toString,nt=Y.hasOwnProperty,ot=Y.toString,it=RegExp("^"+et.call(nt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),at=R.Symbol,ct=R.Uint8Array,ut=Y.propertyIsEnumerable,st=Z.splice,ft=(J=Object.keys,K=Object,function(t){return J(K(t))}),lt=Wt(R,"DataView"),dt=Wt(R,"Map"),pt=Wt(R,"Promise"),_t=Wt(R,"Set"),mt=Wt(R,"WeakMap"),ht=Wt(Object,"create"),vt=rr(lt),bt=rr(dt),yt=rr(pt),gt=rr(_t),jt=rr(mt),wt=at?at.prototype:void 0,xt=wt?wt.valueOf:void 0,kt=wt?wt.toString:void 0;function Ot(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function St(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function At(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Ft(t){var r=-1,e=t?t.length:0;for(this.__data__=new At;++r<e;)this.add(t[r])}function Et(t){this.__data__=new St(t)}function $t(t,r){var e=ir(t)||or(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var i in t)!r&&!nt.call(t,i)||o&&("length"==i||Jt(i,n))||e.push(i);return e}function zt(t,r){for(var e=t.length;e--;)if(nr(t[e][0],r))return e;return-1}Ot.prototype.clear=function(){this.__data__=ht?ht(null):{}},Ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Ot.prototype.get=function(t){var r=this.__data__;if(ht){var e=r[t];return e===i?void 0:e}return nt.call(r,t)?r[t]:void 0},Ot.prototype.has=function(t){var r=this.__data__;return ht?void 0!==r[t]:nt.call(r,t)},Ot.prototype.set=function(t,r){return this.__data__[t]=ht&&void 0===r?i:r,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var r=this.__data__,e=zt(r,t);return!(e<0)&&(e==r.length-1?r.pop():st.call(r,e,1),!0)},St.prototype.get=function(t){var r=this.__data__,e=zt(r,t);return e<0?void 0:r[e][1]},St.prototype.has=function(t){return zt(this.__data__,t)>-1},St.prototype.set=function(t,r){var e=this.__data__,n=zt(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},At.prototype.clear=function(){this.__data__={hash:new Ot,map:new(dt||St),string:new Ot}},At.prototype.delete=function(t){return Lt(this,t).delete(t)},At.prototype.get=function(t){return Lt(this,t).get(t)},At.prototype.has=function(t){return Lt(this,t).has(t)},At.prototype.set=function(t,r){return Lt(this,t).set(t,r),this},Ft.prototype.add=Ft.prototype.push=function(t){return this.__data__.set(t,i),this},Ft.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.clear=function(){this.__data__=new St},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,r){var e=this.__data__;if(e instanceof St){var o=e.__data__;if(!dt||o.length<n-1)return o.push([t,r]),this;e=this.__data__=new At(o)}return e.set(t,r),this};var Pt,Ct,It=(Pt=function(t,r){return t&&Mt(t,r,pr)},function(t,r){if(null==t)return t;if(!ar(t))return Pt(t,r);for(var e=t.length,n=Ct?e:-1,o=Object(t);(Ct?n--:++n<e)&&!1!==r(o[n],n,o););return t}),Mt=function(t){return function(r,e,n){for(var o=-1,i=Object(r),a=n(r),c=a.length;c--;){var u=a[t?c:++o];if(!1===e(i[u],u,i))break}return r}}();function Rt(t,r){for(var e=0,n=(r=Kt(r,t)?[r]:Vt(r)).length;null!=t&&e<n;)t=t[tr(r[e++])];return e&&e==n?t:void 0}function Dt(t,r){return null!=t&&r in Object(t)}function Ut(t,r,e,n,o){return t===r||(null==t||null==r||!sr(t)&&!fr(r)?t!==t&&r!==r:function(t,r,e,n,o,i){var u=ir(t),s=ir(r),m=l,h=l;u||(m=(m=Ht(t))==f?y:m);s||(h=(h=Ht(r))==f?y:h);var S=m==y&&!B(t),A=h==y&&!B(r),F=m==h;if(F&&!S)return i||(i=new Et),u||dr(t)?Bt(t,r,e,n,o,i):function(t,r,e,n,o,i,u){switch(e){case O:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case k:return!(t.byteLength!=r.byteLength||!n(new ct(t),new ct(r)));case d:case p:case b:return nr(+t,+r);case _:return t.name==r.name&&t.message==r.message;case g:case w:return t==r+"";case v:var s=L;case j:var f=i&c;if(s||(s=W),t.size!=r.size&&!f)return!1;var l=u.get(t);if(l)return l==r;i|=a,u.set(t,r);var m=Bt(s(t),s(r),n,o,i,u);return u.delete(t),m;case x:if(xt)return xt.call(t)==xt.call(r)}return!1}(t,r,m,e,n,o,i);if(!(o&c)){var E=S&&nt.call(t,"__wrapped__"),$=A&&nt.call(r,"__wrapped__");if(E||$){var z=E?t.value():t,P=$?r.value():r;return i||(i=new Et),e(z,P,n,o,i)}}if(!F)return!1;return i||(i=new Et),function(t,r,e,n,o,i){var a=o&c,u=pr(t),s=u.length,f=pr(r).length;if(s!=f&&!a)return!1;for(var l=s;l--;){var d=u[l];if(!(a?d in r:nt.call(r,d)))return!1}var p=i.get(t);if(p&&i.get(r))return p==r;var _=!0;i.set(t,r),i.set(r,t);for(var m=a;++l<s;){d=u[l];var h=t[d],v=r[d];if(n)var b=a?n(v,h,d,r,t,i):n(h,v,d,t,r,i);if(!(void 0===b?h===v||e(h,v,n,o,i):b)){_=!1;break}m||(m="constructor"==d)}if(_&&!m){var y=t.constructor,g=r.constructor;y!=g&&"constructor"in t&&"constructor"in r&&!("function"==typeof y&&y instanceof y&&"function"==typeof g&&g instanceof g)&&(_=!1)}return i.delete(t),i.delete(r),_}(t,r,e,n,o,i)}(t,r,Ut,e,n,o))}function Gt(t){return!(!sr(t)||rt&&rt in t)&&(cr(t)||B(t)?it:z).test(rr(t))}function Nt(t){return"function"==typeof t?t:null==t?_r:"object"==typeof t?ir(t)?function(t,r){if(Kt(t)&&Zt(r))return Xt(tr(t),r);return function(e){var n=function(t,r,e){var n=null==t?void 0:Rt(t,r);return void 0===n?e:n}(e,t);return void 0===n&&n===r?function(t,r){return null!=t&&function(t,r,e){var n,o=-1,i=(r=Kt(r,t)?[r]:Vt(r)).length;for(;++o<i;){var a=tr(r[o]);if(!(n=null!=t&&e(t,a)))break;t=t[a]}if(n)return n;return!!(i=t?t.length:0)&&ur(i)&&Jt(a,i)&&(ir(t)||or(t))}(t,r,Dt)}(e,t):Ut(r,n,void 0,a|c)}}(t[0],t[1]):function(t){var r=function(t){var r=pr(t),e=r.length;for(;e--;){var n=r[e],o=t[n];r[e]=[n,o,Zt(o)]}return r}(t);if(1==r.length&&r[0][2])return Xt(r[0][0],r[0][1]);return function(e){return e===t||function(t,r,e,n){var o=e.length,i=o,u=!n;if(null==t)return!i;for(t=Object(t);o--;){var s=e[o];if(u&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++o<i;){var f=(s=e[o])[0],l=t[f],d=s[1];if(u&&s[2]){if(void 0===l&&!(f in t))return!1}else{var p=new Et;if(n)var _=n(l,d,f,t,r,p);if(!(void 0===_?Ut(d,l,n,a|c,p):_))return!1}}return!0}(e,t,r)}}(t):Kt(r=t)?(e=tr(r),function(t){return null==t?void 0:t[e]}):function(t){return function(r){return Rt(r,t)}}(r);var r,e}function Qt(t){if(e=(r=t)&&r.constructor,n="function"==typeof e&&e.prototype||Y,r!==n)return ft(t);var r,e,n,o=[];for(var i in Object(t))nt.call(t,i)&&"constructor"!=i&&o.push(i);return o}function Tt(t,r,e){var n=-1;return r=T(r.length?r:[_r],q(Nt)),function(t,r){var e=t.length;for(t.sort(r);e--;)t[e]=t[e].value;return t}(function(t,r){var e=-1,n=ar(t)?Array(t.length):[];return It(t,function(t,o,i){n[++e]=r(t,o,i)}),n}(t,function(t,e,o){return{criteria:T(r,function(r){return r(t)}),index:++n,value:t}}),function(t,r){return function(t,r,e){var n=-1,o=t.criteria,i=r.criteria,a=o.length,c=e.length;for(;++n<a;){var u=qt(o[n],i[n]);if(u){if(n>=c)return u;var s=e[n];return u*("desc"==s?-1:1)}}return t.index-r.index}(t,r,e)})}function Vt(t){return ir(t)?t:Yt(t)}function qt(t,r){if(t!==r){var e=void 0!==t,n=null===t,o=t===t,i=lr(t),a=void 0!==r,c=null===r,u=r===r,s=lr(r);if(!c&&!s&&!i&&t>r||i&&a&&u&&!c&&!s||n&&a&&u||!e&&u||!o)return 1;if(!n&&!i&&!s&&t<r||s&&e&&o&&!n&&!i||c&&e&&o||!a&&o||!u)return-1}return 0}function Bt(t,r,e,n,o,i){var u=o&c,s=t.length,f=r.length;if(s!=f&&!(u&&f>s))return!1;var l=i.get(t);if(l&&i.get(r))return l==r;var d=-1,p=!0,_=o&a?new Ft:void 0;for(i.set(t,r),i.set(r,t);++d<s;){var m=t[d],h=r[d];if(n)var v=u?n(h,m,d,r,t,i):n(m,h,d,t,r,i);if(void 0!==v){if(v)continue;p=!1;break}if(_){if(!V(r,function(t,r){if(!_.has(r)&&(m===t||e(m,t,n,o,i)))return _.add(r)})){p=!1;break}}else if(m!==h&&!e(m,h,n,o,i)){p=!1;break}}return i.delete(t),i.delete(r),p}function Lt(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function Wt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Gt(e)?e:void 0}var Ht=function(t){return ot.call(t)};function Jt(t,r){return!!(r=null==r?s:r)&&("number"==typeof t||P.test(t))&&t>-1&&t%1==0&&t<r}function Kt(t,r){if(ir(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!lr(t))||(A.test(t)||!S.test(t)||null!=r&&t in Object(r))}function Zt(t){return t===t&&!sr(t)}function Xt(t,r){return function(e){return null!=e&&(e[t]===r&&(void 0!==r||t in Object(e)))}}(lt&&Ht(new lt(new ArrayBuffer(1)))!=O||dt&&Ht(new dt)!=v||pt&&"[object Promise]"!=Ht(pt.resolve())||_t&&Ht(new _t)!=j||mt&&"[object WeakMap]"!=Ht(new mt))&&(Ht=function(t){var r=ot.call(t),e=r==y?t.constructor:void 0,n=e?rr(e):void 0;if(n)switch(n){case vt:return O;case bt:return v;case yt:return"[object Promise]";case gt:return j;case jt:return"[object WeakMap]"}return r});var Yt=er(function(t){var r;t=null==(r=t)?"":function(t){if("string"==typeof t)return t;if(lr(t))return kt?kt.call(t):"";var r=t+"";return"0"==r&&1/t==-u?"-0":r}(r);var e=[];return F.test(t)&&e.push(""),t.replace(E,function(t,r,n,o){e.push(n?o.replace($,"$1"):r||t)}),e});function tr(t){if("string"==typeof t||lr(t))return t;var r=t+"";return"0"==r&&1/t==-u?"-0":r}function rr(t){if(null!=t){try{return et.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function er(t,r){if("function"!=typeof t||r&&"function"!=typeof r)throw new TypeError(o);var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],i=e.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return e.cache=i.set(o,a),a};return e.cache=new(er.Cache||At),e}function nr(t,r){return t===r||t!==t&&r!==r}function or(t){return function(t){return fr(t)&&ar(t)}(t)&&nt.call(t,"callee")&&(!ut.call(t,"callee")||ot.call(t)==f)}er.Cache=At;var ir=Array.isArray;function ar(t){return null!=t&&ur(t.length)&&!cr(t)}function cr(t){var r=sr(t)?ot.call(t):"";return r==m||r==h}function ur(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=s}function sr(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function fr(t){return!!t&&"object"==typeof t}function lr(t){return"symbol"==typeof t||fr(t)&&ot.call(t)==x}var dr=Q?q(Q):function(t){return fr(t)&&ur(t.length)&&!!C[ot.call(t)]};function pr(t){return ar(t)?$t(t):Qt(t)}function _r(t){return t}e.exports=function(t,r,e,n){return null==t?[]:(ir(r)||(r=null==r?[]:[r]),ir(e=n?void 0:e)||(e=null==e?[]:[e]),Tt(t,r,e))}}).call(r,e("DuR2"),e("3IRH")(t))},"3IRH":function(t,r){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},Gkt5:function(t,r,e){var n=e("mw9a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("1f7865be",n,!0,{})},Qvxn:function(t,r){t.exports={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[e("el-breadcrumb",{staticClass:"breadcrumbs",attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{name:"forms"}}},[t._v("Forms")]),t._v(" "),e("el-breadcrumb-item",[t._v(t._s(t.form.name))])],1),t._v(" "),e("el-row",{attrs:{align:"middle",type:"flex"}},[e("el-col",{attrs:{span:24}},[e("h1",{staticClass:"page_title"},[t._v(t._s(t.form.name))])])],1),t._v(" "),Object.keys(t.formErrors).length>0?e("errors",{attrs:{errors:t.formErrors}}):t._e(),t._v(" "),e("el-form",{ref:"formForm",attrs:{model:t.form,"label-position":"left","label-width":"120px"}},[e("el-row",{attrs:{type:"flex"}},[e("el-col",{attrs:{span:4}},[e("el-form-item",{attrs:{label:"Order Form",prop:"is_order_form",size:"small"}},[e("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.form.is_order_form,callback:function(r){t.$set(t.form,"is_order_form",r)},expression:"form.is_order_form"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:4}},[t.form.is_order_form?e("el-form-item",{attrs:{label:"Effects Price",prop:"effects_price",size:"small"}},[e("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.form.effects_price,callback:function(r){t.$set(t.form,"effects_price",r)},expression:"form.effects_price"}})],1):t._e()],1)],1),t._v(" "),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{lg:12,md:24}},[e("el-form-item",{attrs:{rules:[{required:!0,message:"Form name is required"}],label:"Form Name",size:"small",prop:"name"}},[e("el-input",{attrs:{autofocus:!0},model:{value:t.form.name,callback:function(r){t.$set(t.form,"name",r)},expression:"form.name"}})],1)],1)],1),t._v(" "),t.form.sections?t._l(t.orderedSections(),function(r){return e("el-card",{key:r.id,class:r.minimise?"product_variant_card box-card":"product_variant_card minimised box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("el-input",{staticStyle:{width:"200px"},attrs:{autofocus:!0,size:"mini"},model:{value:r.name,callback:function(e){t.$set(r,"name",e)},expression:"section.name"}}),t._v(" "),e("el-button",{staticStyle:{float:"right",padding:"4px 8px","margin-left":"5px"},attrs:{type:"primary"},on:{click:function(e){t.minimiseSectionCard(r)}}},[t._v("\n            "+t._s(r.minimise?"Minimise":"Maximise"))]),t._v(" "),e("el-button",{staticStyle:{float:"right",padding:"4px 8px"},attrs:{type:"danger"},on:{click:function(e){t.deleteSection(r)}}},[t._v("Delete")]),t._v(" "),e("el-input-number",{staticStyle:{float:"right","margin-top":"-2px"},attrs:{size:"mini"},model:{value:r.order,callback:function(e){t.$set(r,"order",e)},expression:"section.order"}})],1),t._v(" "),r.minimise?e("form-section-component",{attrs:{model:r,form:t.form}}):t._e()],1)}):t._e(),t._v(" "),e("el-button",{attrs:{type:"info",size:"small",icon:"el-icon-plus",plain:""},on:{click:function(r){t.addSection()}}},[t._v("Add Section")]),t._v(" "),e("hr",{staticClass:"page_hr"}),t._v(" "),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{sm:24}},[e("el-button",{attrs:{loading:t.loading,plain:"",type:"success"},on:{click:function(r){t.submitForm("formForm")}}},[t._v("Save")])],1)],1)],2)],1)},staticRenderFns:[]}},cAkK:function(t,r,e){var n=e("VU/8")(e("yrz0"),e("Qvxn"),!1,function(t){e("Gkt5")},null,null);t.exports=n.exports},mw9a:function(t,r,e){(t.exports=e("FZ+f")(!1)).push([t.i,".product_variant_card{margin:30px 0}.product_variant_card.minimised .el-card__body{padding:0!important}",""])},yrz0:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,o=e("GzQy"),i=(n=o)&&n.__esModule?n:{default:n};var a=e("+m4Q"),c=["sections.fields"],u=["order","rules","type","options","is_order_form","effects_price","description","append","prepend"];r.default={name:"ViewForm",components:{Errors:function(){return e.e(31).then(e.bind(null,"DqGP"))},FormSectionComponent:function(){return e.e(47).then(e.bind(null,"VtB8"))}},props:{formId:{type:[String,Number],required:!0}},data:function(){return{loading:!1,form:{},formErrors:{}}},computed:{},watch:{},mounted:function(){this.getForm()},methods:{getForm:function(){this.loading=!0,this.pageErrors={},i.default.get({path:"forms/"+this.formId,params:{with:c,include:u}}).then(function(t){this.loading=!1,this.form=t.data}.bind(this)).catch(function(t){this.loading=!1,this.formErrors=t}.bind(this))},submitForm:function(t){var r=this;this.$refs[t].validate(function(t){t&&(r.loading=!0,r.formErrors={},r.form.with=c,r.form.include=u,i.default.persist("put",{path:"forms/"+r.formId,object:r.form}).then(function(t){this.loading=!1,this.form=t.data,this.$message({message:"Form updated",type:"success",showClose:!0})}.bind(r)).catch(function(t){this.loading=!1,this.formErrors=t}.bind(r)))})},addSection:function(){this.form.sections.data.push({name:"New Section",order:1,minimise:!0,fields:{data:[]}})},orderedSections:function(){return this.form.sections.data.length>=1?a(this.form.sections.data,["order"],["asc"]):[]},minimiseSectionCard:function(t){var r=this.form.sections.data.indexOf(t),e=!this.form.sections.data[r].minimise;this.$set(this.form.sections.data[r],"minimise",e)},deleteSection:function(t){this.form.sections.data.splice(this.form.sections.data.indexOf(t),1)}}}}});