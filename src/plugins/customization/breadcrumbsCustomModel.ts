export default class BreadcrumbsCustomModel {
  // Breadcrumbs
  FirstWordColorBreadcrumbs = "#080A3C";
  OtherWordColorBreadcrumbs = "#2A8CFF";
  FirstWordColorBreadcrumbsReverse = "#2A8CFF";
  OtherWordColorBreadcrumbsReverse = "#4a6f8a";
  constructor(obj?: Partial<BreadcrumbsCustomModel>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
