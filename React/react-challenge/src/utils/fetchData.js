async function fetchData(url, token) {
  try {
    console.log('fetchData', url, token);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Fetch error: ${error.message}`);
  }
}

module.exports = fetchData;
