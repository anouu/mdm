<template>
  <div :class="['basket-item', { 'basket-item--mini': mini }]">
    <div class="image">
      <BaseImage
        :sources="item.images"
        :alt="item.name"
        :size="imageSize"
        :has-sourceset="!mini"
      />
    </div>
    <div class="content">
      <div class="info">
        <div class="name">{{ item.name }}</div>
        <div class="ref">{{ item.reference }}</div>
        <div class="price">
          {{ $tools.formattedPrice(item.price.base.amount) }}
        </div>
        <div class="quantity">x{{ item.qty }}</div>
      </div>
      <div v-if="!mini" class="actions">
        <Counter :count="item.qty" @modify="handleCounter($event, item)" />
        <button
          class="button"
          title="Retirer un produit"
          @click="handleDelete(item)"
        >
          <div class="material-icons icon">delete_outline</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    mini: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    imageSize() {
      return this.mini ? 'xsmall' : 'medium'
    },
  },

  methods: {
    ...mapActions(['updateProduct', 'deleteProduct']),
    ...mapActions('ui', ['setModal']),

    handleDelete(item) {
      this.setModal({
        status: true,
        data: {
          body: `Confirmer la supression de <span>${item.name}</span> du panier`,
          action: this.deleteProduct,
          actionData: item.reference,
        },
      })
    },

    handleCounter(modifier, item) {
      const { reference, qty } = item

      if (qty + modifier === 0) {
        this.handleDelete(item)
        return
      }

      this.updateProduct({ reference, qty: qty + modifier })
    },
  },
}
</script>

<style lang="scss" scoped>
.basket-item {
  display: flex;
  font-size: clamp(15px, calc(1vw + 1rem), 22px);

  &--mini {
    font-size: clamp(15px, calc(1vw + 1rem), 16px);
  }
}

.content {
  padding: 0 0 var(--spacing-small) var(--spacing-small);
  flex: 0 0 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--spacing-small);
}

.info {
  div + div {
    margin-top: calc(var(--spacing-small) / 2);
  }
}

.image {
  flex: 0 0 30%;
}

.ref {
  font-style: italic;
}

.price,
.quantity {
  text-align: right;
}

.price {
  font-weight: 700;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icon {
  font-size: clamp(18px, calc(2vw + 1rem), 36px);
  color: var(--brand-color-2);
}
</style>
