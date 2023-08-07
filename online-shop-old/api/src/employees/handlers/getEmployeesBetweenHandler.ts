
import { pool } from "../../database"


async function getEmployeesBetweenHandler() {
    //const query = `SELECT * from northwind.employees WHERE BirthDate BETWEEN '1955-03-04 00:00:00' AND "1963-08-30 00:00:00"`
    const query = `SELECT * from northwind.employees`
    const results = await pool.execute(query);
    //const [data] = results;
   // console.log(results.)
    console.log(results)
    // return data[0].range;
    return results
}

export { getEmployeesBetweenHandler }


