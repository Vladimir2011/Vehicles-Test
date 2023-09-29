<template>
  <div class="pagination">
    <button
      class="pagination-button previous-page-button"
      :disabled="vehiclesStore.getCurrentPage === 1"
      @click.prevent="vehiclesStore.loadVehicles(vehiclesStore.getPrevLink)"
    >
      <img src="@/images/svg/prev-arrow.svg" alt="arrow-left" />
    </button>
    <input
      min="1"
      :max="vehiclesStore.getLastPage"
      oninput="validity.valid||(value='');"
      type="number"
      class="input"
      disabled
      :value="vehiclesStore.getCurrentPage"
    />
    <span class="pagination-span helper-text">of</span>
    <input :value="vehiclesStore.getLastPage" type="number" disabled class="input total-pages text-4" />
    <button
      class="pagination-button next-page-button"
      :disabled="vehiclesStore.getCurrentPage === vehiclesStore.getLastPage"
      @click.prevent="vehiclesStore.loadVehicles(vehiclesStore.getNextLink)"
    >
      <img src="@/images/svg/next-arrow.svg" alt="arrow-right" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useVehiclesStore } from '~/stores/useVehiclesStore'

const vehiclesStore = useVehiclesStore()
</script>

<style scoped lang="scss">
@use '@/assets/scss/variables' as *;

.pagination {
  display: flex;
  align-items: center;
  gap: 12px;

  .pagination-button {
    &:hover {
      opacity: 0.8;
    }
    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }

  .current-page-number {
    color: $text_dark_grey;
  }

  .total-pages {
    color: $text_light_grey;
  }

  .pagination-span {
    color: $text_dark_grey;
    line-height: 24px;
  }

  .input {
    padding: 5px 6px;
    border: 1px solid $text_line_grey;
    border-radius: 6px;
    width: 32px;
    height: 32px;
    text-align: center;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
}
</style>
