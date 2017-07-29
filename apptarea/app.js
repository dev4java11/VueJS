var app = new Vue({
  el: '#app',
  data: {
    titulo: 'Lista de Tareas',
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
  },
  methods: {
    agregarNuevaTarea: function(){
      if(this.nuevaTarea && this.nuevaTarea.trim()){
        var tarea = {texto : this.nuevaTarea.trim(), terminada: false};
        this.tareas.push(tarea);
        this.nuevaTarea = '';
      }
    },
    eliminarTarea: function(indice){
      this.tareas.splice(indice, 1);
    }
  }
});
