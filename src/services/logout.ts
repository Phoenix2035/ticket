import axios from "services/axiosConfig";

export const logoutUser = (token: string | null) => {
    return axios.post(`/logout`, {}, {
        headers: {
            Authorization: `Bearer ${token}`}
    })
}