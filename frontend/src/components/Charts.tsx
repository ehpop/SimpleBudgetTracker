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

    return (
        <div className="main-charts-div">
            <h1>Charts</h1>
            {
                payments.length == 0
                    ? <h1>No payments added yet</h1>
                    : <div className="charts-div">
                        <BarChart payments={payments}/>
                        <hr/>
                        <PieChart payments={payments}/>
                    </div>
            }
        </div>
    );
}

export default Charts;