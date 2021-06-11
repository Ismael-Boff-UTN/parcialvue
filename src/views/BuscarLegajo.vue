<template>
  <div style="margin-top:80px">
    <div
      v-for="instrumento in buscarMarca2"
      :key="instrumento.id"
      style="margin-top:15px"
      class="d-flex justify-content-center mt-5"
    >
      <instrumento-item :instrumentoParam="instrumento"></instrumento-item>
    </div>
  </div>
</template>

<script>
import Instrumento from "@/components/Instrumento.vue";

export default {
  name: "Productos",
  components: {
    "instrumento-item": Instrumento,
  },
  computed: {
    buscarMarca2: function() {
      const filtro = this.$route.params.filtro;
      console.log(filtro);
      return this.alumnosData.filter((instrumento) => {
        return (String(instrumento.legajo).startsWith(filtro) )
      });
    },
  },
  mounted() {
    this.getInstrumentos();
  },
  data() {
    return {
      alumnosData: [],
    };
  },
  methods: {
    async getInstrumentos() {
      await fetch("http://179.43.113.170:8082/test/td/alumnos.json")
        .then((res) => res.json())
        .then((data) => {
          this.alumnosData = data;
          console.log(data);
        });
    },
  },
};
</script>
