export default class NotificationOptions {
  timeOut = 5000;
  message = "";
  title = "";
  animate = "fromTop";
  type: EnumNotificationType;
  top = 0;

  constructor(
    title: string,
    message: string,
    type: EnumNotificationType,
    timeOut?: number
  ) {
    this.timeOut = timeOut ? timeOut : this.timeOut;
    this.message = message;
    this.title = title;
    this.type = type;
  }
}

export enum EnumNotificationType {
  Error,
  Success,
}
