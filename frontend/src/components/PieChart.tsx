import React, {useEffect, useState} from 'react';
import {Pie} from 'react-chartjs-2';

import "../styles/PieChart.css"
import {IPayment} from "./Payment";

interface props {
    payments: Array<IPayment>;
    typeOfPayment: string;
}

interface ICategorySums {
    [category: string]: number;
}

function categoriseData(payments: Array<IPayment>, type: string): ICategorySums {
    return payments
        .filter((p) => p.type === type)
        .reduce<ICategorySums>((accumulator, item) => {
            const {category, amount} = item;
            accumulator[category] = (accumulator[category] || 0) + amount;
            return accumulator;
        }, {});
}

function PieChart({payments, typeOfPayment}: props) {
    const [chartData, setChartData] = useState<any>({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        const categorisedData = categoriseData(payments, typeOfPayment);
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