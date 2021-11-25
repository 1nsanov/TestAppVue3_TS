<template>
  <div v-if="posts.length > 0">
    <span class="title">Список постов</span>
    <transition-group name="post_list">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="removePost"
      />
    </transition-group>
  </div>
  <div v-else>
    <span class="title">Список постов пуст.</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop, Emit } from "vue-property-decorator";
import Post from "@/types/Post";
import PostItem from "./PostItem.vue";
import { PropType } from "@vue/runtime-core";

@Options({
  components: { PostItem },
  name: "PostList",
})
export default class PostList extends Vue {
  @Prop({ type: Array as PropType<Post[]>, required: true }) posts!: Post[];

  @Emit("remove") removePost(post: Post) {
    return post;
  }
}
</script>

<style scoped>
.title {
  display: block;
  margin: 20px 0 0 0;
  font-size: 24px;
}
.post_list-item {
  display: inline-block;
  margin-right: 10px;
}
.post_list-enter-active,
.post_list-leave-active {
  transition: all 0.4s ease;
}
.post_list-enter-from,
.post_list-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
.post_list-move {
  transition: transform 0.8s ease;
}
.post_list-complete-leave-active {
  position: absolute;
}
</style>