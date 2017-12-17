import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    randerSquare(i) {
        return <Square 
                value={this.state.squares[i]} 
                onClick={() => this.handleClick(i)}/>;
    }

    render() {
        const status = "Next player: X";

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.randerSquare(0)}
                    {this.randerSquare(1)}
                    {this.randerSquare(2)}
                </div>
                <div className="board-row">
                    {this.randerSquare(3)}
                    {this.randerSquare(4)}
                    {this.randerSquare(5)}
                </div>
                <div className="board-row">
                    {this.randerSquare(6)}
                    {this.randerSquare(7)}
                    {this.randerSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <div>{/* TODO */}</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);