import { watch } from 'vue';
import { postId, route } from './Post.vue';

watch(() => postId.value = route.params,
() => {
console.log(route.name);
}
);
