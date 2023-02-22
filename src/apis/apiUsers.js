import axios from "axios"


export const apiGetUserList = async (pageNumber, quantity) => {
    try {
        const response = await axios.get(`https://randomuser.me/api/?page=${pageNumber}&results=${quantity}`)
        return response.data
    } catch (error) {
        console.log(error)        
    }
}

export const apiGetUser = async () => {
    try {
        const response = await axios.get(`https://randomuser.me/api/`)
        return response.data
    } catch (error) {
        console.log(error)        
    }
}

