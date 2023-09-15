import axios from "services/axiosConfig";

export const getTicketList = (token: string | null, page: number, size: number) => {
    return axios.get(`/list?page=${page}&size=${size}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}