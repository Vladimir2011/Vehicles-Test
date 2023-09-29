import { useVehiclesStore } from '~/stores/useVehiclesStore'

export default defineNuxtRouteMiddleware((to, from) => {
  const vehiclesStore = useVehiclesStore()

  // Проверяем при роутинге, что мы перешли на страницу с машинами и очищаем стор. Это поведение можно поменять
  if (to.fullPath.includes('/vehicles')) {
    vehiclesStore.setSearchInputValue('')
    vehiclesStore.setPerPageValue(20)
  }
})
