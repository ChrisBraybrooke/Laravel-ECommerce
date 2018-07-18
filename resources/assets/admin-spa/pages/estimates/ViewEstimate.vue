<template lang="html">
    <div v-loading="loading">

        <el-breadcrumb class="breadcrumbs" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ name: 'estimates' }">Estimates</el-breadcrumb-item>
            <el-breadcrumb-item v-if="estimate.id">{{ estimate.ref_number }}</el-breadcrumb-item>
        </el-breadcrumb>

        <errors v-if="Object.keys(errors).length > 0" :errors="errors"></errors>


        <el-row :gutter="20" style="margin-bottom:20px; margin-top:20px;">
            <el-col :sm="24">
                <product-form :on-product-add="product => {this.estimate.items.push(product)}"/>
            </el-col>
        </el-row>

        <el-row :gutter="20" style="margin-bottom:20px; margin-top:20px;">
            <el-col :sm="24">
                <product-table :editable="true" :order="estimate" :order-totals="orderTotals"/>
            </el-col>
        </el-row>

        <hr class="page_hr">

        <el-row :gutter="20">
            <el-col :sm="24">
                <el-button plain type="success" :loading="loading" @click="updateEstimate()">Update</el-button>
            </el-col>
        </el-row>

    </div>
</template>

<script>
import api from 'services/api-service'
import order_util from 'utils/order'

export default {

      name: 'ViewEstimate',

      components: {
          Errors: () => import(/* webpackChunkName: "errors" */'components/Errors'),
          ProductTable: () => import(/* webpackChunkName: "product-table" */'components/ProductTable'),
          ProductForm: () => import(/* webpackChunkName: "product-form" */'components/ProductForm'),
      },

      props: {
          estimateId: {
              required: true,
              type: [String, Number]
          }
      },

      data () {
          return {
              loading: false,
              estimate: {},
              errors: {},

          }
      },

      computed: {
          orderTotals() {

              if (this.estimate.cart) {
                  return order_util.totals(this.estimate.items, this.estimate.cart.totals['Shipping'], this.estimate.cart.totals['Discount']);
              }
              return [{}];
          }
      },

      watch: {

      },

      mounted () {
          console.log('ViewEstimate.vue mounted!')
          this.getEstimate();
      },

      methods: {
          getEstimate()
          {
              this.loading = true;

              api.get({
                  path: 'orders/' + this.estimateId
              })
              .then((data) => {
                  this.loading = false;
                  this.estimate = data.data;
              })
              .catch((error) => {
                  this.errors = error;
                  this.loading = false;
              })
          },

          updateEstimate()
          {
              this.loading = true;

              api.persist('put', {
                  path: 'orders/' + this.estimateId,
                  object: this.estimate
              })
              .then((data) => {
                  this.loading = false;
                  this.estimate = data.data;
              })
              .catch((error) => {
                  this.errors = error;
                  this.loading = false;
              })
          }
      },

}
</script>

<style lang="css">
</style>