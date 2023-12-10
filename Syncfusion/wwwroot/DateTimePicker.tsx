import * as React from "react";
import * as ReactDOM from "react-dom";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';

export function dateTimePicker(props: any) {
    let picker;
    const writeValueBack = e => props.onValueChanged(dotvvm.serialization.serializeDate(picker.value, false));

    return (
        <DateTimePickerComponent 
            locale={dotvvm.getCulture()}
            value={dotvvm.serialization.parseDate(props.value, false)} 
            onChange={writeValueBack}
            onCleared={writeValueBack}
            onBlur={writeValueBack}
            ref={p => picker = p} />
    );
}
