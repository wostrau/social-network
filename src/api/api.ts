import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '96e14868-2995-4951-a0b1-5ff5cded4fa9'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId: number) {
        return instance.delete(`unfollow/${userId}`);
    },
    getProfile(userId: number) {
        console.warn('Outdated method in usersAPI. Pls use next time profileAPI');
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status: status});
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {
            email: email,
            password: password,
            rememberMe: rememberMe
        });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};
