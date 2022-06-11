<script lang="ts" setup>
import DownArrowIcon from "@/components/icons/DownArrowIcon.vue";
</script>
<template>
  <button type="button" @click.prevent="$emit('click')" class="download-button"><DownArrowIcon/></button>
</template>

<style lang="scss" scoped>
.download-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #ff6969;
  border-radius: 50px;
  border: 1px solid black;
  cursor: pointer;

  > svg {
    height: 60%;
  }
}

</style>