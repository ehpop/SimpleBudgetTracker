import {Text, View} from "react-native";

const Payment = ({id, payment}) => {
    return (
        <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightblue',
                padding: 10,
                margin: 10,
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 1
            }
        }>
            <Text>{`${id}. Payment "${payment?.name}"`}</Text>
            <View>
                <Text>{`Amount: ${payment?.amount}`}</Text>
                <Text>{`Date: ${payment?.date.toISOString().split("T")[0]}`}</Text>
                <Text>{`Description: ${payment?.description}`}</Text>
                <Text>{`Category: ${payment?.category}`}</Text>
            </View>
        </View>
    );
}

export default Payment;