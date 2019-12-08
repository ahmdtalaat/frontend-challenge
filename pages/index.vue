<template>
  <div>
    <DashBoard />
  </div>
</template>

<script>
import DashBoard from '~/components/DashBoard'
export default {
  head() {
    // set meta tags for home page
    return {
      title: 'Dashboard',
      meta: [
        {
          hid: 'Home',
          name: 'Home',
          description: 'User dash board'
        }
      ]
    }
  },
  components: {
    DashBoard
  }
}
</script>
