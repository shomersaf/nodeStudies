
import { pool } from "../../database/"


async function getUserCart(userId: number, status: string = 'open') {
    const query = `SELECT * FROM northwind.carts where userId = ? and status = ? order by createdAt desc limit 1`
    const results = await pool.execute(query, [userId, status]);
    const [data] = results;
    return data[0];
}

export { getUserCart }


