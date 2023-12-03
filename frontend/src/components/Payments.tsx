import {Accordion, Stack} from "react-bootstrap";
import Payment, {IPayment} from "./Payment";
import Button from "react-bootstrap/Button";
import axios from "axios";

import "../styles/Payments.css"
import {useEffect, useState} from "react";

function Payments() {
    const [payments, setPayments] = useState<Array<IPayment>>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/payments')
            .then(function (response) {
                console.log(response);
                setPayments(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);

    return (
        <Accordion>
            {payments.length == 0
                ? <h1>No payments</h1>
                : payments.map((payment, index) => {
                    return <PaymentAcordBody id={index + 1} payment={payment}/>
                })
            }
        </Accordion>
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