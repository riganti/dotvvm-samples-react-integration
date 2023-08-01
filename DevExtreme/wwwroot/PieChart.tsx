import * as React from "react";
import * as ReactDOM from "react-dom";
import { registerReactControl } from "dotvvm-jscomponent-react";
import { PieChart, Series } from 'devextreme-react/pie-chart';

const billionaires = [
    {
        country: "China",
        amount: 1002
    },
    {
        country: "United States",
        amount: 716
    },
    {
        country: "India",
        amount: 215
    },
    {
        country: "United Kingdom",
        amount: 150
    },
    {
        country: "Germany",
        amount: 145
    }
];

function pieChart(props: any) {
    return (
        <PieChart
            dataSource={props.sampleData}
            type="doughnut"
        >
            <Series
                argumentField="country"
                valueField="amount"
            >
            </Series>
        </PieChart>
    );
}

export default (context: any) => ({
    $controls: {
        PieChart: registerReactControl(pieChart,{
            context,
            sampleData: billionaires,
            onClick() { /* do nothing when onClick is not set */ }
        }),
    }
})