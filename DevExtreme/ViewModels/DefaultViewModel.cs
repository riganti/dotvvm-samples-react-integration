using System.Collections.Generic;

namespace DevExtreme.ViewModels
{
    public class DefaultViewModel : MasterPageViewModel
    {

        public List<PieChartDataDto> Data { get; set; } = new()
        {
            new PieChartDataDto()
            {
                country = "China",
                amount = 1002,
            },
            new PieChartDataDto()
            {
                country = "United States",
                amount = 716,
            },
            new PieChartDataDto()
            {
                country = "India",
                amount = 215,
            },
            new PieChartDataDto()
            {
                country = "United Kingdom",
                amount = 150,
            },
            new PieChartDataDto()
            {
                country = "Germany",
                amount = 145,
            }
        };


        public class PieChartDataDto
        {
            public int amount { get; set; }
            public string country { get; set; }
        }

    }
}
