
import { pool } from "../../database/"
async function getAllProducts() {
    const query = `SELECT  *  FROM
    northwind.products
        JOIN
    northwind.categories ON northwind.products.CategoryID = northwind.categories.CategoryId
		JOIN northwind.suppliers on northwind.products.SupplierID = northwind.suppliers.SupplierID`
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}
export { getAllProducts }


