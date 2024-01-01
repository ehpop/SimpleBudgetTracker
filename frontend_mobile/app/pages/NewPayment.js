import {View} from "react-native";
import PaymentForm from "../components/Payment/PaymentForm";

const NewPayment = () => {
    return (
        <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffedd3'
            }
        }>
            <PaymentForm/>
        </View>
    );
}

export default NewPayment;