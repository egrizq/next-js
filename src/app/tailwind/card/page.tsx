import "../../styles.css"
import Tag from '../../components/tag';

export default function ColorCardCenter() {
    return (
        <>
            <title>card bewarna</title>

            <div className="container mx-auto p-4 border-2 border-black flex justify-center">
                <div className="flex flex-wrap w-full">

                    <div className="flex flex-col w-6/12 space-y-3 p-4 bg-gray-200 mx-auto rounded-md font-mono">
                        <a className="text-xl font-bold hover:text-blue-700" href="https://medium.com/@rizq.ramadhan17/the-main-idea-building-text-summarization-using-hugging-face-fae34e7500f4">
                            The Main Idea Building Text Summarization Using Hugging Face!
                        </a>
                        <div>
                            Sharing ideas and building text summarization using Transformers from Hugging Face to understand English long text into a concise conclusion Bahasa.
                        </div>
                        <a href="https://github.com/egrizq/text_summarization" className="underline hover:text-blue-700">
                            source code
                        </a>
                        <div className="flex flex-row space-x-3">
                            <Tag tag="Text Summarization" />
                            <Tag tag="Python" />
                            <Tag tag="Machine Learning" />
                            <Tag tag="Javascript" />
                            <Tag tag="Torch" />
                            <Tag tag="HTML" />
                            <Tag tag="CSS" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}