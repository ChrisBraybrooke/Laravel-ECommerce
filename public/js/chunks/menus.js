webpackJsonp([21],{"/5oQ":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("data-table",{attrs:{"type-name":"menu","bulk-update-url":"menus/bulk","create-form":e.menusCreateForm,"table-options":e.tableOptions},scopedSlots:e._u([{key:"createForm",fn:function(t){return[n("el-form-item",{attrs:{label:"Menu Name",prop:"name"}},[n("el-input",{attrs:{autofocus:!0,"auto-complete":"off"},model:{value:e.menusCreateForm.name,callback:function(t){e.$set(e.menusCreateForm,"name",t)},expression:"menusCreateForm.name"}})],1)]}}])})},staticRenderFns:[]}},"0YZA":function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"",""])},QCAt:function(e,t,n){var a=n("VU/8")(n("vUp5"),n("/5oQ"),!1,function(e){n("wwFq")},null,null);e.exports=a.exports},vUp5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Menus",components:{DataTable:function(){return n.e(32).then(n.bind(null,"bnM4"))}},props:{},data:function(){return{menusCreateForm:{},tableOptions:{collumns:[{prop:"id",sortable:!0,label:"ID",align:"left",resizable:!0},{prop:"name",sortable:!0,label:"Name",align:"left",resizable:!0},{prop:"created_at.human",sortable:!0,label:"Created",align:"left",resizable:!0}]}}},computed:{},watch:{},mounted:function(){},methods:{}}},wwFq:function(e,t,n){var a=n("0YZA");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("5b89b27d",a,!0,{})}});