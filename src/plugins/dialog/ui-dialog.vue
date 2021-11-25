<template>
  <tirscript3-modal-window
    :visible="visible"
    :width="'600px'"
    :title="'Remove'"
    class="tirscript-dialog"
    @close="onClose"
    @mouseup.stop
    @mousedown.stop
  >
    <template #header>
      <div class="dialog__title">
        {{ dialogModal.Title }}
      </div>
    </template>
    <div class="dialog__text">
      {{ dialogModal.Text }}
    </div>
    <template #button>
      <div v-if="dialogModal.Buttons" class="dialod__btn">
        <tirscript3-button
          v-for="(item, index) in dialogModal.Buttons"
          :key="index"
          :active="index == 0"
          @onClick="clickButton(item.Value)"
          >{{ item.Title }}</tirscript3-button
        >
      </div>
      <!-- :style="getButtonStyle(item)" -->
    </template>
  </tirscript3-modal-window>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import StatusWindow from "modal-window/src/status-window";
import DialogModal, { DialogButton } from "./model/dialogModal";
import Tirscript3ModalWindow from "tirscript3-modal-window/src/tirscript3-modal-window.vue";
import Tirscript3Button from "tirscript3-button/src/tirscript3-button.vue";
import { Events } from "@/dataSource/api/plugins/events";
// import { Events } from "tirscript3-dashbord/src/DashboardCore/Events/events";

@Options({
  props: {
    eventBus: Events,
  },
  components: {
    Tirscript3ModalWindow,
    Tirscript3Button,
  },
  emits: ["change"],
})
export default class UiDialog extends Vue {
  type = "";
  visible = false;
  eventBus = new Events<DialogModal>();
  dialogModal: DialogModal = new DialogModal();
  created() {
    this.eventBus.on(this.show);
  }
  mounted() {
    document.onkeypress = this.onKeypress;
  }
  getButtonStyle(item: DialogButton): any {
    return {
      background: item.BgColor,
      color: item.Color,
    };
  }

  onKeypress(event: KeyboardEvent) {
    if (event.code == "Enter") {
      let b = this.dialogModal.Buttons.find((btn) => btn.Value == true);
      this.clickButton(b.Value);
    }
  }
  onClose() {
    this.clickButton(undefined);
  }
  clickButton(result: any) {
    this.hide();
    this.$emit("change", result);
    this.dialogModal?.Callback(result);
  }
  hide() {
    this.visible = false;
  }
  show(data: DialogModal) {
    this.dialogModal = data;
    this.visible = true;
  }
}
</script>
<style lang="less">
.tirscript-dialog {
  .dialog {
    // font-family: Solomon Sans;
  }
  .dialog__title {
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: #2f3749;
    padding: 13px 0px;
    margin-left: 26px;
  }
  .dialog__text {
    font-size: 14px;
    line-height: 17px;
    color: #162147;
    // border-top: 2px solid #f0f0f0;
    // border-bottom: 2px solid #f0f0f0;
    padding-top: 16px;
    padding-bottom: 35px;
  }
  .dialod__btn {
    display: flex;
    justify-content: space-evenly;
    padding-top: 24px;
    padding-bottom: 19px;
  }
}
</style>
