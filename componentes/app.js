var data = {
  nuevaTarea: '',
  tareas: [
    {
      texto: 'Aprender Vue.js',
      terminada: false
    },
    {
      texto: 'Aprender Angular 2',
      terminada: false
    },
    {
      texto: 'Aprender Ionic 2',
      terminada: false
    }
  ]
}

var tituloCp = Vue.component('titulo', {
  template: '<h2>{{ titulo }}</h2>',
  data: function(){
    return {
      titulo: 'Lista de Tareas con Componentes'
    }
  }
});

var agregarTareaCp = Vue.component('nueva-tarea',{
  template: `
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
    </div>`,
  data: function(){
    return data;
  },
  methods: {
    agregarNuevaTarea: function(){
      if(this.nuevaTarea && this.nuevaTarea.trim()){
        var tarea = {texto : this.nuevaTarea.trim(), terminada: false};
        this.tareas.push(tarea);
        this.nuevaTarea = '';
      }
    }
  }
});

var listaTareaCP = Vue.component('lista-tarea', {
  template: `
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
        </ul>`,
  data: function(){
    return data;
  },
  methods: {
    eliminarTarea: function(indice){
      this.tareas.splice(indice, 1);
    }
  }
});

var app = new Vue({
  el: '#app',
  data: data
});
