import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { registerReactControl } from 'dotvvm-jscomponent-react';

import { UpDown } from "./UpDown";
import { RechartComponent } from "./RechartComponent";


// DotVVM Context importer 
export default (context: any) => ({
    $controls: {
        updown: registerReactControl(UpDown, {
            context,
            min: 0,
            max: 100,
            value: 0,
            onUpdate() {}
        }),

        recharts: registerReactControl(RechartComponent, {
            context,
            onMouse() { /* default empty method */ }
        })
    }
})
