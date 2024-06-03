'use client'
import React from 'react';
import Layout from "@/components/layout";
import PostForm from "@/components/new-post/PostForm";

const Page = () => {

    return (
        <Layout>
            <div className="max-w-screen-md mx-auto p-4 bg-white shadow-md rounded">
                <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
                <PostForm/>
            </div>
        </Layout>
    );
};

export default Page;