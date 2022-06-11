<script lang="ts" setup>
import DownloadButton from "@/components/DownloadButton.vue";

const props = defineProps<{
  factType: string
}>();
</script>
<template>
  <div class="fact-card">
    <div class="fact-card__header">
      <p>A cool <strong class="fact-card__fact-type">{{ props.factType }}</strong> Fact</p>
      <DownloadButton @download="$emit('newFact')" />
    </div>

    <div class="fact-card__body">
      <slot name="body"><p>Fact text</p></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fact-card {
  display: grid;
  grid-template-rows: 40px minmax(max-content, 1fr);
  gap: 10px;
  min-height: 200px;
  padding: 20px;
  background-color: var(--white);
  border-radius: var(--card-border-radius);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  .fact-card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .fact-card__fact-type {
    font-weight: 700;
    text-decoration: underline;
  }

  .fact-card__body {
    padding: 0 10px;
    align-items: center;
  }
}
</style>