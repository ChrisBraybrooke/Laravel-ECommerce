<template lang="html">

  <div style="margin-top: 30px; margin-bottom: 30px;">
    <el-form :model="form">
      <el-tabs
        v-if="languageOptions"
        v-model="activeContentTab"
        style="margin-top:30px; margin-bottom: 30px">
        <el-tab-pane
          v-for="(content, key) in groupedByLangContent"
          :key="key"
          :label="(key ? key : 'Content')"
          :name="(key ? key : 'Content')">

          <el-row
            v-if="key === activeContentTab && !accordian"
            :gutter="20">
            <el-col
              v-for="(content, content_key) in content"
              :md="content.type === 'quill' ? 24 : 12"
              :key="content_key">
              <content-inner
                :content="content"
                :content-key="content_key"
                :editable="editable"
                :on-delete-content="onDeleteContent"
                :language-options="languageOptions"/>
            </el-col>
          </el-row>

          <el-collapse
            v-if="accordian"
            v-model="accordianTab"
            accordion>
            <el-collapse-item
              v-for="(content, content_key) in content"
              :key="content_key"
              :name="content_key">
              <template slot="title">
                <p style="margin-left: 10px;">{{ content.content_name }}</p>
              </template>
              <content-inner
                :content="content"
                :content-key="content_key"
                :show-section-title="false"
                :editable="editable"
                :on-delete-content="onDeleteContent"
                :language-options="languageOptions"/>
            </el-collapse-item>
          </el-collapse>

          <el-button
            v-if="editable"
            style="margin-top: 30px;"
            type="success"
            size="small"
            plain
            @click="showModal = true">Add Content</el-button>

        </el-tab-pane>
      </el-tabs>

      <el-row
        v-if="!languageOptions"
        :gutter="20">

        <el-col>
          <el-collapse
            v-if="accordian"
            v-model="accordianTab"
            accordion>
            <el-collapse-item
              v-for="(content, content_key) in selectedLangContent"
              :key="content_key"
              :name="content_key">
              <template slot="title">
                <p style="margin-left: 10px;">{{ content.content_name }}</p>
              </template>
              <content-inner
                :content="content"
                :content-key="content_key"
                :show-section-title="false"
                :editable="editable"
                :on-delete-content="onDeleteContent"
                :language-options="languageOptions"/>
            </el-collapse-item>
          </el-collapse>
        </el-col>

        <template v-if="!accordian">
          <el-col
            v-for="(content, content_key) in selectedLangContent"
            :md="content.type === 'quill' ? 24 : 12"
            :key="content_key">
            <content-inner
              :content="content"
              :content-key="content_key"
              :editable="editable"
              :on-delete-content="onDeleteContent"
              :language-options="languageOptions"/>
          </el-col>
        </template>
      </el-row>

      <el-button
        v-if="editable && !languageOptions"
        type="success"
        size="small"
        plain
        @click="showModal = true">Add Content</el-button>
    </el-form>

    <el-dialog
      v-if="editable"
      :visible.sync="showModal"
      title="Add New Content">

      <el-form
        ref="contentAdd"
        :model="newContent"
        label-position="top">
        <el-row :gutter="20">
          <el-col :md="12">
            <h5>New Content</h5>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :md="{span:8, offset: 4}">
            <el-form-item
              :rules="[{required: true, message: 'Content name is required.', trigger: 'blur,change'}]"
              label="Name"
              prop="name">
              <el-input
                v-model="newContent.name"
                size="small"
                placeholder="Main Content"/>
            </el-form-item>
          </el-col>
          <el-col :md="{span:8}">
            <el-form-item
              :rules="[{required: true, message: 'Content type is required.', trigger: 'blur,change'}]"
              label="Type"
              prop="type">
              <el-select
                v-model="newContent.type"
                placeholder="Text"
                size="small">
                <el-option
                  v-for="type in contentTypes"
                  :key="type.label"
                  :label="type.label"
                  :value="type.value"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :md="12">
            <el-button
              type="success"
              size="small"
              plain
              @click="addContent(languageOptions ? activeContentTab : language)">Add Content</el-button>
          </el-col>
        </el-row>
      </el-form>

    </el-dialog>

  </div>
</template>

<script>
import ContentInner from 'components/ContentInner'

var groupBy = require('lodash.groupby')
var orderBy = require('lodash.orderby')
var filter = require('lodash.filter')

export default {

  name: 'ContentComponent',

  components: {
    ContentInner
  },

  props: {
    content: {
      required: true,
      type: Array
    },
    editable: {
      required: false,
      type: Boolean,
      default () {
        return true
      }
    },
    languageOptions: {
      required: false,
      type: Boolean,
      default () {
        return true
      }
    },
    language: {
      required: false,
      type: String,
      default () {
        return 'en'
      }
    },
    accordian: {
      required: false,
      type: Boolean,
      default () {
        return true
      }
    }
  },

  data () {
    return {
      newContent: {
        type: 'text'
      },
      form: {},
      showModal: false,
      loading: false,
      activeContentTab: 'en',
      accordianTab: null
    }
  },

  computed: {

    groupedByLangContent () {
      var orderedContent = orderBy(this.content, ['order'], ['asc'])
      orderedContent = groupBy(orderedContent, 'language')
      return Object.keys(orderedContent).length > 0 ? orderedContent : { 'en': [] }
    },

    selectedLangContent () {
      var orderedContent = orderBy(this.content, ['order'], ['asc'])
      orderedContent = filter(orderedContent, ['language', this.language])

      return orderedContent !== undefined ? orderedContent : []
    },

    contentTypes () {
      return [
        {
          label: 'Text',
          value: 'text'
        },
        {
          label: 'Text Area',
          value: 'textarea'
        },
        {
          label: 'Content Editor',
          value: 'quill'
        },
        {
          label: 'Multi',
          value: 'json'
        }
      ]
    }
  },

  watch: {

  },

  mounted () {
    console.log('ContentComponent.vue Mounted')
  },

  methods: {
    addContent (lang) {
      this.$refs['contentAdd'].validate((valid) => {
        if (valid) {
          this.content.push({
            'order': (this.content.length + 1),
            'language': lang,
            'content': this.newContent.type === 'json' ? {} : '',
            'content_name': this.newContent.name,
            'type': this.newContent.type
          })

          this.showModal = false
          this.newContent = {}
        }
      })
    },

    onDeleteContent (key) {
      this.content.splice(key, 1)
    }
  }
}
</script>

<style lang="css">
.el-collapse-item__wrap {
    padding: 0px 20px;
}
</style>
