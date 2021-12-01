<template>
  <div class="container">
    <div class="content">
      <div class="input-field">
        <div class="back" @click="$router.push('/tableform')">
          <i class="fas fa-arrow-circle-left"></i>
        </div>
        <div class="title">Добавление должности</div>
        <tirscript3-input
          v-model="this.optionPosition.value"
          placeholder="Введите должность"
        />
        <my-button class="add" @click="addPosition"
          >Добавить</my-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import optionPosition from "@/types/People/optionPosition";
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";
@Options({
  name: "AddPositionRout",
})
export default class AddPositionRout extends Vue {
  optionPosition: optionPosition = {
    value: "",
    name: "",
  };
  @Emit("addPosition") addPosition() {
    this.$router.push({
      path: "/tableform",
      query: {
        value: this.optionPosition.value,
        name: this.optionPosition.value,
      },
    });
    return Object.assign({}, this.optionPosition);
  }
}
</script>


<style scoped>
.input-field {
  display: flex;
  flex-direction: column;
}
.add {
  font-size: 30px;
}
</style>
