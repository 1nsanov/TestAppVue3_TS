<template>
  <form action="" @submit.prevent>
    <h1 class="header-text" v-if="change == false">Записать человека</h1>
    <h1 class="header-text" v-else>Изменить</h1>
    <my-input class="input-peoples" placeholder="Имя" v-model="people.name" />
    <br />
    <my-input
      type="number"
      class="input-peoples"
      placeholder="Возраст"
      v-model="people.age"
    />
    <br />
    <my-button
      class="create-btn-form"
      @click="createPeople"
      v-if="change == false"
      >Добавить</my-button
    >
    <my-button class="create-btn-form" @click="changePeople" v-else
      >Изменить</my-button
    >
  </form>
</template>

<script lang="ts">
import People from "@/types/People";
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

@Options({
  name: "TableForm",
})
export default class TableForm extends Vue {
  @Prop({ type: Boolean }) change!: boolean;
  people: People = { number: 0, id: "", name: "", age: 0 };
  @Prop() peoples!: People[]

  @Emit("createPeople") createPeople() {
    this.people.id = Date.now().toString();
    return Object.assign({}, this.people);
  }
  @Emit("changePeople") changePeople() {
    this.people.id = Date.now().toString();
    this.people.number = this.peoples.length + 1;
    return Object.assign({}, this.people);
  }
}
</script>

<style scoped>
.input-peoples {
  width: 100%;
}
.create-btn-form {
  margin-top: 10px;
}
</style>