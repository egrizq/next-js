import { Main, SourceCode, Tags, Title } from "./cardComponents"

const CreateCard: React.FC<{titleName: string, titleLink: string, mainText: string, linkCode: string, tags:string[]}> = ({titleName, titleLink, mainText, linkCode, tags}) => {
    return (
        <>
            <div className="p-3">
                <div className="flex flex-col w-12/12 sm:w-10/12 md:w-10/12 lg:w-6/12  space-y-3 p-4 text-justify bg-gray-200 mx-auto rounded-md font-mono">
                    <Title 
                        name={titleName} 
                        linkTitle={titleLink} />
                    <Main 
                        text={mainText} />
                    <SourceCode 
                        linkCode={linkCode} />
                    <div className="flex flex-wrap">
                        <Tags 
                            names={tags} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateCard