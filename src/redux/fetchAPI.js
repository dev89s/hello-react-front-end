async function fetchApi(url = 'http://localhost:3000/greetings') {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = response.json();
  console.log(data);
  return data;
}

export default fetchApi;
