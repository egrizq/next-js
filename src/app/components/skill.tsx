const SkillLogo: React.FC<{imgLink: string, alt: string, width: string}> = ({imgLink, alt, width}) => {
    return (
        <>
            <div className="p-2 sm:w-4/12 md:w-2/12 lg:w-2/12 mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <img src={imgLink} 
                        alt={alt} width={width} height="auto"/>
                </div>
            </div>
        </>
    )
}

export default SkillLogo