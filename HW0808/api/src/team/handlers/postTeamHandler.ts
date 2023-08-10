import { pool } from "../../database";
async function postTeamHandler(
  teamName: string,
  city: string,
  mainColor: string,
  secondaryColor: string,
  semel: string
) {
  if (
    typeof teamName !== "string" ||
    typeof city !== "string" ||
    typeof mainColor !== "string" ||
    typeof secondaryColor !== "string" ||
    typeof semel !== "string"
  )
    throw new Error("Wrong type data entered on team post");

  const query = `INSERT INTO sport5.teams (teamName, city, mainColor, secondaryColor, semel) VALUES (?,?,?,?,?);`;
  const results = await pool.execute(query, [
    teamName,
    city,
    mainColor,
    secondaryColor,
    semel,
  ]);

  console.log(results);
  return results;
}
export { postTeamHandler };
