'use client'
import React, {useState} from 'react';
import Layout from "@/components/layout";
import {CldUploadWidget, CloudinaryUploadWidgetInfo} from 'next-cloudinary';

const Page = () => {
    const [resource, setResource] = useState<CloudinaryUploadWidgetInfo | string>();

    console.log(resource)

    return (
        <Layout>
            <div className="max-w-screen-md mx-auto border-2 border-red-300">
                <CldUploadWidget
                    onSuccess={(result) => setResource(result.info)
                    } uploadPreset="ml_default">{({open}) => (
                    <button type="button" className="" onClick={() => open()}>
                        Upload
                    </button>
                )}
                </CldUploadWidget>
            </div>
        </Layout>
    );
};

export default Page;