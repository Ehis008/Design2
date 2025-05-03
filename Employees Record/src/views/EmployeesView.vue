<script setup>
import Header from '@/components/Header.vue'
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { RouterLink } from 'vue-router'

const store = useStore()

onMounted(async () => {
  await store.dispatch('fetchEmployees')
})

const employees = computed(() => store.state.employees)
</script>
<template>
  <div class="container mt-5 mb-5">
    <Header title="Employees View" description="See list of Employees'data" />

    <table class="table table-bordered shadow mt-5">
      <thead>
        <tr>
          <th class="text-primary">S/N</th>
          <th class="text-primary">First Name</th>
          <th class="text-primary">Last Name</th>
          <th class="text-primary">Email</th>
          <th class="text-primary">Avatar</th>
          <th class="text-primary">View</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td class="text-primary">{{ employee.id }}</td>
          <td class="text-primary fst-italic">{{ employee.first_name }}</td>
          <td class="text-primary fst-italic">{{ employee.last_name }}</td>
          <td class="text-primary fst-italic">{{ employee.email }}</td>
          <td>
            <img :src="employee.avatar" alt="{{employee.first_name}}" />
          </td>
          <td>
            <RouterLink :to="`/employee?id=${employee.id}`">view</RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="text-primary fw-bold">Total employees: {{ employees.length }}</p>
  </div>
</template>
