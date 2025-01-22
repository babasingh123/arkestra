class TopReelsApi {
    static baseUrl = '/instagramReels.json'; // Update this path to your JSON file
  
    // Fetch all reels
    static async getReels() {
      try {
        const response = await fetch(this.baseUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch reels');
        }
        const data = await response.json();
        return data.reels;
      } catch (error) {
        console.error('Error fetching reels:', error.message);
        throw error;
      }
    }
  
    // Fetch reels for a specific performer
    static async getReelsByPerformer(tag) {
      try {
        const response = await fetch(this.baseUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch reels');
        }
        const data = await response.json();
        return data.reels.find((performer) => performer.tag === tag)?.reels || [];
      } catch (error) {
        console.error('Error fetching reels by performer:', error.message);
        throw error;
      }
    }
  }
  
  export default TopReelsApi;
  