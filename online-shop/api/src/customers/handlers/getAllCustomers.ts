
import { pool } from "../../database/"


async function getAllCustomers(limit: number = 10, extended: boolean = true) {
    const fields = extended ? `*` : `CustomerID, CustomerName, City`;
    const query = `SELECT  ${fields}  from northwind.customers limit ?`
    const results = await pool.execute(query, [limit.toString()]);
    const [data] = results;
    return data;
}   

export { getAllCustomers }


