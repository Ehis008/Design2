<script setup>
import {onMounted, computed} from "vue";
import {useStore} from "vuex";

const store = useStore();
onMounted( async()=>{
    await store.dispatch("GetUsers")
});
const users= computed(()=> store.state.users)
const deleteBtn = index =>
    store.state.users.splice(index,1)

 deleteBtn()

</script>

<template>
    <div class= "container mt-5 mb-5">
        <table class= "table table-bordered">
            <thead>
                <tr>
                    <th>UserID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user.id">
                    <td>{{user.userId}}</td>
                    <td>{{user.id}}</td>
                    <td>{{user.title}}</td>
                    <td>{{user.completed}}</td>
                    <td><button @click="deleteBtn" class="btn btn-danger">X </button></td>

                </tr>
            </tbody>
        </table>
    </div>    
</template>