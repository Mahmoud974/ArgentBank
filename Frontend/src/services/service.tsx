// services/userAPI.ts

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api/v1';

export const updateProfile = async (token: string, firstName: string, lastName: string) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/user/profile`, {
            firstName,
            lastName
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data; // Supposons que votre API renvoie une confirmation de réussite ou les données mises à jour du profil
    } catch (error) {
        throw error;
    }
};

export const handleSignIn = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/user/login`, {
            email,
            password
        });
        return response.data; 
    } catch (error) {
        throw error; 
    }
};
