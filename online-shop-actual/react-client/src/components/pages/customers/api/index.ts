import axios from "axios"

export interface ICustomer {
    id: number,
    name: string,
    city: string,
    country: string,
    contact: string,
    address: string,
    createdAt: string
}

async function getAllCustomersService(limit: number = 10): Promise<Array<ICustomer>> {
    const { data, headers } = await axios.get(`http://localhost:4000/customers?extended=true&limit=${limit}`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)

    const customers: Array<ICustomer> = data.map(c => {
        return {
            id: c.CustomerID,
            name: c.CustomerName,
            contact: c.ContactName,
            city: c.City,
            country: c.Country,
            address: c.Address,
            createdAt: c.createdAt, //new Date(c.createdAt).toLocaleString()
        }
    })
    return customers;
}




async function getCustomersCountService(): Promise<number> {
    const { data } = await axios.get(`http://localhost:4000/customers/count`)
    // if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)
    return data.count as number;
}


async function searchCustomersService(value: string): Promise<Array<ICustomer>> {
    const { data, headers } = await axios.get(`http://localhost:4000/customers/search?q=${value}`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)

    const customers: Array<ICustomer> = data.map(c => {
        return {
            id: c.CustomerID,
            name: c.CustomerName,
            contact: c.ContactName,
            city: c.City,
            country: c.Country,
            address: c.Address,
            createdAt: c.createdAt
        }
    })
    return customers;
}


export { searchCustomersService, getAllCustomersService, getCustomersCountService }