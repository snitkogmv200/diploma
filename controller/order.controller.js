const db = require('../db')

class OrderController {
	async createOrder(req, res) {
		const { dimension, description, massa, ordr_priority } = req.body
		const newPerson = await db.query(`INSERT INTO ordr (dimension, description, massa, ordr_priority) values ($1, $2, $3, $4) RETURNING *`, [dimension, description, massa, ordr_priority])
		res.json(newPerson.rows[0])
	}

	async getOrder(req, res) {
		const ordrs = await db.query('SELECT * FROM ordr')
		res.json(ordrs.rows)
	}

	async getOneOrder(req, res) {
		const id = req.params.id
		const ordr = await db.query('SELECT * FROM ordr WHERE id = $1', [id])
		res.json(ordr.rows[0])
	}

	async updateOrder(req, res) {
		const { id, dimension, description, massa, ordr_priority, usr_id, point_id, status_id, delivery_method_id, delivery_address_id } = req.body
		const usr = await db.query(
			'UPDATE ordr set dimension = $1, description = $2, massa = $3, ordr_priority = $4, usr_id = $5, point_id = $6, status_id = $7, delivery_method_id = $8, delivery_address_id = $9 where id = $10 RETURNING *',
			[dimension, description, massa, ordr_priority, usr_id, point_id, status_id, delivery_method_id, delivery_address_id, id]
		)
		res.json(usr.rows[0])
	}

	async deleteOrder(req, res) {
		const id = req.params.id
		const ordr = await db.query('DELETE FROM ordr WHERE id = $1', [id])
		res.json(ordr.rows[0])
	}

	async getOrdersByUser(req, res) {
		const id = req.query.id
		const ordr = await db.query("SELECT * FROM ordr WHERE usr_id = $1", [id])
		res.json(ordr.rows)
	}
}

module.exports = new OrderController()