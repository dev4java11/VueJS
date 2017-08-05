<template>
  <div class="container">
    <div class="jumbotron">
      <mostrar-formulario>
        <div slot="titulo">
          <h3>Cambiar Contraseña</h3>
        </div>
        <div slot="elementos">
          <div class="form-group">
            <label for="correo">Correo Electrónico</label>
            <input id="correo" type="email"
              class="form-control"
              placeholder="Escribe tu Correo Electrónico"
            >
          </div>
          <div class="form-group">
            <label for="clave">Contraseña</label>
            <input id="clave" type="password"
              class="form-control"
              placeholder="Escribe tu Contraseña"
            >
          </div>
        </div>
        <div slot="boton">
          <button class="btn btn-primary">Iniciar Sesión</button>
        </div>
      </mostrar-formulario>
    </div>
  </div>
</template>

<script>
  import MostrarFormulario from './mostrarFormulario.vue'

  export default {
    components: {
      mostrarFormulario: MostrarFormulario
    },
    data(){

    }
  }
</script>

<style>

</style>
