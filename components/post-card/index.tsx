import React from 'react';
import Avatar from "@/components/post-card/Avatar";
import Image from "next/image";
import Icons from "@/components/post-card/Icons";
import Description from "@/components/post-card/Description";

interface PostCardProps {
    post: {
        id: string,
        username: string,
        userImagUrl: string,
        caption: string,
        imageUrl: string,
        postedDate: string,
        likes: number,
        comments: number
    }
}

const PostCard = ({post}: PostCardProps) => {

    const {
        username,
        userImagUrl,
        caption,
        imageUrl,
        postedDate,
        likes,
        comments
    } = post

    return (
        <div className="mx-auto mt-10 w-full">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">

                {/*<img className="w-full h-64 object-cover"*/}
                {/*     src={imageUrl}*/}
                {/*     alt="Post Image"/>*/}

                <Image
                    className="object-cover rounded-t-lg w-full h-full"
                    src={imageUrl}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />

                <div className="p-4">
                    <div className="flex items-center mb-2">
                        <img className="w-10 h-10 rounded-full mr-4"
                             src={userImagUrl}
                             alt="User Avatar"/>
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none font-bold">{username}</p>
                            <p className="text-gray-600">{postedDate}</p>
                        </div>
                    </div>
                    <p className="text-gray-700 text-base mb-4">
                        {caption}
                    </p>
                    <div className="flex items-center">
                            <span className="text-gray-600 text-sm mr-4">
                                <i className="fas fa-heart"></i>
                                {likes} likes
                            </span>
                        <span className="text-gray-600 text-sm"><i
                            className="fas fa-comment"></i>
                            {comments} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>

        // <div className="mx-auto py-3">
        //     <div className="flex items-center gap-2 mb-1">
        //         <Avatar/>
        //         <p className="text-gray-700 font-bold text-sm ">
        //             Salem shah : <span className="text-gray-500">5d</span>
        //         </p>
        //     </div>
        //     <div
        //         className="max-w-3xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        //         <Image
        //             // className=""
        //             className="w-full h-full top-0 left-0 object-cover rounded-t-lg"
        //             src="/imgs/post1.jpg"
        //             width={500}
        //             height={500}
        //             alt="Picture of the author"
        //         />
        //         <div className="p-5">
        //             <Icons/>
        //             <Description
        //                 description="Here are the bigges enterprise technology acquisitions of 2021 so far, in reverse chronological order."/>
        //         </div>
        //     </div>
        //
        // </div>
    );
};

export default PostCard;