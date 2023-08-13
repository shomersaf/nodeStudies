
    
import { pool } from "../../database"

async function getRentalsHandler() {
    const query = `SELECT * from carrental.rentals JOIN carrental.cars on carrental.rentals.carId = carrental.cars.id;`
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getRentalsHandler }