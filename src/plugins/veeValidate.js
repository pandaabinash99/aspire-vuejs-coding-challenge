import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import {
	required,
	alpha_spaces,
	max,
	min,
	numeric
} from 'vee-validate/dist/rules'

extend('required', required)
extend('alphaSpace', alpha_spaces)
extend('max', max)
extend('min', min)
extend('numeric', numeric)

Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)

// custom rules
const numericWithSpace = (v) => {
	const nums = v.split(' ')
	const isValid = nums.every((item) => item.length === 4 && !isNaN(item))
	return isValid || 'Invalid card number'
}
extend('numericWithSpace', numericWithSpace)

const numericWithSlace = (v) => {
	const nums = v.split('/')
	const isValid = nums.every((item) => item.length === 2 && !isNaN(item))
	return isValid || 'Invalid valid thru'
}
extend('numericWithSlace', numericWithSlace)
// custom rules end
