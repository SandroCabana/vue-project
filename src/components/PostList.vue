<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Post List</v-card-title>
          <v-list>
          <v-list-item v-for="post in posts" :key="post.id">
              <v-list-item-title>{{ post.title }}</v-list-item-title>
          </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PostService from '../services/PostService'
const service = new PostService()
const posts = service.getPosts()
onMounted(async () => {
    await service.fetchAll()
})
</script>

<style scoped>
.v-card{
  margin-top: 20px;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
}
.v-card-title {
  font-size: 24px;
}
</style>
