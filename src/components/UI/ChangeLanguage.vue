<template>
  <div class="lang">
    <i class="fas fa-globe"></i>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "ChangeLanguage",
})
export default class ChangeLanguage extends Vue {

}
</script>

<style scoped>
.lang {
  position: relative;
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
  float: right;
  margin: -82px 7px 0 0;
}
.lang:hover {
  height: 45px;
  width: 45px;
  font-size: 23px;
}
</style>