export default class my {
  colors = {
    white: '#eee',
    darkGray: '#1a1a22ef',
  }

  darkTheme = {
    mainTextColor: this.colors.white,
    mainBgColor: this.colors.darkGray,
    postBgColor: this.colors.white,
    postTextColor: '#413c3c'
  }
  lightTheme = {
    mainTextColor: this.colors.darkGray,
    mainBgColor: this.colors.white,
    postBgColor: '#413c3c',
    postTextColor: this.colors.white,
  }

  theme = true;
  getTheme() {
    if (this.theme) {
      console.log(this.darkTheme);
      return this.darkTheme
    }
    console.log(this.lightTheme);
    return this.lightTheme
  }
  changeTheme() {
    this.theme = !this.theme;
  }

  changeTitle(title: string) {
    console.log(title);
  }

  getColor(): string {
    return "#cc1"
  }
  // initVariables() {
  //   (document.body as any).style = "--main-bg-color: #1a1a22ef; --main-text-color: #fff";
  //   // (document.body as any).style = "--main-text-color: #fff";
  // }
}