"use client"
import { useState } from "react";
import "../../styles.css"
import CreateCard from "@/app/components/card";

export default function ColorCardCenter() {
    const [show, setShow] = useState<boolean>(true)
    const [cards, setCards] = useState([
        {
          titleName: "The Main Idea Building Text Summarization Using Hugging Face!",
          titleLink: "https://example.com/card1",
          mainText: "Sharing ideas and building text summarization using Transformers from Hugging Face to understand English long text into a concise conclusion Bahasa.",
          linkCode: "https://example.com/code1",
          tags: ["Tag1", "Tag2"]
        },
        {
          titleName: "Deploying a Model with Pizza or Pasta Recognition in Real Time",
          titleLink: "https://example.com/card2",
          mainText: "Deploying a Convolutional Neural Networks (CNN) model with Flask to recognize pizza and pasta images in real-time on local development.",
          linkCode: "https://example.com/code2",
          tags: ["Tag3", "Tag4"]
        }
    ])

    const renderCard = () => {
        if(show) {
            return (
                cards.map((card, index) => (
                    <CreateCard
                        key={index}
                        titleName={card.titleName}
                        titleLink={card.titleLink}
                        mainText={card.mainText}
                        linkCode={card.linkCode}
                        tags={card.tags}
                    />
                ))
            )
        }
    }

    return (
        <>
            <title>card bewarna</title>
            
            <div className="container mx-auto p-1 flex justify-center">
                <div className="flex w-full flex-col">
                    <CreateCard 
                        titleName="The Main Idea Building Text Summarization Using Hugging Face!"
                        titleLink="https://medium.com/@rizq.ramadhan17/the-main-idea-building-text-summarization-using-hugging-face-fae34e7500f4"
                        mainText="Sharing ideas and building text summarization using Transformers from Hugging Face to understand English long text into a concise conclusion Bahasa."
                        linkCode="https://github.com/egrizq/text_summarization"
                        tags={["Text Summarization", "Python", "Machine Learning", "Javascript", "Torch", "HTML", "CSS"]}
                    />

                    <CreateCard 
                        titleName="The Main Idea Building Text Summarization Using Hugging Face!"
                        titleLink="https://medium.com/@rizq.ramadhan17/the-main-idea-building-text-summarization-using-hugging-face-fae34e7500f4"
                        mainText="Sharing ideas and building text summarization using Transformers from Hugging Face to understand English long text into a concise conclusion Bahasa."
                        linkCode="https://github.com/egrizq/text_summarization"
                        tags={["Text Summarization", "Python", "Machine Learning", "Javascript", "Torch", "HTML", "CSS"]}
                    />

                    {renderCard()}
                </div>
            </div>

            <div className="container flex justify-center mx-auto p-2 font-mono">
                <button className="px-4 py-2 bg-gray-300 border-black border-2 border-opacity-75"
                    onClick={() => setShow(!show)}>
                    See All
                </button>
            </div>
        </>
    )
}