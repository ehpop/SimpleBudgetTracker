import {Button, Text, View} from "react-native";
import {paymentsApi} from "../api/paymentApi";
const ApiTest = () => {
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
                            .getPaymentsByUserId("1")
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