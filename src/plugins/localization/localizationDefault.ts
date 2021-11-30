import localizationRU from "./localizationRU"
import localizationEN from "./localizationEN"
export default class localizationDefault {
  langRu = true;
  langEn = false;
  default = new localizationRU()
  Ru = 'Русский'
  En = 'English'
  private Default = 'Русский'

  constructor() {
    Object.assign(this, this.default);
  }

  switchState() {
    this.langRu = !this.langRu;
    this.langEn = !this.langEn;
  }

  switchLang() {
    this.switchState();
    if (this.langRu) {
      this.default = new localizationRU();
    } else if (this.langEn) {
      this.default = new localizationEN();
    }
  }
}


