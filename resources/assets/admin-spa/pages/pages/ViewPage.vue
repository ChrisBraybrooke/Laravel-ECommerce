<template lang="html">
  <div v-loading="loading">
    <el-form
      ref="pageForm"
      :model="page"
      :rules="pageFormRules"
      label-position="top"
      label-width="120px">

      <el-breadcrumb
        class="breadcrumbs"
        separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ name: 'pages' }">Pages</el-breadcrumb-item>
        <el-breadcrumb-item>{{ page.name }}</el-breadcrumb-item>
      </el-breadcrumb>

      <el-row align="middle">
        <el-col :span="12">
          <h1 class="page_title">{{ page.name }}</h1>
          <a
            :href="getSiteBaseURL + page.slug"
            target="_blank"><el-button
              type="success"
              class="view_item_button"
              size="mini">View Page</el-button></a>
        </el-col>

        <el-col :span="12">
          <el-row>
            <div class="page_switch">
              <el-form-item
                v-if="page.live_at"
                label="Live"
                prop="live_at.live">
                <el-switch
                  v-model="page.live_at.live"
                  active-color="#13ce66"
                  inactive-color="#ff4949"/>
              </el-form-item>
            </div>
          </el-row>

          <el-row>
            <div class="page_switch">
              <el-form-item
                label="In Menu"
                prop="in_menu">
                <el-switch
                  v-model="page.in_menu"
                  active-color="#13ce66"
                  inactive-color="#ff4949"/>
              </el-form-item>
            </div>
          </el-row>
        </el-col>
      </el-row>

      <errors
        v-if="Object.keys(pageErrors).length > 0"
        :errors="pageErrors"/>

      <el-row :gutter="40">
        <el-col
          :sm="24"
          :md="24">

          <el-row :gutter="20">

            <el-col :md="12"/>
          </el-row>

          <el-row :gutter="20">
            <el-col :md="24">
              <el-form-item
                label="Main Img"
                prop="main_img">
                <el-button
                  type="info"
                  plain
                  size="mini"
                  @click="displayFilePicker('filePicker')">Select File <i class="el-icon-document"/></el-button>

                <file-picker-modal
                  v-if="objectHas(page, 'main_img')"
                  ref="filePicker"
                  :current-files="page.main_img ? [page.main_img] : undefined"
                  :selectable="1"
                  :open-on-mount="false"
                  name="Main Img"
                  picker-id="main_img"
                  @filesChosen="handleFilesChosen"
                  @filesUnChosen="handleFilesUnChosen"/>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col
              :md="12"
              :sm="24">
              <el-form-item
                label="Slug / Url"
                prop="slug">
                <el-input v-model="page.slug">
                  <template slot="prepend">{{ getSiteBaseURL }}</template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <content-component
            v-if="page.content"
            :content="page.content.data"/>

          <hr class="page_hr">

          <el-row :gutter="20">
            <el-col :sm="24">
              <el-form-item>
                <el-button
                  :loading="loading"
                  plain
                  type="success"
                  @click="submitForm('pageForm')">Update</el-button>
              </el-form-item>
            </el-col>
          </el-row>

        </el-col>
      </el-row>

    </el-form>
  </div>
</template>

<script>
import api from 'services/api-service'
import ContentComponent from 'components/ContentComponent'
var findIndex = require('lodash.findindex')
var has = require('lodash.has')

var withRequest = [
  'media', 'content'
]
var includeRequest = [
  'live_at', 'created_at', 'in_menu', 'no_shop_data', 'slug'
]

export default {

  name: 'ViewPage',

  components: {
    Errors: () => import(/* webpackChunkName: "errors" */'components/Errors'),
    ContentComponent,
    FilePickerModal: () => import(/* webpackChunkName: "file-picker-modal" */'components/FilePickerModal')
  },

  props: {
    pageId: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      loading: false,
      page: {},
      pageErrors: {},
      pageFormRules: {}
    }
  },

  computed: {

  },

  watch: {

  },

  mounted () {
    console.log('ViewPage.vue mounted')
    this.getPage()
  },

  methods: {
    objectHas (haystack, needle) {
      return has(haystack, needle)
    },

    getPage () {
      this.loading = true
      this.pageErrors = {}

      api.get({
        path: 'pages/' + this.pageId,
        params: {
          with: withRequest,
          include: includeRequest
        }
      })
        .then(function (data) {
          this.loading = false
          this.page = data.data
        }.bind(this))
        .catch(function (error) {
          this.loading = false
          this.pageErrors = error
        }.bind(this))
    },

    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.pageErrors = {}

          this.page.with = withRequest
          this.page.include = includeRequest

          api.persist('put', {
            path: 'pages/' + this.pageId,
            object: this.page
          })
            .then(function (data) {
              this.loading = false
              this.page = data.data

              this.$message({
                message: 'Page updated',
                type: 'success',
                showClose: true
              })
            }.bind(this))
            .catch(function (error) {
              this.loading = false
              this.pageErrors = error
            }.bind(this))
        }
      })
    },

    findContentIndexFromName (contentName) {
      if (contentName && this.page.content) {
        var contentIndex = findIndex(this.page.content.data, function (c) {
          return c.content_name === contentName
        })
        return contentIndex === -1 ? null : contentIndex
      }

      return null
    },

    hasContent (contentName) {
      return this.findContentIndexFromName(contentName) !== null
    },

    displayFilePicker (filePicker) {
      if (this.$refs[filePicker]) {
        this.$refs[filePicker].openModal()
      }
    },

    handleFilesChosen (data) {
      this.$set(this.page, data.id, data.files)
    },

    handleFilesUnChosen (data) {
      this.$set(this.page, data.id, data.files)
    }

  }

}
</script>

<style lang="css">
</style>
