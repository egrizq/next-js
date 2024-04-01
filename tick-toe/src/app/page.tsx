"use client"
import "./globals.css"
import { useState } from "react";

const Square = ({value, onSquareClick}: {value: number, onSquareClick: any}) => {
    return (
        <>  
            <div className="flex flex-col w-1/3">
                <button onClick={onSquareClick}
                    className="p-4 border-2 h-20 border-black hover:bg-gray-300 font-semibold">
                    {value}
                </button>
            </div>
        </>
    )
}

function calculateWinner(squares: any) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i=0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setsquares] = useState(Array(9).fill(null))

    function handleClick(i: number) {
        if (squares[i] || calculateWinner(squares)) {
            return
        }

        const nextSquares = squares.slice()

        if (xIsNext) {
            nextSquares[i] = "X"
        } else {
            nextSquares[i] = "O"
        }

        setsquares(nextSquares)
        setXIsNext(!xIsNext)
    }

    const winner = calculateWinner(squares)
    let status
    if (winner) {
        status = "Winner " + winner
    } else {
        status = "Next Player: " + (xIsNext ? "X" : "O")
    }

    return (
    <>
        <div className="container mx-auto p-4">
            <div className="flex w-full flex-wrap">

                <div className="flex flex-row w-1/3 font-semibold p-4 justify-end">
                    {status}
                </div>

                <div className="flex flex-row w-1/3 flex-wrap border-2 border-black justify-center">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />

                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />

                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>
        </div>
    </>
  );
}
