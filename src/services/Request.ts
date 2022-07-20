const BASEURL = 'https://rickandmortyapi.com/api/'

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

  getAllcharacters = async () => {
    return await this.baseRequest(BASEURL + 'character');
  };

}
export default Request;