import SchoolData, { TypeSchool } from "../components/loop";

export default function Product() {
    const items: TypeSchool = [
        {lokasi: "bekasi", level: "sd"},
        {lokasi: "jakarta", level: "smp"},
        {lokasi: "bandung", level: "smk"}
    ]        

    return (
        <>
            <SchoolData school={items}/>
        </>
    )
}