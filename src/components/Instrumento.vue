<template>
  <b-container class="d-flex justify-content-center">
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
        <tr>
          <td>{{ instrumentoParam.alumno }}</td>
          <th scope="row">{{ instrumentoParam.legajo }}</th>
          <td>{{ instrumentoParam.fechaNacimiento }}</td>

          <td>
            {{ instrumentoParam.notas }}
          </td>
          <td>
            <router-link
              :to="'/detalle/' + instrumentoParam.legajo"
              class="btn btn-info"
              >Ver Mas</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </b-container>
</template>
<script>
export default {
  props: ["instrumentoParam"],

  methods: {
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
<style scoped>
.gratis {
  color: #00bd4f;
}

.costoEnvio {
  color: #e94d05;
}

.sizeImg {
  min-width: 650px;
  max-width: 650px;
}

.precio {
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: normal;
}
</style>
