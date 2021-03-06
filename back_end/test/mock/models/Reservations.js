const list = [
	{
		id: 1,
		checkIn: "2022-05-10T00:00:00.000Z",
		checkOut: "2022-05-15T00:00:00.000Z",
		quantityDays: 5,
		clientId: 1,
		totalPrice: "3500",
		client: {
			id: 1,
			fullName: "Jonatas Passos",
			cpf: "12345678900",
			email: "jonatas@gmail.com",
			active: true
		},
		rooms: [
			{
				id: 1,
				room: 301,
				type: "Suíte Luxo",
				price: "700"
			}
		]
	},
  {
		id: 2,
		checkIn: "2022-05-15T00:00:00.000Z",
		checkOut: "2022-05-20T00:00:00.000Z",
		quantityDays: 5,
		clientId: 2,
		totalPrice: "2500",
		client: {
			id: 2,
			fullName: "Mariana Saraiva",
			cpf: "12345678911",
			email: "mari@gmail.com",
			active: true
		},
		rooms: [
			{
				id: 4,
				room: 201,
				type: "Suíte Executiva",
				price: "500"
			}
		]
	},
  {
		id: 3,
		checkIn: "2022-05-20T00:00:00.000Z",
		checkOut: "2022-05-25T00:00:00.000Z",
		quantityDays: 5,
		clientId: 3,
		totalPrice: "1500",
		client: {
			id: 3,
			fullName: "Nathalia Miranda",
			cpf: "12345678922",
			email: "nath@gmail.com",
			active: true
		},
		rooms: [
			{
				id: 4,
				room: 101,
				type: "Quarto Standard",
				price: "300"
			}
		]
	}
]

const reservation = {
	id: 1,
	checkIn: "2022-05-10T00:00:00.000Z",
	checkOut: "2022-05-15T00:00:00.000Z",
	quantityDays: 5,
	clientId: 1,
	totalPrice: "3500",
	client: {
		id: 1,
		fullName: "Jonatas Passos",
		cpf: "12345678900",
		email: "jonatas@gmail.com",
		active: true
	},
	rooms: [
		{
			id: 1,
			room: 301,
			type: "Suíte Luxo",
			price: "700"
		}
	]
}

const newReservation = {
	checkIn: "2022-05-25",
	checkOut:"2022-05-30",
	quantityDays: 5,
	totalPrice: 3500,
	roomId: 1
}

module.exports = {
	list,
	reservation,
	newReservation
}