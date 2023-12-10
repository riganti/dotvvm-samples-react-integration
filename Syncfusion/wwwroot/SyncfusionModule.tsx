import { registerReactControl } from "dotvvm-jscomponent-react";
import { grid } from "./Grid";
import { dateTimePicker } from "./DateTimePicker";

import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-calendars/styles/material.css';
import '@syncfusion/ej2-dropdowns/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-splitbuttons/styles/material.css';
import '@syncfusion/ej2-notifications/styles/material.css';
import "@syncfusion/ej2-react-grids/styles/material.css";

export default (context: any) => ({
    $controls: {
        gridComponent: registerReactControl(grid, {
            context,
            onRowSelected(rowIndex: number) { /* do nothing when onRowSelected is not set */ }
        }),
        dateTimePickerComponent: registerReactControl(dateTimePicker, {
            onValueChanged(newValue: Date) { /* do nothing when onValueChanged is not set */ }
        })
    }
})
