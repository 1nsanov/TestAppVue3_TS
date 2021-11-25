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
  position: absolute;
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
  margin-top: -80px;
  margin-left: 10px;
  user-select: none;
  transition: 0.5s;
}
.theme:hover {
  height: 45px;
  width: 45px;
  font-size: 23px;
  margin-top: -77px;
  margin-left: 13px;
}
</style>