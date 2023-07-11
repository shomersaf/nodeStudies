
import { pool } from "../../database/"


async function getCustomerById(customerId: number) {
    if (typeof customerId !== 'number') throw new Error("Id is not a valid Number")
    const query = `SELECT  *  from northwind.customers where CustomerID = ?`
    const results = await pool.execute(query, [customerId]);
    const [data] = results;
    return data;
}

export { getCustomerById }


