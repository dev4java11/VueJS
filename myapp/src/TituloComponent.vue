<template>
  <div>
    <h2>{{ tituloMayusculas() }}</h2>
    <h3>Tareas a hacer: {{numTareas}} </h3>
  </div>
</template>

<script>
  import { bus } from './main.js'

  export default {
    props: {
      titulo: {
        type: String,
        default: 'Tareas',
        required: true
      },
      /*numTareas: {
        default: 0
      }*/
    },
    data(){
      return {
        numTareas : 0
      }
    },
    methods: {
      tituloMayusculas(){
        return this.titulo.toUpperCase();
      }
    },
    created(){
      bus.$on('actualizarContador', (numTareas) => {
        this.numTareas = numTareas;
      });
    }
  }
</script>

<style>

</style>
