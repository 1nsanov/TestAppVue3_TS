<template>
  <div class="position-select">
    Должность:
    <my-select
      class="position-select-options"
      :options="option"
      v-model="modelValueSelect"
      @change="changeOption"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

@Options({
  name: "SelectPosition",
})
export default class SelectPosition extends Vue {
  @Prop({ type: String }) modelValueSelect!: {};
  @Prop({ default: () => [] }) option!: [];
  @Emit("update:modelValueSelect") changeOption(event: any) {
    return event.target.value;
  }
}
</script>


<style scoped>
.position-select {
  font-weight: 700;
  font-size: 26px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-bottom: 25px;
}
.position-select-options {
  margin: 0;
  margin-left: 15px;
}
</style>