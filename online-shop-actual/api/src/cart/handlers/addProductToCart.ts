
import { pool } from "../../database"


async function addProductToCart(productId: number, cartId: number, price: number, quantity: number) {

    const query = `INSERT INTO northwind.carts_products (productId, cartId, price, quantity) VALUES (?, ?, ?, ?);`
    const results = await pool.execute(query, [productId, cartId, price, quantity]);
    console.log(results)
    const [data] = results;
    return (data as any).insertId;
}

export { addProductToCart }


