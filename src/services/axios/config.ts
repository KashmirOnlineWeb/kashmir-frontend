import axios from "axios";

const Api = axios.create({
    // baseURL: "/server/api/v1",
    // baseURL: "http://tcwo0o4.52.66.151.122.sslip.io/api/v1",
    // baseURL: "https://itsupport.co.in/api/v1",
    // baseURL: "http://localhost:4000/api/v1"
    //baseURL: "https://itsupport.co.in/api/v1",
    baseURL: "http://kashmir-backend.test/api",

});

export default Api;