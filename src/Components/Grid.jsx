/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react"
import isWinner from "./check"

function Card({ oWin, xWin, setOWin, setXWin, winner, setWinner, turn, setTurn, symbol, index, board, setBoard })
{
    function onPlay()
    {
        if (board[index] == "X" || board[index] == "O") {
            return;
        }

        board[index] = turn? "O" : "X";
        setTurn(!turn)
        setBoard([...board]);

        let win = isWinner(board, board[index], winner);

        if (win != "-") {
            setWinner(win);

            if (win == "O") {
                setOWin(oWin + 1);
            }
            else if (win == "X") {
                setXWin(xWin + 1);
            }
        }
    }

    return (
        <div 
        onClick={onPlay}
         className="cursor-pointer flex items-center justify-center h-[100px] w-[100px] bg-blue-200 m-[10px]">
            <h1 className="text-[40px] cursor-pointer">{symbol}</h1>
        </div>
    )
}


function Grid()
{
    function resetAll()
    {
        setBoard(Array(9).fill("-"));
        setTurn(true);
        setWinner("-");
    }

    const [board, setBoard] = useState(Array(9).fill("-"));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState("-")
    const [oWin, setOWin] = useState(0);
    const [xWin, setXWin] = useState(0);

    return (
        <div className="border-[1px] border-black p-[10px] w-[400px] bg-gray-100 flex flex-col items-center justify-center gap-[5px]">
            <div className="flex justify-around w-full">
                <h1 className="font-bold">Turn : {turn? "O" : "X"}</h1>
                <h1 className="font-bold">Winner : {winner}</h1>
            </div>

            <div className="flex flex-wrap items-center justify-center">
                {board.map((elm, index) => <Card oWin={oWin} xWin={xWin} setOWin={setOWin} setXWin={setXWin} winner={winner} setWinner={setWinner} turn={turn} setTurn={setTurn} symbol={elm} key={index} index={index} board={board} setBoard={setBoard}/>)}
            </div>

            <div className="flex items-center justify-around w-full">
                <h1 className="font-bold">O: {oWin}</h1>

                <button onClick={resetAll} className="bg-[crimson] text-white px-[10px] py-[4px] rounded-[7px] hover:shadow-[0px_0px_5px_darkgrey]">
                    Reset
                </button>

                <h1 className="font-bold">X: {xWin}</h1>
            </div>
        </div>
    )
}

export default Grid