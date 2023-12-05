import {IPayment} from "./Payment";
import BarChart from "./BarChart";
import {useEffect, useState} from "react";
import axios from "axios";

import "../styles/Charts.css"
import PieChart from "./PieChart";

function Charts() {
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

    function charts() {
        return (
            <div className="charts-div">
                <div className="bar-charts">
                    <h2 className="chart-category">Rate of spending</h2>
                    <div className="vertical"/>
                    <BarChart payments={payments} typeOfPayment="expense"/>
                    <div className="vertical"/>
                    <BarChart payments={payments} typeOfPayment="income"/>
                </div>
                <hr/>
                <div className="pie-charts">
                    <h2 className="chart-category">Categories of spending</h2>
                    <div className="vertical"/>
                    <PieChart payments={payments} typeOfPayment="expense"/>
                    <div className="vertical"/>
                    <PieChart payments={payments} typeOfPayment="income"/>
                </div>
            </div>);
    }

    return (
        <div className="main-charts-div">
            <h1>Charts</h1>
            {
                payments.length == 0
                    ? <h1>No payments added yet</h1>
                    : charts()
            }
        </div>
    );
}

export default Charts;