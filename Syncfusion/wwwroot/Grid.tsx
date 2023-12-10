import * as React from "react";
import * as ReactDOM from "react-dom";
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, PageSettingsModel, Sort } from '@syncfusion/ej2-react-grids';

export function grid(props: any) {
    const data = props.data.map((item: any) => ({ ...item }));

    const pageSettings: PageSettingsModel = { pageSize: 5 }
    const groupSettings = { columns: ['EmployeeID'] };

    let grid;

    return (
        <GridComponent dataSource={data} allowPaging={true} pageSettings={pageSettings} allowSorting={true}
            allowGrouping={true} groupSettings={groupSettings}
            height={180}
            rowSelected={() => props.onRowSelected(grid.getSelectedRowIndexes()[0])}
            ref={g => grid = g}>
            <ColumnsDirective>
                {props.columns.map((column: any) => <ColumnDirective {...column} />)}
            </ColumnsDirective>
            <Inject services={[Page, Sort, Group]} />
        </GridComponent>
    );
}
