// components/GifList.tsx
"use client"
import { useEffect, useState } from 'react';
import type { Gif } from '@/app/types/gif';
import Image from "next/image";

interface GifListProps {
  searchTerm: string;
}

const GifList: React.FC<GifListProps> = ({ searchTerm }) => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  useEffect(() => {
    const fetchGifs = async () => {
      const response = await fetch(`/api/gifs?searchTerm=${searchTerm}`);
      const data = await response.json();
      setGifs(data.results || []);
    };

    fetchGifs();
  }, [searchTerm]);

  return (
    <div>
      {gifs.map(gif => (
<Image  key={gif.id} src={gif.media[1].gif.url} alt={gif.title} />
      ))}
    </div>
  );
};

export default GifList;
