import SchoolData, { TypeSchool } from "../components/loop";

export default function Product() {
    const items: TypeSchool = [
        {lokasi: "bekasi", level: "sd"},
        {lokasi: "jakarta", level: "smp"},
        {lokasi: "bandung", level: "smk"}
    ]      

    const fruits = ['apple', 'banana', 'orange'];

    return (
        <>
            <ul>
                {fruits.map((fruit) => (
                    <li key={fruit}>{fruit}</li>
                ))}
            </ul>
        </>
    )
}