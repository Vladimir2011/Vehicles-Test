<template>
  <nav class="sidebar-nav-list">
    <nuxt-link
      v-for="item in SIDEBAR_NAVIGATION"
      :key="item.id"
      class="navigation-1 sidebar-nav-list-item"
      :to="item.link"
    >
      <img class="sidebar-nav-list-item-icon" :src="item.icon" :alt="`${item.name}-icon`" />
      {{ item.name }}
    </nuxt-link>
  </nav>
</template>

<script setup lang="ts">
const { SIDEBAR_NAVIGATION } = useConstants()
</script>

<style scoped lang="scss">
@use '@/assets/scss/variables' as *;

.sidebar-nav-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  .sidebar-nav-list-item {
    display: flex;
    align-items: center;
    position: relative;
    gap: 20px;
    width: 100%;
    padding: 12px 30px;
    color: $text_white_45;

    &:hover {
      background-color: $text_white_20;
      color: $text_white;
      .sidebar-nav-list-item-icon {
        filter: brightness(0) invert(1);
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 100%;
        background-color: $primary_red;
      }
    }
  }

  .router-link-exact-active {
    background-color: $text_white_20;
    color: $text_white;
    .sidebar-nav-list-item-icon {
      filter: brightness(0) invert(1);
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 100%;
      background-color: $primary_red;
    }
  }
}
</style>
