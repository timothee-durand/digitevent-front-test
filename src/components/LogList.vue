<template>
  <div class="log-list">
    <div class="log-list__header">
      <p class="log-list__title">Logs</p>
    </div>
    <div class="log-list__body">
      <slot name="logs" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.log-list {
  background-color: var(--white);
  padding: 30px;
  width: 100%;

  &__header {
    margin-bottom: 20px;
  }

  &__title {
    font-weight: 700;
    text-decoration: underline;
  }

  @media (min-width: 700px) {
    max-height: 70vh;
    overflow-y: scroll;
  }
}
</style>
