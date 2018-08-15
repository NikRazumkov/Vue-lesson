const moto = (vendor, model, maxspeed, phone, image) => ({vendor, model, maxspeed, phone, image})

const log = (text, type, date = new Date()) => ({text, type, date})

const motos = [
	moto('KXD', 'PB-008', '60km/h', '+375 29 101-22-33', 'images/pb-008.jpg' ),
	moto('NITRO Motors', 'PS-77', '65km/h', '+375 29 223-23-54', 'images/ps-77.jpg' ),
	moto('NITRO Motors', 'PS-50 Rocket', '70km/h', '+375 29 101-22-33', 'images/ps-50.jpg' )
]

new Vue({
	el: '#app',
	data: {
		motos: motos,
		moto: motos[0],
		logs: [],
		selectedMotoIndex: 0,
		phoneVisibility: false,
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
				log(`Success order: ${this.moto.vendor} ${this.moto.model}`, 'success')
				)
		},
		cancelOrder() {
			this.modalVisibility = false
				this.logs.push(
					log(`Cancelled order: ${this.moto.vendor} ${this.moto.model}`, 'cancel')
				)	
		}
	},
	computed: {
		phoneBtnText() {
			return this.phoneVisibility ? 'Hide phone' : 'Show phone'
		},
		filteredMotos() {
			return this.motos.filter(moto => {
				return moto.vendor.indexOf(this.search) > -1 || moto.model.indexOf(this.search) > -1
			})
		}
	},
	filters: {
		date(value){
			return value.toLocaleString()
		}
	}
})