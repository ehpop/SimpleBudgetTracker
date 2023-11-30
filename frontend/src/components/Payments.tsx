import {Accordion, Stack} from "react-bootstrap";
import Payment, {IPayment} from "./Payment";
import Button from "react-bootstrap/Button";
import axios from "axios";

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
    }, {
        "id": 55,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 56,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 57,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 58,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 59,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 60,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 61,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 62,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 63,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 64,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 65,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 66,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 67,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 68,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 69,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 70,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 71,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 72,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 73,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 74,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 75,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 1000.0,
        "date": "2021-01-01T00:00Z",
        "userId": "1",
        "category": "Living expenses"
    }, {
        "id": 52,
        "name": "Rent",
        "description": "Monthly rent payment.",
        "amount": 2000.0,
        "date": "2023-01-01T21:37Z",
        "userId": "1",
        "category": "Living expenses"
    }]

    getData();

    return (
        <Accordion>
            {data.map((payment, index) => {
                return <PaymentAcordBody key={index} id={index + 1} name={payment.name} date={payment.date}
                                category={payment.category} description={payment.description}
                                userId={payment.userId} amount={payment.amount}/>
            })}
        </Accordion>
    );
}

const PaymentAcordBody = (props: IPayment) => {
    return (
        <Accordion.Item eventKey={props.id.toString()}>
            <Accordion.Header>{`${props.id}. ${props.name}`}</Accordion.Header>
            <Accordion.Body>
                <Stack gap={1}>
                    <Payment {...props}/>
                </Stack>
                <Stack direction="horizontal">
                    <Button variant="primary">Edit</Button>
                    <Button variant="danger">Delete</Button>
                </Stack>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default Payments;