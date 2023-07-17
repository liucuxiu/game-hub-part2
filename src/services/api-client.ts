import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e1103af34bc94fa1b5c6d04f1b39fec6",
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint)
      .then(res => res.data);
  }

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data)
      .then(res => res.data);
  }
}

export default ApiClient;