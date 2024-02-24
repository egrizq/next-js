import Nama, {Data, Status, PersonList} from "../components/profile";

export default function Profile() {
    const data:Data = {
        username: "Rizq Ramadhan",
        alamat: {
            provinsi: "jawa barat",
            kota: "bekasi"
        }
    }

    const status:Status = {
        current: "pending"
    }

    const list: PersonList = {
        names: [
            {first: "rizq", last:"ramadhan"},
            {first: "bruce", last:""},
            {first: "princess", last:"diana"},
        ]
    };

    return (
        <>
            <Nama input={data} condition={status} personList={list}/>
        </>
    )
}