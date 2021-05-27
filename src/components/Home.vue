<template>
  <Form/>
  <h1 class="text-center mt-5">Listado de usuarios</h1>
  <ListUsers />
</template>

<script>
import ListUsers from "./ListUsers.vue";
import Form from "./Form.vue";
import {modal} from "../composables/useUsers"
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "Home",
  components: {
    ListUsers,
    Form,
  },
  setup(){
    const openModal = () => {
      modal.value = true
    }
    return {modal,openModal}
  }
});
</script>

<style scoped>


</style>
