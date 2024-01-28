import ApiService from "./ApiService"
import JwtService from "./JwtService"

type FormDataLogin = {
    email: string,
    password: string
}

type FormDataRegister = {
    firstName: string
    lastName: string,
    mobile: string,
    email: string,
    password: string,
    address: string,
    role?: string
}


class AuthService {

    public static async login(formData: FormDataLogin) {

        try {
            const res = await ApiService.post("auth/login", formData)
            const token = res.data.data
            const authToken = JSON.stringify(token)
            JwtService.saveToken(authToken)
            return res.data
        } catch (error) {
            return error
        }

    }

    public static async register(formData: FormDataRegister) {
        const res = await ApiService.post("auth/register", formData)
        return res.data
    }


    public static logout() {
        JwtService.destroyToken()
        return
    }

    public static isAuthenticated() {
        const getToken = JwtService.getToken()
        if (getToken) {
            const parsedToken = JSON.parse(getToken)
            const token = parsedToken.access_token
            const res = token ? true : false
            return res
        } else {
            return false
        }
    }

    public static getUser() {
        const userData = JwtService.getToken()
        if (userData) {
            const parsedUser = JSON.parse(userData)
            const user = parsedUser.user
            return user
        } else {
            return
        }

    }


}


export default AuthService