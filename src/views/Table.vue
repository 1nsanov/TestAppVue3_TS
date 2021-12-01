<template>
  <div class="container">
    <div class="content">
      <people-coord
        :options="optionsPeople"
        v-model:modelValueInput="searchQuery"
        v-model:modelValueSelect="selectedSort"
      />
      <div class="interface-table">
        <my-button class="create-item-table-btn" @click="showDialogCreate()"
          >{{ $localization.state.default.table.create }} 1</my-button
        >
        <my-button
          class="create-item-table-btn"
          @click="$router.push('/tableform')"
          >{{ $localization.state.default.table.create }} 2</my-button
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

      <div class="table-scroll">
        <div class="table">
          <div class="table__header _cont">
            <div class="table__item name">
              {{ $localization.state.default.table.name }}
            </div>
            <div class="table__item age">
              {{ $localization.state.default.table.age }}
            </div>
            <div class="table__item position">
              {{ $localization.state.default.table.position }}
            </div>
            <div class="table__item telnumber">
              {{ $localization.state.default.table.telnumber }}
            </div>
          </div>
          <div class="table__body">
            <div
              class="table__body_block _cont"
              v-for="people in slicePeople"
              :key="people.id"
            >
              <div class="table__item name">{{ people.name }}</div>
              <div class="table__item age">
                <span>{{ people.age }}</span
                ><span></span>
              </div>
              <div class="table__item position">{{ people.position }}</div>
              <div class="table__item telnumber">
                {{ people.telnumber }}
                <span>
                  <span class="change-btn"
                    ><i
                      class="fas fa-pencil-alt"
                      @click="showDialogChange(people)"
                    ></i></span
                  ><span class="delete-btn"
                    ><i
                      class="fas fa-trash-alt"
                      @click="removePeople(people)"
                    ></i>
                  </span>
                </span>
              </div>
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
import People from "@/types/People/People";
import TableForm from "@/components/Table/TableForm.vue";
import Pagination from "@/components/Pagination.vue";
import PeopleCoord from "@/components/Table/PeopleCoord.vue";
import TableFormRout from "@/components/Table/TableFormRout.vue";
import GeneralPB from "@/types/GeneralPB";
import { Watch } from "vue-property-decorator";
import OptionTypePeople from "@/types/People/OptionTypePeople";
import OptionPeople from "@/types/People/OptionPeople";

@Options({
  components: { TableForm, Pagination, TableFormRout, PeopleCoord },
  name: "Table",
})
export default class Table extends Vue {
  pageSize = 10;
  GeneralPB: GeneralPB = {
    countPages: 0,
    currentPage: 1,
  };
  people: People = { id: "", name: "", age: 0, position: "", telnumber: "" };
  peoples: People[] = [];
  dialogVisible = false;
  change = false;
  index = 0;
  searchQuery = "";
  selectedSort: OptionTypePeople = "name";
  optionsPeople: OptionPeople[] = [
    { value: "name", name: "По названию" },
    { value: "position", name: "По Должности" },
    { value: "telnumber", name: "По Ном. тел." },
  ];

  @Watch("GeneralPB", { deep: true })
  controlCurPage() {
    if (this.GeneralPB.currentPage > this.GeneralPB.countPages) {
      this.GeneralPB.currentPage--;
    }
    if (this.GeneralPB.currentPage == 0) {
      this.GeneralPB.currentPage = 1;
    }
  }

  updated() {
    this.caclCountPages();
  }

  created() {
    this.fillPeople();
  }

  mounted() {
    let name = this.$route.query.name?.toString();
    let age = this.$route.query.age
      ? parseInt(this.$route.query.age?.toString())
      : 0;
    let position = this.$route.query.position?.toString();
    let telnumber = this.$route.query.telnumber?.toString();
    if (!name || !age || !position || !telnumber) {
      //alert("Некорректный ввод");
      return;
    }
    this.people = {
      id: (Date.now() + 4).toString(),
      name: name,
      age: age,
      position: position,
      telnumber: telnumber,
    };
    this.createPeople(this.people);
  }

  fillPeople() {
    for (let i = 1; i <= 15; i++) {
      this.people = {
        id: "100" + i,
        name: "Victor " + i,
        age: 16 + i,
        position: "Программист",
        telnumber: "373-000-00000",
      };
      this.peoples.push(this.people);
    }
    this.caclCountPages();
    this.saveJsonPeople();
  }
  createPeople(people: People) {
    if (!people.name || !people.age || !people.position || !people.telnumber) {
      alert("Некорректный ввод");
      return;
    }
    this.people.id = (Date.now() + 5).toString();
    this.peoples.push(people);
    this.dialogVisible = false;
    this.caclCountPages();
    this.saveJsonPeople();
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
    this.saveJsonPeople();
  }
  changePeople(people: People) {
    people.id = Date.now().toString();
    this.peoples[this.index] = people;
    this.dialogVisible = false;
    this.saveJsonPeople();
  }
  getIndex(people: People) {
    this.index = this.peoples.indexOf(people);
  }

  get sortedPeople() {
    return [...this.peoples].sort((p1: People, p2: People) =>
      p1[this.selectedSort]?.localeCompare(p2[this.selectedSort])
    );
  }
  filterPosts() {
    if (this.selectedSort == "position") {
      return this.sortedPeople.filter((people: People) =>
        people.position.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else if (this.selectedSort == "telnumber") {
      return this.sortedPeople.filter((people: People) =>
        people.telnumber.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      return this.sortedPeople.filter((people: People) =>
        people.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  get slicePeople() {
    return this.filterPosts().slice(
      (this.GeneralPB.currentPage - 1) * this.pageSize,
      (this.GeneralPB.currentPage - 1) * this.pageSize + this.pageSize
    );
  }

  caclCountPages() {
    this.GeneralPB.countPages = Math.ceil(
      this.filterPosts().length / this.pageSize
    );
  }
  changePage(countPage: number) {
    this.GeneralPB.currentPage = countPage;
  }

  saveJsonPeople() {
    // localStorage.setItem("peoples", JSON.stringify(this.peoples));
    this.$json.Save("peoples", this.peoples);
    console.log("Save");
  }
  loadJsonPeople() {
    // let stringes = localStorage.getItem("peoples") || "";
    // this.peoples = JSON.parse(stringes);
    this.peoples = this.$json.Load("peoples");
    console.log("Load");
  }
}
</script>

<style lang="less" scoped>
@BackgoundTable: rgb(26, 87, 201);
._cont {
  display: flex;
}
.table {
  padding: 3px;
  border-radius: 3px;
  overflow-x: hidden;
  user-select: none;
  min-width: 990px;
}
.table-scroll {
  overflow-x: auto;
  margin: 0 0 20px 0;
  // background: @BackgoundTable;
  padding: 2px;
  border-radius: 5px;
}
.table-scroll::-webkit-scrollbar {
  height: 16px;
}

.table-scroll::-webkit-scrollbar-track {
  border-radius: 100px;
}

.table-scroll::-webkit-scrollbar-thumb {
  border-radius: 100px;
  border: 6px solid transparent;
  background-clip: content-box;
  height: 70px;
  background-color: rgb(255, 255, 255);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.table__header {
  font-weight: 700;
  .table__item {
    background: rgb(133, 133, 133);
  }
}
.table__item {
  padding: 10px 15px;
  width: 100%;
  margin: 1px 1px 1px 1px;
}
.table__body {
  .age {
    text-align: center;
  }
}
.name {
  min-width: 300px;
}
.age {
  max-width: 115px;
}

.position {
  min-width: 250px;
}
.telnumber {
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
  margin: 10px 10px 20px 10px;
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
