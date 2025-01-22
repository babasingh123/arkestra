class ArkestraLanguageApi {
    static baseUrl = '/topYoutubeVideosToday.json'; // Path to the static JSON file
  
    // Fetch videos by language
    static async getVideosByLanguage(language) {
      try {
        const response = await fetch(this.baseUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        return data.topYoutubeVideos.filter(video => video.language === language);
      } catch (error) {
        console.error('Error fetching videos by language:', error.message);
        throw error;
      }
    }
  
    // Fetch all languages (useful for populating dropdowns or cards)
    static async getAllLanguages() {
      try {
        const response = await fetch(this.baseUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch languages');
        }
        const data = await response.json();
        const languages = [...new Set(data.topYoutubeVideos.map(video => video.language))];
        return languages;
      } catch (error) {
        console.error('Error fetching languages:', error.message);
        throw error;
      }
    }
  }
  
  export default ArkestraLanguageApi;
  