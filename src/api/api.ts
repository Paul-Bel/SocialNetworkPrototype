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
            .then(response => response.data)
    },

    upDateUser(currentPage: number, totalPageSize: number) {
        return instance.get(`${URL}users?page=${currentPage}
        &count=${totalPageSize}`)
            .then(response => response.data)
    }
}


// axios.get<UseresType>
// (`https://social-network.samuraijs.com/api/1.0/users?page=
//         ${this.props.currentPage+100}
//         &count=${this.props.users.totalPageSize}`, {})