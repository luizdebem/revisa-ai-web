import axios from "axios";

export class UserService {
  static baseUrl = process.env.REACT_APP_API_URL + "/users";

  static signup(data) {
    return axios.post(this.baseUrl, data);
  }

  static get user() {
    if (!localStorage.getItem("user")) return null;
    return JSON.parse(localStorage.getItem("user"));
  }
}