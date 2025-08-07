async function fetchShortenedUrl(url: string): Promise<string> {
  const apiUrl = 'https://cleanuri.com/api/v1/shorten';
  const response = await fetch(apiUrl, {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' /* @dev First, read about security */,
      'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
      'Access-Control-Max-Age': '2592000', // 30 days
    },
    body: JSON.stringify({ encodeURI: url }),
  });
  if (!response.ok) {
    console.log('Response not ok:', response);
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.result.full_short_link;
}

export default fetchShortenedUrl;
