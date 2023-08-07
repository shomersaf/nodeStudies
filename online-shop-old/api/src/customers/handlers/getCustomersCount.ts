
import { pool } from "../../database"


async function getCustomersCountHandler() {
    const query = `SELECT  count(*) as total  from northwind.customers`
    const results = await pool.execute(query);
    const [data] = results;
    return data[0].total;
}

export { getCustomersCountHandler }


