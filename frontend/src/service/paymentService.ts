import {IPayment} from "../components/Payment";
import {backendApi} from "./backendApi";
import {bearerAuth} from "./bearerAuth";

const paymentApi = backendApi('/payments');

export const paymentsApi = {
    getPayments: async (token: any) => {
        console.log('Fetching payments');
        const response = await paymentApi.get<IPayment[]>('', {
            headers: {
                'Authorization': bearerAuth(token)
            }
        });
        return response.data;
    },

    getPaymentsByUserId: async (userId:string, token: any) => {
        console.log('Fetching payments');
        const response = await paymentApi.get<IPayment[]>(`/user/${userId}`, {
            headers: {
                'Authorization': bearerAuth(token)
            }
        });
        return response?.data || [];
    },

    getPayment: async (id: string, token: any) => {
        console.log('Fetching payment with id: ' + id);
        const response = await paymentApi.get<IPayment>(`/${id}`, {
            headers: {
                'Authorization': bearerAuth(token)
            }
        });
        return response.data;
    },

    createPayment: async (payment: IPayment, token: any) => {
        console.log('Creating payment');
        const response = await paymentApi.post<IPayment>('', payment, {
            headers: {
                'Authorization': bearerAuth(token)
            }
        });
        return response.data;
    },

    updatePayment: async (payment: IPayment, token: any) => {
        console.log('Updating payment with id: ' + payment.id);
        const response = await paymentApi.put<IPayment>(`/${payment.id}`, payment, {
            headers: {
                'Authorization': bearerAuth(token)
            }
        });
        return response.data;
    },

    deletePayment: async (id: string, token: any) => {
        console.log('Deleting payment with id: ' + id);
        const response = await paymentApi.delete<IPayment>(`/${id}`, {
            headers: {
                'Authorization': bearerAuth(token)
            }
        });
        return response.data;
    }
}