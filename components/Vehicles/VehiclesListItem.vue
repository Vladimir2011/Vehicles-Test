<template>
  <div class="vehicle-item">
    <button class="vehicle-more-info-button">
      <img src="@/images/svg/more-info.svg" alt="more-info-icon" />
    </button>
    <div class="vehicle-item-info-block">
      <nuxt-img
        v-if="vehicle.preview"
        class="vehicle-item-info-image"
        width="260"
        height="156"
        fit="contain"
        :src="vehicle.preview"
        :placeholder="vehicle.placeholder"
        loading="lazy"
      />

      <nuxt-img v-else class="vehicle-item-info-image" width="260" height="135" fit="cover" src="/auto-image.png" />

      <div class="vehicle-item-info">
        <p class="vehicle-item-info-name">
          {{ vehicle.vehicle_name ? vehicle.vehicle_name : 'Заглушка для названия' }}
        </p>
        <p class="vehicle-item-info-vin label-text">{{ vehicle.vin }}</p>
      </div>

      <div class="vehicle-item-info-amount-block">
        <p
          class="vehicle-item-info-amount text-4"
          :class="{ 'vehicle-item-info-amount-full': vehicle.uploads === vehicle.angles_count }"
        >
          <img v-if="vehicle.uploads === vehicle.angles_count" src="@/images/svg/check.svg" alt="check-icon" />
          {{ vehicle.uploads }}/{{ vehicle.angles_count }}
        </p>
        <p class="vehicle-item-info-label text-3">3 days left</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  vehicle: Object,
  default() {
    return {}
  }
})
</script>

<style scoped lang="scss">
@use '@/assets/scss/variables' as *;

.vehicle-item {
  padding: 40px 24px 24px 24px;
  background-color: $primary_light;
  border-radius: 10px;
  position: relative;

  .vehicle-more-info-button {
    position: absolute;
    top: 20px;
    right: 24px;
    &:hover {
      opacity: 0.5;
    }
  }

  .vehicle-item-info-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    .vehicle-item-info-image {
      margin-bottom: 24px;
      width: 260px;
      height: 156px;
      object-fit: contain;
    }

    .vehicle-item-info {
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-self: flex-start;
      padding-bottom: 18px;
      margin-bottom: 18px;
      width: 100%;
      border-bottom: 1px solid $text_line_grey;

      .vehicle-item-info-name {
        font-size: 20px;
        line-height: 22px;
        font-weight: 700;
      }

      .vehicle-item-info-vin {
        color: $text_grey;
      }
    }

    .vehicle-item-info-amount-block {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .vehicle-item-info-amount {
        color: $text_dark_grey;
        font-weight: 700;
        padding: 4px 14px;
        border-radius: 6px;
        background-color: $secondary_light_grey;
      }

      .vehicle-item-info-amount-full {
        display: flex;
        align-items: center;
        gap: 8px;
        color: $secondary_light_green;
        background-color: rgba(228, 245, 221, 1);
        padding: 4px 12px;
      }

      .vehicle-item-info-label {
        color: $text_grey;
        line-height: 16px;
      }
    }
  }
}
</style>
