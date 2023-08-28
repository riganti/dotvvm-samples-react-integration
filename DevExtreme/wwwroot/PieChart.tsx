import * as React from "react";
import * as ReactDOM from "react-dom";
import { registerReactControl } from "dotvvm-jscomponent-react";
import { PieChart, Series, Label, Connector } from 'devextreme-react/pie-chart';

const customizeText = (pointInfo) => {
    return pointInfo.value;
}

function pieChart(props: any) {
    const data = props.sampleData.map((item: any) => ({ ...item }));


    return (
        <PieChart
            title="Top-5 Countries by Number of Billionaires"
            dataSource={data}
            type="doughnut"
        >
            <Series
                argumentField="country"
                valueField="amount"
            >
                <Label
                    visible={true}
                    position="columns"
                    customizeText={customizeText}
                >
                    <Connector visible={true}></Connector>
                </Label>
            </Series>
        </PieChart>
    );
}

export default (context: any) => ({
    $controls: {
        pieChartComponent: registerReactControl(pieChart,{
            context,
            onClick() { /* do nothing when onClick is not set */ }
        }),
    }
})