import { pool } from "../../database"

async function getCustomerByName(name: string) {
    if (!name) throw new Error("Mising search input")
    const query = `SELECT * FROM northwind.customers where CustomerName like ?`
    const result = await pool.execute(query, [`%${name}%`])
    const [data] = result;
    return data;
}


export { getCustomerByName }