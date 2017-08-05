<template>
  <form class="form">
    <slot name="titulo"></slot>
    <slot name="elementos"></slot>
    <slot name="boton"></slot>
    <!--
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
    <button class="btn btn-primary">Iniciar Sesión</button>
  -->
  </form>
</template>

<script>
  export default {

  }
</script>

<style>

</style>
