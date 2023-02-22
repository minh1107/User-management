import { actionType } from "./actionType"

export const setHome = (info) => (
    {
        type: actionType.GET_HOME,
        info
    }
)

export const setInfoUser = (info) => (
    {
        type: actionType.SET_INFO_ADMIN,
        info
    }
)

export const setFlagInfo = (flag) => (
    {
        type: actionType.FLAG_INFO,
        flag
    }
)
