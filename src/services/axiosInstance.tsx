import axios, { AxiosInstance } from "axios";

class AxiosInstanceService {
  private instance: AxiosInstance;

  constructor() {
    // Create an Axios instance with specified configuration
    this.instance = axios.create({
      baseURL:
        "https://iddaa-frontend-challenge.furkanportakalx.workers.dev/api/SportProgram/", // Your API base URL
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // Example method for making a GET request
  public async fetchData<T>(endpoint: string): Promise<T> {
    try {
      // Make a GET request to the specified endpoint
      const response = await this.instance.get<T>(endpoint);
      // Return the data from the response
      return response.data;
    } catch (error) {
      // Log and throw an error if request fails
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  // Example method for making a POST request
  public async postData<T>(endpoint: string, data: any): Promise<T> {
    try {
      // Make a POST request to the specified endpoint with provided data
      const response = await this.instance.post<T>(endpoint, data);
      // Return the data from the response
      return response.data;
    } catch (error) {
      // Log and throw an error if request fails
      console.error("Error posting data:", error);
      throw error;
    }
  }

  // Add more methods for other HTTP methods as needed (PUT, DELETE, etc.)
}

// Export an instance of the AxiosInstanceService class
export default new AxiosInstanceService();
