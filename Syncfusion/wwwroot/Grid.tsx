import * as React from "react";
import * as ReactDOM from "react-dom";
import { registerReactControl } from "dotvvm-jscomponent-react";
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, PageSettingsModel, Sort } from '@syncfusion/ej2-react-grids';
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


function grid(props: any) {
    const data = props.sampleData.map((item: any) => ({ ...item }));

    const pageSettings: PageSettingsModel = { pageSize: 5 }
    const groupSettings = { columns: ['EmployeeID'] };

    return (
        <GridComponent dataSource={data} allowPaging={true} pageSettings={pageSettings} allowSorting={true}
            allowGrouping={true} groupSettings={groupSettings} height={180}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' width='100' />
                <ColumnDirective field='EmployeeID' width='100' textAlign="Right" />
                <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" />
                <ColumnDirective field='ShipCountry' width='100' />
            </ColumnsDirective>
            <Inject services={[Page, Sort, Group]} />
        </GridComponent>
    );
}

export default (context: any) => ({
    $controls: {
        gridComponent: registerReactControl(grid, {
            context,
            onClick() { /* do nothing when onClick is not set */ }
        }),
    }
})
