webpackJsonp([2],{"0lQi":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=l("GzQy"),o=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default={components:{Errors:function(){return l.e(20).then(l.bind(null,"DqGP"))},DataTable:function(){return l.e(23).then(l.bind(null,"bnM4"))},FilePickerModal:function(){return l.e(21).then(l.bind(null,"kSKK"))}},props:{collectionId:{type:String,required:!0}},mounted:function(){this.getCollection()},computed:{collectionName:function(){return this.collection.individual_name?this.collection.individual_name.toLowerCase():"collection"},uploadHeaders:function(){return{Accept:"application/json","X-CSRF-TOKEN":window.laravel_token}},createFormRules:function(){return{name:[{required:!0,message:"The "+this.collectionName+" name field is required",trigger:"blur"}]}},collectionFormRules:function(){return{name:[{required:!0,message:"The "+this.collectionName+" name field is required",trigger:"blur"}],individual_name:[{required:!0,message:"The "+this.collectionName+" individual name field is required",trigger:"blur"}],slug:[{required:!0,message:"The "+this.collectionName+" slug field is required",trigger:"blur"}]}}},data:function(){var e=this.$createElement;return{tableOptions:{border:!1,stripe:!1,showSearch:!0,showHeader:!0,showNewBtn:!0,showRefreshBtn:!0,showHeadHr:!1,showTitle:!1,viewText:"View",deleteText:"Delete",bulkOptions:[{value:"draft",label:"Mark Draft"},{value:"live",label:"Mark Live"},{value:"delete",label:"Delete"}],collumns:[{prop:"id",sortable:!0,label:"ID",align:"left",resizable:!0},{prop:"name",sortable:!0,label:"Name",align:"left",resizable:!0},{prop:"created_at.human",sortable:!0,label:"Created",align:"left",resizable:!0},{prop:"live_at.live",sortable:!0,label:"Live",align:"left",formatter:function(t,l,i){return t.live_at.live?e("i",{class:"el-icon-check"}):e("i",{class:"el-icon-close"})},resizable:!0}]},showFilePicker:!1,uploadFileList:[],collectionErrors:{},collection:{},collectionStore:{},loading:!1}},methods:{getCollection:function(){o.default.get({path:"collections/"+this.collectionId}).then(function(e){this.collectionErrors={},this.collection=e.data,e.data.header_img.url&&(this.showFilePicker=!0),this.collectionStore.push(Vue.util.extend({},e))}.bind(this)).catch(function(e){e.code&&404===e.code&&this.$router.push({path:"not-found"}),this.collectionErrors=e}.bind(this))},submitForm:function(e){var t=this;this.collectionErrors={},this.loading=!0,this.$refs[e].validate(function(e){if(!e)return t.loading=!1,!1;o.default.persist("put",{path:"collections/"+t.collectionId,object:t.collection}).then(function(e){this.loading=!1,this.collection=e.data,this.$message({message:this.collection.name+" updated",type:"success",showClose:!0})}.bind(t)).catch(function(e){this.collectionErrors=e,this.loading=!1}.bind(t))})},displayFilePicker:function(){this.showFilePicker=!0,this.$refs.filePicker&&this.$refs.filePicker.openModal()},handleFilesChosen:function(e){this.$set(this.collection,e.id,e.files)},handleFilesUnChosen:function(e){this.$set(this.collection,e.id,e.files)}}}},"3xwE":function(e,t){var l=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[l("el-breadcrumb",{staticClass:"breadcrumbs",attrs:{"separator-class":"el-icon-arrow-right"}},[l("el-breadcrumb-item",{attrs:{to:{name:"collections"}}},[e._v("Collections")]),e._v(" "),l("el-breadcrumb-item",[e._v(e._s(e.collection.name))])],1),e._v(" "),l("el-row",{attrs:{align:"middle"}},[l("el-col",{attrs:{span:24}},[l("h1",{staticClass:"page_title"},[e._v(e._s(e.collection.name))])])],1),e._v(" "),Object.keys(e.collectionErrors).length>0?l("errors",{attrs:{errors:e.collectionErrors}}):e._e(),e._v(" "),l("el-row",{attrs:{gutter:40}},[l("el-col",{staticClass:"col_right_border",attrs:{sm:24,md:24,lg:12}},[l("el-form",{ref:"collectionForm",attrs:{"label-position":"top",model:e.collection,rules:e.collectionFormRules,"label-width":"120px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.submitForm("collectionForm")}}},[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{md:24}},[e.collection.live_at?l("el-form-item",{attrs:{label:"Live",prop:"live_at.live"}},[l("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.collection.live_at.live,callback:function(t){e.$set(e.collection.live_at,"live",t)},expression:"collection.live_at.live"}})],1):e._e()],1)],1),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{md:12,sm:24}},[l("el-form-item",{attrs:{label:"Name",prop:"name"}},[l("el-input",{attrs:{autofocus:!0},model:{value:e.collection.name,callback:function(t){e.$set(e.collection,"name",t)},expression:"collection.name"}})],1)],1),e._v(" "),l("el-col",{attrs:{md:12,sm:24}},[l("el-form-item",{attrs:{label:"Individual Name",prop:"individual_name"}},[l("el-input",{model:{value:e.collection.individual_name,callback:function(t){e.$set(e.collection,"individual_name",t)},expression:"collection.individual_name"}})],1)],1)],1),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{md:24}},[l("el-form-item",{attrs:{label:"Slug / Url",prop:"slug"}},[l("el-input",{model:{value:e.collection.slug,callback:function(t){e.$set(e.collection,"slug",t)},expression:"collection.slug"}},[l("template",{attrs:{slot:"prepend"},slot:"prepend"},[e._v(e._s(e.getSiteBaseURL))])],2)],1)],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"Header Img",prop:"header_img"}},[l("el-button",{attrs:{type:"info",plain:"",size:"mini"},on:{click:e.displayFilePicker}},[e._v("Select File "),l("i",{staticClass:"el-icon-document"})]),e._v(" "),e.showFilePicker?l("file-picker-modal",{ref:"filePicker",attrs:{"current-files":e.collection.header_img?[e.collection.header_img]:void 0,name:"Header Img",selectable:1,"picker-id":"header_img","open-on-mount":!e.collection.header_img},on:{filesChosen:e.handleFilesChosen,filesUnChosen:e.handleFilesUnChosen}}):e._e()],1),e._v(" "),l("hr",{staticClass:"page_hr"}),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{sm:24}},[l("el-form-item",[l("el-button",{attrs:{plain:"",type:"success",loading:e.loading},on:{click:function(t){e.submitForm("collectionForm")}}},[e._v("Update")])],1)],1)],1)],1)],1),e._v(" "),l("el-col",{staticClass:"half_table_col",attrs:{sm:24,md:24,lg:12}},[l("data-table",{attrs:{"type-name":e.collectionName,"table-options":e.tableOptions,"edit-path":"/collections/"+e.collectionId+"/types","create-form-rules":e.createFormRules,"base-url":"collections/"+e.collectionId+"/types","bulk-update-url":"collections/"+e.collectionId+"/types/bulk"}})],1)],1)],1)},i=[];e.exports={render:l,staticRenderFns:i}},BtE1:function(e,t,l){function i(e){l("ozoM")}var o=l("VU/8"),n=l("iLE/"),r=l("QNSX"),a=i,s=o(n,r,!1,a,null,null);e.exports=s.exports},L1CE:function(e,t,l){t=e.exports=l("FZ+f")(void 0),t.push([e.i,"",""])},QNSX:function(e,t){var l=function(){var e=this,t=e.$createElement;return(e._self._c||t)("data-table",{attrs:{"type-name":"collection","bulk-update-url":"collections/bulk"}})},i=[];e.exports={render:l,staticRenderFns:i}},YVPk:function(e,t,l){t=e.exports=l("FZ+f")(void 0),t.push([e.i,"",""])},e47f:function(e,t,l){function i(e){l("s+hX")}var o=l("VU/8"),n=l("0lQi"),r=l("3xwE"),a=i,s=o(n,r,!1,a,null,null);e.exports=s.exports},"iLE/":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{DataTable:function(){return l.e(23).then(l.bind(null,"bnM4"))}},mounted:function(){},data:function(){return{}}}},ozoM:function(e,t,l){var i=l("YVPk");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);l("rjj0")("793e8132",i,!0)},"s+hX":function(e,t,l){var i=l("L1CE");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);l("rjj0")("1dfaad01",i,!0)}});