<template>
  <div class="cart">
    <Header :hide-basket-button="true" />
    <section class="content">
      <Basket />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  height: 100vh;
}
</style>
