import Tags from "@/app/components/tag";
import "../../styles.css"
import { Main, SourceCode, Title } from "@/app/components/article";

export default function ColorCardCenter() {
    return (
        <>
            <title>card bewarna</title>

            <div className="container mx-auto p-4 flex justify-center">
                <div className="flex flex-wrap w-full">

                    <div className="p-3">
                        <div className="flex flex-col w-12/12 sm:w-10/12 md:w-10/12 lg:w-6/12  space-y-3 p-4 text-justify bg-gray-200 mx-auto rounded-md font-mono">
                            <Title 
                                name="The Main Idea Building Text Summarization Using Hugging Face!" 
                                linkTitle="https://medium.com/@rizq.ramadhan17/the-main-idea-building-text-summarization-using-hugging-face-fae34e7500f4" />
                            <Main text="Sharing ideas and building text summarization using Transformers from Hugging Face to understand English long text into a concise conclusion Bahasa." />
                            <SourceCode linkCode="https://github.com/egrizq/text_summarization" />
                            <div className="flex flex-wrap">
                                <Tags names={["Text Summarization", "Python", "Machine Learning", "Javascript", "Torch", "HTML", "CSS"]} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}