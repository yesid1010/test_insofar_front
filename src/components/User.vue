<template>
  <td>{{ index + 1 }}</td>
  <td>{{ user.attributes.cedula }}</td>
  <td>{{ user.attributes.nombres }}</td>
  <td>{{ user.attributes.apellidos }}</td>
  <td>{{ user.attributes.correo }}</td>
  <td>{{ user.attributes.telefono }}</td>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "User",
  props: {
    user: Object,
    index: Number,
  }
});
</script>

<style></style>
