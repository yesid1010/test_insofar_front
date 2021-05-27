<template>
  <!-- Modal -->

  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <input
          type="text"
          class="form-control"
          placeholder="Cedula"
          v-model="user.cedula"
        />
      </div>
      <div class="col-md-4">
        <input
          type="text"
          class="form-control"
          placeholder="Nombres"
          v-model="user.nombres"
        />
      </div>
      <div class="col-md-4">
        <input
          type="text"
          class="form-control"
          placeholder="Apellidos"
          v-model="user.apellidos"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mt-2">
        <input
          type="text"
          class="form-control"
          placeholder="Correo"
          v-model="user.correo"
        />
      </div>
      <div class="col-md-4 mt-2">
        <input
          type="text"
          class="form-control"
          placeholder="Telefono"
          v-model="user.telefono"
        />
      </div>
      <div class="col-md-4 mt-2">
        <div v-if="modal">
          <button
            type="button"
            @click="cleanFields"
            class="btn btn-primary w-40 mx-2"
          >
            Cancelar
          </button>
          <button type="button" @click="optionUser('update')" class="btn btn-warning w-40">Actualizar</button>
        </div>

        <button
          v-else
          type="button"
          @click="optionUser('save')"
          class="btn btn-primary w-100"
        >
          Crear Usuario
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import useUsers, { user, modal } from "../composables/useUsers";
export default defineComponent({
  name: "Form",
  setup() {
    const { optionUser, cleanFields } = useUsers();
    return { user, optionUser, modal, cleanFields };
  },
});
</script>

<style></style>
