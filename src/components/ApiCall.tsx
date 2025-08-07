async function fetchShortenedUrl(url: string): Promise<string> {
  const apiUrl =
    'https://corsproxy.io/?' + 'https://cleanuri.com/api/v1/shorten';
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    },
    body: new URLSearchParams({
      url: url,
    }),
  });

  if (!response.ok) {
    return 'Error shortening URL';
  }
  const data = await response.json();

  return data.result_url || 'Error shortening URL';
}

export default fetchShortenedUrl;
