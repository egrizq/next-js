import '../styles.css';

type Data = {
    username: string
    alamat: {
        provinsi: string
        kota: string    
    }
}

type Status = {
    current: 'pending' | 'on going'
}

const Nama: React.FC<{ input: Data; condition: Status; }> = ({ input, condition }) => {
    
    let message
    if (condition.current === 'pending') {
        message = "pending"
    } else if (condition.current === 'on going') {
        message = "on going"
    }

    return (
        <>
            <p className='text-center text-2xl pt-4 font-semibold'>
                This username: {input.username} and from {input.alamat.kota}, {input.alamat.provinsi}
            </p>

            <p className={"text-center pt-4 font-medium"}>
                Status: {message}
            </p>
        </>
    )
}

export default Nama;
export type { Data, Status };
