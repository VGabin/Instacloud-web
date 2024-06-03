'use client'
import PostCard from "@/components/post-card";
import Layout from "@/components/layout";
import React, {useEffect, useState} from "react";
import Stories from "@/components/Stories";
import {publicPost, publicStories} from "@/components/data";
import axiosInstance from "@/lib/clientAxios";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await axiosInstance.get('/api/post');
                // Update the state with the fetched posts and public posts
                // @ts-ignore
                setPosts([...response.data, ...publicPost]);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        getPosts();
    }, []);

    return (
        <Layout>
            <div className="max-w-screen-md mx-auto">
                <Stories stories={publicStories}/>
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center">
                        {
                            posts?.map((post, index) => {
                                return <PostCard key={index} post={post}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}
