export default class JsonPlugin {
  Save(key: string, obj: any) {
    localStorage.setItem(key, JSON.stringify(obj))
  }
  Load(key: string) {
    let getItems = localStorage.getItem(key) || ''
    return JSON.parse(getItems)
  }
}