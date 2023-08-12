import css from "./index.module.css"
export function Loader() {
    return <div><h3>Loading...</h3><div className={css.spinner}></div></div>;
}