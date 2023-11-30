import "../styles/Payment.css"
import {Form, InputGroup} from "react-bootstrap";
import {useState} from "react";

export interface IPayment {
    id: number;
    name: string;
    date: string;
    category: string;
    description: string;
    userId: string;
    amount: number;
}

function Payment(props: IPayment) {
    const [isDisabled, setIsDisabled] = useState(true);

    return (
        <>
            <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon3">
                    Category
                </InputGroup.Text>
                <Form.Control id={props.id.toString()} aria-describedby="basic-addon3"
                              placeholder={props.category.toString()} disabled={isDisabled}/>
            </InputGroup>

            <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon3">
                    Date
                </InputGroup.Text>
                <Form.Control id={props.id.toString()} aria-describedby="basic-addon3"
                              placeholder={props.date.toString()} disabled={isDisabled}/>
            </InputGroup>

            <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon3">
                    Amount
                </InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" disabled={isDisabled}
                              placeholder={Math.abs(props.amount).toString()}/>
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
                <Form.Control as="textarea" aria-label="With textarea" placeholder={props.description.toString()}
                              disabled={isDisabled}/>
            </InputGroup>


        </>
    );
}

export default Payment;