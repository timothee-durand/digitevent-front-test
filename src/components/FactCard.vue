<script lang="ts" setup>
import DownloadButton from "@/components/DownloadButton.vue";
import type { FactType } from "@/types/api";
import { capitalize } from "vue";
defineProps<{
  factType: FactType;
}>();
</script>
<template>
  <div class="fact-card">
    <div class="fact-card__header">
      <p>
        A cool
        <strong class="fact-card__fact-type">{{ capitalize(factType) }}</strong> Fact
      </p>
      <DownloadButton @click.prevent="$emit('newFact')" />
    </div>

    <div class="fact-card__body">
      <slot name="body"><p>Fact text</p></slot>
    </div>
  </div>
</template>

<style lang="scss">
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
    font-weight: 700;
    word-break: break-word;
    white-space: break-spaces;
  }
}
</style>
