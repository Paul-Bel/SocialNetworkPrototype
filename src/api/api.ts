import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': "3c089002-10aa-48c7-80c6-fa863be7bb86"},
})

const URL = 'https://social-network.samuraijs.com/api/1.0/'

export const UserAPI = {
    getUsers(currentPage: number, totalPageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${totalPageSize}`)
            .then(response => {
                return response.data
            })
    },

    upDateUser(currentPage: number, totalPageSize: number) {
        return instance.get(`${URL}users?page=${currentPage}
        &count=${totalPageSize}`)
            .then(response => response.data)
    },
    follow (id: number){
        return instance.post(`${URL}follow/${id}`)
            .then(response => response.data.resultCode)
    },
    unFollow(id: number){
        return instance.delete(`${URL}follow/${id}`)
            .then(response => response.data.resultCode)
    },
    getProfile(id: number){
        return instance.get(`${URL}profile/${id}`)
    }
}
export const authMe = {
    me (){
        return instance.get(`${URL}auth/me`,)
            .then(response => response.data)
    }
}



