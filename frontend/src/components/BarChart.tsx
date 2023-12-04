import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import {CategoryScale, LinearScale} from "chart.js";
import "../styles/BarChart.css"
import {IPayment} from "./Payment";
import {getDateFromDateTimeString} from "../utils/DateTimeUtils";

ChartJS.register(CategoryScale, LinearScale);

interface props {
    payments: Array<IPayment>;
}

function BarChart({payments}: props) {
    const [chartData, setChartData] = useState<any>({
        labels: payments.map((p) => p.date),
        datasets: [{
            label: 'money spent',
            data: payments.map((p) => p.amount)
        }]
    });

    useEffect(() => {
        console.log(chartData);
        setChartData({
            labels: payments.map((p) => getDateFromDateTimeString(p.date)),
            datasets: [{
                label: 'money spent',
                data: payments.map((p) => p.amount)
            }]
        })
    }, [payments])

    return (
        <div className="charts-div">
            {
                chartData && <Bar data={chartData}></Bar>
            }
        </div>
    );
}

export default BarChart;