import axios from "services/axiosConfig";

export const getUsername = (token: string | null) => {
    return axios.get(`/username`, {
        headers: {
            Authorization: `Bearer ${token}`}
    })
}