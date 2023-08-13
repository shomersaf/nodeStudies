import { pool } from "../../database";

async function postRentalHandler(
  car:string,
  fromDate:any,
  toDate:any,
  pricePerDay:number)
{
  if (isNaN(pricePerDay))
    throw new Error("pricePerDay should be a number");
  const query1 = `SELECT id FROM carrental.cars WHERE car =?;`;
  const result1 = await pool.execute(query1, [car]);
  const [data1] = result1;
  const carId = Object.values(data1)[0].id
  const query2 = `SELECT carId FROM carrental.rentals WHERE carId =? AND DATE(fromDate) =DATE(?) AND DATE(toDate)=DATE(?);`
  const result2 = await pool.execute(query2, [carId, fromDate, toDate]);

  const query3 = `INSERT INTO carrental.rentals (carId,fromDate, toDate, pricePerDay) VALUES (?,?,?,?);`;
  const result3 = await pool.execute(query3, [
    carId, fromDate, toDate, pricePerDay
  ]);
const [data] = result2

if ([...Object.values(data)].length>1)
throw new Error("the rental already exists");
 
  return result3;
}
export { postRentalHandler };
