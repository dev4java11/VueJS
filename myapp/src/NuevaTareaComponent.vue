<template>
  <div class="input-group">
    <input type="text"
      v-model="nuevaTarea"
      @keyup.enter="agregarNuevaTarea"
      placeholder="Escribe una nueva tarea"
      class="form-control"
    />
    <span class="input-group-btn">
      <button @click="agregarNuevaTarea"
        class="btn btn-primary"
      >
        Agregar Tarea
      </button>
    </span>
  </div>
</template>

<script>
  import { bus } from './main.js'

  export default {
    data(){
      return {
        nuevaTarea: ''
      }
    },
    props: ['tareas', 'actualizarContador'],
    methods: {
      agregarNuevaTarea(){
        if(this.nuevaTarea && this.nuevaTarea.trim()){
          var tarea = {texto : this.nuevaTarea.trim(), terminada: false};
          this.tareas.push(tarea);
          this.nuevaTarea = '';
          // Emitimos un evento cuando se agrega una nueva tarea a la lista
          /*this.$emit('incrementarContador', 1);*/

          // Desde el padre enviamos un methodo para que se ejecute
          // this.actualizarContador();

          // Emitir desde un bus
          // bus.$emit('actualizarContador', this.tareas.length);

          // Emitir un metodo personalizado desde el bus
          bus.actualizarContador(this.tareas.length);
        }
      }
    },
    created(){
      // Emitir desde un bus
      // bus.$emit('actualizarContador', this.tareas.length);

      // Emitir un metodo personalizado desde el bus
      bus.actualizarContador(this.tareas.length);
    }
  }
</script>
