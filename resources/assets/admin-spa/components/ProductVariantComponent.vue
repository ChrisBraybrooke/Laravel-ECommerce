<template lang="html">
  <div class="">
    <el-row :gutter="20">
      <el-col
        :lg="12"
        :md="24">
        <el-form-item
          label="Name"
          prop="name">
          <el-input
            :autofocus="true"
            v-model="productVariant.name"/>
        </el-form-item>
      </el-col>
      <el-col
        :lg="12"
        :md="24">
        <el-form-item
          label="Slug / Url"
          prop="slug">
          <el-input
            v-model="productVariant.slug"
            :disabled="productVariant.id ? true : false">
            <template slot="prepend">{{ getSiteBaseURL }}products/</template>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row
      v-if="!productVariant.id"
      :gutter="20">
      <el-col :md="24">
        <el-form-item
          label="Main Img"
          prop="main_img">
          <file-picker-modal
            v-if="productVariant.main_img"
            :current-files="productVariant.main_img.id ? [productVariant.main_img] : undefined"
            :show-btn="true"
            :selectable="1"
            name="Main Img"
            picker-id="main_img"
            @update:files="val => productVariant.main_img = val"/>
        </el-form-item>
      </el-col>
    </el-row>

    <router-link
      v-if="productVariant.id"
      :to="{ name: 'products.view', params: {productId: productVariant.id.toString() } }">
      <el-button
        plain
        type="success"
        size="small">Edit Product</el-button>
    </router-link>

    <el-button
      v-else
      type="danger"
      size="small"
      @click="removeProduct">Remove</el-button>

  </div>
</template>

<script>
export default {

  name: 'ProductVariantComponent',

  components: {
    FilePickerModal: () => import(/* webpackChunkName: "file-picker-modal" */'components/FilePickerModal')
  },

  props: {
    model: {
      type: Object,
      required: true
    },
    variants: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    onRemoveProduct: {
      type: Function,
      required: false,
      default () {
        return function (product) {}
      }
    }
  },

  data () {
    return {
      productVariant: {
        main_img: []
      }
    }
  },

  mounted () {
    console.log('ProductVariantComponent.vue mounted')
    this.productVariant = this.model
  },

  methods: {
    removeProduct () {
      this.variants.splice(this.variants.indexOf(this.productVariant), 1)
      this.onRemoveProduct(this.productVariant)
    }
  }
}
</script>

<style lang="css">
</style>
