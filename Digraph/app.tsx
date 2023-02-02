import * as React from 'react'
import { registerReactControl } from 'dotvvm-jscomponent-react'
import { GraphView, type INode } from 'react-digraph'

const GraphConfig = {
    NodeTypes: {
        custom: {
            typeText: "Custom",
            shapeId: "#custom",
            shape: (
                <symbol viewBox="0 0 50 25" id="custom" key="0">
                    <ellipse cx="25" cy="12" rx="20" ry="10"></ellipse>
                </symbol>
            )
        }
    },
    NodeSubtypes: {},
    EdgeTypes: {
        emptyEdge: {
            shapeId: "#emptyEdge",
            shape: (
                <symbol viewBox="0 0 50 50" id="emptyEdge" key="0">
                    {/* <circle cx="25" cy="25" r="20" fill="currentColor"> </circle> */}
                </symbol>
            )
        }
    }
}

class Graph extends React.Component<any, any> {

    constructor(props) {
        super(props)

        this.state = {
            selected: {}
        }
    }
    onSelect = (selected:  { nodes: null | Map<string, INode> }) => {
        console.log("onSelect", selected)

        if (selected.nodes)
            this.props.selectionChanged([...selected.nodes.keys()])
        else
            this.props.selectionChanged([])
        this.setState({
          selected,
        })
    }

    onUpdateNode = (
        viewNode: INode,
        selectedNodes: Map<string, INode>,
        position?: any
      ) => {
        console.log("onUpdateNode", viewNode, selectedNodes, position)

        this.props.nodeChanged(viewNode.title, {X: viewNode.x, Y: viewNode.y })
    }
    

    render() {
        const nodes = this.props.graph.nodes
        const edges = this.props.graph.edges
        const selected = this.state.selected

        return (
            <div id='graph' style={{ height: 'calc(100vh - 100px)' }}>

                <GraphView ref='GraphView'
                    nodeKey={"id"}
                    nodes={nodes}
                    edges={edges}
                    selected={selected}
                    nodeTypes={GraphConfig.NodeTypes}
                    nodeSubtypes={GraphConfig.NodeSubtypes}
                    edgeTypes={GraphConfig.EdgeTypes}
                    onSelect={this.onSelect}
                    allowMultiselect={true}
                // onCreateNode={this.onCreateNode}
                    onUpdateNode={this.onUpdateNode}
                // onDeleteNode={this.onDeleteNode}
                // onCreateEdge={this.onCreateEdge}
                // onSwapEdge={this.onSwapEdge}
                // onDeleteEdge={this.onDeleteEdge}
                />
            </div>
        )
    }

}

function DiagramComponent(props) {
    const { nodes, links, nodeChanged, selectionChanged } = props

    const graph = {
        nodes: nodes.map(node => ({
            id: node.Name,
            title: node.Name,
            type: "custom",
            x: node.Position.X,
            y: node.Position.Y,
        })),

        edges: links.map(link => ({
            handleText: '',
            source: link.From,
            target: link.To,
            type: "emptyEdge",
        }))
    }

    return <Graph graph={graph} nodeChanged={nodeChanged} selectionChanged={selectionChanged} />
}


// export the component for DotVVM

export default (context) => {
    return {
        $controls: {
            "diagram": registerReactControl(DiagramComponent, {
                nodeChanged() { },
                selectionChanged() { }
            })
        },

        test() { alert(1) }
    }
}
