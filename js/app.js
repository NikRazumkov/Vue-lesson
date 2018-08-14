const moto = (vendor, model, maxspeed, phone, image) => ({vendor, model, maxspeed, phone, image})

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
		selectedMotoIndex: 0,
		phoneVisibility: false
	},
	methods: {
		selectMoto: function (index) {
			this.moto = motos[index]
			this.selectedMotoIndex = index
		}
	}
})