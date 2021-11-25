export default class SidebarCustomModel {
  // Sidebar Item
  BackgroundColorSidebarItem: string = "#ffffff";
  BackgroundColorSidebarItemHover = "#ffffff";
  BorderColorSidebarItemHover = "transparent";
  TextPrimaryColorSidebarItem: string = "#080A3C";
  TextColorEmailSidebarItem: string = "#080A3C";
  TextPrimaryColorSidebarColumn: string = "#080A3C";
  TextSecondaryColorSidebarColumn: string = "#4A6F8A";
  ButtonBackgroundColorSidebarColumn: string = "#2a8cff";
  TextColorTitleCounterSidebarColumn: string = "#4a6f8a";
  TextColorItemCounterSidebarColumn: string = "#4A6F8A";
  constructor(obj?: Partial<SidebarCustomModel>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
