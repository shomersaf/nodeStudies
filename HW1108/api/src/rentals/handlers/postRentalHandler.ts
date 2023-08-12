import { pool } from "../../database";
//here must be additional query function getting car id by car name
async function postRentalHandler(
  car:string,//from selector in ui
  fromDate:any,//from calendar picker
  toDate:any,//from calendar picker
  pricePerDay:number)
{
  console.log("hellp from post function 1")
  if (isNaN(pricePerDay))
    throw new Error("pricePerDay should be a number");
    console.log("hellp from post function 2")
  console.log("car = " + car)
  console.log("toDate = " + toDate)
  const query1 = `SELECT id FROM carrental.cars WHERE car =?;`;
  const result1 = await pool.execute(query1, [car]);
  const [data1] = result1;
  const carId = Object.values(data1)[0].id
  console.log("result1 = " + result1)
  console.log("carId = " + carId)
  const query2 = `INSERT INTO carrental.rentals (carId,fromDate, toDate, pricePerDay) VALUES (?,?,?,?);`;
  const result2 = await pool.execute(query2, [
    carId, fromDate, toDate, pricePerDay
  ]);

  console.log("result2 = " + result2);
  return result2;
}
export { postRentalHandler };
