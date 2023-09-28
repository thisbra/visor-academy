async function getRequest(url: string): Promise<Response> {
  try {
    const address = `http://localhost:3005${url}`
    const response = await fetch(address, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response;
  } catch (error : any) {
    throw new Error(`Error: ${error.message}`);
  }
}

export default getRequest;