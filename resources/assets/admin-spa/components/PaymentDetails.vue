<template lang="html">
  <div>

    <errors
      v-if="Object.keys(errors).length > 0"
      :errors="errors"/>

    <el-table
      :data="payments"
      style="width: 100%">
      <el-table-column
        prop="created_at"
        label="Payment Date">
        <template slot-scope="props">
          <strong>{{ props.row.created_at.date }}</strong>
        </template>
      </el-table-column>
      <el-table-column
        prop="reference"
        label="Payment Reference"/>
      <el-table-column
        prop="method"
        label="Payment Method"/>
      <el-table-column
        :formatter="(row) => { return formatPrice(row.amount, currencyCodeToSymbol(row.currency)) }"
        prop="amount"
        label="Payment Amount"/>
      <el-table-column
        prop="fee"
        label="Payment Fee"/>
      <el-table-column
        prop="notes"
        label="Payment Notes"/>
      <el-table-column
        v-if="editable"
        prop="actions"
        label="Actions">
        <template slot-scope="props">
          <a
            v-if="props.row.link"
            :href="props.row.link"
            target="_blank">
            <el-button
              class="action_btn left"
              type="primary"
              size="mini"
              plain
              @click="markPaymentRefunded(props.row)">View Details</el-button>
          </a>
          <el-button
            v-if="!props.row.refunded"
            class="action_btn"
            type="danger"
            size="mini"
            plain
            @click="markPaymentRefunded(props.row)">Mark Refunded</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-table
      :data="[{}]"
      style="width: 100%">
      <el-table-column
        prop="reference"
        label=""/>
      <el-table-column
        prop="reference"
        label=""/>
      <el-table-column
        prop="reference"
        label="">
        <template slot-scope="props">
          <strong>Total Paid</strong>
        </template>
      </el-table-column>
      <el-table-column
        prop="reference"
        label="">
        <template slot-scope="props">
          <strong>{{ formatPrice(totalPaid, '£') }}</strong>
        </template>
      </el-table-column>
      <el-table-column
        prop="reference"
        label=""/>
      <el-table-column
        prop="reference"
        label=""/>
      <el-table-column
        v-if="editable"
        prop="reference"
        label=""/>

    </el-table>

  </div>
</template>

<script>
import orderUtil from 'utils/order'
import api from 'services/api-service'

export default {

  name: 'PaymentDetails',

  components: {
    Errors: () => import(/* webpackChunkName: "errors" */'components/Errors')
  },

  props: {
    payments: {
      type: Array,
      required: true
    },
    editable: {
      type: Boolean,
      required: false,
      default () {
        return true
      }
    }
  },

  data () {
    return {
      errors: {}
    }
  },

  computed: {
    totalPaid () {
      return orderUtil.paymentTotal(this.payments)
    }
  },

  watch: {

  },

  mounted () {
    console.log('PaymentDetails.vue mounted!')
  },

  methods: {
    markPaymentRefunded (payment) {
      payment.payment_refunded = true
      api.persist('put', {
        path: 'payments/' + payment.id,
        object: payment
      })
        .then((data) => {
          payment = data.data
          this.$message({
            type: 'success',
            message: 'Payment updated successfully.'
          })
        })
        .catch((error) => {
          payment.payment_refunded = false
          this.errors = error
          this.$message({
            type: 'error',
            message: 'There was an error updating the payment.'
          })
        })
    }
  }

}
</script>

<style lang="css" scoped>
</style>
