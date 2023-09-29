<template>
  <div class="page-wrapper">
    <TheSidebar />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main {
  margin-left: 256px;
}
</style>
