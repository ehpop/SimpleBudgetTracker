import React, {useEffect, useState} from 'react';
import {Pie} from 'react-chartjs-2';

import "../styles/PieChart.css"
import {IPayment} from "./Payment";

interface props {
    payments: Array<IPayment>;
}

interface ICategorySums {
    [category: string]: number;
}

function categoriseData(payments: Array<IPayment>): ICategorySums {
    return payments.reduce<ICategorySums>((accumulator, item) => {
        const {category, amount} = item;
        accumulator[category] = (accumulator[category] || 0) + amount;
        return accumulator;
    }, {});
}

function PieChart({payments}: props) {
    const [chartData, setChartData] = useState<any>({
        labels: payments.map((p) => p.date),
        datasets: [{
            label: 'money spent',
            data: payments.map((p) => p.amount)
        }]
    });

    useEffect(() => {
        const categorisedData = categoriseData(payments);
        setChartData({
            labels: Object.keys(categorisedData),
            datasets: [{
                data: Object.values(categorisedData)
            }]
        })
    }, [payments])

    return (
        <div className="charts-div">
            {
                chartData && <Pie data={chartData}></Pie>
            }
        </div>
    );
}

export default PieChart;