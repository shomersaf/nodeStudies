
import { pool } from "../../database/"


async function createNewCart(userId: number) {
    const query = `INSERT INTO northwind.carts (userId, status) VALUES (?,'open')`
    const results = await pool.execute(query, [userId]);
    console.log(results)
    const [data] = results;
    return (data as any).insertId;
}

export { createNewCart }


