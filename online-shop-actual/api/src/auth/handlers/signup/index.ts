import { signupSchema } from "../../route"
import bcrypt from "bcrypt";
import { pool } from "../../../database"
import { ResultSetHeader } from "mysql2"


interface IPayload {
    password: string,
    email: string,
    firstName: string,
    lastName: string
}
const saltRounds = 10
export default async function signUp(signUpPayload: IPayload): Promise<number> {
    const { email, firstName, lastName, password } = signUpPayload
    const hashedPassword = await getHashedPassword(password)
    const query = "INSERT INTO `northwind`.`users` (`email`, `password`, `firstName`, `lastName`, `hashedPassword`, `salt`) VALUES (?,?,?,?,?,?)";
    const result = await pool.execute(query, [email, hashedPassword.password, firstName, lastName, hashedPassword.password, hashedPassword.salt])
    const [data] = result;
    return (data as ResultSetHeader).insertId
}

export async function getHashedPassword(password: string, salt?: string): Promise<{ password: string, salt?: string }> {
    const s = salt || bcrypt.genSaltSync(saltRounds)
    const hashed = await bcrypt.hash(password, s)
    return { password: hashed, salt: s }
}

