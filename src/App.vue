<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Programación Front End</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTabs"
        aria-controls="navbarTabs" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTabs">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <NavLink id="calificaciones" label="Cálculo de calificaciones" />
          <NavLink id="registro" label="Formulario de Registro" />
        </ul>
        <form class="d-flex" @submit.prevent="buscar">
          <input class="form-control me-2" type="search" v-model="query" placeholder="Search" aria-label="Buscar" />
          <button class="btn btn-outline-success" type="submit">Búsqueda</button>
        </form>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <Calificaciones v-if="activeTab === 'calificaciones'" />
    <Registro v-if="activeTab === 'registro'" />
  </div>
</template>

<script>
import { ref } from 'vue'
import NavLink from '@/components/NavLink.vue'
import Calificaciones from '@/components/Calificaciones.vue'
import Registro from '@/components/Registro.vue'

export default {
  components: { NavLink, Calificaciones, Registro },
  setup() {
    const activeTab = ref('calificaciones')
    const query = ref('')
    function buscar() {
      alert(`Buscar: ${query.value}`)
    }
    function changeTab(id) {
      activeTab.value = id
    }
    return { activeTab, query, buscar, changeTab }
  }
}
</script>