<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/assets/scss/variables' as *;

.button {
  background-color: $primary_red;
  padding: 9px 18px;
  color: $text_white;
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 16px;

  &:hover {
    background: rgba(222, 48, 78, 1);
  }
}
</style>
