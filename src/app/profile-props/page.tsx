// import SchoolData, { School } from "../components/loop";
import Nama, {Data, Status} from "../components/profile";

export default function Profile() {
    const data:Data = {
        username: "Rizq Ramadhan",
        alamat: {
            provinsi: "jawa barat",
            kota: "bekasi"
        }
    }

    const status:Status = {
        current: "on going"
    }

    // const schoolList: School = [
    //     { lokasi: 'Alice', level: 'Smith' },
    //     { lokasi: 'Bob', level: 'Johnson' },
    //     { lokasi: 'Charlie', level: 'Brown' },
    // ];
      
    return (
        <>
            <Nama input={data} condition={status}/>
            {/* <SchoolData school={schoolList} /> */}
        </>
    )
}