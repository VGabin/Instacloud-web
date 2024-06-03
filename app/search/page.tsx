"use client";

import Layout from "@/components/layout";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Image {
  id: string;
  url: string;
}

const ImageMosaic: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {      
          const url = 'https://826586495812155:5fzy3deyFXzFOpHVLWhCdgRMZUY@api.cloudinary.com/v1_1/dns238vlf/resources/image';
          const response = await axios.get(url);
          setImages(response.data.resources);
          console.log("hey");
        setLoading(false);
      } catch (err) {
        setError('Erreur lors du chargement des images');
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={mosaicContainerStyle}>
      {images.map((image) => (
        <img key={image.id} src={image.url} alt="Mosaic" style={imageStyle} />
      ))}
    </div>
  );
};

const mosaicContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(25%, 1fr))',
  gap: '10px',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
};

const Page = () => {
  return (
    <Layout>
        <div className="max-w-screen-md mx-auto">
            <ImageMosaic />
        </div>
    </Layout>
  );
};

export default Page;
