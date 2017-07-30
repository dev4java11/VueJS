<template>
  <ul class="list-group">
    <li v-for="(tarea, index) in tareas" class="list-group-item"
        v-bind:class="{terminada: tarea.terminada}"
    >
        {{tarea.texto}}
        <span class="pull-right">
          <button type="button"
            class="btn btn-success btn-xs glyphicon glyphicon-ok"
            @click="tarea.terminada = !tarea.terminada">
          </button>
          <button type="button"
            class="btn btn-danger btn-xs glyphicon glyphicon-remove"
            @click="eliminarTarea(index)">
          </button>
        </span>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['tareas'],
    methods: {
      eliminarTarea: function(indice){
        this.tareas.splice(indice, 1);
      }
    }
  }
</script>


<style scoped>
  /*El scoped hace que el css solo pertenezca a este componente*/
  /*Tambien se puede tener mas de una seccion de etiquetas style*/
  .terminada{
    color: gray;
    text-decoration: line-through;
  }
</style>
