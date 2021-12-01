<template>
  <div class="home container">
    <div class="content">
      <span class="name-app">Test App</span> - lorem ipsum dolor sit amet
      consectetur adipisicing elit. Hic dolore, quam libero provident in aliquid
      fugit dolor facilis beatae facere assumenda iure consequatur nemo labore
      quibusdam placeat dicta nesciunt rem.
    </div>
    <div class="title">Test component</div>

    <!-- <tirscript-3-tree>Tree 1</tirscript-3-tree>
    <tirscript-3-tree-element @contextMenu="items"></tirscript-3-tree-element>

    <tirscript-textarea /> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ListViewItem from "tirscript3-list-view/src/ListViewItem";
import defaultModel from "tirscript3-component-models/src/defaultModel";

@Options({
  name: "Home",
})
export default class Home extends Vue {
  items: ListViewItem<defaultModel>[] = [];

  created() {
    this.initItems();
  }

  initItems() {
    this.items.push(
      new ListViewItem(new defaultModel(1, "Node 1"), true, false)
    );
    this.items.push(
      new ListViewItem(new defaultModel(2, "Node 2"), false, false)
    );
  }
}
</script>


<style  lang="less" scoped>
.name-app {
  font-weight: 700;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
