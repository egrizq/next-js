const Title: React.FC<{name: string, linkTitle: string}> = ({name, linkTitle}) => {
    return (
        <>
            <a href={linkTitle} className="text-xl font-bold hover:text-blue-700">
                {name}
            </a>
        </>
    )
}

const SourceCode: React.FC<{linkCode: string}> = ({linkCode}) => {
    return (
        <>
            <a href={linkCode} className="underline hover:text-blue-700">
                source code
            </a>
        </>
    )
}

const Main: React.FC<{text: string}> = ({text}) => {
    return (
        <span>
            {text}
        </span>
    )
}

export {Title, SourceCode, Main}