<template>
  <div
    :class="['backdrop', { 'backdrop--open': isBackdropOpen }]"
    @click="closeAll()"
  ></div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('ui', ['isBackdropOpen']),
  },

  methods: {
    ...mapActions('ui', ['closeAll']),
  },
}
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(#000, 0.5);
  opacity: 0;
  transform: translateX(100%);
  transition: opacity var(--transition-duration) $ease-in-sine
      var(--transition-duration),
    transform 0ms linear 300ms;
  will-change: transition, opacity;
  cursor: pointer;
  z-index: 50;

  &--open {
    transition-delay: 0ms;
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
