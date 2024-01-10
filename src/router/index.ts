import { createRouter, createWebHistory } from 'vue-router'
import PostsList from '../components/PostsList.vue'
import MainPage from '../components/MainPage.vue'
import Post from '../components/Post.vue'

export default createRouter ({
  history: createWebHistory(),
  routes:  [
    {
      path: '/',
      children: [
        {
          path: '',
          name: 'MainPage',
          component: MainPage,
        },
        {
          path: '/posts',
          name: 'PostsList',
          component: PostsList,
        },
        {
          path: '/posts/:postId',
          name: 'Post',
          component: Post
        }
      ]
    },
  ]
  
})