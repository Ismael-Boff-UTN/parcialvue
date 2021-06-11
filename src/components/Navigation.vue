<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="/">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          
          <li class="nav-item">
            <router-link to="/alumnos" class="nav-link">Alumnos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/mejor-alumno" class="nav-link">Mejor Alumno</router-link>
          </li>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
         
          <b-nav-form @keyup="busqueda">
             <span class="text-white">Buscar Por Nombre   :   </span>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Buscar"
              v-model="form.buscar"
            ></b-form-input>
          </b-nav-form>

          <b-nav-form @keyup="busqueda2">
             <span class="text-white">Buscar Por Legajo   :   </span>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Buscar"
              v-model="form.buscar2"
            ></b-form-input>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        buscar: "",
        buscar2 : "",
      }
    }
  },
  methods: {
    busqueda() {
      this.$router.push('/alumnos/'+ this.form.buscar)
       
    },
    busqueda2() {
      this.$router.push('/alumnos-leg/'+ this.form.buscar2)
       
    }
  }
};
</script>

<style lang=""></style>
