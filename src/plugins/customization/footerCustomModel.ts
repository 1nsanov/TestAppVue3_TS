export default class FooterCustomModel {
  BackgroundColorFooter: string = "#f8f8f9";
  BorderColorFooter: string = "#e5e8ea";
  TextColorFooter: string = "#080A3C";
  TextColorMenuFooter: string = "#0E88F9";

  constructor(obj?: Partial<FooterCustomModel>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
