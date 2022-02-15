import {AppStateType} from "./rudux_Store";
import {UseresType} from "./user_reducer";

export const getUsers = (state: AppStateType): UseresType => state.users
export const getCurrentPage = (state: AppStateType): number => state.users.currentPage
