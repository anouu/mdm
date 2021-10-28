<template>
  <main :class="[{ darkMode: isDarkMode }]">
    <Nuxt />
    <Backdrop />
    <Modal />
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MDM',

  computed: {
    ...mapState('ui', ['isDarkMode']),
  },

  watch: {
    $route() {
      this.closeAll()
    },
  },

  methods: {
    ...mapActions('ui', ['closeAll']),
  },
}
</script>

<style lang="scss">
main {
  background-color: var(--light-color);
  color: var(--dark-color);
  min-height: 100vh;

  &.darkMode {
    --brand-color-1: hsl(60, 1%, 55%);
    --dark-color: hsl(0, 0%, 100%);
    --light-color: hsl(0, 0%, 10%);
  }
}
</style>
