import axios from "axios";

export class QuizService {
  static baseUrl = process.env.REACT_APP_API_URL + "/quiz";

  static create(data) {
    return axios.post(this.baseUrl, data, { headers: { "x-auth-token": localStorage.getItem("accessToken") } });
  }

  static getByTeacherId(teacherId) {
    return axios.get(this.baseUrl + `/teacher/${teacherId}`);
  }

  static upload(formData) {
    return axios.post(this.baseUrl + '/upload', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
  }
}