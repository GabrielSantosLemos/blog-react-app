import axios from '../utils/axios';

class AuthService {
    signIn = (email, password) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/login', {email, password})
            .then(response => {
                if (response.data.user) {
                    this.setToken('JWT');
                    resolve(response.data.user);
                }
                else {
                    reject(response.data.error);
                }
            })
            .catch(error => {
                reject(error)
            })
        })
    }

    signUp = (fullName, email, password) => {};

    signInwithToken = () => {
        return new Promise((resolve, reject) => {
            axios.post('/api/login/me') // envio o token pelo header
            .then(response => {
                if (response.data.user) {
                    resolve(response.data.user);
                }
                else {
                    reject(response.data.error);
                }
            })
            .catch(error => {
                reject(error)
            })
        })
    }

    sigOut = () => {
        this.removeToken();
    }

    setToken = (token) => localStorage.setItem('accessToken', token);
    getToken = () => localStorage.getItem('accessToken');
    isAuthenticated = () => !!this.getToken();
    removeToken = () => localStorage.removeItem('accessToken');
    
}

const authService = new AuthService();

export default authService;