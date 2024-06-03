import React, {useEffect, useState} from 'react';
import axiosInstance from "@/lib/clientAxios";
import {CldUploadWidget, CloudinaryUploadWidgetInfo} from "next-cloudinary";

export default function PostForm() {
    const [user, setUser] = useState({username: '', email: '', id: ''})
    const [resource, setResource] = useState<any>();
    const [message, setMessage] = useState('');

    useEffect(() => {
        const getUserData: string | null = localStorage.getItem("user")
        // @ts-ignore
        setUser(JSON.parse(getUserData))
    }, []);

    const [form, setForm] = useState({
        username: '',
        caption: '',
        imageUrl: '',
        userId: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!resource?.url) return

        form.username = user.username
        form.imageUrl = resource?.url
        form.userId = user.id

        try {
            const response = await axiosInstance.post('/api/post', form);
            window.location.href = '/';
            setForm({
                username: '',
                caption: '',
                imageUrl: '',
                userId: ''
            })
        } catch (error) {
            console.error(error);
            alert('Failed to create post');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CldUploadWidget
                onSuccess={(result) => setResource(result.info)
                } uploadPreset="ml_default">{({open}) => (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="button" onClick={() => open()}>
                    Upload
                </button>
            )}
            </CldUploadWidget>


            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="caption">
                    Caption
                </label>
                <textarea
                    id="caption"
                    name="caption"
                    value={form.caption}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full px-3 py-2 border rounded"
                ></textarea>
            </div>


            <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
            >
                Create Post
            </button>

            {message && <p className="mt-4 text-green-500">{message}</p>}
        </form>
    );
}
