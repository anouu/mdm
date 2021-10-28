<template>
  <div :class="['modal', { 'modal--open': openModal }]">
    <div v-if="openModal" class="body" v-html="modalData.body" />
    <div class="actions">
      <button
        class="button button--simple button--accent"
        title="Confirmer"
        @click="handleConfirm"
      >
        <div class="material-icons icon">done</div>
      </button>
      <button
        class="button button--simple"
        title="Annuler"
        @click="setModal(false)"
      >
        <div class="material-icons icon">clear</div>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('ui', ['isModalOpen', 'modalData']),

    openModal() {
      return this.isModalOpen && Object.keys(this.modalData).length
    },
  },

  methods: {
    ...mapActions('ui', ['setModal']),

    handleConfirm() {
      if (!this.modalData?.action) return

      this.modalData.action(this.modalData.actionData)
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  background-color: var(--light-color);
  position: fixed;
  inset: 50% 0 0 50%;
  padding: var(--spacing-small);
  opacity: 0;
  width: clamp(300px, 60vmin, 400px);
  aspect-ratio: 5 / 3;
  transition: all 0ms $ease-in-sine;
  transform: translate(-50%, -100vh);
  will-change: transition, opacity;
  border-bottom: 4px solid var(--brand-color-2);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  z-index: 100;

  &--open {
    opacity: 1;
    transition-duration: var(--transition-duration);
    transform: translate(-50%, -65%);
  }
}

.body {
  flex: 0 0 40%;
  font-size: clamp(18px, calc(1vw + 0.5rem), 24px);

  ::v-deep {
    span {
      font-weight: 700;
    }
  }
}

.actions {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: var(--spacing-small);
}
</style>
