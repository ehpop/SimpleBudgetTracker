import React from 'react';
import {Formik, Field, Form, ErrorMessage, useField} from 'formik';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import * as yup from 'yup';
import DatePicker from "react-native-datepicker";
import {Picker} from "react-native-web";
import PickerItem from "react-native-web/src/exports/Picker/PickerItem";

const initialPayment = {
    name: '',
    amount: '',
    date: '',
    description: '',
    category: '',
    type: 'expense',
};

const paymentSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    amount: yup.number().required('Amount is required').positive('Amount must be positive'),
    date: yup.date().required('Date is required'),
    description: yup.string().required('Description is required'),
    category: yup.string().required('Category is required'),
    type: yup.string().required('Type is required'),
});

const PaymentForm = () => (
    <Formik
        initialValues={{ name: '', amount: '', date: new Date(), description: '', category: '', type: 'expense' }}
        onSubmit={values => console.log(values)}
    >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={handleChange('amount')}
                    onBlur={handleBlur('amount')}
                    value={values.amount}
                    placeholder="Amount"
                    keyboardType="numeric"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={handleChange('description')}
                    onBlur={handleBlur('description')}
                    value={values.description}
                    placeholder="Description"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={handleChange('category')}
                    onBlur={handleBlur('category')}
                    value={values.category}
                    placeholder="Category"
                />
                <Button onPress={handleSubmit} title="Submit" />
            </View>
        )}
    </Formik>
);

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
});

export default PaymentForm;
