<template>
  <div class="container mt-5">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Cedula</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Correo</th>
          <th>Telefono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <User :user="user" :index="index" />
          <td>
            <div class="row">
              <div class="col-md-4">
                <button
                  @click="editUser(user)"
                  class="btn btn-warning"
                >
                  Editar
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import useUsers, { users } from "../composables/useUsers";
import User from "./User.vue";
export default defineComponent({
  name: "ListUsers",
  components: {
    User,
  },
  setup() {
    const { getUsers, editUser } = useUsers();
    onMounted(async () => {
      await getUsers();
    });

    return { users, editUser };
  },
});
</script>

<style></style>
