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
  float: right;
  margin-top: -80px;
  margin-left: 75px;
  user-select: none;
  transition: 0.5s;
}
.lang:hover {
  height: 45px;
  width: 45px;
  font-size: 23px;
  margin-top: -77px;
  margin-left: 77px;
}
</style>