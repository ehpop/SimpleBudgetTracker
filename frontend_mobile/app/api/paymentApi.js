import {backendApi} from "./backendApi";
import {bearerAuth} from "./bearerAuth";

const paymentApi = backendApi('payments');

export const paymentsApi = {
    getPayments: async (token) => {
        console.log('Fetching payments');
        const response = await paymentApi.get('', {
            headers: {
                'Authorization': bearerAuth(token)
            }
        });
        return response.data;
    },

    getPaymentsByUserId: async (userId, token) => {
        console.log('Fetching payments');
        const response = await paymentApi.get(`/user/${userId}`, {
            headers: {
                'Authorization': bearerAuth(token)
            }
        });
        return response?.data || [];
    },

    getPayment: async (id, token) => {
        console.log('Fetching payment with id: ' + id);
        const response = await paymentApi.get(`/${id}`, {
            headers: {
                'Authorization': bearerAuth(token)
            }
        });
        return response.data;
    },

    createPayment: async (payment, token) => {
        console.log('Creating payment');
        const response = await paymentApi.post('', payment, {
            headers: {
                'Authorization': bearerAuth(token)
            }
        });
        return response.data;
    },

    updatePayment: async (payment, token) => {
        console.log('Updating payment with id: ' + payment.id);
        const response = await paymentApi.put(`/${payment.id}`, payment, {
            headers: {
                'Authorization': bearerAuth(token)
            }
        });
        return response.data;
    },

    deletePayment: async (id, token) => {
        console.log('Deleting payment with id: ' + id);
        const response = await paymentApi.delete(`/${id}`, {
            headers: {
                'Authorization': bearerAuth(token)
            }
        });
        return response.data;
    }
}