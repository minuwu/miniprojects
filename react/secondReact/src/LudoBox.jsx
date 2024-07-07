import { useState } from "react";

export default function LudoBox(){
    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0});
    let style = {
        display: "flex",
        flexDirection: "column"
    }
    //usual way of update doesn't work
    //as object is immutable, even if the values
    //changes, no changes are detected as addresses remains the same

    function moveBlue (){
        return setMoves({...moves,blue: moves.blue+1});
    }
    function moveRed (){
        return setMoves({...moves,red: moves.red+1});
    }
    function moveYellow (){
        return setMoves({...moves,yellow: moves.yellow+1});
    }
    function moveGreen (){
        return setMoves({...moves,green: moves.green+1});
    }

    return (
        <div style={style}>
        <button onClick={moveBlue} style={{backgroundColor: "blue"}}>+1 |{moves.blue}|</button>
        <button onClick={moveRed} style={{backgroundColor: "red"}}>+1 |{moves.red}|</button>
        <button onClick={moveYellow} style={{backgroundColor: "yellow", color: "black"}}>+1 |{moves.yellow}|</button>
        <button onClick={moveGreen} style={{backgroundColor: "green"}}>+1 |{moves.green}|</button>
        </div>
    )
}