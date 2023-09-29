<template>
  <TheHeader />
  <div class="container">
    <div class="form-tools-wrapper">
      <div class="form-tools-block">
        <FormKit
          v-model="searchInputValue"
          type="search"
          placeholder="Search VIN"
          :suffix-icon="searchIcon"
          inner-class="formkit-inner-search"
        />
        <div class="select-block">
          <p class="select-block-text body-text">Select vehicles per page:</p>
          <FormKit
            v-model="perPageValue"
            type="select"
            name="vehicles per page"
            inner-class="formkit-inner-select"
            :select-icon="selectIcon"
            :options="[5, 10, 15, 20]"
          />
        </div>
      </div>
      <AppButton>
        <img src="/images/svg/plus.svg" alt="plus-icon" />
        <span class="button-span button-2">Add vehicle</span>
      </AppButton>
    </div>

    <VehiclesList />

    <div class="vehicles-footer">
      <p class="vehicles-footer-amount body-text">
        Showing {{ vehiclesStore.getCurrentVehiclesPage }} out of {{ vehiclesStore.getTotalVehicles }}
      </p>
      <AppPagination />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVehiclesStore } from '~/stores/useVehiclesStore'
import { refDebounced } from '@vueuse/core'

const { selectIcon, searchIcon } = useConstants()
const vehiclesStore = useVehiclesStore()
const searchInputValue: string | number = ref('')
const perPageValue = ref(20)
const debouncedSearchInputValue = refDebounced(searchInputValue, 600)

// Загружаем машины
await vehiclesStore.loadVehicles('')

// Смотрим за результатом debounce функции выше и вызываем нужные нам методы / пишем логику
watch(debouncedSearchInputValue, async () => {
  // Если длина вводимого значения больше 2, то делаем запрос
  if (searchInputValue.value.length > 2) {
    await vehiclesStore.getSearchVehicles(searchInputValue.value)
    await vehiclesStore.setSearchInputValue(searchInputValue.value)
  }

  if (searchInputValue.value.length === 0) {
    await vehiclesStore.setSearchInputValue('')
    await vehiclesStore.loadVehicles('')
  }
})

watch(perPageValue, async () => {
  vehiclesStore.setPerPageValue(perPageValue.value)
  if (searchInputValue.value.length === 0) {
    await vehiclesStore.loadVehicles('')
  } else {
    await vehiclesStore.getSearchVehicles(searchInputValue.value)
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;

.form-tools-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  .form-tools-block {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .select-block {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .button-span {
    text-transform: uppercase;
  }
}

.vehicles-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .vehicles-footer-amount {
    color: $text_dark_grey;
  }
}
</style>
