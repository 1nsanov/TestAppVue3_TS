import { App } from 'vue'
import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MySelect from "@/components/UI/MySelect.vue";
import NavBar from "@/components/UI/NavBar.vue";
import ChangeThemeBtn from "@/components/UI/ChangeThemeBtn.vue"
import ChangeLanguage from "@/components/UI/ChangeLanguage.vue"

export default (app: App<Element>) => {
	app.component('MyButton', MyButton)
	app.component('MyInput', MyInput)
	app.component('MyDialog', MyDialog)
	app.component('MySelect', MySelect)
	app.component('NavBar', NavBar)
	app.component('ChangeThemeBtn', ChangeThemeBtn)
	app.component('ChangeLanguage', ChangeLanguage)
}