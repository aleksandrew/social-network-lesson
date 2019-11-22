import * as axios from "axios/index";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "dc0a73d6-165a-4b65-a95a-d314715fb16a"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  followUsers(userId = 2) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  },
  unfollowUsers(userId = 2) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  },
  viewProfile(userId = 2) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response
      })
  },
  me() {
    return instance.get(`auth/me`)
      .then(response => {
        return response
      })
  }
};
