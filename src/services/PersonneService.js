import http from "../http-common";

class PersonneService {
  getAll() {
    return http.get("/personnes");
  }

  get(id) {
    return http.get(`/personnes/${id}`);
  }

  create(data) {
    return http.post("/personnes", data);
  }

  update(id, data) {
    return http.put(`/personnes/${id}`, data);
  }

  delete(id) {
    return http.delete(`/personnes/${id}`);
  }

  deleteAll() {
    return http.delete(`/personnes`);
  }

  findByTitle(title) {
    return http.get(`/personnes?title=${title}`);
  }
}

export default new PersonneService();
