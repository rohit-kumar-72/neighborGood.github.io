import axios from "axios";


const axiosInstance = axios.create({});

export const apiConnector = (method, url, body, header) => {
    return axiosInstance({
        method,
        url,
        data: body ? body : null,
        headers: header ? header : null
    })

}