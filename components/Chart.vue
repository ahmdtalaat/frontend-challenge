<template>
  <v-sparkline
    :fill="fill"
    :gradient="gradient"
    :line-width="width"
    :padding="padding"
    :smooth="radius || false"
    :value="value"
  ></v-sparkline>
</template>
<script>
export default {
  props: {
    values: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data: () => ({
    fill: true,
    gradient: ['purple', 'violet'],
    padding: 8,
    radius: 10,
    width: 2,
    value: []
  }),
  mounted() {
    this.value = this.values.map((obj) => obj.value)
  }
}
</script>
