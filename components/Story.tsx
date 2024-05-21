import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import Image from "next/image";

interface StoryProps {
    isShowStory: Boolean;
    setIsShowStory: Function;
    progress: number;
    setProgress: Dispatch<SetStateAction<number>>;
    storyImage: string
}

const Story = ({isShowStory, setIsShowStory, progress, setProgress, storyImage}: StoryProps) => {

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => (prev < 100 ? prev + 1 : 100));
        }, 100); // Adjust the interval to control the speed of the progress bar

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            setIsShowStory(false)
            setProgress(0)
        }
    }, [progress]);

    const handleHideStory = () => {
        setIsShowStory(false)
        setProgress(0)
    }


    return (
        <>
            {isShowStory && <div className="relative z-50">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div
                        className="flex h-screen-minus-70 items-end justify-center p-2 text-center sm:items-center sm:p-0 h">
                        <div
                            className="relative transform overflow-hidden text-left shadow-xl transition-all max-w-screen-md h-full ">
                            <div className="px-2 pt-5 bg-gray-100 h-full">
                                <div className="mx-auto max-w-screen-md h-full">
                                    <div
                                        className="flex flex-col items-center justify-center justify-centerborder-2">
                                        <div className="relative mb-4">
                                            <button type="button" onClick={handleHideStory}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                                </svg>
                                            </button>
                                            <div className="mb-2">
                                                <div className="relative w-full h-1 bg-gray-300 rounded-full">
                                                    <div
                                                        className="absolute top-0 left-0 h-1 bg-red-500 rounded-full"
                                                        style={{width: `${progress}%`}}
                                                    ></div>
                                                </div>
                                            </div>
                                            <Image
                                                height="500"
                                                width="500"
                                                src={storyImage}
                                                alt="Story"
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    );
};

export default Story;