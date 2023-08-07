import { CountryCard } from "../../ui-components/countryCard"
import css from "./countriesList.module.css"
export function CountriesList(props: { countries: Array<any> }) {
    return <div className={css.listWrapper}>
        {props.countries.map((country: { flags: { png: string }, region: string, name: { common: string } }) => {
            return <CountryCard key={country?.name?.common + country?.region} name={country?.name?.common}
                flag={country?.flags?.png}
                region={country.region} />
        })}
    </div>
}