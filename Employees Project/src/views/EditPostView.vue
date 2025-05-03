<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const postId = route.query.id
const post = ref({
  userId: "",
  title: "",
  body: ""
});
const updatedData= ref({})
const showUpdate = ref(false)

onMounted(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${postId}`)
  const data = await response.json()
  console.log(data)
  post.value = data[0]
});
const submitEdit = async ()=>{
    const response= await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
      method: "PUT",
      body: JSON.stringify(post.value),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
     console.log(response)
     if(response.ok){
    const data = await response.json();
    console.log(data)
    updatedData.value= data
    showUpdate.value= true

     }
    }
    console.log("your updated value:", updatedData)

</script>
<template>
  <div class="  container alert alert-success mt-3 mb-3 fst-italic bg-light text-dark p-4" v-if= "showUpdate">
    <h3 class="mt-4 text-center text-success">Updated Value</h3>
    <p>{{updatedData.id}}</p>
    <p>{{updatedData.userId}}</p>
    <p>{{updatedData.title}}</p>
    <p>{{updatedData.body}}</p>

  </div>
    <h3 class= "text-center text-primary fst-italic ">You can now edit</h3>

  <div class=" container mt-5 d-flex justify-content-center">
    <form @submit.prevent= "submitEdit" class="form-control vw-100 shadow-lg">
      
      <label class="form-label fw-bold">UserId</label>
      <input type="number" class="form-select" placeholder="Enter ID" v-model="post.userId" />
      <label class="form-label fw-bold">Title</label>
      <input type="text" class="form-select fst-italic" placeholder="Enter Title" v-model="post.title" />
      <label class="form-label fw-bold">Body</label>
      <textarea class="form-select fst-italic" placeholder="Enter text" v-model="post.body"></textarea>
      <button type="submit" class="btn  btn-md btn-primary mt-3">submit</button>
    </form>
  </div>
</template>
