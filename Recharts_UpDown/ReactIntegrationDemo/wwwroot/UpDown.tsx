import * as React from 'react';

type UpDownProps = {
    min: number;
    max: number;
    value: number;
    onUpdate: (value: number) => void;
}
type UpDownState = {
    value: number;
}

export class UpDown extends React.Component<UpDownProps, UpDownState> {
    constructor(props) {
        super(props);

        this.state = { value: Math.round(this.props.value) };
    }

    componentDidUpdate(prevProps) {
        // update state when props.value is changed from DotVVM
        if (prevProps.value !== this.props.value) {
            let newValue = Math.round(this.props.value);
            if (newValue < this.props.min) {
                newValue = this.props.min;
            }
            if (newValue > this.props.max) {
                newValue = this.props.max;
            }
            this.setState(_ => ({ value: newValue }));
        }
    }

    up() {
        if (this.state.value < Number(this.props.max)) {
            // set new value and notify DotVVM
            const newValue = this.state.value + 1;
            this.setState(_ => ({ value: newValue }));
            this.props.onUpdate(newValue);
        }
    }
    down() {
        if (this.state.value > Number(this.props.min)) {
            // set new value and notify DotVVM
            const newValue = this.state.value - 1;
            this.setState(_ => ({ value: newValue }));
            this.props.onUpdate(newValue);
        }
    }

    render(): any {
        return <div>
                   <button onClick={this.down.bind(this)}>🔽</button>
                   <strong>{this.state.value}</strong>
                   <button onClick={this.up.bind(this)}>🔼</button>
               </div>;
    }
}