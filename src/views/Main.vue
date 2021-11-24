<template>
  <div class="main">
    <div class="container">
      <div class="content">
        <div class="search">
          <my-input
            class="input input-search"
            v-model="searchQuery"
            placeholder="Поиск постов"
          />
        </div>
        <div class="app-btns">
          <my-button class="btn create-btn" @click="showDialog"
            >Создать пост</my-button
          >
          <my-select
            class="search"
            v-model="selectedSort"
            :options="sortOption"
          />
        </div>
        <!-- <posts-coord
          :options="sortOption"
          v-model:modelValueUpdate="searchQuery"
          v-model:modelValueChange="selectedSort"
          @showDialog="showDialog"
        /> -->

        <my-dialog v-model:show="dialogVisible">
          <post-form @create="createPost" />
        </my-dialog>

        <!-- <post-list
          :posts="slicePost"
          @remove="removePost"
          v-if="!isPostLoading"
        />
        <pagination
          @changePage="changePage"
          :countPages="countPages"
          :currentPage="currentPage"
          v-if="posts.length != 0"
        /> -->

        <posts-block
          @remove="removePost"
          @changePage="changePage"
          :GeneralPB="GeneralPB"
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
    posts: [],
  };

  // posts: Post[] = [];
  // currentPage = 1;
  // countPages = 0;
  createPost(post: Post) {
    this.GeneralPB.posts.push(post);
    this.dialogVisible = false;
    this.caclCountPages();
  }
  removePost(post: Post) {
    this.GeneralPB.posts = this.GeneralPB.posts.filter((p) => p.id !== post.id);
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
        this.GeneralPB.posts = response.data;
        this.caclCountPages();
      }, 10);
    } catch (e) {
      alert("Wrong!!!");
    } finally {
      this.isPostLoading = false;
    }
  }

  mounted() {
    this.fetchPosts();
  }

  get sortedPosts() {
    return [...this.GeneralPB.posts].sort((post1: Post, post2: Post) =>
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
    this.GeneralPB.countPages = Math.ceil(
      this.GeneralPB.posts.length / this.pageSize
    );
  }
}
</script>

<style>
</style>