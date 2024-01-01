import {FlatList, View} from "react-native";
import Payment from "../components/Payment/Payment";
import {Link} from "expo-router";

const examplePayment = {
    name: 'Example Payment Name',
    amount: 100,
    date: new Date(),
    description: 'This is an example payment',
    category: 'Example',
    type: 'expense'
};

const Payments = () => {
    const payments = [
        examplePayment,
        examplePayment,
        examplePayment,
        examplePayment,
        examplePayment,
        examplePayment,
        examplePayment,
        examplePayment
    ];

    return (
        <View style={
            {
                width: '30%',
                alignContent: 'center',
                alignSelf: 'center'
            }
        }>
            <Link href="/pages/NewPayment" style={
                {
                    margin: 10,
                    padding: 10,
                    backgroundColor: 'lightblue',
                    borderRadius: 10,
                    borderColor: 'black',
                    borderWidth: 1,
                    textAlign: 'center'
                }
            }>
                Add new payment
            </Link>
            <FlatList data={payments}
                      renderItem={(element) => <Payment id={element.index + 1} payment={element.item}/>}/>
        </View>

    );
}

export default Payments