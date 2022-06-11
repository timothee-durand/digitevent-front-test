<script lang="ts" setup>
import DownArrowIcon from "@/components/icons/DownArrowIcon.vue";
</script>
<template>
  <button
    type="button"
    @click.prevent="$emit('download')"
    class="download-button"
  >
    <DownArrowIcon />
  </button>
</template>

<style lang="scss" scoped>
.download-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--button-size);
  height: var(--button-size);
  background-color: var(--soft-red);
  border-radius: var(--button-size);
  border: 1px solid var(--black);
  cursor: pointer;

  > svg {
    height: 60%;
  }
}
</style>
