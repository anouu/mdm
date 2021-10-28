<template>
  <img
    v-if="hasSourceSet"
    class="image"
    :srcset="imageSrcset"
    :alt="alt"
    loading="lazy"
  />
  <img v-else class="image" :src="imageSource" :alt="alt" />
</template>

<script>
export default {
  props: {
    sources: {
      type: Array,
      required: true,
    },
    hasSourceset: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['large', 'medium', 'small', 'xsmall'].includes(value)
      },
    },
    alt: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      sizeMap: {
        large: 1000,
        medium: 500,
        small: 350,
        xsmall: 200,
      },
    }
  },

  computed: {
    imageSource() {
      return this.sources[0][this.size]
    },

    imageSrcset() {
      const srcset = Object.entries(this.sources[0]).map(([key, value]) => {
        return `${value} ${this.sizeMap[key]}w`
      })
      return srcset.join(', ')
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  max-width: 100%;
  display: block;
  border: 1px solid var(--brand-color-2);
}
</style>
