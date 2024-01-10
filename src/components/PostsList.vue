<script lang="ts" setup>
import { ref, onMounted, computed  } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

const posts = ref()
const router = useRouter()

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

const props = defineProps<{
    post?: Post
}>()

function getPosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(({ data }) => {
            posts.value = data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        })
}

function stringUpperCase(str:string) {
    return str[0].toUpperCase() + str.slice(1); 
}

const goPost = (postNeedId: number) => {
    router.push({ name: 'Post', params: { postId: postNeedId}});
}

const deletePost = (id: number) => {
    const index = posts.value.findIndex((item: any) => item.id === id);
    posts.value.splice(index, 1);
}

onMounted(() => {
   getPosts()
}) 

</script>

<template>
    <div class="posts">
        <div class="posts__inner">
            <div class="posts__header">
                <h1 class="posts__header-title">Список постов</h1>
            </div>
            <div class="posts__breadcrumbs">
                <router-link to="/" href="#" class="link">Главная</router-link>
                <a class="link">/</a>
                <router-link to="/posts" href="#" class="link active">Список постов</router-link>
            </div>
            <div class="posts__list">
                <div class="posts__item" v-for="post in posts" :key="post.id" @click.left="goPost(post.id)" @click.right.prevent="deletePost(post.id)">
                    <div class="posts__item-title">{{ stringUpperCase(post.title) }}</div>
                    <div class="posts__item-body">{{ stringUpperCase(post.body) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.posts {
    padding: 20px 100px;
}
.posts__inner {
    display: flex;
    flex-direction: column;
}
.posts__header-title {
    font-weight: normal;
    display: flex;
    justify-content: center;
}
.posts__breadcrumbs {
    display: flex;
}
.posts__list {
   margin-top: 30px;
}
.posts__item {
   display:flex;
   flex-direction: column;
   border: 1px solid black;
   border-radius: 5px;
   padding: 0 10px;
   padding-bottom: 10px;
   margin-top: 10px;
}
.posts__item-title {
   padding: 10px 0;
   font-size: 18px;
}
.posts__item-body {
    color: rgb(146, 146, 146);
}
.link {
    color:rgb(84, 167, 139);
    margin-left: 5px;
}
.active {
    text-decoration: none;
}

</style>