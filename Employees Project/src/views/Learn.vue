<script setup>
// Import Vue's ref function to create reactive variables
import { ref } from 'vue'

// Declare reactive variables for storing post data and updated data
const post = ref({
  userId: '',  // Post's user ID
  title: '',   // Post's title
  body: ''     // Post's body
})

// Declare a reactive variable to store the updated data after submission
const updatedData = ref({})

// Declare a reactive variable to control the visibility of the "Updated Value" section
const showUpdate = ref(false) // Initially, it's set to false to hide the updated data

// Declare a variable for the dynamic postId (e.g., from the route or other source)
const postId = ref(1);  // Replace with the actual postId value you want to use dynamically

// Function to handle the form submission and update the post data
const submitEdit = async () => {
  // Use fetch API to send a PUT request with the updated post data
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`, {  // Use dynamic postId
    method: "PUT",  // HTTP method for updating data
    body: JSON.stringify(post.value),  // Convert the post data into a JSON string
    headers: {
      "Content-type": "application/json; charset=UTF-8",  // Set the content type to JSON
    }
  });

  // If the response is successful (status 200-299)
  if (response.ok) {
    // Parse the response to get the updated data
    const data = await response.json();
    // Store the updated data in the reactive variable `updatedData`
    updatedData.value = data;
    // Set `showUpdate` to true, which will display the updated data
    showUpdate.value = true;
  }
}
</script>

<template>
  <!-- Main container for the page -->
  <div class="container mt-5">
    <!-- Section to show the updated data, only displayed when showUpdate is true -->
    <div v-if="showUpdate" class="bg-light p-4 rounded shadow-sm mx-auto" style="max-width: 500px;">
      <!-- Title for the updated data section -->
      <h3 class="text-center">Updated Value</h3>
      
      <!-- Display each piece of updated data -->
      <p><strong>ID:</strong> {{ updatedData.id }}</p> <!-- No .value here, it's already an object -->
      <p><strong>User ID:</strong> {{ updatedData.userId }}</p> <!-- No .value here, it's already an object -->
      <p><strong>Title:</strong> {{ updatedData.title }}</p> <!-- No .value here, it's already an object -->
      <p><strong>Body:</strong> {{ updatedData.body }}</p> <!-- No .value here, it's already an object -->
    </div>

    <!-- Section for editing the post, only displayed when showUpdate is false -->
    <div v-if="!showUpdate" class="mt-5">
      <!-- Heading to indicate to the user that they can edit -->
      <h3 class="text-center">You can now edit</h3>
      
      <!-- Form container to center the form on the page -->
      <div class="d-flex justify-content-center">
        <!-- Form for editing the post, prevents page reload on submit -->
        <form @submit.prevent="submitEdit" class="form-control" style="max-width: 500px; padding: 20px;">
          <!-- Form heading -->
          <h2 class="text-center mb-4">Edit Post</h2>
          
          <!-- Input for userId -->
          <div class="mb-3">
            <label class="form-label" for="userId">User ID</label>
            <!-- Bind the input to post.userId using v-model -->
            <input type="number" id="userId" class="form-control" placeholder="Enter ID" v-model="post.value.userId" />
          </div>
          
          <!-- Input for title -->
          <div class="mb-3">
            <label class="form-label" for="title">Title</label>
            <!-- Bind the input to post.title using v-model -->
            <input type="text" id="title" class="form-control" placeholder="Enter Title" v-model="post.value.title" />
          </div>
          
          <!-- Textarea for body -->
          <div class="mb-3">
            <label class="form-label" for="body">Body</label>
            <!-- Bind the textarea to post.body using v-model -->
            <textarea id="body" class="form-control" placeholder="Enter text" v-model="post.value.body"></textarea>
          </div>

          <!-- Submit button to send the form data -->
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
