<template>
  <div
    :class="[
      'basket',
      {
        'basket--empty': isCartEmpty,
      },
    ]"
  >
    <template v-if="isCartEmpty">
      <h2 class="title title-font">Votre Panier est vide</h2>
      <button
        class="button button--simple button--accent"
        @click="setSampleCart"
      >
        Remplir le panier
      </button>
    </template>
    <template v-else>
      <div class="content">
        <h2 class="title title-font">
          <div>Votre Panier</div>
          <span class="subtitle"> {{ getCartQty }} article(s)</span>
        </h2>

        <div class="inner">
          <ul class="list">
            <li v-for="item in getCartItems" :key="item.reference" class="item">
              <BasketItem :item="item" />
            </li>
          </ul>
        </div>
      </div>
      <div class="actions">
        <div class="price title-font">
          <div>Montant Total:</div>
          <div>{{ $tools.formattedPrice(getCartTotal) }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getCartItems',
      'getCartQty',
      'getCartTotal',
      'isCartEmpty',
    ]),
  },

  methods: {
    ...mapActions(['setSampleCart']),
  },
}
</script>

<style lang="scss" scoped>
.basket {
  background-color: var(--light-color);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  &--empty {
    padding: var(--spacing);
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: var(--spacing);
  }
}

.content,
.actions {
  padding: var(--spacing);
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
}

.button {
  width: auto;
}

.content {
  padding-block: clamp(100px, calc(20vw + 1rem), 200px) 0;
  flex: 0 1 80%;
  overflow: hidden auto;
}

.inner {
  height: 100%;
  width: rem(930);
  max-width: 100%;
  margin: 0 auto;
  position: relative;
}

.list {
  position: absolute;
  height: 100%;
  inset: 0;
  overflow: hidden auto;

  @include breakpoint('md') {
    position: relative;
    height: auto;
    inset: auto;
    overflow: auto;
  }
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
  margin-bottom: var(--spacing);
}

.subtitle {
  font-size: clamp(14px, calc(2vw + 1rem), 18px);
  font-family: 'Lato', var(--font-system);
}

.actions {
  flex: 0 0 20%;
  border-top: 4px solid var(--brand-color-2);
  justify-content: space-evenly;
  gap: var(--spacing);
}

.price {
  text-align: right;
  font-size: clamp(18px, calc(2vw + 1rem), 36px);
  gap: var(--spacing);
}

.link {
  padding: var(--spacing);
}
</style>
