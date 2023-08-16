import axios from "axios";

// A mock function to mimic making an async request for data
let a = 1;
export function fetchCount(amount = 1) {
    a = a + 1;
    return new Promise<{ data: number }>((resolve, reject) =>
        setTimeout(() => {
            if (a % 2 === 0) {
                resolve({ data: amount })
            } else {
                reject()
            }
        }, 2000),
    )
}

export async function getCountries() {
    const result = await axios.get("https://restcountries.com/v3.1/all")
    return result.data
}