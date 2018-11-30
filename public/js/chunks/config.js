webpackJsonp([10],{"2sWc":function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".config_select[data-v-38adbaa7]{width:100%}",""])},"60ib":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},i=s("GzQy"),l=(n=i)&&n.__esModule?n:{default:n},o=s("NYxO");var r=s("Fntp");e.default={name:"Config",components:{Errors:function(){return s.e(31).then(s.bind(null,"DqGP"))},FilePickerModal:function(){return s.e(33).then(s.bind(null,"kSKK"))}},data:function(){return{loading:!1,settings:{},settingsErrors:{},settingsForm:{},collections:{},shopData:{},featured_product_types:{},users:{},currentTab:"general"}},computed:{},watch:{},mounted:function(){this.getSettings(),this.getCollections(),this.getUsers()},methods:a({},(0,o.mapActions)(["setShopData"]),{p:function(t){var e=t.split(".");return function(){for(var t=this,s=0;s<e.length;s++){if(!t)return;t=t[e[s]]}return t}},ucFirst:function(t){return r(t)},getSettings:function(){this.loading=!0,this.settingsErrors={},l.default.get({path:"settings"}).then(function(t){this.loading=!1,this.settings=t.data,this.setShopData(t.shop_data),this.shopData=t.shop_data,this.settings["Admin Notifications"]||(this.settings["Admin Notifications"]=[]),this.getFeaturedProductCollectionTypes()}.bind(this)).catch(function(t){this.loading=!1,this.settingsErrors=t}.bind(this))},getCollections:function(){l.default.get({path:"collections"}).then(function(t){this.collections=t.data}.bind(this)).catch(function(t){this.settingsErrors=t}.bind(this))},getFeaturedProductCollectionTypes:function(){this.settings["Home Featured Product Collection"]?l.default.get({path:"collections/"+this.settings["Home Featured Product Collection"]+"/types"}).then(function(t){this.featured_product_types=t.data}.bind(this)).catch(function(t){this.settingsErrors=t}.bind(this)):this.featured_product_types={}},getUsers:function(){l.default.get({path:"users",params:{withRole:"admin"}}).then(function(t){this.users=t.data}.bind(this)).catch(function(t){this.settingsErrors=t}.bind(this))},submitForm:function(t){this.loading=!0,this.settingsErrors={},l.default.persist("post",{path:"settings",object:{settings:this.settings}}).then(function(t){this.loading=!1,this.settings=t.data}.bind(this)).catch(function(t){this.loading=!1,this.settingsErrors=t}.bind(this))},displayFilePicker:function(t){this.$refs[t]&&this.$refs[t].openModal()},handleFilesChosen:function(t){this.$set(this.settings,t.id,t.files)},handleFilesUnChosen:function(t){this.$set(this.settings,t.id,t.files)}})}},Fntp:function(t,e,s){(function(e){var s=1/0,n="[object Symbol]",a="[\\ud800-\\udfff]",i="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",l="\\ud83c[\\udffb-\\udfff]",o="[^\\ud800-\\udfff]",r="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+i+"|"+l+")"+"?",p="[\\ufe0e\\ufe0f]?"+u+("(?:\\u200d(?:"+[o,r,c].join("|")+")[\\ufe0e\\ufe0f]?"+u+")*"),m="(?:"+[o+i+"?",i,r,c,a].join("|")+")",f=RegExp(l+"(?="+l+")|"+m+p,"g"),d=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),g="object"==typeof e&&e&&e.Object===Object&&e,h="object"==typeof self&&self&&self.Object===Object&&self,b=g||h||Function("return this")();function v(t){return d.test(t)}function _(t){return v(t)?function(t){return t.match(f)||[]}(t):function(t){return t.split("")}(t)}var C=Object.prototype.toString,y=b.Symbol,k=y?y.prototype:void 0,x=k?k.toString:void 0;function A(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&C.call(t)==n}(t))return x?x.call(t):"";var e=t+"";return"0"==e&&1/t==-s?"-0":e}function N(t,e,s){var n=t.length;return s=void 0===s?n:s,!e&&s>=n?t:function(t,e,s){var n=-1,a=t.length;e<0&&(e=-e>a?0:a+e),(s=s>a?a:s)<0&&(s+=a),a=e>s?0:s-e>>>0,e>>>=0;for(var i=Array(a);++n<a;)i[n]=t[n+e];return i}(t,e,s)}var S,P=(S="toUpperCase",function(t){var e,s=v(t=null==(e=t)?"":A(e))?_(t):void 0,n=s?s[0]:t.charAt(0),a=s?N(s,1).join(""):t.slice(1);return n[S]()+a});t.exports=P}).call(e,s("DuR2"))},O72h:function(t,e,s){var n=s("2sWc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s("rjj0")("c06eb736",n,!0,{})},WKae:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[s("el-row",{attrs:{align:"middle",type:"flex"}},[s("el-col",{attrs:{span:12}},[s("h1",{staticClass:"page_title"},[t._v("Config")])])],1),t._v(" "),Object.keys(t.settingsErrors).length>0?s("errors",{attrs:{errors:t.settingsErrors}}):t._e(),t._v(" "),s("el-row",{attrs:{type:"flex"}},[s("el-col",{attrs:{md:24}},[s("el-form",{ref:"settingsForm",attrs:{model:t.settings,"label-position":"top","label-width":"120px"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.submitForm("settingsForm")}}},[s("el-row",{attrs:{gutter:20}},[s("el-tabs",{model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[s("el-tab-pane",{attrs:{label:"General",name:"general"}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:12}},[s("h5",[t._v("Site Information")])])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:8,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Site Url",size:"small",prop:"url"}},[s("el-input",{attrs:{disabled:""},model:{value:t.settings.url,callback:function(e){t.$set(t.settings,"url",e)},expression:"settings['url']"}})],1):t._e()],1)],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:8,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Contact Phone",size:"small",prop:"Contact Phone"}},[s("el-input",{model:{value:t.settings["Contact Phone"],callback:function(e){t.$set(t.settings,"Contact Phone",e)},expression:"settings['Contact Phone']"}})],1):t._e()],1),t._v(" "),s("el-col",{attrs:{md:{span:8}}},[t.settings?s("el-form-item",{attrs:{label:"Contact Email",size:"small",prop:"Contact Email"}},[s("el-input",{model:{value:t.settings["Contact Email"],callback:function(e){t.$set(t.settings,"Contact Email",e)},expression:"settings['Contact Email']"}})],1):t._e()],1)],1),t._v(" "),s("hr",{staticClass:"form_hr"}),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:12}},[s("h5",[t._v("Admin Notifications")])])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:8,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Admin Notifications",prop:"Admin Notifications",size:"small"}},[s("el-select",{staticClass:"config_select",attrs:{placeholder:"Select",multiple:"",filterable:""},model:{value:t.settings["Admin Notifications"],callback:function(e){t.$set(t.settings,"Admin Notifications",e)},expression:"settings['Admin Notifications']"}},t._l(t.users,function(e){return e.name?s("el-option",{key:e.name.full,attrs:{label:e.name.full,value:e.id}}):t._e()}))],1):t._e()],1)],1),t._v(" "),s("hr",{staticClass:"form_hr"}),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:12}},[s("h5",[t._v("Order Information")])])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:8,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Invoice Number Prefix",prop:"Invoice Number Prefix",size:"small"}},[s("el-input",{model:{value:t.settings["Invoice Number Prefix"],callback:function(e){t.$set(t.settings,"Invoice Number Prefix",e)},expression:"settings['Invoice Number Prefix']"}})],1):t._e()],1)],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:8,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Currency",prop:"Currency",size:"small"}},[s("el-input",{model:{value:t.settings.Currency,callback:function(e){t.$set(t.settings,"Currency",e)},expression:"settings['Currency']"}})],1):t._e()],1)],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:5,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Price Thousand Seperator",prop:"Price Thousand Seperator",size:"small"}},[s("el-select",{staticClass:"config_select",attrs:{placeholder:"Select"},model:{value:t.settings["Price Thousand Seperator"],callback:function(e){t.$set(t.settings,"Price Thousand Seperator",e)},expression:"settings['Price Thousand Seperator']"}},[s("el-option",{key:0,attrs:{label:",",value:","}}),t._v(" "),s("el-option",{key:1,attrs:{label:"",value:""}})],1)],1):t._e()],1),t._v(" "),s("el-col",{attrs:{md:{span:5}}},[t.settings?s("el-form-item",{attrs:{label:"Price Decimal Seperator",prop:"Price Decimal Seperator",size:"small"}},[s("el-select",{staticClass:"config_select",attrs:{placeholder:"Select"},model:{value:t.settings["Price Decimal Seperator"],callback:function(e){t.$set(t.settings,"Price Decimal Seperator",e)},expression:"settings['Price Decimal Seperator']"}},[s("el-option",{key:0,attrs:{label:",",value:","}}),t._v(" "),s("el-option",{key:1,attrs:{label:".",value:"."}}),t._v(" "),s("el-option",{key:2,attrs:{label:":",value:":"}})],1)],1):t._e()],1),t._v(" "),s("el-col",{attrs:{md:{span:5}}},[t.settings?s("el-form-item",{attrs:{label:"Price Numer of Decimals",prop:"Price Numer of Decimals",size:"small"}},[s("el-select",{staticClass:"config_select",attrs:{placeholder:"Select"},model:{value:t.settings["Price Numer of Decimals"],callback:function(e){t.$set(t.settings,"Price Numer of Decimals",e)},expression:"settings['Price Numer of Decimals']"}},[s("el-option",{key:0,attrs:{label:0,value:0}}),t._v(" "),s("el-option",{key:2,attrs:{label:2,value:2}})],1)],1):t._e()],1)],1),t._v(" "),s("hr",{staticClass:"form_hr"}),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:12}},[s("h5",[t._v("Order Information")])])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:8,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Shipping Rate",prop:"Shipping Rate",size:"small"}},[s("el-input",{model:{value:t.settings["Shipping Rate"],callback:function(e){t.$set(t.settings,"Shipping Rate",e)},expression:"settings['Shipping Rate']"}})],1):t._e()],1)],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:"Pricing",name:"pricing"}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:12}},[s("h5",[t._v("VAT")])])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:8,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"VAT Included",prop:"VAT Included",size:"small"}},[s("el-switch",{attrs:{"active-text":"VAT Included","inactive-text":"VAT Extra"},model:{value:t.settings["VAT Included"],callback:function(e){t.$set(t.settings,"VAT Included",e)},expression:"settings['VAT Included']"}})],1):t._e()],1),t._v(" "),s("el-col",{attrs:{md:{span:8}}},[t.settings?s("el-form-item",{attrs:{label:"VAT Amount",prop:"VAT Amount",size:"small"}},[s("el-input-number",{attrs:{precision:2,step:.1,max:1,min:0},model:{value:t.settings["VAT Amount"],callback:function(e){t.$set(t.settings,"VAT Amount",e)},expression:"settings['VAT Amount']"}})],1):t._e()],1)],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:"Order PDFs",name:"pdfs"}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:12}},[s("h5",[t._v("Address")])])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:16,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Company Name",prop:"Company Name",size:"small"}},[s("el-input",{model:{value:t.settings["Company Name"],callback:function(e){t.$set(t.settings,"Company Name",e)},expression:"settings['Company Name']"}})],1):t._e()],1)],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:16,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Company Address",prop:"Company Address",size:"small"}},[s("el-input",{model:{value:t.settings["Company Address"],callback:function(e){t.$set(t.settings,"Company Address",e)},expression:"settings['Company Address']"}})],1):t._e()],1)],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:12}},[s("h5",[t._v("Bank Details")])])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:8,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Company Bank",prop:"Company Bank",size:"small"}},[s("el-input",{model:{value:t.settings["Company Bank"],callback:function(e){t.$set(t.settings,"Company Bank",e)},expression:"settings['Company Bank']"}})],1):t._e()],1)],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:8,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Company Bank Sort Code",prop:"Company Bank Sort Code",size:"small"}},[s("el-input",{model:{value:t.settings["Company Bank Sort Code"],callback:function(e){t.$set(t.settings,"Company Bank Sort Code",e)},expression:"settings['Company Bank Sort Code']"}})],1):t._e()],1),t._v(" "),s("el-col",{attrs:{md:{span:8}}},[t.settings?s("el-form-item",{attrs:{label:"Company Bank AC Number",prop:"Company Bank AC Number",size:"small"}},[s("el-input",{model:{value:t.settings["Company Bank AC Number"],callback:function(e){t.$set(t.settings,"Company Bank AC Number",e)},expression:"settings['Company Bank AC Number']"}})],1):t._e()],1)],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:12}},[s("h5",[t._v("Other")])])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:8,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Company No",prop:"Company No",size:"small"}},[s("el-input",{model:{value:t.settings["Company No"],callback:function(e){t.$set(t.settings,"Company No",e)},expression:"settings['Company No']"}})],1):t._e()],1),t._v(" "),s("el-col",{attrs:{md:{span:8}}},[t.settings?s("el-form-item",{attrs:{label:"Company Vat No",prop:"Company Vat No",size:"small"}},[s("el-input",{model:{value:t.settings["Company Vat No"],callback:function(e){t.$set(t.settings,"Company Vat No",e)},expression:"settings['Company Vat No']"}})],1):t._e()],1)],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{md:{span:16,offset:4}}},[t.settings?s("el-form-item",{attrs:{label:"Footer Text",prop:"Footer Text",size:"small"}},[s("el-input",{attrs:{type:"textarea"},model:{value:t.settings["Footer Text"],callback:function(e){t.$set(t.settings,"Footer Text",e)},expression:"settings['Footer Text']"}})],1):t._e()],1)],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:"Site Images",name:"site_images"}},[s("el-col",{attrs:{lg:12,md:24}},t._l(t.shopData.site_images,function(e){return s("div",{key:e},[t.settings?s("el-form-item",{attrs:{label:e,prop:e}},[t.settings?s("file-picker-modal",{attrs:{"current-files":t.settings[e]&&t.settings[e][0]?[t.settings[e][0]]:void 0,"show-btn":!0,name:e,selectable:1,"picker-id":e},on:{"update:files":function(s){return t.settings[e]=s}}}):t._e()],1):t._e()],1)}))],1),t._v(" "),s("el-tab-pane",{attrs:{label:"Collection Mappings",name:"collection_mappings"}},[s("el-col",{attrs:{lg:12,md:24}},t._l(t.shopData.collection_mappings,function(e){return s("div",{key:e},[t.settings?s("el-form-item",{attrs:{label:e,prop:e}},[s("el-select",{staticClass:"config_select",attrs:{placeholder:"Select"},model:{value:t.settings[e],callback:function(s){t.$set(t.settings,e,s)},expression:"settings[mapping]"}},t._l(t.collections,function(t){return s("el-option",{key:t.name,attrs:{label:t.name,value:t.id}})}))],1):t._e()],1)}))],1)],1)],1),t._v(" "),s("hr",{staticClass:"page_hr"}),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{sm:24}},[s("el-form-item",[s("el-button",{attrs:{loading:t.loading,plain:"",type:"success"},on:{click:function(e){t.submitForm("settingsForm")}}},[t._v("Update")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},xmj4:function(t,e,s){var n=s("VU/8")(s("60ib"),s("WKae"),!1,function(t){s("O72h")},"data-v-38adbaa7",null);t.exports=n.exports}});