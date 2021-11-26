<template>
  <div class="theme">
    <i class="fas fa-palette"></i>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "ChangeThemeBtn",
})
export default class Theme extends Vue {

}
</script>

<style scoped>
.theme {
  position: fixed;
  height: 52px;
  width: 52px;
  padding: 6px;
  border-radius: 50%;
  z-index: 145;
  font-size: 22px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  line-height: 65px;
  user-select: none;
  transition: 0.5s;
  float: left;
  margin: -82px 0px 0px 7px;
}
.theme:hover {
  height: 45px;
  width: 45px;
  font-size: 23px;
}
</style>