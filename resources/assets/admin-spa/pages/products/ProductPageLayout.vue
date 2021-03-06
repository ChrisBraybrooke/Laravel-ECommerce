<template lang="html">
  <div v-loading="loading">
    <el-breadcrumb
      class="breadcrumbs"
      separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ name: 'products' }">Products</el-breadcrumb-item>
      <el-breadcrumb-item
        v-if="productForm.variant"
        :to="{ name: 'products.view.variants', params: {productId: productForm.variant.id.toString()}, force: true }">{{ productForm.variant.name }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ productForm.name }}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row
      align="middle"
      type="flex">
      <el-col :span="12"><h1 class="page_title">{{ productForm.name }}</h1></el-col>
    </el-row>

    <page-layout
      :page-errors="productErrors"
      :current-page="currentPage"
      :pages="[
        {
          name: 'Basic Information',
          index: '/products/' + productId,
        },
        {
          name: 'Pricing',
          index: '/products/' + productId + '/pricing',
        },
        {
          name: 'Images',
          index: '/products/' + productId + '/images',
        },
        {
          name: 'Customisations',
          index: '/products/' + productId + '/customisations',
        },
        {
          name: 'Variants',
          index: '/products/' + productId + '/variants',
        },
        {
          name: 'Order Information',
          index: '/products/' + productId + '/ordering',
        },
    ]">

      <template slot="page_content">

        <el-form
          ref="productForm"
          :model="productForm"
          :rules="formRules"
          label-position="top"
          label-width="120px">

          <slot
            :product-form="productForm"
            name="product_page"/>

          <hr class="page_hr">

          <el-row :gutter="20">
            <el-col :sm="24">
              <el-form-item>
                <el-button
                  :loading="loading"
                  plain
                  type="success"
                  @click="submitForm('productForm')">Save</el-button>
              </el-form-item>
            </el-col>
          </el-row>

        </el-form>

      </template>

    </page-layout>
  </div>
</template>

<script>
import api from 'services/api-service'

export default {

  name: 'ProductPageLayout',

  components: {
    PageLayout: () => import(/* webpackChunkName: "page-layout" */'../PageLayout')
  },

  props: {
    productId: {
      type: String,
      required: true
    },
    currentPage: {
      required: true,
      type: String
    },
    form: {
      type: Object,
      required: false,
      default () {
        return {

        }
      }
    },
    formLoaded: {
      type: Function,
      required: false,
      default () {
        return function (data) {}
      }
    },
    formRules: {
      type: Object,
      required: false,
      default () {
        return {

        }
      }
    },
    requestWith: {
      type: Array,
      required: false,
      default () {
        return []
      }
    },
    requestIncludes: {
      type: Array,
      required: false,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      productForm: this.form,
      productErrors: {},
      loading: false
    }
  },

  computed: {
    //
  },

  watch: {
    //
  },

  mounted () {
    console.log('ProductPageLayout.vue mounted')
    this.getProduct()
  },

  methods: {

    /**
           * Get the product information from the server.
           *
           * @return void
           */
    getProduct () {
      this.productErrors = {}
      this.loading = true

      api.get({
        path: 'products/' + this.productId,
        params: {
          with: this.requestWith.concat(['variant']),
          include: this.requestIncludes
        }
      })
        .then(function (data) {
          this.loading = false
          this.productForm = data.data
          this.formLoaded(data.data)
        }.bind(this))
        .catch(function (error) {
          this.loading = false
          this.productErrors = error
        }.bind(this))
    },

    /**
           * Validate the form and submit to the server.
           *
           * @return void
           */
    submitForm (formName) {
      this.productErrors = {}
      this.loading = true
      this.productForm.with = this.requestWith.concat(['variant'])
      this.productForm.include = this.requestIncludes

      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.persist('put', {
            path: 'products/' + this.productId,
            object: this.productForm
          })
            .then(function (data) {
              this.loading = false
              this.productForm = data.data
              this.$message({
                message: 'Product updated',
                type: 'success',
                showClose: true
              })
            }.bind(this))
            .catch(function (error) {
              this.loading = false
              this.productErrors = error
            }.bind(this))
        } else {
          this.loading = false
          return false
        }
      })
    }

  }

}
</script>

<style lang="css" scoped>
.collection_type_select {
    width: 100%;
}
.product_variant_card {
    margin: 30px 0px;
}
.product_variant_card.minimised .el-card__body {
    padding: 0px!important;
}
</style>
