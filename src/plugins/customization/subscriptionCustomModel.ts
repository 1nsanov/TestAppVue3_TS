export default class SubscriptionCustomModel {
  BackgroundColorPlan: string = "#ffffff";
  BorderColorCancelButton: string = "#e5e8ea";
  BackgroundColorCancelButton: string = "#ffffff";
  constructor(obj?: Partial<SubscriptionCustomModel>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
