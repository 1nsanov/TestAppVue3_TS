<template>
  <div class="dropdown" v-if="stateDropdown">
    <div class="dropdown__title">Menu</div>
    <div class="dropdown__menu">
      <div class="dropdown__menu_item">
        <span><i class="fas fa-adjust"></i> Ночной режим</span>
        <span class="switch"><toggle-switch @onClick="changeTheme" /></span>
      </div>
      <div class="dropdown__menu_item">
        <span> <i class="fas fa-globe"></i> Язык </span>
        <span><toggle-switch @onClick="changeLang" /></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

@Options({
  name: "Dropdown",
})
export default class Dropdown extends Vue {
  @Prop({ default: false }) stateDropdown!: Boolean;
  changeTheme() {
    this.$emit("changeTheme");
  }
  changeLang() {
    this.$emit("changeLang");
  }
}
</script>

<style scoped>
.dropdown {
  margin-top: 75px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  background: rgb(66, 66, 66);
  height: 100vh;
  min-width: 350px;
}

.dropdown__title {
  width: 100%;
  line-height: 55px;
  font-weight: 900;
  font-size: 30px;
  background: rgb(34, 80, 133);
  padding: 10px 15px;
  cursor: pointer;
}
.dropdown__menu_item {
  color: rgb(177, 177, 177);
  width: 100%;
  font-size: 32px;
  padding: 15px 15px 15px 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}
.dropdown__menu_item:hover {
  background: rgb(116, 116, 116);
}
</style>