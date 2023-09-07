using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using DotVVM.Framework.ViewModel;

namespace Syncfusion.ViewModels
{
    public class DefaultViewModel: MasterPageViewModel
    {

        public List<GridDataDto> Data { get; set; } = new()
        {
            new GridDataDto()
            {
                OrderID = 10248,
                CustomerID = "VINET",
                EmployeeID = 5,
                Freight = 32.38,
                ShipCountry = "France"
            },
            new GridDataDto()
            {
                OrderID = 10249, 
                CustomerID = "TOMSP", 
                EmployeeID = 6, 
                ShipCountry = "Germany",
                Freight = 11.61
            },
            new GridDataDto()
            {
                OrderID = 10250, 
                CustomerID = "HANAR",
                EmployeeID = 4,
                ShipCountry = "Brazil", 
                Freight = 65.83
            },
            new GridDataDto()
            {
                OrderID = 10251, 
                CustomerID = "VICTE", 
                EmployeeID = 3, 
                ShipCountry = "France", 
                Freight = 41.34
            },
            new GridDataDto()
            {
                OrderID = 10252, 
                CustomerID = "SUPRD", 
                EmployeeID = 4, 
                ShipCountry = "Belgium", 
                Freight = 51.3
            },
            new GridDataDto()
            {
                OrderID = 10253, 
                CustomerID = "HANAR",
                EmployeeID = 3,
                ShipCountry = "Brazil",
                Freight = 58.17
            },
            new GridDataDto()
            {
                OrderID = 10254,
                CustomerID = "CHOPS", 
                EmployeeID = 5,
                ShipCountry = "Switzerland",
                Freight = 22.98
            },            
            new GridDataDto()
            {
                OrderID = 10255,
                CustomerID = "CHOPS",
                EmployeeID = 3,
                ShipCountry = "France",
                Freight = 22.98
            },
            new GridDataDto()
            {
                OrderID = 10255, 
                CustomerID = "RICSU",
                EmployeeID = 9,
                ShipCountry = "Switzerland",
                Freight = 148.33   
            },
            new GridDataDto()
            {
                OrderID = 10256,
                CustomerID = "WELLI",
                EmployeeID = 3,
                ShipCountry = "Brazil", 
                Freight = 13.97
            },
            new GridDataDto()
            {
                OrderID = 10257,
                CustomerID = "HILAA",
                EmployeeID = 4,
                ShipCountry = "Venezuela",
                Freight = 81.91
            },
        };


        public class GridDataDto
        {
            public int OrderID { get; set; }
            public string CustomerID { get; set; }
            public int EmployeeID { get; set; }
            public double Freight { get; set; }
            public string ShipCountry { get; set; }

        }

    }
}
