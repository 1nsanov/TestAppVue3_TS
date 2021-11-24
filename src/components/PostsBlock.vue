<template>
  <post-list :posts="posts" @remove="removePost" v-if="!isPostLoading" />
  <pagination
    @changePage="changePage"
    :countPages="countPages"
    :currentPage="currentPage"
    v-if="posts.length != 0"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PostList from "@/components/PostList.vue";
import Pagination from "@/components/Pagination.vue";
import { Emit, Prop } from "vue-property-decorator";
import Post from "@/types/Post";
import GeneralPB from "@/types/GeneralPB";
import { PropType } from "@vue/runtime-core";

@Options({
  components: { PostList, Pagination },
  name: "PostsBlock",
})
export default class PostsBlock extends Vue {
  // @Prop({ type: Array as PropType<Post[]>, required: true }) posts!: Post[];
  // @Prop({ type: Number, required: true }) countPages!: number;
  // @Prop({ type: Number, required: true }) currentPage!: number;

  @Prop({ type: Object as PropType<GeneralPB>, required: true }) GeneralPB: GeneralPB | undefined

  @Emit("remove") removePost(post: Post) {
    return post;
  }
  @Emit("changePage") changePage(countPage: number) {
    return countPage;
  }
}
</script>

<style scoped>

</style>