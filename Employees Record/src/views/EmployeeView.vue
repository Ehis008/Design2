<script setup>
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()
const employeeID = computed(() => route.query.id)
const employee = computed(() => store.getters.getEmployeeById(employeeID.value))
onMounted(async () => {
  await store.dispatch('fetchEmployees')
})
</script>

<template>
  <div v-if="employee" class="container text-primary">
    <h3>Name: {{ employee.first_name }} {{ employee.last_name }}</h3>
    <p>Email: {{employee.email}}</p>
    <p> Image: <img :src="employee.avatar" style="width:250px; height: 250px; border-radius:50%" class= "img-fluid"></p>
    
  </div>
  <div v-else>
    <h3>employee not found</h3>
  </div>
</template>
