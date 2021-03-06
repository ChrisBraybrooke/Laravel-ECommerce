<figure class="figure">
  <img data-src="" class="img-rounded" alt="">
  <figcaption class="figure-caption"></figcaption>
</figure><template lang="html">
  <data-table
    :with-params="{withStatus: 'estimate'}"
    :table-options="tableOptions"
    :request-includes="['created_at']"
    :create-form="{}"
    type-name="estimate"
    base-url="orders"
    edit-path="estimates"
    bulk-update-url="orders/bulk"
    request-with="content">

    <template slot="createButton">
      <router-link :to="{ name: 'estimates.new'}">
        <el-button
          class="create_btn"
          type="primary"
          plain>New Estimate</el-button>
      </router-link>
    </template>

    <template
      slot="actionButtons"
      slot-scope="props">

      <el-popover
        trigger="click"
        placement="top">

        <router-link :to="{ path: props.editPathFormated + '/' + props.row.id }">
          <el-button
            size="mini"
            type="success"
            class="action_btn view_btn">View
          </el-button>
        </router-link>

        <a :href="'mailto:' + props.row.customer.email + '?subject=Order Ref ' + props.row.ref + '&body=Hello ' + props.row.customer.first_name + ','">
          <el-button
            size="mini"
            plain
            class="action_btn view_btn">Email Customer
          </el-button>
        </a>

        <a
          :href="'/ecommerce-templates/invoice-download?reports=' + props.row.id"
          target="_blank">
          <el-button
            size="mini"
            plain
            class="action_btn view_btn">Download PDF
          </el-button>
        </a>

        <el-button
          size="mini"
          type="danger"
          class="action_btn view_btn"
          @click="props.delete(props.row)">Delete
        </el-button>

        <div slot="reference">
          <el-button size="mini">Actions</el-button>
        </div>
      </el-popover>

    </template>

  </data-table>
</template>

<script>
import api from 'services/api-service'
var forEach = require('lodash.foreach')

export default {

  name: 'Estimates',

  components: {
    DataTable: () => import(/* webpackChunkName: "data-table" */'components/DataTable')
  },

  props: {
    //
  },

  data () {
    return {
      loading: false,
      errors: {},
      tableOptions: {
        collumns: [
          {
            prop: 'ref',
            sortable: true,
            label: 'Ref',
            align: 'left',
            resizable: true
          },
          {
            prop: 'name',
            sortable: true,
            label: 'Customer',
            formatter: function (row, column, cellValue) {
              var lines = []
              var address = []
              forEach(row.shipping_address, (line, key) => {
                if (line) {
                  address.push(line)
                }
                lines.push(<li>{line}</li>)
              })
              return <el-popover trigger="hover" placement="top">
                <ul class="order_address_list table_col_list">{lines}</ul>
                <el-button size="mini" plain on-click={() => this.copy(address.join(', '))}>Copy</el-button>
                <div slot="reference"><strong>{row.customer.first_name} {row.customer.last_name}</strong></div>
              </el-popover>
              // return <div><ul class="order_address_list table_col_list">{lines}</ul><el-button size="mini" plain on-click={() => this.copy(address.join(', '))}>Copy</el-button></div>
            }.bind(this),
            align: 'left',
            resizable: false
          },
          {
            prop: 'created_at.date',
            sortable: true,
            label: 'Created',
            align: 'left',
            resizable: true
          },
          {
            prop: 'items',
            sortable: true,
            label: 'Summary',
            align: 'left',
            resizable: false,
            formatter: function (row, column, cellValue) {
              var items = []
              var total = []
              forEach(row.items, function (item) {
                var realQty = Array(item.quantity).fill().map((_, i) => i * i)
                realQty.forEach(() => {
                  total.push(item.name)
                })
                items.push(<li>{item.quantity + ' * ' + item.name}</li>)
              })

              return <el-popover trigger="hover" placement="top">
                <ul class="order_items_list table_col_list">{items}</ul>
                <div slot="reference"><strong>{total.length} items</strong></div>
              </el-popover>
            }
          },
          {
            prop: 'amount',
            sortable: true,
            label: 'Total',
            formatter: function (row, column, cellValue) {
              return row.cart.currency ? row.cart.currency + row.cart.totals.Total : '-'
            },
            align: 'left',
            resizable: true
          },
          {
            prop: 'invoice',
            sortable: true,
            label: 'Create Invoice',
            formatter: function (row, column, cellValue) {
              return <div>
                <el-button on-click={() => this.createInvoice(row, true)} type="success" size="mini" class="action_btn">Create Pro-Forma</el-button>
                <el-button on-click={() => this.createInvoice(row)} type="success" size="mini" class="action_btn" plain>Create Invoice</el-button>
              </div>
            }.bind(this),
            align: 'left',
            resizable: true
          }
        ]
      }
    }
  },

  computed: {
    //
  },

  watch: {

  },

  mounted () {
    console.log('Estimates.vue mounted.')
  },

  methods: {

    createInvoice (val, proForma = false) {
      var status = window.ecommerceConfig.orders.statuses
      if (proForma) {
        val.status = status.STATUS_PROFORMA
      } else {
        val.status = status.STATUS_AWAITING_PAYMENT
      }
      api.persist('put', {
        path: 'orders/' + val.id,
        object: val
      })
        .then(data => {
          this.$router.push({ name: 'orders.view', params: { orderId: `${val.id}` } })
        })
        .catch(() => {
          // this.loading = false;
          // this.errors = error;
        })
    }
  }

}
</script>

<style lang="css">
ul.order_address_list {
    list-style: none;
    -webkit-margin-before: 0;
    -webkit-padding-start: 0;
}
</style>
