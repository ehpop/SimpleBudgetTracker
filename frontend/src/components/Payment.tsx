import "../styles/Payment.css"
import {Col, Form, InputGroup, Row, Stack} from "react-bootstrap";
import {useContext, useState} from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {getDateFromDateTimeString, getDateTimeStringFromDateAndTime} from "../utils/DateTimeUtils";
import {PaymentsContext} from "./Payments";


export interface IPayment {
    id: number;
    name: string;
    date: string;
    category: string;
    description: string;
    type: string;
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
    const {payments, setPayments} = useContext(PaymentsContext);

    let [formData, setFormData] = useState<IPayment>({...payment});

    function onSaveWhenEditable() {
        const editedPayment = {
            id: payment.id,
            name: formData.name,
            description: payment.description,
            amount: formData.amount,
            date: getDateTimeStringFromDateAndTime(date, new Date().toLocaleTimeString()),
            type: formData.type.toLowerCase(),
            userId: payment.userId,
            category: formData.category
        }
        console.log();
        axios.put('http://localhost:8080/payments/' + payment.id,
            editedPayment
        ).then(function (response) {
            //TODO: create pop up with confirmation
            setIsDisabled(true);
            setIsEditButtonDisabled(false);
            setIsSaveButtonDisabled(true);
            setPayments([...payments.filter((p: IPayment) => p.id !== payment.id), editedPayment]);
        }).catch(function (error) {
            console.log(editedPayment)
            //TODO: create pop up with error
            console.log(error);
        });
    }

    function onSaveWhenNotEditable() {
        const newPayment = {
            name: formData.name,
            description: payment.description,
            amount: formData.amount,
            date: getDateTimeStringFromDateAndTime(date, new Date().toLocaleTimeString()),
            type: formData.type.toLowerCase(),
            userId: payment.userId,
            category: formData.category
        }
        console.log(newPayment);
        axios.post('http://localhost:8080/payments', newPayment)
            .then(function (response) {
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
                setPayments([...payments.filter((p: IPayment) => p.id !== payment.id)]);
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
                                value={date}
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
                            <Form.Select
                                aria-label="Default select example"
                                disabled={isDisabled}
                                onChange={(e) => {
                                    setFormData({...formData, type: e.target.value.toLowerCase()})
                                }}
                                defaultValue={payment?.type.toLowerCase() === 'expense' ? 'Expense' : 'Income'}
                            >
                                <option value="Expense">
                                    Expense
                                </option>
                                <option value="Income">
                                    Income
                                </option>
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
                    {
                        isEditable && <Button variant="danger" className="button" onClick={onDelete}>Delete</Button>
                    }

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