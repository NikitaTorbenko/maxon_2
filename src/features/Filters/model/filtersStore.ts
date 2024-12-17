import { defineStore } from "pinia"
import { ref } from "vue"

export const useSearchStore = defineStore("search", () => {
	const searchValue = ref("")
	const productType = ref("")
	const type = ref(0)
	const nicotine = ref(0)
	const flavour = ref("")
	const special = ref("")
	const brand = ref("")

	return {
		searchValue,
		productType,
		type,
		nicotine,
		flavour,
		special,
		brand
	}
})
