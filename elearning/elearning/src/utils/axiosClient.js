import Aixos from 'axios';

const axiosClient = Aixos.create({
    baseURL: "http://elearning0706.cybersoft.edu.vn/api/",
});

export const setToken = (token) => {
    axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`
}

axiosClient.interceptors.request.use((config) => {
    const userLogin =
        localStorage.getItem("userLogin")
        && JSON.parse(localStorage.getItem("userLogin"))

    if (userLogin) {
        config.headers.Authorization = `Bearer ${userLogin.accessToken}`;
        userLogin    }
    return config;

})


export default axiosClient;
