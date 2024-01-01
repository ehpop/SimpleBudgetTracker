import { StyleSheet } from 'react-native';

export const formStyles = StyleSheet.create({
    container: {
        padding: 16,
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    error: {
        color: 'red',
        fontSize: 12,
    },
    button: {
        marginTop: 16,
    },
});
