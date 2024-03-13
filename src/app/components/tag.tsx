const Tag: React.FC<{name: string}> = ({name}) => {
    return (
        <>
            <div className="p-1">
                <div className="flex bg-green-400 p-1 rounded-md text-xs items-center">
                    <span>{name}</span>
                </div>
            </div>
        </>
    )
}

const Tags: React.FC<{names: string[]}> = ({names}) => {
    return (
        <>
            {names.map((name, index) => (
                <Tag key={index} name={name} />
            ))}
        </>
    )
}

export default Tags;