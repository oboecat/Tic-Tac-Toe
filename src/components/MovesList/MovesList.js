import React from 'react';

export default class MovesList extends React.Component {
    constructor() {
        super();
        this.state = {
            order: 'earliest first',
        };
    }

    reverseOrder() {
        let order = this.state.order;
        order = (order === 'earliest first') ?
            'latest first' :
            'earliest first';
        this.setState({
            order: order,
        });
    }

    render() {
        let moves = this.props.history.map((step, move) => {
            
            const desc = move ?
                'Move #' + move :
                'Game start';
    
            const className = (step === this.props.current) ?
                'bold-text' :
                'normal-text';
            
            return (
                <li key={move}>
                    <a
                        href="#"
                        className={className}
                        onClick={() => {
                            this.props.onClick(move)
                        }}
                    >
                        {desc}
                    </a>
                </li>
            );
        });

        moves = (this.state.order === 'earliest first') ?
            moves : moves.reverse();
            
        return <div className="moves-list">
            <ol>{moves}</ol>
            <button onClick={() => this.reverseOrder()}>REVERSE ORDER</button>
        </div>;
    }
}