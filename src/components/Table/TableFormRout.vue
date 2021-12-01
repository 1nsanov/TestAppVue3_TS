<template>
  <div class="about container">
    <div class="content">
      <div class="back" @click="$router.push('/table')">
        <i class="fas fa-arrow-circle-left"></i>
      </div>
      <h1 class="header-text">
        {{ $localization.state.default.tableForm.title }}
      </h1>

      <tirscript3-input
        class="input-peoples"
        placeholder="Имя"
        v-model="people.name"
        requiredLabel="true"
        minLength="2"
      />
      <tirscript3-input
        type="number"
        class="input-peoples"
        placeholder="Возраст"
        v-model="people.age"
        minLength="2"
      />
      <!-- <tirscript3-input
        class="input-peoples"
        placeholder="Должность"
        v-model="people.position"
        minLength="3"
      /> -->
      <tirscript3-input
        type="tel"
        class="input-peoples"
        placeholder="373-000-00000"
        v-model="people.telnumber"
        minLength="13"
      />
      <select-position
        :option="optionPosition"
        v-model:modelValueSelect="people.position"
      />
      <tirscript3-button @onClick="createPeople" active>{{
        $localization.state.default.tableForm.add
      }}</tirscript3-button>

      <my-button class="add-position-btn" @click="$router.push('/addposition')"
        >Добавить должность</my-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import optionPosition from "@/types/People/optionPosition";
import People from "@/types/People/People";
import SelectPosition from "@/components/Table/SelectPosition.vue";
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";
@Options({
  components: { SelectPosition },
  name: "TableFormRout",
})
export default class TableFormRout extends Vue {
  @Prop() peoples!: People[];

  optionPosition: optionPosition[] = [
    { value: "Программист", name: "Программист" },
    { value: "Тестировщик", name: "Тестировщик" },
    { value: "Менеджер", name: "Менеджер" },
  ];
  people: People = {
    id: "",
    name: "",
    age: 18,
    position: "Программист",
    telnumber: "373-000-00000",
  };
  @Emit("createPeople") createPeople() {
    this.people.id = Date.now().toString();
    this.$router.push({
      path: "/table",
      query: {
        name: this.people.name,
        age: this.people.age,
        position: this.people.position,
        telnumber: this.people.telnumber,
      },
    });
    return Object.assign({}, this.people);
  }

  mounted() {
    let value = this.$route.query.value?.toString();
    let name = this.$route.query.name?.toString();
    if (!value || !name) {
      return;
    }
    let newPosition: optionPosition = {
      value: value,
      name: name,
    };
    this.addPosition(newPosition);
  }

  addPosition(position: optionPosition) {
    this.optionPosition.push(position);
    this.saveJsonPosition();
  }

  saveJsonPosition() {
    this.$json.Save("position", this.optionPosition);
    console.log("Save");
  }
  loadJsonPosition() {
    this.optionPosition = this.$json.Load("position");
    console.log("Load");
  }
}
</script>


<style scoped>
.input-peoples {
  width: 100%;
  font-size: 24px;
}
.create-btn-form {
  margin-top: 10px;
}
.header-text {
  font-size: 46px;
  margin: 20px 0;
}
.create-btn-form {
  font-size: 24px;
}
.jopa {
  width: 300px;
}
.add-position-btn {
  margin: 20px;
  font-size: 26px;
  background: rgb(43, 160, 154);
}
</style>
