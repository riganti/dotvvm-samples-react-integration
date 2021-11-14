﻿import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { registerReactControl } from 'dotvvm-jscomponent-react';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts';

// react component
function RechartComponent(props: any) {
    return (
        <LineChart
            width={400}
            height={400}
            data={props.data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }} >
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            {
                Object.keys(props.data[0]).slice(1).map((s, i) =>
                    <Line type="monotone"
                        dataKey={s}
                        stroke={"#" + (i * 4).toString() + "87908"}
                        yAxisId={i}
                        onMouseEnter={(_) => props.onMouse(s)} />)
            }
        </LineChart>
    );
}

// DotVVM Context importer 
export default (context: any) => ({
    $controls: {
        recharts: registerReactControl(RechartComponent, { context, onMouse() { /* default empty method */ } })
    }
})
