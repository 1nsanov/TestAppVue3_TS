<template>
  <div class="about container">
    <div class="content">
      <div class="title">Какие-то люди</div>
      <div class="interface-table">
        <my-button class="create-item-table-btn" @click="showDialogCreate()"
          >Создать</my-button
        >
      </div>

      <my-dialog v-model:show="dialogVisible">
        <table-form
          @createPeople="createPeople"
          v-if="change == false"
          :change="change"
        />
        <table-form @changePeople="changePeople" v-else :change="change" />
      </my-dialog>

      <div class="table">
        <div class="table__header _cont">
          <div class="table__item number">№</div>
          <div class="table__item name">Имя</div>
          <div class="table__item age">Возраст</div>
        </div>
        <div class="table__body">
          <div
            class="table__body_block _cont"
            v-for="people in slicePeople"
            :key="people.id"
          >
            <div class="table__item number">{{ people.number }}</div>
            <div class="table__item name">{{ people.name }}</div>
            <div class="table__item age">
              <span>{{ people.age }}</span
              ><span
                ><span class="change-btn"
                  ><i
                    class="fas fa-pencil-alt"
                    @click="showDialogChange(people)"
                  ></i></span
                ><span class="delete-btn"
                  ><i
                    class="fas fa-trash-alt"
                    @click="removePeople(people)"
                  ></i> </span
              ></span>
            </div>
          </div>
        </div>
      </div>
      <pagination
        :currentPage="GeneralPB.currentPage"
        :countPages="GeneralPB.countPages"
        @changePage="changePage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import People from "@/types/People";
import TableForm from "@/components/TableForm.vue";
import Pagination from "@/components/Pagination.vue";
import GeneralPB from "@/types/GeneralPB";

@Options({
  components: { TableForm, Pagination },
  name: "Table",
})
export default class Table extends Vue {
  pageSize = 18;
  GeneralPB: GeneralPB = {
    countPages: 0,
    currentPage: 1,
  };

  people: People = { number: 0, id: "", name: "", age: 0 };
  peoples: People[] = [];
  dialogVisible = false;
  change = false;
  index = 0;

  mounted() {
    this.fillPeople();
  }

  fillPeople() {
    for (let i = 1; i <= 110; i++) {
      this.people = {
        number: i,
        id: "100" + i,
        name: "Victor " + i,
        age: 16 + i,
      };
      this.peoples.push(this.people);
    }
    this.caclCountPages();
  }
  createPeople(people: People) {
    console.log("create", people);
    this.people.id = Date.now().toString();
    console.log(this.peoples.length + 2);

    this.people.number = this.peoples.length + 1;
    this.peoples.push(people);
    this.dialogVisible = false;
    this.caclCountPages();
  }
  showDialogCreate() {
    this.dialogVisible = true;
    this.change = false;
  }
  showDialogChange(people: People) {
    this.dialogVisible = true;
    this.change = true;
    this.getIndex(people);
  }
  removePeople(people: People) {
    this.peoples = this.peoples.filter((p) => p.id !== people.id);
    this.caclCountPages();
  }
  changePeople(people: People) {
    this.peoples[this.index] = people;
    this.dialogVisible = false;
  }
  getIndex(people: People) {
    this.index = this.peoples.indexOf(people);
  }

  get slicePeople() {
    return this.peoples.slice(
      (this.GeneralPB.currentPage - 1) * this.pageSize,
      (this.GeneralPB.currentPage - 1) * this.pageSize + this.pageSize
    );
  }

  caclCountPages() {
    this.GeneralPB.countPages = Math.ceil(this.peoples.length / this.pageSize);
  }
  changePage(countPage: number) {
    this.GeneralPB.currentPage = countPage;
  }
}
</script>

<style scoped>
._cont {
  display: flex;
}
.table {
  margin: 0 0 20px 0;
  overflow: visible;
  user-select: none;
}
.table__header {
  font-weight: 700;
}
.table__item {
  padding: 10px 15px;
  width: 100%;
  margin: 1px 1px 1px 1px;
}
.table__header .number {
  border-radius: 10px 0px 0px 0px;
}
.table__header .age {
  border-radius: 0px 10px 0px 0px;
}
.number {
  width: 75px;
}
.name {
  width: 45%;
}
.age {
  width: 45%;
  display: flex;
  justify-content: space-between;
}
.interface-table {
  display: flex;
  align-items: center;
  justify-content: center;
}
.create-item-table-btn {
  width: 70%;
  margin: 10px 0 20px 0;
}

.delete-btn {
  color: rgb(245, 31, 31);
  opacity: 0.2;
  transition: 0.6s;
}
.delete-btn:hover,
.change-btn:hover {
  opacity: 1;
}
.change-btn {
  color: rgb(56, 245, 31);
  opacity: 0.2;
  transition: 0.6s;
  margin-right: 10px;
}
</style>
