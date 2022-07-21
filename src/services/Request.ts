const BASEURL = 'https://rickandmortyapi.com/api/character/?'

export class Request {
  private baseRequest = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data
    } catch (e) {
      console.error(e)
      return
    }
  };

  getCharacters = async (query?: string) => {
    const params = new URLSearchParams(query ? { name: query } : {})
    return await this.baseRequest(BASEURL + params);
  };

}
export default Request;