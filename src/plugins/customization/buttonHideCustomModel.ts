export default class ButtonHideCustomModel {
  ButtonHideBackgroundColor: string = "#2a8cff";
  ButtonHideTextColor: string = "#ffffff";
  constructor(obj?: Partial<ButtonHideCustomModel>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
