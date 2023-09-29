<template>
  <div v-if="vehiclesStore.getVehiclesListLength" class="vehicles-list">
    <VehiclesListItem v-for="item in vehiclesStore.getVehiclesList" :key="item.id" :vehicle="item" />
  </div>
  <p v-else class="heading-2 empty-list">Nothing was found</p>
</template>

<script setup lang="ts">
import { useVehiclesStore } from '~/stores/useVehiclesStore'

const vehiclesStore = useVehiclesStore()
</script>

<style scoped lang="scss">
.vehicles-list {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(354px, 1fr));
  margin-bottom: 32px;
}

.empty-list {
  text-align: center;
  margin-bottom: 32px;
}
</style>
