import {Accordion, Stack} from "react-bootstrap";
import Payment, {IPayment} from "./Payment";
import Button from "react-bootstrap/Button";
import axios from "axios";

import "../styles/Payments.css"

const getData = async () => {
    axios.get('http://localhost:8080/payments')
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
}

function Payments() {
    const data: Array<IPayment> = [{
        "id": 1,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 2,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 53,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 54,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }];

    return (
        <Accordion>
            {data.map((payment, index) => {
                return <PaymentAcordBody key={index} id={index + 1} payment={payment}/>
            })}
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