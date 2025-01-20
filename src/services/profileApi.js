class ProfileApi {
    static baseUrl = '/topYoutubeVideosToday.json'; // Path to the static JSON file
  
    // Fetch videos by tag
    static async getVideosByTag(tag) {
      try {
        const response = await fetch(this.baseUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        return data.topYoutubeVideos.filter(video => video.tag === tag);
      } catch (error) {
        console.error('Error fetching videos:', error.message);
        throw error;
      }
    }
  }
  
  export default ProfileApi;
  