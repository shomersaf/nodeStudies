import { pool } from "../../database";

async function postMeetingHandler(
  teamName: string,
  fromDate: Date,
  toDate: Date,
  topic: string,
  room: number
) {
  if (isNaN(room)) throw new Error("room should be a number");
  const query1 = `SELECT id FROM exam.teams WHERE teamName =?;`;
  const result1 = await pool.execute(query1, [teamName]);
  const [data1] = result1;
  const teamId = Object.values(data1)[0].id;
  // const query2 = `SELECT teamId FROM exam.meetings WHERE teamId =? AND fromDate =? AND toDate=?;`;
  // const result2 = await pool.execute(query2, [teamId, fromDate, toDate]);

  const query3 = `INSERT INTO exam.meetings ( teamId, fromDate, toDate, topic, room) VALUES (?,?,?,?,?);`;
  const result3 = await pool.execute(query3, [
    teamId,
    fromDate,
    toDate,
    topic,
    Number(room),
  ]);
  // const [data] = result2;

  // if ([...Object.values(data)].length > 1)
  //   throw new Error("the meeting already exists");

  return result3;
}
export { postMeetingHandler };
