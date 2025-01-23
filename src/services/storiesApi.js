class StoriesApi {
    static baseUrl = '/arkestraStories.json'; // Replace with the actual path to your JSON file
  
    static async getStories() {
      try {
        const response = await fetch(this.baseUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch stories');
        }
        const data = await response.json();
        return data.stories;
      } catch (error) {
        console.error('Error fetching stories:', error.message);
        throw error;
      }
    }
  }
  
  export default StoriesApi;
  