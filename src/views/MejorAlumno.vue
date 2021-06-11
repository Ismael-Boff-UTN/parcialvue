<template>
  <div style="margin-top:80px">
    <b-container fluid class="mt-4">
      <b-row>
        <b-col>
          <b-img
            :src="instrumentoEncontrado.foto"
            class="d-block mx-auto sizeImg"
          ></b-img>
          <p class="title">Nombre:</p>
          <p v-if="instrumentoEncontrado.estaActivo === true" class="gratis">
            {{ instrumentoEncontrado.alumno }}
          </p>
          <p v-else class="costoEnvio">{{ instrumentoEncontrado.alumno }}</p>
        </b-col>
        <b-col lg="0">
          <div class="verticalLine d-none d-lg-block"></div>
        </b-col>
        <b-col lg="4">
          <b-row>
            <b-col>
              <span>Legajo : {{ instrumentoEncontrado.legajo }}</span>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p
                v-if="instrumentoEncontrado.estaActivo === true"
                class="instrumento"
              >
                Esta Activo : SI
              </p>
              <p v-else class="instrumento">Esta Activo : NO</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p>
                Fecha Nacimiento : {{ instrumentoEncontrado.fechaNacimiento }}
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p>Carrera : {{ instrumentoEncontrado.carrera }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p class="title">Notas: {{ instrumentoEncontrado.notas }}</p>
              <p class="title">
                Promedio : {{ sumarNotas(instrumentoEncontrado.notas) }}
              </p>
            </b-col>
          </b-row>

          <b-row class="mt-3 pt-3">
            <b-col>
              <b-button size="sm" variant="primary" href="/alumnos"
                >Volver</b-button
              >
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="1">
          <div class="verticalLine d-none d-lg-block"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "DetalleInstrumento",
  components: {},
  mounted() {
    this.getInstrumentoPorId();
  },
  data() {
    return {
      instrumentoEncontrado: [],
    };
  },
  methods: {
    async getInstrumentoPorId() {
      //const parametroId = this.$route.params.id;
      //console.log(parametroId);
      const res = await fetch(
        "http://179.43.113.170:8082/test/td/alumnos.json"
      );
      const resJson = await res.json();
      //console.log(resJson);
      this.instrumentoEncontrado = await resJson.filter(
        (instrumento) => this.sumarNotas(instrumento.notas) >= 9
      )[0];
      console.log(this.instrumentoEncontrado.foto);
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
<style scoped>
.title {
  font-size: 16px;
  font-weight: bold;
}

.descripcion {
  font-size: 13px;
}

.instrumento {
  font-size: 24px;
  font-weight: bold;
}
.verticalLine {
  border-left: 1px solid rgba(134, 126, 126, 0.26);
  height: 100%;
}
.gratis {
  font-size: 30px;
  color: #00bd4f;
}

.costoEnvio {
  font-size: 30px;
  color: red;
}
.sizeImg {
  min-width: 300px;
  max-width: 300px;
}
</style>
