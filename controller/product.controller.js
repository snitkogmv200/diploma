const db = require('../db')

class ProductController {
	async createProduct(req, res) {
		const { p_name, description } = req.body
		const newProduct = await db.query(`INSERT INTO product (p_name, description) values ($1, $2) RETURNING *`, [p_name, description])
		res.json(newProduct.rows[0])
	}

	async deleteProduct(req, res) {
		const id = req.params.id
		const product = await db.query('DELETE FROM product where id = $1', [id])
		res.json(product.rows[0])
	}
}

module.exports = new ProductController()