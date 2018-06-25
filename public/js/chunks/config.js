webpackJsonp([10],{"60ib":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t},r=s("GzQy"),l=(i=r)&&i.__esModule?i:{default:i},o=s("NYxO");var a=s("Fntp");e.default={name:"Config",components:{Errors:function(){return s.e(29).then(s.bind(null,"DqGP"))},FilePickerModal:function(){return s.e(31).then(s.bind(null,"kSKK"))}},props:[],data:function(){return{loading:!1,settings:{},settingsErrors:{},settingsForm:{},collections:{},shopData:{},featured_product_types:{},users:{},currentTab:"general"}},computed:{},watch:{},mounted:function(){this.getSettings(),this.getCollections(),this.getUsers()},methods:n({},(0,o.mapActions)(["setShopData"]),{p:function(t){var e=t.split(".");return function(){for(var t=this,s=0;s<e.length;s++){if(!t)return;t=t[e[s]]}return t}},ucFirst:function(t){return a(t)},getSettings:function(){this.loading=!0,this.settingsErrors={},l.default.get({path:"settings"}).then(function(t){this.loading=!1,this.settings=t.data,this.setShopData(t.shop_data),this.shopData=t.shop_data,this.settings["Admin Notifications"]||(this.settings["Admin Notifications"]=[]),this.getFeaturedProductCollectionTypes()}.bind(this)).catch(function(t){this.loading=!1,this.settingsErrors=t}.bind(this))},getCollections:function(){l.default.get({path:"collections"}).then(function(t){this.collections=t.data}.bind(this)).catch(function(t){this.settingsErrors=t}.bind(this))},getFeaturedProductCollectionTypes:function(){this.settings["Home Featured Product Collection"]?l.default.get({path:"collections/"+this.settings["Home Featured Product Collection"]+"/types"}).then(function(t){this.featured_product_types=t.data}.bind(this)).catch(function(t){this.settingsErrors=t}.bind(this)):this.featured_product_types={}},getUsers:function(){l.default.get({path:"users",params:{withRole:"admin"}}).then(function(t){this.users=t.data}.bind(this)).catch(function(t){this.settingsErrors=t}.bind(this))},submitForm:function(t){this.loading=!0,this.settingsErrors={},l.default.persist("post",{path:"settings",object:{settings:this.settings}}).then(function(t){this.loading=!1,this.settings=t.data}.bind(this)).catch(function(t){this.loading=!1,this.settingsErrors=t}.bind(this))},displayFilePicker:function(t){this.$refs[t]&&this.$refs[t].openModal()},handleFilesChosen:function(t){this.$set(this.settings,t.id,t.files)},handleFilesUnChosen:function(t){this.$set(this.settings,t.id,t.files)}})}},"B+4o":function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".config_select[data-v-0e54b75e]{width:100%}",""])},Fntp:function(t,e,s){(function(e){var s=1/0,i="[object Symbol]",n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",l="\\ud83c[\\udffb-\\udfff]",o="[^\\ud800-\\udfff]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+r+"|"+l+")"+"?",f="[\\ufe0e\\ufe0f]?"+u+("(?:\\u200d(?:"+[o,a,c].join("|")+")[\\ufe0e\\ufe0f]?"+u+")*"),p="(?:"+[o+r+"?",r,a,c,n].join("|")+")",d=RegExp(l+"(?="+l+")|"+p+f,"g"),g=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),m="object"==typeof e&&e&&e.Object===Object&&e,h="object"==typeof self&&self&&self.Object===Object&&self,b=m||h||Function("return this")();function v(t){return g.test(t)}function _(t){return v(t)?function(t){return t.match(d)||[]}(t):function(t){return t.split("")}(t)}var y=Object.prototype.toString,C=b.Symbol,k=C?C.prototype:void 0,P=k?k.toString:void 0;function S(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&y.call(t)==i}(t))return P?P.call(t):"";var e=t+"";return"0"==e&&1/t==-s?"-0":e}function x(t,e,s){var i=t.length;return s=void 0===s?i:s,!e&&s>=i?t:function(t,e,s){var i=-1,n=t.length;e<0&&(e=-e>n?0:n+e),(s=s>n?n:s)<0&&(s+=n),n=e>s?0:s-e>>>0,e>>>=0;for(var r=Array(n);++i<n;)r[i]=t[i+e];return r}(t,e,s)}var w,F=(w="toUpperCase",function(t){var e,s=v(t=null==(e=t)?"":S(e))?_(t):void 0,i=s?s[0]:t.charAt(0),n=s?x(s,1).join(""):t.slice(1);return i[w]()+n});t.exports=F}).call(e,s("DuR2"))},c4gF:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[s("el-row",{attrs:{align:"middle",type:"flex"}},[s("el-col",{attrs:{span:12}},[s("h1",{staticClass:"page_title"},[t._v("Config")])])],1),t._v(" "),Object.keys(t.settingsErrors).length>0?s("errors",{attrs:{errors:t.settingsErrors}}):t._e(),t._v(" "),s("el-row",{attrs:{type:"flex"}},[s("el-col",{attrs:{md:24}},[s("el-form",{ref:"settingsForm",attrs:{"label-position":"top",model:t.settings,"label-width":"120px"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.submitForm("settingsForm")}}},[s("el-row",{attrs:{gutter:20}},[s("el-tabs",{model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[s("el-tab-pane",{attrs:{label:"General",name:"general"}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:12}},[s("h5",[t._v("Site Information")])])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:8,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Site Url",size:"small",prop:"url"}},[s("el-input",{attrs:{disabled:""},model:{value:t.settings.url,callback:function(e){t.$set(t.settings,"url",e)},expression:"settings['url']"}})],1):t._e()],1)],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:8,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Contact Phone",size:"small",prop:"Contact Phone"}},[s("el-input",{model:{value:t.settings["Contact Phone"],callback:function(e){t.$set(t.settings,"Contact Phone",e)},expression:"settings['Contact Phone']"}})],1):t._e()],1),t._v(" "),s("el-col",{attrs:{md:{span:8}}},[t.settings?s("el-form-item",{attrs:{label:"Contact Email",size:"small",prop:"Contact Email"}},[s("el-input",{model:{value:t.settings["Contact Email"],callback:function(e){t.$set(t.settings,"Contact Email",e)},expression:"settings['Contact Email']"}})],1):t._e()],1)],1),t._v(" "),s("hr",{staticClass:"form_hr"}),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:12}},[s("h5",[t._v("Admin Notifications")])])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:8,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Admin Notifications",prop:"Admin Notifications",size:"small"}},[s("el-select",{staticClass:"config_select",attrs:{placeholder:"Select",multiple:"",filterable:""},model:{value:t.settings["Admin Notifications"],callback:function(e){t.$set(t.settings,"Admin Notifications",e)},expression:"settings['Admin Notifications']"}},t._l(t.users,function(e){return e.name?s("el-option",{key:e.name.full,attrs:{label:e.name.full,value:e.id}}):t._e()}))],1):t._e()],1)],1),t._v(" "),s("hr",{staticClass:"form_hr"}),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:12}},[s("h5",[t._v("Order Information")])])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:8,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Invoice Number Prefix",prop:"Invoice Number Prefix",size:"small"}},[s("el-input",{model:{value:t.settings["Invoice Number Prefix"],callback:function(e){t.$set(t.settings,"Invoice Number Prefix",e)},expression:"settings['Invoice Number Prefix']"}})],1):t._e()],1)],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:8,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Currency",prop:"Currency",size:"small"}},[s("el-input",{model:{value:t.settings.Currency,callback:function(e){t.$set(t.settings,"Currency",e)},expression:"settings['Currency']"}})],1):t._e()],1)],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:5,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Price Thousand Seperator",prop:"Price Thousand Seperator",size:"small"}},[s("el-select",{staticClass:"config_select",attrs:{placeholder:"Select"},model:{value:t.settings["Price Thousand Seperator"],callback:function(e){t.$set(t.settings,"Price Thousand Seperator",e)},expression:"settings['Price Thousand Seperator']"}},[s("el-option",{key:0,attrs:{label:",",value:","}}),t._v(" "),s("el-option",{key:1,attrs:{label:"",value:""}})],1)],1):t._e()],1),t._v(" "),s("el-col",{attrs:{md:{span:5}}},[t.settings?s("el-form-item",{attrs:{label:"Price Decimal Seperator",prop:"Price Decimal Seperator",size:"small"}},[s("el-select",{staticClass:"config_select",attrs:{placeholder:"Select"},model:{value:t.settings["Price Decimal Seperator"],callback:function(e){t.$set(t.settings,"Price Decimal Seperator",e)},expression:"settings['Price Decimal Seperator']"}},[s("el-option",{key:0,attrs:{label:",",value:","}}),t._v(" "),s("el-option",{key:1,attrs:{label:".",value:"."}}),t._v(" "),s("el-option",{key:2,attrs:{label:":",value:":"}})],1)],1):t._e()],1),t._v(" "),s("el-col",{attrs:{md:{span:5}}},[t.settings?s("el-form-item",{attrs:{label:"Price Numer of Decimals",prop:"Price Numer of Decimals",size:"small"}},[s("el-select",{staticClass:"config_select",attrs:{placeholder:"Select"},model:{value:t.settings["Price Numer of Decimals"],callback:function(e){t.$set(t.settings,"Price Numer of Decimals",e)},expression:"settings['Price Numer of Decimals']"}},[s("el-option",{key:0,attrs:{label:0,value:0}}),t._v(" "),s("el-option",{key:2,attrs:{label:2,value:2}})],1)],1):t._e()],1)],1),t._v(" "),s("hr",{staticClass:"form_hr"}),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:12}},[s("h5",[t._v("Order Information")])])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:8,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Shipping Rate",prop:"Shipping Rate",size:"small"}},[s("el-input",{model:{value:t.settings["Shipping Rate"],callback:function(e){t.$set(t.settings,"Shipping Rate",e)},expression:"settings['Shipping Rate']"}})],1):t._e()],1)],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:"Site Images",name:"site_images"}},[s("el-col",{attrs:{lg:12,md:24}},t._l(t.shopData.site_images,function(e){return t.settings?s("el-form-item",{key:e,attrs:{label:e,prop:e}},[t.settings?s("file-picker-modal",{attrs:{"current-files":t.settings[e]&&t.settings[e][0]?[t.settings[e][0]]:void 0,"show-btn":!0,name:e,selectable:1,"picker-id":e},on:{"update:files":function(s){return t.settings[e]=s}}}):t._e()],1):t._e()}))],1),t._v(" "),s("el-tab-pane",{attrs:{label:"Collection Mappings",name:"collection_mappings"}},[s("el-col",{attrs:{lg:12,md:24}},t._l(t.shopData.collection_mappings,function(e){return t.settings?s("el-form-item",{key:e,attrs:{label:e,prop:e}},[s("el-select",{staticClass:"config_select",attrs:{placeholder:"Select"},model:{value:t.settings[e],callback:function(s){t.$set(t.settings,e,s)},expression:"settings[mapping]"}},t._l(t.collections,function(t){return s("el-option",{key:t.name,attrs:{label:t.name,value:t.id}})}))],1):t._e()}))],1)],1)],1),t._v(" "),s("hr",{staticClass:"page_hr"}),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{sm:24}},[s("el-form-item",[s("el-button",{attrs:{plain:"",type:"success",loading:t.loading},on:{click:function(e){t.submitForm("settingsForm")}}},[t._v("Update")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},kMJd:function(t,e,s){var i=s("B+4o");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("195cf869",i,!0,{})},xmj4:function(t,e,s){var i=s("VU/8")(s("60ib"),s("c4gF"),!1,function(t){s("kMJd")},"data-v-0e54b75e",null);t.exports=i.exports}});