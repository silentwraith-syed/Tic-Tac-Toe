import React, { useState } from "react";
import "../styles/board.css";
import circle from "../assets/circle.png";
import cross from "../assets/cross.png";

export default function Board() {
    const [arr, setArr] = useState(["", "", "", "", "", "", "", "", ""]);
    const [clicked, setClicked] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [count, setCount] = useState(1);
    const [winner, setWinner] = useState(null);
    const [result,setResult] = useState(0);
    const [player, setPlayer] = useState("");

    const checkWin = (newArr) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (newArr[a] && newArr[a] === newArr[b] && newArr[a] === newArr[c]) {
                setResult(1);
                setPlayer(newArr[a])
                return newArr[a];
            }
        }
        return null;
    };

    const handleClick = (e, num) => {
        if (clicked[num] === 0 && !winner) {
            const newArr = [...arr];
            const newClicked = [...clicked];
            newArr[num] = count % 2 === 0 ? "o" : "x";
            newClicked[num] = 1;
            setArr(newArr);
            setClicked(newClicked);
            setCount(count + 1);

            const gameWinner = checkWin(newArr);
            if (gameWinner) {
                setWinner(gameWinner);
                // alert(`Game Over! Player ${gameWinner} wins!`);
            }
        } else {
            console.log("Box already clicked or game over");
        }
    };

    const renderImage = (value) => {
        if (value === "o") {
            return <img style={{ height: "60px", width: "60px" }} src={circle} alt="Circle" />;
        } else if (value === "x") {
            return <img style={{ height: "60px", width: "60px" }} src={cross} alt="Cross" />;
        }
        return null;
    };
    
    function handleReset(){
        setArr(["", "", "", "", "", "", "", "", ""]);
        setClicked([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setResult(0);
        // checkWin();
    }
    return (
        <div className="outer-container">
            <div className="outer-box">
                <h1 style={{color:"white"}}>TicTacToe</h1>
               {result && <h2 className="result">Player {player.toUpperCase()} Wins!</h2>} 
                <div className="row1">
                    <div className="boxes" onClick={(e) => handleClick(e, 0)}>{renderImage(arr[0])}</div>
                    <div className="boxes" onClick={(e) => handleClick(e, 1)}>{renderImage(arr[1])}</div>
                    <div className="boxes" onClick={(e) => handleClick(e, 2)}>{renderImage(arr[2])}</div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={(e) => handleClick(e, 3)}>{renderImage(arr[3])}</div>
                    <div className="boxes" onClick={(e) => handleClick(e, 4)}>{renderImage(arr[4])}</div>
                    <div className="boxes" onClick={(e) => handleClick(e, 5)}>{renderImage(arr[5])}</div>
                </div>
                <div className="row3">
                    <div className="boxes" onClick={(e) => handleClick(e, 6)}>{renderImage(arr[6])}</div>
                    <div className="boxes" onClick={(e) => handleClick(e, 7)}>{renderImage(arr[7])}</div>
                    <div className="boxes" onClick={(e) => handleClick(e, 8)}>{renderImage(arr[8])}</div>
                </div>
                <button onClick={handleReset} className="reset-button">Reset</button>
            </div>
        </div>
    );
}
