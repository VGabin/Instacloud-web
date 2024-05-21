'use client'

import React, {useState} from 'react';
import Layout from "@/components/layout";
import Image from "next/image";
import {userProfile} from "@/components/data";
import Stories from "@/components/Stories";
import Modal from "@/components/Modal";
import UserProfileForm from "@/components/UserProfileForm";

const tabs = [
    {
        name: 'POSTS',
        key: 'posts',
        icon: <svg aria-label="" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="12" role="img"
                   viewBox="0 0 24 24" width="12"><title></title>
            <rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" width="18" x="3" y="3"></rect>
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  x1="9.015" x2="9.015" y1="3" y2="21"></line>
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  x1="14.985" x2="14.985" y1="3" y2="21"></line>
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  x1="21" x2="3" y1="9.015" y2="9.015"></line>
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  x1="21" x2="3" y1="14.985" y2="14.985"></line>
        </svg>
    },
    {
        name: 'SAVED',
        key: 'saved',
        icon: <svg aria-label="" className="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="12" role="img"
                   viewBox="0 0 24 24" width="12"><title></title>
            <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor"
                     strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
        </svg>
    },
    {
        name: 'TAGGED',
        key: 'tagged',
        icon: <svg aria-label="" className="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="12" role="img"
                   viewBox="0 0 24 24" width="12"><title></title>
            <path
                d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
                fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2"></path>
            <path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
                  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2"></path>
            <circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="2"></circle>
        </svg>
    },
];


const Profile = () => {

    const [activeTab, setActiveTab] = useState('posts');
    const [isShowModal, setIsShowModal] = useState(false)
    const {username, bio, userImageUrl, following, followers, userPosts, userStories, totalPosts} = userProfile


    const closeModal = () => {
        setIsShowModal(false)
    }

    return (
        <Layout>
            <div className="min-h-screen">
                <div className="max-w-screen-md mx-auto p-4">
                    <header className="flex flex-col sm:flex-row items-center justify-between p-4">
                        <div className="flex items-center space-x-4">
                            <Image width={200} height={200} src={userImageUrl} alt="profile"
                                   className="w-20 h-20 bg-gray-300 rounded-full"/>
                            <div>
                                <h2 className="text-lg font-semibold">{username}</h2>
                                <p className="text-sm text-gray-500 max-w-[10rem]">{bio}</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 mt-4 sm:mt-0">
                            <button onClick={() => setIsShowModal(true)} type="button"
                                    className="rounded-md bg-gray-300 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                Edit
                            </button>
                            <button type="button"
                                    className="rounded-md bg-gray-300 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                Setting
                            </button>
                        </div>
                    </header>
                    <div className="flex justify-around p-4">
                        <div className="flex flex-col items-center">
                            <span className="text-lg font-semibold">{totalPosts}</span>
                            <span className="text-sm text-gray-500">Posts</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-lg font-semibold">{followers}</span>
                            <span className="text-sm text-gray-500">Followers</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-lg font-semibold">{following}</span>
                            <span className="text-sm text-gray-500">Following</span>
                        </div>
                    </div>
                    <Stories stories={userStories}/>
                    {/* Tabs */}
                    <div className="flex justify-around p-1 border-t border-gray-300 gap-2">
                        {tabs.map(tab => (
                            <button
                                key={tab.key}
                                className={`text-sm font-medium px-4 py-2 flex items-center gap-2 ${activeTab === tab.key ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                {tab?.icon}{tab.name}
                            </button>
                        ))}
                    </div>

                    {/* Tab content */}
                    <div className="p-4">
                        {activeTab === 'posts' && <div className="grid grid-cols-3 gap-4">
                            {
                                userPosts.map((item, index) => {
                                    return <div key={index} className="bg-gray-200 aspect-square">
                                        <Image
                                            height="500"
                                            width="500"
                                            src={item.image}
                                            alt="Story"
                                            className="object-cover"/>
                                    </div>
                                })
                            }
                        </div>}
                        {activeTab === 'saved' && <div>Saved</div>}
                        {activeTab === 'tagged' && <div>Tagged</div>}
                    </div>
                </div>
            </div>
            <Modal closeModal={closeModal} isShowModal={isShowModal}>
                <UserProfileForm/>
            </Modal>
        </Layout>
    );
};

export default Profile;