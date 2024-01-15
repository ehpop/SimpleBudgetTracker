import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import {CategoryScale, LinearScale} from "chart.js";
import "../styles/BarChart.css"
import {IPayment} from "./Payment";
import {getDateFromDateTimeString} from "../utils/DateTimeUtils";
import {CHART_COLORS} from "../utils/colors";
import "../styles/PieChart.css"


ChartJS.register(CategoryScale, LinearScale);


interface props {
    payments: Array<IPayment>;
    typeOfPayment: string;
}

function BarChart({payments, typeOfPayment}: props) {
    const [chartData, setChartData] = useState<any>({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        console.log(chartData);
        const filteredPayments = payments.filter((p) => p.type === typeOfPayment);
        setChartData({
            labels: filteredPayments
                .map((p) => getDateFromDateTimeString(p.date)),
            datasets: [{
                label: 'Amount',
                data: filteredPayments.map((p) => p.amount),
                backgroundColor: CHART_COLORS[typeOfPayment]['backgroundColor'],
                borderColor: CHART_COLORS[typeOfPayment]['borderColor'],
            }]
        })
    }, [payments, typeOfPayment, chartData])

    return (
        <div className="charts-div">
            {
                chartData && <Bar data={chartData}></Bar>
            }
        </div>
    );
}

export default BarChart;
