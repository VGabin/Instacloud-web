'use client'
import React, {useState} from 'react';
import Image from "next/image";
import Story from "@/components/Story";

interface StoriesProps {
    stories: {
        title: string,
        image: string
    }[]
}

const Stories = ({stories}: StoriesProps) => {

    const [storyImage, setStoryImage] = useState<string>("")
    const [progress, setProgress] = useState(0);
    const [isShowStory, setIsShowStory] = useState(false);

    const handleDisplayStory = (image: string) => {
        setStoryImage(image)
        setIsShowStory(true)
        setProgress(0)
    }

    return (
        <>
            <Story
                isShowStory={isShowStory}
                setIsShowStory={setIsShowStory}
                progress={progress}
                setProgress={setProgress}
                storyImage={storyImage}
            />
            <div className="p-4 px-6">
                <div className="carousel carousel-end flex gap-2">
                    {stories.map((item, index) => (
                        <div onClick={() => handleDisplayStory(item.image)} key={index}
                             className="carousel-item">
                            <div className="flex flex-col items-center justify-center gap-1">
                                <Image width="70" height="70" src={item.image} alt={item.title}
                                       className="min-w-14 min-h-14 bg-gray-300 rounded-full"></Image>
                                <span className="text-sm">{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Stories;