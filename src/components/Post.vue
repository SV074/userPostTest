<script setup lang="ts">
import axios from 'axios';
import {  ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router';

const route = useRoute()
const router = useRouter()
const post = ref<any>({})
const user = ref<any>({})

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface User {
    name: string,
    email: string,
    phone: number,
    website: string
}

const props = defineProps<{
    post?: Post,
    user?: User
}>()

const getPost = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.postId}`)
        .then(({ data }) => {
            console.log(route);
            post.value = data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        })
}

const stringUpperCase = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
}

const getUser = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.postId}`)
        .then(({ data }) => {
            user.value = data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        })
}

watch(() => route.params.postId,
    () => {
        console.log(route.params.postId);
        getPost();
        getUser();
    },
    { immediate: true }
)

</script>

<template>
    <div class="post">
        <div class="posts__breadcrumbs">
            <router-link to="/" class="link">Главная </router-link>
            <a class="link">/</a>
            <router-link to="/posts" class="link">Список постов</router-link>
            <a class="link">/</a>
            <a class="link">Пост № {{ route.params.postId }}</a>
        </div>
        <div class="post__inner">
            <div class="post__title">
                {{ stringUpperCase(post.title) }}
            </div>
            <div class="post__body">
                {{ stringUpperCase(post.body) }}
            </div>
            <div class="post__block-about-author">
                <div class="post-block-name"></div>
                <div class="post__author-name">
                    {{ user.name }}
                </div>
                <div class="post__author-email">
                    {{ user.email }}
                </div>
                <div class="post__author-phone">
                    {{ user.phone }}
                </div>
                <div class="post__author-website">
                    <a>{{ user.website }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@mixin flexible-direction {
    display: flex;
    flex-direction: column;
}
.post {
    padding: 50px 100px;
}

.link {
    color: rgb(84, 167, 139);
    margin-left: 10px;
}

.post__inner {
    @include flexible-direction();
    margin-top: 50px;
}

.post__title {
    font-size: 18px;
}

.post__body {
    margin-top: 20px;
}

.post__block-about-author {
    margin-top: 20px;
    @include flexible-direction();
    align-items: self-end;
}
</style>