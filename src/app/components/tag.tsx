const Tag: React.FC<{tag: string}> = ({tag}) => {
    return (
        <>
            <div className="bg-green-400 p-1 rounded-md text-xs">
                {tag}
            </div>
        </>
    )
}

export default Tag;
