export default class HeaderCustomModel {
  BackgroundColorHeader: string = "#ffffff";
  BackgroundColorUserMenuHeader: string = "#ffffff";
  ButtonColorHeader: string = "#2a8cff";
  PrimaryTextColorHeader: string = "#080a3c";
  SecondaryTextColorHeader: string = "#4a6f8a";
  OverflowHeader: string = "hidden";

  constructor(obj?: Partial<HeaderCustomModel>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
