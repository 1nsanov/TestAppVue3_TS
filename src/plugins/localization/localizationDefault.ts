import localizationRU from "./localizationRU"
import localizationEN from "./localizationEN"
export default class localizationDefault {
  langRu = true;
  langEn = false;
  default = new localizationRU()

  constructor() {
    Object.assign(this, this.default);
  }

  switchState() {
    this.langRu = !this.langRu;
    this.langEn = !this.langEn;
    console.log('RU', !this.langRu);
    console.log('EN', !this.langEn);
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


