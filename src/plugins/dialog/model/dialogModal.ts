// import LocaleProvider from "../../localization/localization";
export default class DialogModal {
  Title = "";
  Text = "";
  TitleBtnYes = "Ок";
  TitleBtnNo = "Отмена";
  Type: DialogType = DialogType.Info;
  Buttons: DialogButton[] = null;
  Callback: (result: boolean) => void = null;
  // constructor()title:string, text:string, titleBtnYes:string, titleBtnNo:string){
  constructor(object?: Partial<DialogModal>) {
    if (object) {
      this.Title = object.Title;
      this.Text = object.Text;
      this.TitleBtnYes = object.TitleBtnYes;
      this.TitleBtnNo = object.TitleBtnNo;
      this.Type = object.Type;
      this.Buttons = object.Buttons;
      this.Callback = object.Callback;
    }
  }
}
export class DialogButton {
  Title = "";
  Color = "";
  BgColor = "";
  Value: any;
  constructor(object?: Partial<DialogButton>) {
    if (object) {
      this.Title = object.Title;
      this.Color = object.Color;
      this.BgColor = object.BgColor;
      this.Value = object.Value;
    }
  }
}

export enum DialogType {
  Info,
  Success,
  Warning,
  Error,
}
