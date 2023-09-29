import { defineStore } from 'pinia'

export const useVehiclesStore = defineStore('VehiclesStore', {
  state: (): any => ({
    vehiclesData: [],
    searchInputValue: '',
    perPageValue: 20
  }),
  actions: {
    async loadVehicles(link: string) {
      if (!link) {
        // Задаем дефолтное значение, если нету ссылки
        link = 'https://api.caiman-app.de/api/cars-test?page=1'
      }

      let newLink = ''

      if (!link.includes('https')) {
        newLink = link.replace('http', 'https')
      } else {
        newLink = link
      }

      const { data, error } = await useFetch(`${newLink}&search=${this.searchInputValue}&per_page=${this.perPageValue}`)
      this.vehiclesData = toRaw(data.value)

      if (!data.value) {
        console.log(error.value)
      }
    },
    async getSearchVehicles(query: string) {
      const { data, error } = await useFetch(
        `https://api.caiman-app.de/api/cars-test?search=${query}&per_page=${this.perPageValue}`
      )

      this.vehiclesData = toRaw(data.value)

      if (!data.value) {
        console.log(error.value)
      }
    },
    setSearchInputValue(value: string) {
      this.searchInputValue = value
    },
    setPerPageValue(value: number) {
      this.perPageValue = value
    }
  },
  getters: {
    getVehiclesList: state => state.vehiclesData.data,
    getVehiclesListLength: state => state.vehiclesData.data.length,
    getVehiclesDataLinks: state => state.vehiclesData.links,
    getVehiclesDataMeta: state => state.vehiclesData.meta,
    getCurrentPage: state => state.vehiclesData.meta.current_page,
    getLastPage: state => state.vehiclesData.meta.last_page,
    getNextLink: state => state.vehiclesData.links.next,
    getPrevLink: state => state.vehiclesData.links.prev,
    getTotalVehicles: state => state.vehiclesData.meta.total,
    getCurrentVehiclesPage: state => state.vehiclesData.meta.to
  }
})
