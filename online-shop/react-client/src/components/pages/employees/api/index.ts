import axios from "axios"

export interface IEmployee {
    id: number,
    surname: string,
    name: string,
    birthday: any,
    photo: string,
    notes: string
}

async function getAllEmployeesService(): Promise<Array<IEmployee>> {
    const { data, headers } = await axios.get(`http://localhost:4000/employees`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)

    const employees: Array<IEmployee> = data.map(e => {
        return {
            id: e.EmployeeID,
            surname: e.LastName,
            name: e.FirstName,
            birthday: new Date(e.BirthDate).toLocaleDateString(),
            photo: e.Photo,
            notes: e.Notes,
        }
    })
    return employees;
}



async function betweenEmployeesService(value: string): Promise<Array<IEmployee>> {
    const { data, headers } = await axios.get(`http://localhost:4000/customers/search?q=${value}`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)

    const employees: Array<IEmployee> = data.map(e => {
        return {
            id: e.EmployeeID,
            surname: e.LastName,
            name: e.FirstName,
            birthday: e.BirthDate,
            photo: e.Photo,
            notes: e.Notes,
        }
    })
    return employees;
}


export { betweenEmployeesService, getAllEmployeesService }