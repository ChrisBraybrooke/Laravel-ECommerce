<template lang="html">
  <div
    :loading="loading"
    class="">
    <el-form
      ref="userForm"
      :model="user"
      label-position="top"
      label-width="120px">

      <el-breadcrumb
        class="breadcrumbs"
        separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ name: 'users' }">Users</el-breadcrumb-item>
        <el-breadcrumb-item>{{ user.name.full }}</el-breadcrumb-item>
      </el-breadcrumb>

      <errors
        v-if="Object.keys(errors).length > 0"
        :errors="errors"/>

      <el-row :gutter="40">
        <el-col
          :sm="24"
          :md="8">
          <el-form-item
            size="small"
            label="Company"
            prop="company">
            <el-input v-model="user.company"/>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="40">
        <el-col
          :sm="24"
          :md="8">
          <el-form-item
            :rules="{required: true, message: 'First name field is required.'}"
            size="small"
            label="First Name"
            prop="name.first">
            <el-input v-model="user.name.first"/>
          </el-form-item>
        </el-col>
        <el-col
          :sm="24"
          :md="8">
          <el-form-item
            :rules="{required: true, message: 'Last name field is required.'}"
            size="small"
            label="Last Name"
            prop="name.last">
            <el-input v-model="user.name.last"/>
          </el-form-item>
        </el-col>
        <el-col
          :sm="24"
          :md="8">
          <el-form-item
            :rules="{required: true, message: 'Email field is required.'}"
            size="small"
            label="Email"
            prop="email">
            <el-input v-model="user.email"/>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="40">
        <el-col
          :sm="24"
          :md="12">
          <address-form
            :form="user"
            :span="12"
            :offset="0"
            :required="false"
            :prefix-prop="true"
            type="billing"
            prop="billing_address"/>
        </el-col>
        <el-col
          :sm="24"
          :md="12">
          <address-form
            :form="user"
            :span="12"
            :offset="0"
            :required="false"
            :prefix-prop="true"
            type="shippping"
            prop="shipping_address"/>
        </el-col>
      </el-row>

      <hr class="page_hr">

      <el-row :gutter="20">
        <el-col :sm="24">
          <el-form-item>
            <el-button
              :loading="loading"
              plain
              type="success"
              @click="submitForm('userForm')">Update</el-button>
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>
  </div>
</template>

<script>
import api from '../../services/api-service'

export default {
  name: 'ViewUser',

  components: {
    Errors: () => import(/* webpackChunkName: "errors" */'components/Errors'),
    AddressForm: () => import(/* webpackChunkName: "address-form" */'components/AddressForm')
  },

  props: {
    userId: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      loading: false,
      errors: {},
      user: {
        name: {},
        billing_address: {},
        shipping_address: {}
      }

    }
  },

  mounted () {
    console.log('ViewUser.vue mounted.')
    this.getUser()
  },

  methods: {

    /*
         * Get the user data from the server.
         *
         * @return Void
         */
    getUser () {
      this.loading = true
      api.get({
        path: 'users/' + this.userId
      })
        .then(data => {
          this.user = data.data
          this.loading = false
        })
        .catch(error => {
          this.errors = error
          this.loading = false
        })
    },

    /*
          * Submit the form to the server and save the user info.
          *
          * @return Void
          */
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.errors = {}

          api.persist('put', {
            path: 'users/' + this.userId,
            object: {
              company: this.user.company,
              first_name: this.user.name.first,
              last_name: this.user.name.last,
              email: this.user.email,
              shipping_address_line_1: this.user.shipping_address.line_1,
              shipping_address_line_2: this.user.shipping_address.line_2,
              shipping_address_town: this.user.shipping_address.town,
              shipping_address_county: this.user.shipping_address.county,
              shipping_address_postcode: this.user.shipping_address.postcode,
              shipping_address_country: this.user.shipping_address.country,
              billing_address_line_1: this.user.billing_address.line_1,
              billing_address_line_2: this.user.billing_address.line_2,
              billing_address_town: this.user.billing_address.town,
              billing_address_county: this.user.billing_address.county,
              billing_address_postcode: this.user.billing_address.postcode,
              billing_address_country: this.user.billing_address.country,
              billing_address_name: this.user.billing_address.name,
              billing_address_company: this.user.billing_address.company,
              shipping_address_name: this.user.shipping_address.name,
              shipping_address_company: this.user.shipping_address.company
            }
          })
            .then(data => {
              this.loading = false
              this.user = data.data

              this.$message({
                message: 'User updated',
                type: 'success',
                showClose: true
              })
            })
            .catch(error => {
              this.loading = false
              this.pageErrors = error
            })
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
