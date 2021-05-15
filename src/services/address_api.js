export class API_SERVICE_ADDRESS {
  static async getAddressList() {
    const url = `https://fakerapi.it/api/v1/addresses?_quantity=5`;

    try {
      const response = await fetch(url);
      const result = await response.json();

      return result;
    } catch (err) {
      console.log(err);
    }
  }
}

export default API_SERVICE_ADDRESS;
