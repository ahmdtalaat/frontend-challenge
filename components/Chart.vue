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
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea']
]

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
    gradient: gradients[3],
    gradients,
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
