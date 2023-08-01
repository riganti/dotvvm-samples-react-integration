using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotVVM.Framework.ViewModel;

namespace Kendo.ViewModels
{
    public class DefaultViewModel : MasterPageViewModel
    {
        public List<SchedulerDataDto> Data { get; set; } = new()
        {
            new SchedulerDataDto()
            {
                id = 1,
                title = "Dinner with Eve",
                start = new DateTime(2023, 08, 27, 12, 30,00),
                end = new DateTime(2023, 08, 27, 13, 00,00)
            }
        };

        public DateTime Time { get; set; } = new DateTime(2023, 08, 27, 12, 00,00); /*("2023-08-27T12:00:00.000Z;*/

		public class SchedulerDataDto
        {
            public int id { get; set; }
            public string title { get; set; }
            public DateTime start { get; set; }
            public DateTime end { get; set; }
        }

    }
}
