const db = require('../db')

class UserController {
	async createUser(req, res) {
		const { first_name, last_name, email, phone, role_value } = req.body
		const newPerson = await db.query(`INSERT INTO usr (first_name, last_name, email, phone, role_value) values ($1, $2, $3, $4, $5) RETURNING *`, [first_name, last_name, email, phone, role_value])

		res.json(newPerson.rows[0])
	}
	async getUser(req, res) {
		const usrs = await db.query('SELECT * FROM usr')
		res.json(usrs.rows)
	}
	async getOneUser(req, res) {
		const id = req.params.id
		const usr = await db.query('SELECT * FROM usr WHERE id = $1', [id])
		res.json(usr.rows[0])
	}
	async updateUser(req, res) {
		const { id, first_name, last_name, email, phone, role_value } = req.body
		const usr = await db.query(
			'UPDATE usr set first_name = $1, last_name = $2, email = $3, phone = $4, role_value = $5 where id = $6 RETURNING *',
			[first_name, last_name, email, phone, role_value, id]
		)
		res.json(usr.rows[0])
	}
	async deleteUser(req, res) {
		const email = req.params.email
		const usr = await db.query('DELETE FROM usr where email = $1', [email])
		res.json(usr.rows[0])
	}
}

module.exports = new UserController()