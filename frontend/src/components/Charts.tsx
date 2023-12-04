import {IPayment} from "./Payment";
import BarChart from "./BarChart";
import {useEffect, useState} from "react";
import axios from "axios";
import {getDateFromDateTimeString} from "../utils/DateTimeUtils";

import "../styles/Charts.css"
import PieChart from "./PieChart";

interface IChartsProps {
    payments: Array<IPayment> | undefined;
}

export const Data = [
    {
        id: 1,
        year: 2016,
        userGain: 80000,
        userLost: 823
    },
    {
        id: 2,
        year: 2017,
        userGain: 45677,
        userLost: 345
    },
    {
        id: 3,
        year: 2018,
        userGain: 78888,
        userLost: 555
    },
    {
        id: 4,
        year: 2019,
        userGain: 90000,
        userLost: 4555
    },
    {
        id: 5,
        year: 2020,
        userGain: 4300,
        userLost: 234
    }
];

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