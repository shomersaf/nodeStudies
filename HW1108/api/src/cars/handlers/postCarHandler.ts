import { pool } from "../../database";

  async function postCarHandler(
    car:string,
    lp:string,
    color:string,
    engine:number,
    company:string,
    img:string)
   {
    if (!car||!lp||!color||!engine||!company||!img)
      throw new Error("Wrong type data entered on team post");
  const query = `INSERT INTO carrental.cars (car, lp, color, engine, company, img) VALUES (?,?,?,?,?,?);`;
  const results = await pool.execute(query, [
    car, lp, color, engine, company, img
  ]);

  console.log(results);
  return results;
}
export { postCarHandler };
