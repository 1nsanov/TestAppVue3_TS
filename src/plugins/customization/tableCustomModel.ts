export default class TableCustomModel {
  TextColorHeaderTable: string = "#4a6f8a";
  TextPrimaryColorItemTable: string = "#080a3c";
  TextSecondaryColorItemTable: string = "#4A6F8A";
  BackgroundColorItemTable: string = "#ffffff";
  BorderButtonShowTable: string = "1px solid #e3edfa";
  PaddingButtonShowHeader: string = "6px 21px";
  constructor(obj?: Partial<TableCustomModel>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
