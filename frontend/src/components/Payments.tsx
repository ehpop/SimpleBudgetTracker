import {Accordion, Stack} from "react-bootstrap";
import Payment, {IPayment} from "./Payment";
import axios from "axios";

import "../styles/Payments.css"
import {createContext, useEffect, useState} from "react";

export const PaymentsContext = createContext<any>([]);

function Payments() {
    const [payments, setPayments] = useState<Array<IPayment>>([]);


    useEffect(() => {
        axios.get('http://localhost:8080/payments/user/1')
            .then(function (response) {
                setPayments(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);

    useEffect(() => {
        setPayments(payments)
    }, [payments]);

    return (
        <PaymentsContext.Provider value={{payments, setPayments}}>
            <Accordion>
                {payments.length == 0
                    ? <h1>No payments</h1>
                    : payments.map((payment, index) => {
                        return <PaymentAcordBody id={index + 1} key={index+1} payment={payment}/>
                    })
                }
            </Accordion>
        </PaymentsContext.Provider>
    );
}

interface IPaymentAcordBodyProps {
    id: number;
    payment: IPayment;
}

const PaymentAcordBody = ({id, payment}: IPaymentAcordBodyProps) => {
    return (
        <Accordion.Item eventKey={payment.id.toString()}>
            <Accordion.Header>{`${id}. ${payment.name}`}</Accordion.Header>
            <Accordion.Body>
                <Stack gap={1}>
                    <Payment payment={payment} isEditable={true}/>
                </Stack>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default Payments;