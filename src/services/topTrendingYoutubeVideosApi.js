class TopTrendingYoutubeVideosApi {
    static baseUrl = '/topYoutubeVideosToday.json'; // Path to the static JSON file
  
    // Fetch top trending YouTube videos
    static async getTopVideos() {
      try {
        const response = await fetch(this.baseUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch top trending YouTube videos');
        }
        const data = await response.json();
        return data.topYoutubeVideos;
      } catch (error) {
        console.error('Error fetching top trending YouTube videos:', error.message);
        throw error;
      }
    }
  }
  
  export default TopTrendingYoutubeVideosApi;
  