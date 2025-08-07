import ApiCall from './ApiCall';
import '../styles/shortenapi.scss';

import { useState } from 'react';

const ShortenApi = () => {
  const [currentUrl, setCurrentUrl] = useState<string>('');

  const [shortenedError, setShortenedError] = useState(false);
  type ShortenedItem = {
    original: string;
    shortened: string;
    buttonText: string;
  };
  const [shortenedListObject, setShortenedListObject] = useState<
    ShortenedItem[]
  >([]);

  const isValidUrl = () => {
    try {
      const url = new URL(currentUrl);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (err) {
      return false;
    }
  };

  const handleClick = (event: any) => {
    event.preventDefault();

    if (currentUrl === '' || isValidUrl() === false) {
      setShortenedError(true);
    } else if (isValidUrl()) {
      setShortenedError(false);
      ApiCall(currentUrl)
        .then((response) => {
          setShortenedListObject((prevList) => [
            ...prevList,
            { original: currentUrl, shortened: response, buttonText: 'Copy' },
          ]);
          setCurrentUrl('');
        })
        .catch((error) => {
          console.error('Error shortening URL:', error);
          setShortenedError(true);
        });
    }
  };

  const handleCopy = (event: any, index: number) => {
    event.preventDefault();
    const shortenedElement = document.getElementById(`short+${index}`);

    if (shortenedElement) {
      navigator.clipboard
        .writeText(shortenedElement.textContent || '')
        .then(() => {
          const updatedList = [...shortenedListObject];
          updatedList[index].buttonText = 'Copied!';
          setShortenedListObject(updatedList);
        })
        .catch((error) => {
          console.error('Error copying text:', error);
        });
    }
  };

  return (
    <>
      <div className='shorten-api'>
        <form className='form-container'>
          <div className='input-container'>
            <input
              type='text'
              className={shortenedError ? 'error' : ''}
              value={currentUrl}
              placeholder='Shorten a link here...'
              onChange={(e) => setCurrentUrl(e.target.value.trim())}
              onBlur={(e) => setCurrentUrl(e.target.value.trim())}
            />
            {shortenedError ? <p>Please add a link</p> : null}
          </div>
          <button onClick={handleClick}>Shorten it!</button>
        </form>
      </div>
      <div className='shortened-list-results'>
        {shortenedListObject.map((item, index) => (
          <div className='shortened-list-item' key={index}>
            <p className='original-url'>{item.original}</p>
            <hr />
            <p className='shortened-url' id={`short+` + index}>
              {item.shortened}
            </p>

            <button
              onClick={(e) => handleCopy(e, index)}
              className={`small ${
                item.buttonText === 'Copied!' ? 'copied' : ''
              } `}
            >
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShortenApi;
