import OptionType from "@/types/OptionType";
import Option from "@/types/Option";
import Post from "@/types/Post";
import axios from "axios";
import { Vue } from "vue-class-component";

export default class Main extends Vue{
  searchQuery = "";
  dialogVisible = false;
  posts: Post[] = [];
  isPostLoading = false;
  selectedSort: OptionType = "title";
  sortOption: Option[] = [
    { value: "title", name: "По названию" },
    { value: "body", name: "По описанию" },
  ];
  pageSize = 4;
  currentPage = 1;
  countPages = 0;
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
    this.currentPage = countPage;
  }

  get slicePost() {
    return this.filterPosts().slice(
      (this.currentPage - 1) * this.pageSize,
      (this.currentPage - 1) * this.pageSize + this.pageSize
    );
  }

  caclCountPages() {
    this.countPages = Math.ceil(this.posts.length / this.pageSize);
  }
}