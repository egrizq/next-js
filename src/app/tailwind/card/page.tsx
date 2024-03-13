"use client"
import { useState } from "react";
import "../../styles.css"
import CreateCard from "@/app/components/card";

export default function ColorCardCenter() {
    const [show, setShow] = useState<boolean>(true)

    const handleText = () => {
        setShow(!show)
    }

    const renderCard = () => {
        if(show) {
            return (
                <CreateCard 
                    titleName="The Main Idea Building Text Summarization Using Hugging Face!"
                    titleLink="https://medium.com/@rizq.ramadhan17/the-main-idea-building-text-summarization-using-hugging-face-fae34e7500f4"
                    mainText="Sharing ideas and building text summarization using Transformers from Hugging Face to understand English long text into a concise conclusion Bahasa."
                    linkCode="https://github.com/egrizq/text_summarization"
                    tags={["Text Summarization", "Python", "Machine Learning", "Javascript", "Torch", "HTML", "CSS"]}
                />
            )
        }
    }

    return (
        <>
            <title>card bewarna</title>

            <div className="container flex p-2 justify-center font-mono">
                {renderCard()}
            </div>

            <div className="container flex justify-center mx-auto p-2 font-mono">
                <button className="px-4 py-2 bg-gray-300 border-black border-2 border-opacity-75"
                    onClick={handleText}>
                    See All
                </button>
            </div>
        </>
    )
}