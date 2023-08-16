import { useAppSelector } from "../../app/hooks"

export default function HeaderCounter() {
    const header = useAppSelector((state => state.counter.someString))
    return <div style={{ background: "red", width: "100%" }}>
        <span> in header = {header}</span>
    </div>
}