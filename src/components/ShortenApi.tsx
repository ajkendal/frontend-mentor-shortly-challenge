import ApiCall from './ApiCall';
import '../styles/shortenapi.scss';
import { useEffect, useState } from 'react';
const ShortenApi = () => {
  const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);

  const handleShorten = async (url: string) => {
    try {
      const result = await ApiCall(url);
      setShortenedUrl(result);
      console.log('Shortened URL:', result);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  useEffect(() => {
    handleShorten('https://google.com/');
  }, []);

  return (
    <div className='shorten-api'>
      {shortenedUrl ? shortenedUrl : 'Shortening...'}
    </div>
  );
};

export default ShortenApi;
