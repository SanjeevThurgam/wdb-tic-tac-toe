import * as React from 'react';
import { useState, useEffect } from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import UpperBar from './UpperBar';
import Board from './Board';
import EndBoard from './EndBoard';

export const Page = () => {

    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
   useEffect(() => {
    const p1 = localStorage.getItem("player1Score")
    if (p1 !== null) {
        setPlayer1Score(parseInt(p1));
    }
    const p2 = localStorage.getItem("player2Score")
    if (p2 !== null) {
        setPlayer2Score(parseInt(p2));
    }
   }, []);

    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [gameNotOver, setGameNotOver] = useState(1);
    const [winner, setWinner] = useState(-1);
    const [tileState, setTileState] = useState([2,2,2,2,2,2,2,2,2])
    const checkGameOver = () => {
        checkRows();
        checkColumns();
        checkDiagonals();
    }

    useEffect(() => {
        if (!gameNotOver) {
            if (!winner) {
                setPlayer2Score(player2Score + 1);
            } else {
                setPlayer1Score(player1Score + 1);
            }
        }
        
    }, [gameNotOver]); 
    
    useEffect(() => {
        localStorage.setItem("player1Score", player1Score.toString())
        localStorage.setItem("player2Score", player2Score.toString())
        
    }, [player2Score, player1Score]); 



    const checkRows = () => {
            if (tileState[0] === tileState[1] && tileState[1] === tileState[2] && tileState[0] !== 2) {
                setWinner(tileState[0]);
                setGameNotOver(0);
            }
            else if (tileState[3] === tileState[4] && tileState[4] === tileState[5] && tileState[3] !== 2) {
                setWinner(tileState[3]);
                setGameNotOver(0);
            }
            else if (tileState[6] === tileState[7] && tileState[7] === tileState[8] && tileState[6] !== 2) {
                setWinner(tileState[6]);
                setGameNotOver(0);
            }
    }

    const checkColumns = () => {
        if (tileState[0] === tileState[3] && tileState[3] === tileState[6] && tileState[0] !== 2) {
            setWinner(tileState[0]);
            setGameNotOver(0);
        }
        else if (tileState[1] === tileState[4] && tileState[4] === tileState[7] && tileState[1] !== 2) {
            setWinner(tileState[1]);
            setGameNotOver(0);
        }
        else if (tileState[2] === tileState[5] && tileState[5] === tileState[8] && tileState[2] !== 2) {
            setWinner(tileState[2]);
            setGameNotOver(0);
        }
    }

    const checkDiagonals = () => {
        if (tileState[0] === tileState[4] && tileState[4] === tileState[8] && tileState[0] !== 2) {
            setWinner(tileState[0]);
            setGameNotOver(0);
        }
        else if (tileState[2] === tileState[4] && tileState[4] === tileState[6] && tileState[2] !== 2) {
            setWinner(tileState[2]);
            setGameNotOver(0);
        }
    }

    const handleTileClick = (tileIndex: number) => {
        if (tileState[tileIndex] === 2) {
            const tileStateCopy = tileState;
            tileStateCopy[tileIndex] = currentPlayer;
            setTileState(tileStateCopy);
            setCurrentPlayer(currentPlayer ? 0 : 1)
            checkGameOver()
        }
    }

    const handleGameNotOver = () => {
        if (gameNotOver === 0) {
            setGameNotOver(1);
            setTileState([2, 2, 2, 2, 2, 2, 2, 2, 2])
        }
    }

    const handleReset = () => {
        if (gameNotOver === 0) {
            setGameNotOver(1);
            setTileState([2, 2, 2, 2, 2, 2, 2, 2, 2])
            setPlayer1Score(0)
            setPlayer2Score(0)
            // localStorage.removeItem("player1Score")
            // localStorage.removeItem("player2Score")
            localStorage.clear()
        }
    }

    return (
        <ChakraProvider theme={theme}>
            <Flex w="100vw" h="100vh" bg="#373B52" justify="center"> 
                <Flex w="100vw" h="100vh" bg="#373B52" justify="center">
                    <Flex w="80%" h="100%" bg="#373B52" direction="column" alignItems="center" align="center">
                        <UpperBar player1Score={player1Score} player2Score={player2Score} currentPlayer={currentPlayer} gameNotOver={gameNotOver}/>
                        {gameNotOver ? <Board tileState={tileState} handleTileClick={handleTileClick} /> : <EndBoard winner={winner} handleGameNotOver={handleGameNotOver} handleReset={handleReset}/>}
                    </Flex> 
                </Flex>
            </Flex>
        </ChakraProvider>
    )
};

export default Page;