<template>
  <div class="main">
    <div class="container">
      <div class="content">
        <posts-coord
          :options="sortOption"
          v-model:modelValueInput="searchQuery"
          v-model:modelValueSelect="selectedSort"
          @showDialog="showDialog"
        />

        <my-dialog v-model:show="dialogVisible">
          <post-form @create="createPost" />
        </my-dialog>

        <posts-block
          @remove="removePost"
          @changePage="changePage"
          :GeneralPB="GeneralPB"
          :posts="slicePost"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PostForm from "@/components/PostForm.vue";
import OptionType from "@/types/OptionType";
import Option from "@/types/Option";
import Post from "@/types/Post";
import PostsBlock from "@/components/PostsBlock.vue";
import PostsCoord from "@/components/PostsCoord.vue";
import GeneralPB from "@/types/GeneralPB";
import axios from "axios";

@Options({
  components: { PostForm, PostsBlock, PostsCoord },
  name: "Main",
})
export default class App extends Vue {
  searchQuery = "";
  dialogVisible = false;
  isPostLoading = false;
  selectedSort: OptionType = "title";
  sortOption: Option[] = [
    { value: "title", name: "По названию" },
    { value: "body", name: "По описанию" },
  ];
  pageSize = 4;
  GeneralPB: GeneralPB = {
    countPages: 0,
    currentPage: 1,
  };
  posts: Post[] = [];

  mounted() {
    this.fetchPosts();
    document.title = "Test App: main";
    this.$my.changeTitle("Posts");
  }

  createPost(post: Post) {
    this.posts.push(post);
    this.dialogVisible = false;
    this.caclCountPages();
  }
  removePost(post: Post) {
    this.posts = this.posts.filter((p) => p.id !== post.id);
    this.caclCountPages();
  }
  showDialog() {
    this.dialogVisible = true;
  }
  async fetchPosts() {
    try {
      this.isPostLoading = true;
      setTimeout(async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=15"
        );
        this.posts = response.data;
        this.caclCountPages();
        console.log("Success");
      }, 10);
    } catch (e) {
      alert("Wrong!!!");
    } finally {
      this.isPostLoading = false;
    }
  }

  get sortedPosts() {
    return [...this.posts].sort((post1: Post, post2: Post) =>
      post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
    );
  }
  filterPosts() {
    return this.sortedPosts.filter((post: Post) =>
      post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  changePage(countPage: number) {
    this.GeneralPB.currentPage = countPage;
  }

  get slicePost() {
    return this.filterPosts().slice(
      (this.GeneralPB.currentPage - 1) * this.pageSize,
      (this.GeneralPB.currentPage - 1) * this.pageSize + this.pageSize
    );
  }

  caclCountPages() {
    this.GeneralPB.countPages = Math.ceil(this.posts.length / this.pageSize);
  }
}
</script>

<style>

</style>