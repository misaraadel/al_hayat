import { ref } from 'vue'

export default function useActions() {
	const number = ref('920022480')

	const callus = () => {
		if (!process.server) {
			const call = new CustomEvent('event:call')
			document.dispatchEvent(call)

			window.open(`tel:0${number.value}`)
		}
	}

	const whatsapp = () => {
		if (!process.server) {
			const whatsapp = new CustomEvent('event:whatsapp')
			document.dispatchEvent(whatsapp)

			window.open(`https://wa.me/+966${number.value}`)
		}
	}

	return{
		number,
		callus,
		whatsapp
	}
}
