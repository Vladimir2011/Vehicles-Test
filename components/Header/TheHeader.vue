<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-title-block">
        <h1 class="header-title heading-1">Vehicles</h1>
        <p class="header-amount text-3">{{ vehiclesStore.getTotalVehicles }}</p>
      </div>

      <div class="header-tools-block">
        <button class="header-tools-add-button button">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21 13C21.5523 13 22 13.4477 22 14V28C22 28.5523 21.5523 29 21 29C20.4477 29 20 28.5523 20 28V14C20 13.4477 20.4477 13 21 13Z"
              fill="#E86E84"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13 21C13 20.4477 13.4477 20 14 20H28C28.5523 20 29 20.4477 29 21C29 21.5523 28.5523 22 28 22H14C13.4477 22 13 21.5523 13 21Z"
              fill="#E86E84"
            />
            <rect x="0.5" y="0.5" width="41" height="41" rx="5.5" stroke="#E86E84" stroke-linejoin="round" />
          </svg>
        </button>
        <div class="header-tools-profile">
          <nuxt-img width="46" height="46" fit="contain" src="/user.jpg" />
          <p class="header-tools-profile-name text-3">John Doe</p>
        </div>
        <div class="header-tools-localization">
          <img src="/images/svg/uk.svg" alt="uk-flag" />
          <div class="header-tools-localization-select">
            <p class="header-tools-localization-name text-3">En</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 10L12 14L8 10"
                stroke="#293148"
                stroke-opacity="0.6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useVehiclesStore } from '~/stores/useVehiclesStore'

const vehiclesStore = useVehiclesStore()
</script>

<style scoped lang="scss">
@use '@/assets/scss/variables' as *;

.header {
  padding: 0 30px;
  height: 102px;
  border-bottom: 1px solid $text_line_grey;
  display: grid;

  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-title-block {
      display: flex;
      align-items: center;
      gap: 18px;
      .header-title {
        margin: 0;
      }

      .header-amount {
        display: block;
        padding: 4px 14px;
        border-radius: 6px;
        color: $text_dark_grey;
        background-color: $primary_light;
      }
    }

    .header-tools-block {
      display: flex;
      align-items: center;
      .header-tools-add-button {
        margin-right: 40px;
        height: 42px;
        &:hover {
          svg {
            path {
              fill: #d90e32;
            }
            rect {
              stroke: #d90e32;
            }
          }
        }
      }

      .header-tools-profile {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-right: 32px;
      }

      .header-tools-localization {
        display: flex;
        gap: 14px;
        cursor: pointer;

        .header-tools-localization-select {
          display: flex;
          gap: 3px;
        }
      }
    }
  }
}
</style>
