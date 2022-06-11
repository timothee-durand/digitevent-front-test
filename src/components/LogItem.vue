<script setup lang="ts">
import { capitalize } from "vue";
import type { FactType } from "@/types/api";
defineProps<{
  time: string;
  factType: FactType;
  factText: string;
}>();
</script>

<template>
  <div class="log-item">
    <p class="log-item__hour">{{ time }}</p>
    <p class="log-item__type">{{ capitalize(factType) }} Fact</p>
    <p class="log-item__text">{{ factText }}</p>
  </div>
</template>

<style lang="scss" scoped>
.log-item {
  margin-block-end: 20px;
  &__hour,
  &__type {
    font-weight: 700;
  }

  &__text {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
