import axios from "axios";

export default axios.create({
 baseURL: "http://localhost:8080/api",
 // baseURL: "http://75.119.135.42:8084/api",
  headers: {
    "Content-type": "application/json"
  }
});
