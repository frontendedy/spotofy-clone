import axios from "axios";

const BASE_URL = "https://qtify-backend-labs.crio.do/"

export const getData = (url) =>{
    return axios.get(`${BASE_URL}${url}`)
}
