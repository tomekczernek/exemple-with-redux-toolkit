type ApiMethod = "GET" | "POST";

const api = async (url: string, method: ApiMethod = "GET", param?: any) => {
  const mainUrl = "https://api/test/";

  await fetch(`${mainUrl}${url}`, {
    method,
    headers: {
      "content-type": "application/json",
    },
    body: param || {},
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.error(error));
};

export default api;
