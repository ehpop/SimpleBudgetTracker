import "../styles/Payment.css"
import {Col, Form, InputGroup, Row, Stack} from "react-bootstrap";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {
    getDateFromDateTimeString,
    getDateTimeStringFromDate,
    getDateTimeStringFromDateAndTime
} from "../utils/DateTimeUtils";

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
    let [payment, isEditable] = [props.payment, props.isEditable];
    const [date, setDate] = useState(getDateFromDateTimeString(payment.date));
    const [isDisabled, setIsDisabled] = useState(isEditable);
    const [isEditButtonDisabled, setIsEditButtonDisabled] = useState(false);
    const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(isEditable);

    let [formData, setFormData] = useState<IPayment>({...payment});

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
            "name": formData.name,
            "description": formData.description,
            "amount": formData.amount,
            "date": getDateTimeStringFromDate(formData.date),
            "userId": formData.userId,
            "category": formData.category
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
            <Form>
                <Row>
                    <Col>
                        <InputGroup className="mb-2">
                            <InputGroup.Text id="basic-addon3">
                                Name
                            </InputGroup.Text>
                            <Form.Control id={payment.id.toString()}
                                          aria-describedby="basic-addon3"
                                          placeholder={payment.name.toString()}
                                          disabled={isDisabled}
                                          onChange={(e) => {
                                              setFormData({...formData, name: e.target.value});
                                          }}
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mb-2">
                            <InputGroup.Text id="basic-addon3">
                                Category
                            </InputGroup.Text>
                            <Form.Control id={payment.id.toString()}
                                          aria-describedby="basic-addon3"
                                          placeholder={payment.category.toString()}
                                          disabled={isDisabled}
                                          onChange={(e) => {
                                              setFormData({...formData, category: e.target.value});
                                          }}
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mb-2">
                            <InputGroup.Text id="basic-addon3">
                                Date
                            </InputGroup.Text>
                            <Form.Control
                                type="date"
                                id={payment.id.toString()}
                                aria-describedby="basic-addon3"
                                value={date}  // Set the initial value or default date
                                onChange={(e) => {
                                    setDate(e.target.value);
                                    setFormData({...formData, date: e.target.value});
                                }}
                                disabled={isDisabled}
                            />
                        </InputGroup>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <InputGroup className="mb-2">
                            <InputGroup.Text id="basic-addon3">
                                Amount
                            </InputGroup.Text>
                            <Form.Control aria-label="Amount (to the nearest pln)"
                                          disabled={isDisabled}
                                          placeholder={Math.abs(payment.amount).toString()}
                                          type="number"
                                          min="0"
                                          onChange={(e) => {
                                              setFormData({...formData, amount: Number.parseInt(e.target.value)});
                                          }}
                            />
                            <InputGroup.Text>PLN</InputGroup.Text>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>Type of payment</InputGroup.Text>
                            <Form.Select aria-label="Default select example" disabled={isDisabled}>
                                <option>Income</option>
                                <option>Expense</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <InputGroup className="mb-2">
                        <InputGroup.Text>Description</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea"
                                      placeholder={payment.description.toString()}
                                      disabled={isDisabled}/>
                    </InputGroup>
                </Row>
                <Stack id="buttons-stack" direction="horizontal" className="centered-stack">
                    {
                        isEditable && <Button variant="primary" className="button" onClick={onEdit}
                                              disabled={isEditButtonDisabled}>Edit</Button>
                    }
                    <Button variant="danger" className="button" onClick={onDelete}>Delete</Button>
                    <Button variant="success" className="button"
                            onClick={isEditable ? onSaveWhenEditable : onSaveWhenNotEditable}
                            disabled={isSaveButtonDisabled}>Save</Button>
                </Stack>
            </Form>
        </>
    )
        ;
}

export default Payment;