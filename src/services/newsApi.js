class NewsApi {
    static baseUrl = '/arkestraNews.json'; // Replace with the actual path to your JSON file
  
    static async getNews() {
      try {
        const response = await fetch(this.baseUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        return data.news;
      } catch (error) {
        console.error('Error fetching news:', error.message);
        throw error;
      }
    }
  }
  
  export default NewsApi;
  