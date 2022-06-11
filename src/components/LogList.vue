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
  max-height: 70vh;
  overflow-y: scroll;

  &__header {
    margin-bottom: 20px;
  }

  &__title {
    font-weight: 700;
    text-decoration: underline;
  }
}
</style>
