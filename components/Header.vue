<template>
  <header class="header">
    <NuxtLink to="/" class="link title-font">M</NuxtLink>
    <div class="actions">
      <template v-if="settingsHidden">
        <button
          class="button button--small"
          title="Syncroniser le panier"
          @click="handleSync"
        >
          <div class="material-icons icon">file_download</div>
        </button>
        <button
          class="button button--small"
          title="Changer de mode"
          @click="handleDarkMode"
        >
          <div class="material-icons icon">
            {{ isDarkMode ? 'light_mode' : 'dark_mode' }}
          </div>
        </button>
      </template>

      <button
        class="button settings"
        title="Ouvrir les paramètres"
        @click="settingsHidden = !settingsHidden"
      >
        <div class="material-icons icon">settings</div>
      </button>

      <button
        v-if="!hideBasketButton"
        class="button basket"
        title="Afficher le mini panier"
        @click="handleBasket"
      >
        <div class="material-icons icon">shopping_cart</div>
        <div v-if="!isCartEmpty" class="badge">{{ getCartQty }}</div>
      </button>
    </div>
  </header>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  props: {
    hideBasketButton: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      settingsHidden: false,
    }
  },

  computed: {
    ...mapState('ui', ['isDarkMode']),
    ...mapGetters(['getCartQty', 'isCartEmpty']),
  },

  methods: {
    ...mapActions(['setSampleCart']),
    ...mapActions('ui', ['setDarkMode', 'setBasketMini']),

    handleDarkMode() {
      this.setDarkMode(!this.isDarkMode)
    },

    handleBasket() {
      this.setBasketMini(true)
    },

    async handleSync() {
      const delay = Math.floor(Math.random() * (800 - 300) + 300)
      await this.$tools.sleep(delay)

      await this.setSampleCart()
    },
  },
}
</script>

<style lang="scss" scoped>
.header,
.settings,
.actions {
  display: flex;
  align-items: center;
}

.header {
  position: fixed;
  inset: 0 0 auto 0;
  background-color: var(--light-color);
  justify-content: space-between;
  padding: var(--spacing-small) var(--spacing);
  color: var(--dark-color);
  border-bottom: 4px solid var(--brand-color-2);
  z-index: 20;
}

.link {
  font-size: clamp(24px, calc(5vw + 1rem), 90px);
  color: var(--brand-color-1);
}

.icon {
  font-size: var(--icon-size);
  height: var(--icon-size);
  width: var(--icon-size);
}

.button {
  line-height: 0;

  --icon-size: clamp(24px, calc(2vw + 1rem), 40px);

  font-size: var(--icon-size);

  &--small {
    --icon-size: clamp(16px, calc(1vw + 1rem), 30px);
  }

  & + & {
    margin-left: 0.5em;
  }
}

.badge {
  background-color: var(--light-color);
  position: absolute;
  inset: rem(-14) rem(-14) auto auto;
  width: rem(22);
  height: rem(22);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--brand-color-1);
  font-size: rem(14);
  font-weight: 700;
  line-height: 0;
  border-radius: 50%;
  border: 2px solid var(--brand-color-2);
}
</style>
