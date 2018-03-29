<template lang="html">
    <div v-loading="loading">

      <el-breadcrumb class="breadcrumbs" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ name: 'pages' }">Pages</el-breadcrumb-item>
          <el-breadcrumb-item>{{ page.name }}</el-breadcrumb-item>
      </el-breadcrumb>

      <el-row align="middle">
          <el-col :span="24"><h1 class="page_title">{{ page.name }}</h1></el-col>
      </el-row>

      <errors v-if="Object.keys(pageErrors).length > 0" :errors="pageErrors"></errors>

      <el-row :gutter="40">
          <el-col :sm="24" :md="24">
              <el-form label-position="top" :model="page" :rules="pageFormRules" ref="pageForm" label-width="120px">

                  <el-row :gutter="20">
                      <el-col :md="12">
                          <el-form-item v-if="page.live_at" label="Live" prop="live_at.live">
                              <el-switch v-model="page.live_at.live"
                                         active-color="#13ce66"
                                         inactive-color="#ff4949">
                              </el-switch>
                          </el-form-item>
                      </el-col>
                      <el-col :md="12">
                          <el-form-item label="In Menu" prop="in_menu">
                              <el-switch v-model="page.in_menu"
                                         active-color="#13ce66"
                                         inactive-color="#ff4949">
                              </el-switch>
                          </el-form-item>
                      </el-col>
                  </el-row>

                  <el-row :gutter="20">
                      <el-col :md="24">
                          <el-form-item label="Main Img" prop="main_img">
                              <el-button type="info" plain size="mini" @click="displayFilePicker('filePicker')">Select File <i class="el-icon-document"></i></el-button>

                              <file-picker-modal v-if="objectHas(page, 'main_img')"
                                                 ref="filePicker"
                                                 :current-files="page.main_img ? [page.main_img] : undefined"
                                                 v-on:filesChosen="handleFilesChosen"
                                                 v-on:filesUnChosen="handleFilesUnChosen"
                                                 name="Main Img"
                                                 :selectable="1"
                                                 picker-id="main_img"
                                                 :open-on-mount="false">
                              </file-picker-modal>
                          </el-form-item>
                      </el-col>
                  </el-row>

                  <el-row :gutter="20">
                      <el-col :md="12" :sm="24">
                          <el-form-item label="Name" prop="name">
                              <el-input :autofocus="true" v-model="page.name"></el-input>
                          </el-form-item>
                      </el-col>
                      <el-col :md="12" :sm="24">
                          <el-form-item label="Slug / Url" prop="slug">
                              <el-input v-model="page.slug">
                                  <template slot="prepend">{{ getSiteBaseURL }}</template>
                              </el-input>
                          </el-form-item>
                      </el-col>
                  </el-row>

                  <el-row :gutter="20">
                      <el-col :sm="24">
                          <el-form-item v-if="hasContent('Main Content')" label="Main Content" prop="content.data[findContentIndexFromName(Main Content)]">
                              <quill-editor v-model="page.content.data[findContentIndexFromName('Main Content')].content"
                                            ref="myQuillEditor"
                                            :options="editorOption">
                              </quill-editor>
                          </el-form-item>
                      </el-col>
                  </el-row>

                  </el-form-item>

                  <hr class="page_hr">

                  <el-row :gutter="20">
                      <el-col :sm="24">
                          <el-form-item>
                              <el-button plain type="success" :loading="loading" @click="submitForm('pageForm')">Update</el-button>
                          </el-form-item>
                      </el-col>
                  </el-row>

              </el-form>
          </el-col>
      </el-row>


    </div>
</template>

<script>
import api from "../../services/api-service.js";
var findIndex = require('lodash.findindex');
var has = require('lodash.has');

import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

import { quillEditor } from 'vue-quill-editor';

export default {

      name: 'ViewPage',

      components: {
          Errors: () => import('../../components/Errors.vue'),
          FilePickerModal: () => import('../../components/FilePickerModal.vue'),
          quillEditor
      },

      props: {
        pageId: {
            type: String,
            required: true,
        },
      },

      data () {
          return {
              loading: false,
              page: {},
              editorOption: {
                modules: {
                  toolbar: [
                      ['bold', 'italic', 'underline', 'strike'],
                      ['blockquote'],

                      [{ 'header': 1 }, { 'header': 2 }],

                      [{ 'list': 'ordered'}, { 'list': 'bullet' }],

                      [{ 'align': [] }],
                      ['clean'],
                      ['link', 'video']
                  ]
                }
              },
              pageErrors: {},
              pageFormRules: {},
          }
      },

      computed: {

      },

      watch: {

      },

      mounted () {
          console.log('ViewPage.vue mounted');
          this.getPage();
      },

      methods: {
          objectHas(haystack, needle)
          {
              return has(haystack, needle);
          },

          getPage()
          {
              this.loading = true;
              this.pageErrors = {};

              api.get({
                    path: "pages/" + this.pageId
                })
                .then(function (data) {
                    this.loading = false;
                    this.page = data.data;
                }.bind(this))
                .catch(function (error) {
                    this.loading = false;
                    this.pageErrors = error;
                }.bind(this));
          },

          submitForm(formName)
          {
              this.$refs[formName].validate((valid) => {
                  if (valid) {
                      this.loading = true;
                      this.pageErrors = {};

                      api.persist("put", {
                            path: "pages/" + this.pageId,
                            object: this.page
                        })
                        .then(function (data) {
                            this.loading = false;
                            this.page = data.data;

                            this.$message({
                              message: 'Page updated',
                              type: 'success',
                              showClose: true,
                            });

                        }.bind(this))
                        .catch(function (error) {
                            this.loading = false;
                            this.pageErrors = error;
                        }.bind(this));
                  }
              });
          },

          findContentIndexFromName(contentName)
          {
              if (contentName && this.page.content) {
                  var contentIndex = findIndex(this.page.content.data, function(c) {
                                          return c.content_name === contentName;
                                      });
                  return contentIndex === -1 ? null : contentIndex;
              }

              return null;
          },

          hasContent(contentName)
          {
              return this.findContentIndexFromName(contentName) === null ? false : true;
          },

          displayFilePicker(filePicker)
          {
              if(this.$refs[filePicker]) {
                  this.$refs[filePicker].openModal();
              }
          },

          handleFilesChosen(data)
          {
              this.$set(this.page, data.id, data.files);
          },

          handleFilesUnChosen(data)
          {
              this.$set(this.page, data.id, data.files);
          },

      },

}
</script>

<style lang="css">
</style>