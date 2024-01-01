import {Button, Text, View} from "react-native";
import {paymentsApi} from "../api/paymentApi";
const ApiTest = () => {
    const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI0ZHNVaHZpeUhWVTVjOGJHS0pWaTdWVzlVaXc5d0lKZFBxUVZaZ1M2bDZJIn0.eyJleHAiOjE3MDQxNTA2NTYsImlhdCI6MTcwNDE1MDM1NiwiYXV0aF90aW1lIjoxNzA0MTUwMzU2LCJqdGkiOiIxOWRlYTI5Zi01Njg5LTQ3MzctYWNiMi03YzEwYzVhYzI5NWUiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0Ojg0NDMvcmVhbG1zL2FwcCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiNjc4Mjc3ZC1hOWEwLTQ0MjYtYjI1ZC0zNDBiNzc5MWY4YWEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJmcm9udGVuZC13ZWIiLCJzZXNzaW9uX3N0YXRlIjoiMThlNDA4NWYtZTc5OS00ZGJiLTk0ZDUtMjcxZjg2NTJkZWE4IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLWFwcCJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiIxOGU0MDg1Zi1lNzk5LTRkYmItOTRkNS0yNzFmODY1MmRlYTgiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJUb21hc3ogVGthY3p5ayIsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIiLCJnaXZlbl9uYW1lIjoiVG9tYXN6IiwiZmFtaWx5X25hbWUiOiJUa2FjenlrIn0.qtT3tNtGnDh6Ecg8iiZ2qy8IwIWhQJAa6ZsFp13nqXk_Yp2s6NEBtp7OXvya4y2XVcuT2mc6dCEeD-Rzs5eiOheaQSxlxHYO3bvXpUhQ8BjOCBYdhfmunLzhvKnVkvZkIxHtdy1934wGcRSfhAgpDZvIC232sidGPQdL_F0hG5tWYwk7UU8TXoAI3mf5JpeKpLQZvrDxg-aeWm9AmSTeGEtpLX1AEPAwlS7zplBqNVDWCd-i6zy6jPlA2aYX5RsWE0exT35-XpMm-XuvXYvwvtQ8EZRVIBQqh2fy-u3M01FDek5QDxPYPvj1RHcCR_y6GFDQaYHk7OBBqjwJPyVRCg";
    return (
        <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffedd3'
            }
        }>
            <Text>ApiTest</Text>
            <Button
                title={"Get All Payments"}
                onPress={
                    () => {
                        paymentsApi
                            .getPayments()
                            .then((response) => {
                                console.log(response?.data);
                            });
                    }
                }
            />
            <Button
                title={"Get Payments By User Id"}
                onPress={
                    () => {
                        paymentsApi
                            .getPaymentsByUserId("1", token)
                            .then((response) => {
                                console.log(response?.data);
                            });
                    }
                }
            />
            <Button
                title={"Create Payment"}
                onPress={
                    () => {
                        paymentsApi
                            .createPayment({
                                name: "Test Payment",
                                amount: 100,
                                date: new Date(),
                                description: "Test Description",
                                category: "Test Category",
                                userId: "1"
                            })
                            .then((response) => {
                                console.log(response?.data);
                            });
                    }
                }
            />
        </View>
    )
}

export default ApiTest;