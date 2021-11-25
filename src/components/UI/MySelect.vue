<template>
  <select class="select" :value="modelValue" @change="changeOption">
    <option disabled selected value="">Сортировка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { PropType } from "@vue/runtime-core";
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";
import Option from "@/types/Option";

@Options({
  name: "MySelect",
})
export default class MySelect extends Vue {
  @Prop({ type: String }) modelValue!: Option;
  @Prop({ type: Array as PropType<Option[]>, default: () => [] })
  options!: Option;
}
</script>

<style scoped>
.select {
  width: 150px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #000;
  margin: 8px 0 0 0;
  padding-left: 7px;
  background: rgb(255, 255, 255);
  font-weight: 500;
  font-size: 16px;
}
</style>