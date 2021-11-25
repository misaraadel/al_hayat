import { defineNuxtPlugin } from '#app'
import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
	if (!process.server) {
		nuxtApp.vueApp.use(createGtm({
			id: 'GTM-TQ6HDHJ',
			defer: true,
			enabled: true
		}))
	}
})

// register() {
// 	const register = new CustomEvent('event:register')
// 	document.dispatchEvent(register)
//
// 	Cookies.remove(`_source`)
// },
//
// callus(number) {
// 	const call = new CustomEvent('event:call')
// 	document.dispatchEvent(call)
//
// 	window.open(`tel:${number}`)
// },
//
// whatsapp(number) {
// 	const whatsapp = new CustomEvent('event:whatsapp')
// 	document.dispatchEvent(whatsapp)
//
// 	window.open(`https://wa.me/${number}`)
// },
