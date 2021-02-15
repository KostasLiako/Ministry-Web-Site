import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:9999/api/auth/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'signin', {
                username: user.username,
                password: user.password
            })
            .then(response => {

                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'signup', {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            afm: user.afm,
            email: user.email,
            employmentStatus: user.employmentStatus,
            phoneNumber: user.phoneNumber,
            password: user.password
        });
    }

    update(user) {
        console.log("User before sending post request!");
        console.log(user);
        return axios.post(API_URL + 'updateUser',
            {
                id: user.id,
                phoneNumber: user.phoneNumber,
                email: user.email
            },
            {
                headers: authHeader()
            }
        );
    }
}

export default new AuthService();