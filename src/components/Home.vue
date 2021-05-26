<template>
  <ListUsers />
</template>

<script>
import ListUsers from "./ListUsers.vue";
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "Home",
  components: {
    ListUsers,
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
