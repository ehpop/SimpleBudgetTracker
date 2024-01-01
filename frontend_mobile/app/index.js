import {Button, SafeAreaView} from 'react-native';
import {Link, router, Stack} from "expo-router";

const App = () => {

    return (
        <SafeAreaView style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        }>
            <Stack.Screen options={
                {
                    title: 'Simple Budget Tracker',
                    headerStyle: {
                        backgroundColor: 'lightblue'
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <Button onPress={() => {
                            router.push('/pages/Payments');
                        }} title="Menu"/>
                    ),
                    headerRight: () => (
                        <Button onPress={() => {}} title="Log in"/>
                    )
                }
            }/>
            <Link href="/pages/Payments" style={
                {
                    margin: 10,
                    padding: 10,
                    backgroundColor: 'lightblue',
                    borderRadius: 10,
                    borderColor: 'black',
                    borderWidth: 1,
                    width: '50%',
                }
            }>See Payments</Link>
            <Link href="/pages/NewPayment" style={
                {
                    margin: 10,
                    padding: 10,
                    backgroundColor: 'lightblue',
                    borderRadius: 10,
                    borderColor: 'black',
                    borderWidth: 1,
                    width: '50%',
                }
            }>Add New Payment</Link>
            <Link href="/pages/ApiTest" style={
                {
                    margin: 10,
                    padding: 10,
                    backgroundColor: 'lightblue',
                    borderRadius: 10,
                    borderColor: 'black',
                    borderWidth: 1,
                    width: '50%',
                }
            }>Test Api</Link>
        </SafeAreaView>
    );
}

export default App;