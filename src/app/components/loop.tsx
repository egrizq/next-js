import '../styles.css';

type School = {
    lokasi: string;
    level: string;
};
type TypeSchool = School[];

const SchoolData: React.FC< {school:TypeSchool} > = ({school}) => {
    return (
        <>
            <ul className="text-center font-semibold">
                {school.map((one) => (
                    <li key={one.level}>{one.level} with {one.lokasi}</li>
                ))}
            </ul>
        </>
    )
}

export type {TypeSchool}
export default SchoolData