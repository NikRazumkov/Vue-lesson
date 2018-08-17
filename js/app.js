const log = (text, type, date = new Date()) => ({text, type, date})

new Vue({
	el: '#app',
	data: {
		motos: motos,
		moto: motos[0],
		logs: [],
		selectedMotoIndex: 0,
		descVisibility: false,
		search: '',
		modalVisibility: false
	},
	methods: {
		selectMoto(index) {
			this.moto = motos[index]
			this.selectedMotoIndex = index
		},
		newOrder() {
			this.modalVisibility = false
			this.logs.push(
				log(`${this.moto.name} ${this.moto.model} ${this.moto.engine}`, 'success')
				)
		},
		cancelOrder() {
			this.modalVisibility = false
		}
	},
	computed: {
		descBtnText() {
			return this.descVisibility ? 'Скрыть' : 'Описание'
		},
		filteredMotos() {
			return this.motos.filter(moto => {
				return moto.name.indexOf(this.search) > -1 || moto.type.indexOf(this.search) > -1 || moto.model.indexOf(this.search) > -1 || moto.engine.indexOf(this.search) > -1 || moto.color.indexOf(this.search) > -1
			})
		}
	},
	filters: {
		date(value){
			return value.toLocaleString()
		}
	}
})