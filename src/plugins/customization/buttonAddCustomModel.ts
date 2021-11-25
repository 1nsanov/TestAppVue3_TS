export default class ButtonAddCustomModel {
  ButtonAddBackgroundColor: string = "#f8f8f9";
  ButtonAddBorderColor: string = "#e3edfa";
  constructor(obj?: Partial<ButtonAddCustomModel>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
