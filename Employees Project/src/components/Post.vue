<script setup>
import {ref, onMounted, computed} from "vue";
import {useStore} from "vuex";
import {RouterLink} from "vue-router";
import {useRoute} from "vue-router";

const store = useStore();
 const route = useRoute();


onMounted(async()=>{
    await store.dispatch("GetPosts")
}

);

const posts = computed(()=>store.state.posts);

const deleteButton= index => store.state.posts.splice(index, 1);

deleteButton()





</script>

<template>
    <div class= "container mt-5 mb-5">
        <table class= "table table-bordered">
            <thead>
                <tr>
                    <th>UserID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
             <tr v-for="(post, index) in posts" :key="post.id">
                    <td>{{post.userId}}</td>
                    <td>{{post.id}}</td>
                    <td>{{post.title}}</td>
                    <td>{{post.body}}</td>
                    <td><a :href ='`/Post?id=${post.id}`' class="btn btn-primary">Edit</a></td>
                    <td><button class="btn btn-danger" @click="deleteButton">X</button></td>
                </tr>
            </tbody>
        </table>
               
    </div> 

</template>