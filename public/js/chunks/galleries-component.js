webpackJsonp([37],{"+ZnI":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("GzQy"),i=r("etT0"),a=r("9aGw");t.default={name:"GalleriesComponent",components:{GalleryComponent:function(){return r.e(42).then(r.bind(null,"8NjY"))},Errors:function(){return r.e(31).then(r.bind(null,"DqGP"))}},props:{selectable:{type:Number,required:!1,default:function(){}},inModal:{type:Boolean,required:!1,default:function(){return!1}}},data:function(){return{galleries:[],tabIndex:2,createGalleryForm:{},createGalleryRules:{},showGallery:{},gallerySelectable:{},loading:!1,currentTab:"",files:{},deleteGalleryPopoverVisible:!1,addGalleryPopoverVisible:!1,errors:{},selectedFiles:{}}},computed:{},watch:{},mounted:function(){this.getGalleries()},methods:{setCurrentGallery:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t||(t=a(this.galleries)),t&&(this.currentTab=t.id.toString(),e&&this.getFiles(t))},getGalleries:function(){this.loading=!0,n.a.get({path:"galleries"}).then(function(e){this.galleries=e.data,this.loading=!1,this.setCurrentGallery(!0)}.bind(this)).catch(function(){this.loading=!1}.bind(this))},getFiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e||(e=this.getGalleryFromTabIndex(this.currentTab)),e?(this.loading=!0,this.$set(this.showGallery,e.id,{show:!1}),n.a.get({path:"galleries/"+e.id+"/media",params:{limit:24,search:t}}).then(function(t){this.loading=!1,this.errors={},this.$set(this.gallerySelectable,e.id,this.selectable),this.$set(this.files,e.id,t.data);var r=this.getGalleriesArrayIndex(e.id);this.galleries[r].meta=t.meta,this.$set(this.showGallery,e.id,{show:!0})}.bind(this)).catch(function(e){this.errors=e,this.loading=!1}.bind(this))):this.errors={message:"No gallery selected."}},createGallery:function(){var e=this;this.loading=!0,this.createGalleryRules={name:[{required:!0,message:"Gallery name is required"}]},this.$refs.createGallery.validate(function(t){t&&n.a.persist("post",{path:"galleries",object:e.createGalleryForm}).then(function(e){this.galleries.unshift(e.data),this.createGalleryRules={},this.setCurrentGallery(!0,e.data),this.loading=!1,this.addGalleryPopoverVisible=!1,this.$refs.createGalleryName.resetField()}.bind(e)).catch(function(){this.loading=!1}.bind(e))})},deleteGallery:function(e){this.loading=!0;var t=this.getGalleryFromTabIndex(e);t?n.a.delete({path:"galleries/"+t.id}).then(function(){this.galleries.splice(this.galleries.indexOf(t),1),this.loading=!1}.bind(this)).catch(function(){this.loading=!1}.bind(this)):this.loading=!1},handleTabClick:function(e){var t=this.getGalleryFromTabIndex(e.name);t&&this.setCurrentGallery(!0,t)},getGalleryFromTabIndex:function(e){if(e){var t=i(this.galleries,function(t){return t.id===parseInt(e)});return-1===t?null:this.galleries[t]}return null},getGalleriesArrayIndex:function(e){if(e){var t=i(this.galleries,function(t){return t.id===e});return-1===t?null:t}return null},handleFileSelected:function(e){this.files[e.gallery].unshift(e.file)},handleFileDeleted:function(e){this.files[e.gallery].splice(this.files[e.gallery].indexOf(e.file),1)},handleFileHighlighted:function(e){this.selectedFiles=e.selectedFiles,this.$emit("fileHighlighted",e)},handleFileUploadSuccess:function(e){var t=i(this.files[e.gallery],function(t){return t.uid===e.data.file.uid}),r=this.getGalleriesArrayIndex(e.gallery);null!==r&&(this.galleries[r].meta.total=this.galleries[r].meta.total+1),this.files[e.gallery][t].id=e.data.response.data.id,this.files[e.gallery][t].url=e.data.response.data.url,this.errors={}},handleFileUploadError:function(e){this.errors=n.a.errorAdapter(e.error),setTimeout(function(){this.files[e.gallery].splice(this.files[e.gallery].indexOf(e.file),1),this.errors={}}.bind(this),3e3)},handleFileUnHighlighted:function(e){this.selectedFiles=e.selectedFiles,this.$emit("fileUnHighlighted",e)},handleMediaSearch:function(e){}}}},"3IRH":function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"3mbr":function(e,t,r){var n=r("Q7li");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r("rjj0")("2de2f2b6",n,!0,{})},"4qxA":function(e,t,r){var n=r("VU/8")(r("+ZnI"),r("sIl2"),!1,function(e){r("3mbr")},null,null);e.exports=n.exports},"9aGw":function(e,t){e.exports=function(e){return e&&e.length?e[0]:void 0}},Q7li:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"",""])},etT0:function(e,t,r){(function(e,r){var n=200,i="Expected a function",a="__lodash_hash_undefined__",l=1,o=2,u=1/0,c=9007199254740991,s=1.7976931348623157e308,f=NaN,d="[object Arguments]",h="[object Array]",p="[object Boolean]",y="[object Date]",v="[object Error]",g="[object Function]",b="[object GeneratorFunction]",_="[object Map]",m="[object Number]",G="[object Object]",j="[object RegExp]",w="[object Set]",F="[object String]",x="[object Symbol]",k="[object ArrayBuffer]",O="[object DataView]",P=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,S=/^\w*$/,A=/^\./,$=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,I=/^\s+|\s+$/g,T=/\\(\\)?/g,C=/^[-+]0x[0-9a-f]+$/i,U=/^0b[01]+$/i,E=/^\[object .+?Constructor\]$/,V=/^0o[0-7]+$/i,M=/^(?:0|[1-9]\d*)$/,N={};N["[object Float32Array]"]=N["[object Float64Array]"]=N["[object Int8Array]"]=N["[object Int16Array]"]=N["[object Int32Array]"]=N["[object Uint8Array]"]=N["[object Uint8ClampedArray]"]=N["[object Uint16Array]"]=N["[object Uint32Array]"]=!0,N[d]=N[h]=N[k]=N[p]=N[O]=N[y]=N[v]=N[g]=N[_]=N[m]=N[G]=N[j]=N[w]=N[F]=N["[object WeakMap]"]=!1;var R=parseInt,H="object"==typeof e&&e&&e.Object===Object&&e,z="object"==typeof self&&self&&self.Object===Object&&self,D=H||z||Function("return this")(),q="object"==typeof t&&t&&!t.nodeType&&t,B=q&&"object"==typeof r&&r&&!r.nodeType&&r,L=B&&B.exports===q&&H.process,W=function(){try{return L&&L.binding("util")}catch(e){}}(),Q=W&&W.isTypedArray;function Z(e,t){for(var r=-1,n=e?e.length:0;++r<n;)if(t(e[r],r,e))return!0;return!1}function J(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function Y(e){var t=-1,r=Array(e.size);return e.forEach(function(e,n){r[++t]=[n,e]}),r}function K(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}var X,ee,te,re=Array.prototype,ne=Function.prototype,ie=Object.prototype,ae=D["__core-js_shared__"],le=(X=/[^.]+$/.exec(ae&&ae.keys&&ae.keys.IE_PROTO||""))?"Symbol(src)_1."+X:"",oe=ne.toString,ue=ie.hasOwnProperty,ce=ie.toString,se=RegExp("^"+oe.call(ue).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),fe=D.Symbol,de=D.Uint8Array,he=ie.propertyIsEnumerable,pe=re.splice,ye=(ee=Object.keys,te=Object,function(e){return ee(te(e))}),ve=Math.max,ge=We(D,"DataView"),be=We(D,"Map"),_e=We(D,"Promise"),me=We(D,"Set"),Ge=We(D,"WeakMap"),je=We(Object,"create"),we=tt(ge),Fe=tt(be),xe=tt(_e),ke=tt(me),Oe=tt(Ge),Pe=fe?fe.prototype:void 0,Se=Pe?Pe.valueOf:void 0,Ae=Pe?Pe.toString:void 0;function $e(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ie(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Te(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ce(e){var t=-1,r=e?e.length:0;for(this.__data__=new Te;++t<r;)this.add(e[t])}function Ue(e){this.__data__=new Ie(e)}function Ee(e,t){var r=at(e)||it(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,i=!!n;for(var a in e)!t&&!ue.call(e,a)||i&&("length"==a||Ze(a,n))||r.push(a);return r}function Ve(e,t){for(var r=e.length;r--;)if(nt(e[r][0],t))return r;return-1}function Me(e,t){for(var r=0,n=(t=Je(t,e)?[t]:qe(t)).length;null!=e&&r<n;)e=e[et(t[r++])];return r&&r==n?e:void 0}function Ne(e,t){return null!=e&&t in Object(e)}function Re(e,t,r,n,i){return e===t||(null==e||null==t||!ct(e)&&!st(t)?e!==e&&t!==t:function(e,t,r,n,i,a){var u=at(e),c=at(t),s=h,f=h;u||(s=(s=Qe(e))==d?G:s);c||(f=(f=Qe(t))==d?G:f);var g=s==G&&!J(e),b=f==G&&!J(t),P=s==f;if(P&&!g)return a||(a=new Ue),u||dt(e)?Be(e,t,r,n,i,a):function(e,t,r,n,i,a,u){switch(r){case O:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case k:return!(e.byteLength!=t.byteLength||!n(new de(e),new de(t)));case p:case y:case m:return nt(+e,+t);case v:return e.name==t.name&&e.message==t.message;case j:case F:return e==t+"";case _:var c=Y;case w:var s=a&o;if(c||(c=K),e.size!=t.size&&!s)return!1;var f=u.get(e);if(f)return f==t;a|=l,u.set(e,t);var d=Be(c(e),c(t),n,i,a,u);return u.delete(e),d;case x:if(Se)return Se.call(e)==Se.call(t)}return!1}(e,t,s,r,n,i,a);if(!(i&o)){var S=g&&ue.call(e,"__wrapped__"),A=b&&ue.call(t,"__wrapped__");if(S||A){var $=S?e.value():e,I=A?t.value():t;return a||(a=new Ue),r($,I,n,i,a)}}if(!P)return!1;return a||(a=new Ue),function(e,t,r,n,i,a){var l=i&o,u=ht(e),c=u.length,s=ht(t).length;if(c!=s&&!l)return!1;for(var f=c;f--;){var d=u[f];if(!(l?d in t:ue.call(t,d)))return!1}var h=a.get(e);if(h&&a.get(t))return h==t;var p=!0;a.set(e,t),a.set(t,e);for(var y=l;++f<c;){d=u[f];var v=e[d],g=t[d];if(n)var b=l?n(g,v,d,t,e,a):n(v,g,d,e,t,a);if(!(void 0===b?v===g||r(v,g,n,i,a):b)){p=!1;break}y||(y="constructor"==d)}if(p&&!y){var _=e.constructor,m=t.constructor;_!=m&&"constructor"in e&&"constructor"in t&&!("function"==typeof _&&_ instanceof _&&"function"==typeof m&&m instanceof m)&&(p=!1)}return a.delete(e),a.delete(t),p}(e,t,r,n,i,a)}(e,t,Re,r,n,i))}function He(e){return!(!ct(e)||le&&le in e)&&(ot(e)||J(e)?se:E).test(tt(e))}function ze(e){return"function"==typeof e?e:null==e?pt:"object"==typeof e?at(e)?function(e,t){if(Je(e)&&Ye(t))return Ke(et(e),t);return function(r){var n=function(e,t,r){var n=null==e?void 0:Me(e,t);return void 0===n?r:n}(r,e);return void 0===n&&n===t?function(e,t){return null!=e&&function(e,t,r){var n,i=-1,a=(t=Je(t,e)?[t]:qe(t)).length;for(;++i<a;){var l=et(t[i]);if(!(n=null!=e&&r(e,l)))break;e=e[l]}if(n)return n;return!!(a=e?e.length:0)&&ut(a)&&Ze(l,a)&&(at(e)||it(e))}(e,t,Ne)}(r,e):Re(t,n,void 0,l|o)}}(e[0],e[1]):function(e){var t=function(e){var t=ht(e),r=t.length;for(;r--;){var n=t[r],i=e[n];t[r]=[n,i,Ye(i)]}return t}(e);if(1==t.length&&t[0][2])return Ke(t[0][0],t[0][1]);return function(r){return r===e||function(e,t,r,n){var i=r.length,a=i,u=!n;if(null==e)return!a;for(e=Object(e);i--;){var c=r[i];if(u&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++i<a;){var s=(c=r[i])[0],f=e[s],d=c[1];if(u&&c[2]){if(void 0===f&&!(s in e))return!1}else{var h=new Ue;if(n)var p=n(f,d,s,e,t,h);if(!(void 0===p?Re(d,f,n,l|o,h):p))return!1}}return!0}(r,e,t)}}(e):Je(t=e)?(r=et(t),function(e){return null==e?void 0:e[r]}):function(e){return function(t){return Me(t,e)}}(t);var t,r}function De(e){if(r=(t=e)&&t.constructor,n="function"==typeof r&&r.prototype||ie,t!==n)return ye(e);var t,r,n,i=[];for(var a in Object(e))ue.call(e,a)&&"constructor"!=a&&i.push(a);return i}function qe(e){return at(e)?e:Xe(e)}function Be(e,t,r,n,i,a){var u=i&o,c=e.length,s=t.length;if(c!=s&&!(u&&s>c))return!1;var f=a.get(e);if(f&&a.get(t))return f==t;var d=-1,h=!0,p=i&l?new Ce:void 0;for(a.set(e,t),a.set(t,e);++d<c;){var y=e[d],v=t[d];if(n)var g=u?n(v,y,d,t,e,a):n(y,v,d,e,t,a);if(void 0!==g){if(g)continue;h=!1;break}if(p){if(!Z(t,function(e,t){if(!p.has(t)&&(y===e||r(y,e,n,i,a)))return p.add(t)})){h=!1;break}}else if(y!==v&&!r(y,v,n,i,a)){h=!1;break}}return a.delete(e),a.delete(t),h}function Le(e,t){var r,n,i=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof t?"string":"hash"]:i.map}function We(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return He(r)?r:void 0}$e.prototype.clear=function(){this.__data__=je?je(null):{}},$e.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},$e.prototype.get=function(e){var t=this.__data__;if(je){var r=t[e];return r===a?void 0:r}return ue.call(t,e)?t[e]:void 0},$e.prototype.has=function(e){var t=this.__data__;return je?void 0!==t[e]:ue.call(t,e)},$e.prototype.set=function(e,t){return this.__data__[e]=je&&void 0===t?a:t,this},Ie.prototype.clear=function(){this.__data__=[]},Ie.prototype.delete=function(e){var t=this.__data__,r=Ve(t,e);return!(r<0)&&(r==t.length-1?t.pop():pe.call(t,r,1),!0)},Ie.prototype.get=function(e){var t=this.__data__,r=Ve(t,e);return r<0?void 0:t[r][1]},Ie.prototype.has=function(e){return Ve(this.__data__,e)>-1},Ie.prototype.set=function(e,t){var r=this.__data__,n=Ve(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},Te.prototype.clear=function(){this.__data__={hash:new $e,map:new(be||Ie),string:new $e}},Te.prototype.delete=function(e){return Le(this,e).delete(e)},Te.prototype.get=function(e){return Le(this,e).get(e)},Te.prototype.has=function(e){return Le(this,e).has(e)},Te.prototype.set=function(e,t){return Le(this,e).set(e,t),this},Ce.prototype.add=Ce.prototype.push=function(e){return this.__data__.set(e,a),this},Ce.prototype.has=function(e){return this.__data__.has(e)},Ue.prototype.clear=function(){this.__data__=new Ie},Ue.prototype.delete=function(e){return this.__data__.delete(e)},Ue.prototype.get=function(e){return this.__data__.get(e)},Ue.prototype.has=function(e){return this.__data__.has(e)},Ue.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Ie){var i=r.__data__;if(!be||i.length<n-1)return i.push([e,t]),this;r=this.__data__=new Te(i)}return r.set(e,t),this};var Qe=function(e){return ce.call(e)};function Ze(e,t){return!!(t=null==t?c:t)&&("number"==typeof e||M.test(e))&&e>-1&&e%1==0&&e<t}function Je(e,t){if(at(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ft(e))||(S.test(e)||!P.test(e)||null!=t&&e in Object(t))}function Ye(e){return e===e&&!ct(e)}function Ke(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}}(ge&&Qe(new ge(new ArrayBuffer(1)))!=O||be&&Qe(new be)!=_||_e&&"[object Promise]"!=Qe(_e.resolve())||me&&Qe(new me)!=w||Ge&&"[object WeakMap]"!=Qe(new Ge))&&(Qe=function(e){var t=ce.call(e),r=t==G?e.constructor:void 0,n=r?tt(r):void 0;if(n)switch(n){case we:return O;case Fe:return _;case xe:return"[object Promise]";case ke:return w;case Oe:return"[object WeakMap]"}return t});var Xe=rt(function(e){var t;e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(ft(e))return Ae?Ae.call(e):"";var t=e+"";return"0"==t&&1/e==-u?"-0":t}(t);var r=[];return A.test(e)&&r.push(""),e.replace($,function(e,t,n,i){r.push(n?i.replace(T,"$1"):t||e)}),r});function et(e){if("string"==typeof e||ft(e))return e;var t=e+"";return"0"==t&&1/e==-u?"-0":t}function tt(e){if(null!=e){try{return oe.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function rt(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError(i);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var l=e.apply(this,n);return r.cache=a.set(i,l),l};return r.cache=new(rt.Cache||Te),r}function nt(e,t){return e===t||e!==e&&t!==t}function it(e){return function(e){return st(e)&&lt(e)}(e)&&ue.call(e,"callee")&&(!he.call(e,"callee")||ce.call(e)==d)}rt.Cache=Te;var at=Array.isArray;function lt(e){return null!=e&&ut(e.length)&&!ot(e)}function ot(e){var t=ct(e)?ce.call(e):"";return t==g||t==b}function ut(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=c}function ct(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function st(e){return!!e&&"object"==typeof e}function ft(e){return"symbol"==typeof e||st(e)&&ce.call(e)==x}var dt=Q?function(e){return function(t){return e(t)}}(Q):function(e){return st(e)&&ut(e.length)&&!!N[ce.call(e)]};function ht(e){return lt(e)?Ee(e):De(e)}function pt(e){return e}r.exports=function(e,t,r){var n=e?e.length:0;if(!n)return-1;var i,a,l=null==r?0:(i=function(e){if(!e)return 0===e?e:0;if((e=function(e){if("number"==typeof e)return e;if(ft(e))return f;if(ct(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ct(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(I,"");var r=U.test(e);return r||V.test(e)?R(e.slice(2),r?2:8):C.test(e)?f:+e}(e))===u||e===-u){var t=e<0?-1:1;return t*s}return e===e?e:0}(r),a=i%1,i===i?a?i-a:i:0);return l<0&&(l=ve(n+l,0)),function(e,t,r,n){for(var i=e.length,a=r+(n?1:-1);n?a--:++a<i;)if(t(e[a],a,e))return a;return-1}(e,ze(t),l)}}).call(t,r("DuR2"),r("3IRH")(e))},sIl2:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"gallery_component"},[r("div",{staticStyle:{"margin-bottom":"20px"}},[r("el-popover",{ref:"addGalleryPopover",attrs:{placement:"right",width:"300",trigger:"click"},model:{value:e.addGalleryPopoverVisible,callback:function(t){e.addGalleryPopoverVisible=t},expression:"addGalleryPopoverVisible"}},[r("el-form",{ref:"createGallery",attrs:{inline:!0,rules:e.createGalleryRules,model:e.createGalleryForm},nativeOn:{submit:function(e){e.preventDefault()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createGallery(t)}}},[r("el-form-item",{ref:"createGalleryName",attrs:{prop:"name"}},[r("el-input",{attrs:{placeholder:"Gallery Name"},model:{value:e.createGalleryForm.name,callback:function(t){e.$set(e.createGalleryForm,"name",t)},expression:"createGalleryForm.name"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.createGallery}},[e._v("Create")])],1)],1)],1),e._v(" "),r("el-button",{attrs:{size:"small",type:"info",plain:""},on:{click:e.getGalleries}},[r("i",{staticClass:"el-icon-refresh"})]),e._v(" "),e.inModal?e._e():r("el-button",{directives:[{name:"popover",rawName:"v-popover:addGalleryPopover",arg:"addGalleryPopover"}],attrs:{size:"small",type:"primary",plain:""},on:{click:function(t){e.addGalleryPopoverVisible=!0}}},[e._v("Create New Gallery")])],1),e._v(" "),r("el-popover",{ref:"deleteGalleryPopover",attrs:{placement:"bottom",width:"160"},model:{value:e.deleteGalleryPopoverVisible,callback:function(t){e.deleteGalleryPopoverVisible=t},expression:"deleteGalleryPopoverVisible"}},[r("p",[e._v("Are you sure to delete this?")]),e._v(" "),r("div",{staticStyle:{"text-align":"right",margin:"0"}},[r("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.deleteGalleryPopoverVisible=!1}}},[e._v("cancel")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.deleteGalleryPopoverVisible=!1}}},[e._v("confirm")])],1)]),e._v(" "),r("errors",{attrs:{errors:e.errors}}),e._v(" "),r("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleTabClick},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},e._l(e.galleries,function(t){return r("el-tab-pane",{key:t.id,attrs:{label:t.name,name:t.id.toString()}},[e.showGallery[t.id]&&e.showGallery[t.id].show?r("gallery-component",{attrs:{"gallery-id":t.id,"get-gallery-files":!1,"in-modal":e.inModal,meta:t.meta,selectable:e.gallerySelectable[t.id]?e.gallerySelectable[t.id]:void 0,"gallery-files":e.files[t.id]?e.files[t.id]:[]},on:{fileSelected:e.handleFileSelected,fileDeleted:e.handleFileDeleted,fileUnHighlighted:e.handleFileUnHighlighted,fileHighlighted:e.handleFileHighlighted,fileUploadSuccess:e.handleFileUploadSuccess,fileUploadError:e.handleFileUploadError,mediaSearch:e.handleMediaSearch}}):e._e()],1)}),1)],1)},staticRenderFns:[]}}});