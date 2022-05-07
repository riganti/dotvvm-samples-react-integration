using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using DotVVM.Framework.ViewModel;

namespace dotvvm_react.ViewModels;
public class DefaultViewModel : DotvvmViewModelBase
{
    public List<NodeViewModel> Nodes { get; set; } = new() {
        new NodeViewModel("Node 1", new(0, 0)),
        new NodeViewModel("Node 2", new(300, 0)),
        new NodeViewModel("Node 3", new(0, 150)),
    };

    public List<LinkViewModel> Links { get; set; } = new() {
        new LinkViewModel("Node 1", "Node 2"),
        new LinkViewModel("Node 1", "Node 3"),
    };

    public string[] Selected { get; set; } = new string[0];
}

public record NodeViewModel(
    string Name,
    PositionViewModel Position
);

public record PositionViewModel(double X, double Y);

public record LinkViewModel(string From, string To);
