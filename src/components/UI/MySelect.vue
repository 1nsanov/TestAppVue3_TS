<template>
  <select class="select" :value="modelValue" @change="changeOption">
    <option disabled selected value="">
      {{ $localization.state.default.posts.sort }}
    </option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { PropType } from "@vue/runtime-core";
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
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

<style lang='less' scoped>
/* .select {
  width: 150px;
  height: 32px;
  border-radius: 5px;
  border: 1px solid #000;
  margin: 11px 0 0 0;
  padding-left: 7px;
  background: rgb(255, 255, 255);
  font-weight: 500;
  font-size: 16px;
} */

:root {
  --select-arrow: var(--select-border);
}
select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  z-index: 1;
  &::-ms-expand {
    display: none;
  }

  display: grid;
  outline: none;
  margin: 11px 0 0 0;
  padding-left: 7px;
  width: 200px;
  height: 32px;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
  font-weight: 600;
  select,
  &::after {
    grid-area: select;
  }
  // Custom arrow
  &:after {
    content: "";
    justify-self: end;
    width: 0.8em;
    height: 0.5em;
    background-color: var(--select-arrow);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
}
</style>