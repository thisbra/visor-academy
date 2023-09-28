async function postRequest(url: string, body: any): Promise<Response> {
  try {
    const address = `http://localhost:3005${url}`
    console.log(body)
    const response = await fetch(address, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response;
  } catch (error : any) {
    throw new Error(`Error: ${error.message}`);
  }
}

export default postRequest;

