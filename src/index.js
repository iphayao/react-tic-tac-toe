import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                { /* TODO */}
            </button>
        );
    }
}

class Board extends React.Component {
    randerSquare(i) {
        return <Square />;
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