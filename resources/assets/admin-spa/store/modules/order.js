import * as types from '../mutation-types'
import orderUtil from 'utils/order'
var forEach = require('lodash.foreach')

// initial state
const state = {
  order: {
    customer: {},
    ref: 0,
    billing_address: {
      country: 'United Kingdom'
    },
    shipping_address: {
      country: 'United Kingdom'
    },
    items: [],
    cart: {
      totals: {
        Shipping: 60,
        Discount: 0
      }
    },
    use_billing_for_shipping: true,
    status: 'STATUS_AWAITING_PAYMENT',
    needs_address: 'Needs Address'
  }
}

// getters
const getters = {
  order: state => state.order,
  orderTotals (state) {
    return orderUtil.totals(state.order.items, state.order.cart.totals['Shipping'], state.order.cart.totals['Discount'])
  },
  orderTotal (state, getters) {
    var grandTotal = 0
    forEach(getters.orderTotals, (total) => {
      if (total.total === 'Total') {
        grandTotal = total.value
      }
    })
    return grandTotal
  }
}

// actions
const actions = {

  setOrder ({ commit, dispatch }, data = {}) {
    console.log('Vuex: Set Order')
    commit(types.SET_ORDER, data)
  },

  resetOrder ({ state, commit, dispatch }) {
    console.log('Vuex: Reset Order')
    commit(types.RESET_ORDER)
  },

  deleteOrderItem ({ commit, dispatch }, item) {
    console.log('Vuex: Delete Order Item')
    commit(types.DELETE_ITEM, item)
  },

  editOrderItem ({ state, commit, dispatch }, item) {
    console.log('Vuex: Update Order Item')
    var itemIndex = state.order.items.indexOf(item)
    state.order.items[itemIndex] = item
  }

}

// mutations
const mutations = {

  [types.SET_ORDER] (state, order) {
    state.order = order
  },

  [types.RESET_ORDER] (state) {
    state.order = {
      customer: {},
      billing_address: {},
      shipping_address: {},
      items: [],
      cart: {
        totals: {
          Shipping: 60,
          Discount: 0
        }
      },
      use_billing_for_shipping: true,
      status: 'STATUS_AWAITING_PAYMENT',
      needs_address: 'Needs Address'
    }
  },

  [types.ADD_PRODUCT_TO_ORDER] (state, product) {
    state.order.items.push(product)
  },

  [types.DELETE_ITEM] (state, item) {
    state.order.items.splice(state.order.items.indexOf(item), 1)
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
