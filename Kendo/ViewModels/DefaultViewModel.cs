using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotVVM.Framework.ViewModel;

namespace Kendo.ViewModels
{
    public class DefaultViewModel : MasterPageViewModel
    {
        public List<SchedulerDataDto> Data { get; set; } = new List<SchedulerDataDto>()
        {
            new SchedulerDataDto()
            {
                Id = 0,
                Title = "Lunch with Eve",
                Start = DateTime.Parse("2023-08-27T19:30:00.000Z"),
                End = DateTime.Parse("2023-08-27T21:00:00.000Z")
            }
        };

		public class SchedulerDataDto
        {
            public int Id { get; set; }
            public string Title { get; set; }
            public DateTime Start { get; set; }
            public DateTime End { get; set; }
        }

    }
}
