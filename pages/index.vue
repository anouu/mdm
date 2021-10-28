<template>
  <div class="home">
    <Header />
    <section class="content">
      <h1 class="title title-font">Bonjour</h1>
    </section>
    <BasketMini />
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;

  @include breakpoint('md') {
    justify-content: flex-start;
  }
}

.title {
  font-size: clamp(24px, calc(5vw + 1rem), 90px);
  margin-bottom: 3em;

  @include breakpoint('md') {
    margin-left: 3em;
  }
}
</style>
