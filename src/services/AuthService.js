import axios from "axios";

export class AuthService {
  static baseUrl = process.env.REACT_APP_API_URL + "/auth";

  static login(data) {
    return axios.post(this.baseUrl + "/login", data, { withCredentials: true });
  }

  static refreshToken() {
    return axios.post(this.baseUrl + "/refresh-token", {}, { withCredentials: true });
  }
}