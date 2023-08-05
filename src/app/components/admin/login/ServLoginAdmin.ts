export default class ServLoginAdmin {
  static setUrl(url: string) {
    return "http://localhost:8081/" + url;
  }

  static sendMethodPost = async (url: string, data: any) => {
    const response = await fetch(ServLoginAdmin.setUrl(url), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.text(); // Utilisez response.text() au lieu de response.json()
    return responseData;
  };
}
