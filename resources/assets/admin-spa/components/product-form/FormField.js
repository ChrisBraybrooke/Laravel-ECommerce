import FormItem from './FormItem'

export default {
  props: {
    form: {
      type: Object,
      required: true
    },
    product: {
      type: Object,
      required: true
    },
    section: {
      type: Object,
      required: false,
      default: () => { return {} }
    },
    field: {
      type: Object,
      required: true
    },
    prop: {
      type: String,
      required: true
    }
  },

  components: { FormItem },

  computed: {
    propIsObject () {
      return typeof this.form[this.prop] === 'object'
    }
  },

  methods: {
    mergedFieldValue (option) {
      return {
        ...option,
        ...{
          group: this.section.name,
          type: this.field.type,
          appends: this.field.appends,
          prepends: this.field.prepends,
          label: this.field.name
        }
      }
    },

    optionLabel (option) {
      if (option) {
        if (option.price_mutator && option.price_value) {
          return option.name + ' (' + option.price_mutator + ' £' + option.price_value + ')'
        }
        return option.name
      }
      return ''
    }
  }
}
