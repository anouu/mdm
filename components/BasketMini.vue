<template>
  <div
    :class="[
      'basket-mini',
      {
        'basket-mini--open': isBasketMiniOpen,
        'basket-mini--empty': isCartEmpty,
      },
    ]"
  >
    <div class="close">
      <button
        class="button"
        title="Fermer le volet"
        @click="setBasketMini(false)"
      >
        <div class="material-icons icon">clear</div>
      </button>
    </div>
    <template v-if="isCartEmpty">
      <h2 class="title title-font">Votre Panier est vide</h2>
    </template>
    <template v-else>
      <div class="content">
        <h2 class="title title-font">Votre Panier</h2>
        <div class="inner">
          <ul class="list">
            <li v-for="item in getCartItems" :key="item.reference" class="item">
              <BasketItem :item="item" :mini="true" />
            </li>
          </ul>
        </div>
      </div>
      <div class="actions">
        <div class="price title-font">
          <span>Montant Total:</span>
          <span>{{ $tools.formattedPrice(getCartTotal) }}</span>
        </div>
        <NuxtLink
          class="button link button--simple button--accent"
          title="Aller vers la page panier"
          to="/cart"
        >
          Voir le détail du panier
        </NuxtLink>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('ui', ['isBasketMiniOpen']),
    ...mapGetters(['getCartItems', 'isCartEmpty', 'getCartTotal']),
  },

  methods: {
    ...mapActions('ui', ['setBasketMini']),
  },
}
</script>

<style lang="scss" scoped>
.basket-mini {
  background-color: var(--light-color);
  position: fixed;
  inset: 0 0 0 auto;
  opacity: 0;
  width: rem(600);
  max-width: 100%;
  transition: all 300ms $ease-in-sine;
  transform: translateX(100%);
  will-change: transition, opacity;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: space-between;
  z-index: 90;

  &--open {
    opacity: 1;
    transition-duration: var(--transition-duration);
    transform: translateX(0);
  }

  &--empty {
    padding: var(--spacing-small);
    justify-content: center;
    align-items: center;
  }
}

.close {
  position: absolute;
  inset: 0 0 auto 0;
  padding: var(--spacing-small);
  display: flex;
  justify-content: flex-end;

  .icon {
    font-size: rem(32);
  }
}

.content,
.actions {
  padding: var(--spacing-small);
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
}

.content {
  padding-block: calc(
      var(--spacing-small) + clamp(24px, calc(5vw + 1rem), 90px)
    )
    0;
  flex: 0 1 80%;
  overflow: hidden auto;
}

.inner {
  height: 100%;
  width: 100%;
  position: relative;
}

.list {
  position: absolute;
  height: 100%;
  inset: 0;
  overflow: hidden auto;
}

.item {
  margin-top: var(--spacing);

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: var(--spacing);
  }
}

.title {
  font-size: clamp(18px, calc(2vw + 1rem), 36px);
  margin-bottom: var(--spacing-small);
}

.actions {
  flex: 0 0 20%;
  border-top: 4px solid var(--brand-color-2);
  justify-content: space-evenly;
  gap: var(--spacing-small);
}

.price {
  text-align: right;
  font-size: clamp(16px, calc(1vw + 1rem), 30px);
  display: flex;
  justify-content: space-between;
}

.link {
  padding: var(--spacing-small);
}
</style>
