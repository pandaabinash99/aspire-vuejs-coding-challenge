import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const theme = {
	primary: '#0C365A',
	secondary: '#01D167'
}

export default new Vuetify({
	theme: {
		themes: {
			dark: theme,
			light: theme
		}
	}
})
