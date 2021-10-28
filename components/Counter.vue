<template>
  <div class="counter">
    <button
      class="button"
      title="Retirer une quantité"
      @click="$emit('modify', -1)"
    >
      <div class="material-icons icon">remove_circle</div>
    </button>
    <div class="label">{{ count }}</div>
    <button
      class="button"
      title="Ajouter une quantité"
      @click="$emit('modify', +1)"
    >
      <div class="material-icons icon">add_circle</div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;
}

.label {
  margin: 0 calc(var(--spacing-small) / 2);
  width: 1ch;
  text-align: center;
}

.icon {
  font-size: clamp(18px, calc(2vw + 1rem), 36px);
  color: var(--brand-color-2);
}
</style>
