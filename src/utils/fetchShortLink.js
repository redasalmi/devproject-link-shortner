const fetchShortLink = async (long_url) => {
  const { REACT_APP_API_URL, REACT_APP_ACCES_TOKEN } = process.env;
  const url = `${REACT_APP_API_URL}/shorten`;

  const body = {
    long_url,
  };

  const headers = {
    Authorization: `Bearer ${REACT_APP_ACCES_TOKEN}`,
    'Content-Type': 'application/json',
  };

  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers,
  });

  const { link } = await res.json();

  return link;
};

export default fetchShortLink;
