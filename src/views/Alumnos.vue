<template>
  <div>
    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Legajo</th>

          <th scope="col">Fecha Nac</th>
          <th scope="col">Promedio Notas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="alumno in alumnosData" :key="alumno.legajo">
          <td>{{ alumno.alumno }}</td>
          <th scope="row">{{ alumno.legajo }}</th>
          <td>{{ alumno.fechaNacimiento }}</td>

          <td>
            {{sumarNotas(alumno.notas)}}
          </td>
          <td>
            <router-link :to="'/detalle/' + alumno.legajo" class="btn btn-info"
              >Ver Mas</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Productos",
  components: {},
  mounted() {
    this.getAlumnos();
  },
  data() {
    return {
      alumnosData: [],
    };
  },
  methods: {
    async getAlumnos() {
      await fetch("http://179.43.113.170:8082/test/td/alumnos.json")
        .then((res) => res.json())
        .then((data) => (this.alumnosData = data));
    },
    sumarNotas(notas) {
      var suma = 0;
      for (let index = 0; index < notas.length; index++) {
        suma += notas[index];
      }
      return suma / notas.length;
    },
  },
};
</script>
