import PostCard from "@/components/post-card";
import Layout from "@/components/layout";
import React from "react";
import Stories from "@/components/Stories";
import {publicPost, publicStories} from "@/components/data";


export default function Home() {

    return (
        <Layout>
            <div className="max-w-screen-md mx-auto">
                <Stories stories={publicStories}/>
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center">
                        {
                            publicPost.map((post, index) => {
                                return <PostCard key={index} post={post}/>
                            })
                        }
                    </div>

                </div>
            </div>
        </Layout>
    );
}
