class TopPerformersApi {
  static baseUrl = '/topPerformers.json'; // Path to the static JSON file

  // Fetch top performers
  static async getTopPerformers() {
    try {
      const response = await fetch(this.baseUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch top performers');
      }
      const data = await response.json();
      return data.topPerformers;
    } catch (error) {
      console.error('Error fetching top performers:', error.message);
      throw error;
    }
  }
}

export default TopPerformersApi;
