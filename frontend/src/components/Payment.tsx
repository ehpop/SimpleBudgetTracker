import "../styles/Payment.css"
import {Form, InputGroup, Stack} from "react-bootstrap";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

export interface IPayment {
    id: number;
    name: string;
    date: string;
    category: string;
    description: string;
    userId: string;
    amount: number;
}

interface IPaymentProps {
    payment: IPayment;
    isEditable: boolean;
}

function Payment(props: IPaymentProps) {
    const [isDisabled, setIsDisabled] = useState(true);
    const [isEditButtonDisabled, setIsEditButtonDisabled] = useState(false);
    const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);

    let [payment, isEditable] = [props.payment, props.isEditable];

    function onSaveWhenEditable() {
        axios.put('http://localhost:8080/payments/' + payment.id, {
            "id": payment.id,
            "name": payment.name,
            "description": payment.description,
            "amount": payment.amount,
            "date": payment.date,
            "userId": payment.userId,
            "category": payment.category
        }).then(function (response) {
            //TODO: create pop up with confirmation
            setIsDisabled(true);
            setIsEditButtonDisabled(false);
            setIsSaveButtonDisabled(true);
        }).catch(function (error) {
            //TODO: create pop up with error
            console.log(error);
        });
    }

    function onSaveWhenNotEditable() {
        axios.post('http://localhost:8080/payments', {
            "name": payment.name,
            "description": payment.description,
            "amount": payment.amount,
            "date": payment.date,
            "userId": payment.userId,
            "category": payment.category
        }).then(function (response) {
            //TODO: create pop up with confirmation
            console.log(response);
        }).catch(function (error) {
            //TODO: create pop up with error
            console.log(error);
        });
    }

    function onEdit() {
        if (isDisabled) {
            setIsDisabled(false);
            setIsEditButtonDisabled(true);
            setIsSaveButtonDisabled(false);
        }
    }

    function onDelete() {
        axios.delete('http://localhost:8080/payments/' + payment.id)
            .then(function (response) {
                //TODO: create pop up with confirmation
                return response;
            })
            .catch(function (error) {
                //TODO: create pop up with error
                console.log(error);
            });
    }

    return (
        <>
            <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon3">
                    Category
                </InputGroup.Text>
                <Form.Control id={payment.id.toString()} aria-describedby="basic-addon3"
                              placeholder={payment.category.toString()} disabled={isDisabled}/>
            </InputGroup>
            <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon3">
                    Date
                </InputGroup.Text>
                <Form.Control id={payment.id.toString()} aria-describedby="basic-addon3"
                              placeholder={payment.date.toString()} disabled={isDisabled}/>
            </InputGroup>
            <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon3">
                    Amount
                </InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" disabled={isDisabled}
                              placeholder={Math.abs(payment.amount).toString()}/>
                <InputGroup.Text>PLN</InputGroup.Text>
                <InputGroup.Text>.00</InputGroup.Text>

                <InputGroup.Text>Type of payment</InputGroup.Text>
                <Form.Select aria-label="Default select example" disabled={isDisabled}>
                    <option>Income</option>
                    <option>Expense</option>
                </Form.Select>
            </InputGroup>
            <InputGroup className="mb-2">
            </InputGroup>
            <InputGroup className="mb-2">
                <InputGroup.Text>Description</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" placeholder={payment.description.toString()}
                              disabled={isDisabled}/>
            </InputGroup>
            <Stack id="buttons-stack" direction="horizontal" className="centered-stack">
                <Button variant="danger" className="button" onClick={onDelete}>Delete</Button>
                <Button variant="success" className="button" onClick={onSaveWhenNotEditable} disabled={isSaveButtonDisabled}>Save</Button>
            </Stack>


        </>
    );
}

export default Payment;