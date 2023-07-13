import * as React from "react";
import * as ReactDOM from "react-dom";
import { registerReactControl } from "dotvvm-jscomponent-react";
import {
    Scheduler,
    AgendaView,
    TimelineView,
    DayView,
    WeekView,
    MonthView,
} from "@progress/kendo-react-all";

const testDate: Date = new Date("2023-08-27T08:00:00.000Z");
const data: any[] = [
    {
        id: 0,
        title: "Breakfast with Tom",
        start: new Date("2023-08-27T08:30:00.000Z"),
        end: new Date("2023-08-27T09:00:00.000Z"),
    }
];

const scheduler = props => {
    return (
        <Scheduler data={props.sampleData} defaultDate={props.displayDate} timezone="Etc/UTC">
            <DayView />
            <WeekView />
        </Scheduler>
    );
};

export default (context: any) => ({
    $controls: {
        schedulerComponent: registerReactControl(scheduler, {
            context,
            sampleData: data,
            displayDate: testDate,
            onClick() { /* do nothing when onClick is not set */ }
        }),
    }
})