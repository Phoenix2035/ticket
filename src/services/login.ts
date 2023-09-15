import axios from "services/axiosConfig";

export const loginUser = (username: string, password: string) => {
    return axios.post(`/login`, {username, password}, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
}