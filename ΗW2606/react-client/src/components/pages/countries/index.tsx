import { useEffect, useState, useTransition } from "react"
import axios from "axios"
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Header } from "../../ui-components/header";
import { CountriesList } from "./countriesList";
import { WithLoading } from "../../ui-components/with-loading";


const countriesUrl: string = "https://restcountries.com/v3.1/all";

export default function CountriesPage() {
    const [countries, setCountries] = useState([])
    const [isCountriesLoading, setIsCountriesLoading] = useState(false)
    const [countryFilter, setCountryFilter] = useState("")
    const [isPending, startTransition] = useTransition()
    async function getCountries() {
        try {
            setIsCountriesLoading(true)
            const result = await axios.get(countriesUrl)
            const { data } = result;
            if (Array.isArray(result.data)) setCountries(data)
        } catch (ex) {
            alert("error")
        } finally {
            setIsCountriesLoading(false)
        }
    }
    useEffect(() => {

        getCountries()
        return () => {
            console.log("Unmount!")
        }
    }, [])
    function handleFilter(e: any) {
        startTransition(() => {
            setCountryFilter(e.target.value)
        })
    }
    const filteredCountries = countryFilter ? countries.filter((c: any) => c?.name?.common.toLowerCase().includes(countryFilter.toLowerCase())) : countries

    return <div>
        <Header text="Countries Page" />
        <InputText onChange={handleFilter} />
        {isPending && <span> Still updating data... </span>}
        <Button onClick={getCountries} > Refresh</Button>
        <WithLoading isLoading={isCountriesLoading}>
            <CountriesList countries={filteredCountries} />
        </WithLoading>
    </div>
}


