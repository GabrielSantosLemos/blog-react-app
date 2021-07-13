import axios from '../utils/axios';

class AuthService {
    signIn = (email, password) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/login', {email, password})
            .then(response => {
                if (response.data.user) {
                    this.setUser(response.data.user);
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

    setUser = (user) => {
        localStorage.setItem('USER', JSON.stringify(user));
    }

    getUser = () => {
        const user = localStorage.getItem('USER');
        return user;
    }

    isAuthenticated = () => !!this.getUser();
    
}

const authService = new AuthService();

export default authService;